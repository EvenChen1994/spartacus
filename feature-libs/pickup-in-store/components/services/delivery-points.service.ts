/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Injectable } from '@angular/core';
import { ActiveCartFacade, OrderEntry } from '@spartacus/cart/base/root';
import {
  PickupLocationsSearchFacade,
  DeliveryPointOfServiceItems,
} from '@spartacus/pickup-in-store/root';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';

/**
 * A service to get the Delivery Points Of Service for items to be picked up in store for the active cart
 */
@Injectable({
  providedIn: 'root',
})
export class DeliveryPointsService {
  constructor(
    protected activeCartFacade: ActiveCartFacade,
    protected pickupLocationsSearchService: PickupLocationsSearchFacade
  ) {}

  /*
        deliveryPointsOfService$ comprises arrays within an array.
        It has an array of stores, and then for each store, and array of products to be collected from that store.
        We need to get data from two diferent services. One of the services has the product data, ie the prodcuts to be picked up from in store.
        This data only has the store name, no other information about the store eg address etc.
        We then use another service to get data about the store. This service has two methods that must be called.
        loadStoreDetails is called to make the api call. The data returned from this call populates an area of the ngrx store.
        Then getStoreDetails is used to get store detail data from the relevant slice of state in the ngrx store.
        So the below:
            -   gets active cart
            -   gets items in the cart
            -   gets those items that are to be picked up from a store
            -   get the data about each store

        Some of the below involves turning array data into lookup object data simply because this is easier to deal with

    */
  getDeliveryPointsOfService(): Observable<Array<DeliveryPointOfServiceItems>> {
    return this.activeCartFacade.getActive().pipe(
      filter((cart) => !!cart.entries),
      filter((cart) => !!(cart.entries as Array<OrderEntry>).length),
      map((cart): Array<OrderEntry> => cart.entries as Array<OrderEntry>),
      map((entries) =>
        entries.filter((entry) => !!entry.deliveryPointOfService)
      ),
      map((entries) => {
        const COPY = [...entries];
        COPY.sort(
          (a: OrderEntry, b: OrderEntry) =>
            a.deliveryPointOfService?.name?.localeCompare(
              b.deliveryPointOfService?.name || ''
            ) || 0
        );
        return COPY;
      }),
      map((sortedArray) =>
        sortedArray.reduce((accumulator: Record<string, any>, value) => {
          const DELIVERY_POINT_OF_SERVICE: string = value.deliveryPointOfService
            ?.name as string;
          const existingValue: Array<OrderEntry> = accumulator[
            DELIVERY_POINT_OF_SERVICE
          ]
            ? accumulator[DELIVERY_POINT_OF_SERVICE]
            : [];
          return {
            ...accumulator,
            [DELIVERY_POINT_OF_SERVICE]: [...existingValue, value],
          };
        }, {})
      ),
      map((deliveryPointOfServiceMap) =>
        Object.keys(deliveryPointOfServiceMap).map((key) => ({
          name: key,
          value: deliveryPointOfServiceMap[key],
        }))
      ),
      tap(
        (
          deliveryPointOfServiceMap: Array<{
            name: string;
            value: Array<Object>;
          }>
        ) =>
          deliveryPointOfServiceMap
            .map((deliveryPointOfService) => deliveryPointOfService.name)
            .forEach((name) =>
              this.pickupLocationsSearchService.loadStoreDetails(name)
            )
      ),
      mergeMap((deliveryPointOfServiceMap) =>
        combineLatest(
          deliveryPointOfServiceMap
            .map((deliveryPointOfService) => deliveryPointOfService.name)
            .map((name) =>
              this.pickupLocationsSearchService.getStoreDetails(name)
            )
        ).pipe(
          map((storeDetails) => {
            const STORE_DETAILS_MAP: Record<string, any> = storeDetails
              .filter((_storeDetails) => !!_storeDetails)
              .reduce(
                (accumulator, value) => ({
                  ...accumulator,
                  [value.name as string]: value,
                }),
                {}
              );
            return deliveryPointOfServiceMap.map((store) => ({
              ...store,
              storeDetails: STORE_DETAILS_MAP[store.name as string],
            }));
          })
        )
      )
    );
  }
}
