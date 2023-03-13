/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Optional,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ActiveCartFacade, OrderEntry } from '@spartacus/cart/base/root';
import { CmsService, Page } from '@spartacus/core';
import {
  LaunchDialogService,
  LAUNCH_CALLER,
  OutletContextData,
} from '@spartacus/storefront';
import { EMPTY, iif, Observable, of, Subscription } from 'rxjs';
import {
  concatMap,
  filter,
  map,
  startWith,
  switchMap,
  take,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  IntendedPickupLocationFacade,
  PickupLocationsSearchFacade,
  PickupOptionFacade,
  PreferredStoreFacade,
} from '../../../facade/index';
import { PickupOption } from '../../../model/index';
import {
  cartWithIdAndUserId,
  getProperty,
  RequiredDeepPath,
} from '../../../utils/index';

type OrderEntryRequiredFields =
  | 'entryNumber'
  | 'quantity'
  | 'product.code'
  | 'product.availableForPickup';

/** An order entry with all the fields needed for using pickup in store */
type OrderEntryWithRequiredFields = RequiredDeepPath<
  OrderEntry,
  OrderEntryRequiredFields
>;
/** Custom type guard to ensure we have an order entry with all the required fields */
export function orderEntryWithRequiredFields(
  orderEntry: OrderEntry | undefined
): orderEntry is OrderEntryWithRequiredFields {
  return (
    !!orderEntry &&
    orderEntry.entryNumber !== undefined &&
    orderEntry.quantity !== undefined &&
    orderEntry.product !== undefined &&
    orderEntry.product.code !== undefined &&
    orderEntry.product.availableForPickup !== undefined
  );
}

/**
 * A container component of the pair of the pickup options radio buttons for cart entry.
 */
@Component({
  selector: 'cx-cart-pickup-options-container',
  templateUrl: 'cart-pickup-options-container.component.html',
})
export class CartPickupOptionsContainerComponent implements OnInit, OnDestroy {
  @ViewChild('open') element: ElementRef;

  pickupOption$: Observable<PickupOption | undefined>;
  storeDetails$: Observable<{
    name: string | undefined;
    displayName: string | undefined;
  }>;
  availableForPickup$: Observable<boolean>;
  subscription = new Subscription();
  cartId: string;
  cartType: string;
  entryNumber: number;
  productCode: string;
  quantity: number;
  userId: string;
  private displayNameIsSet = false;
  page?: string;

  constructor(
    protected activeCartFacade: ActiveCartFacade,
    protected launchDialogService: LaunchDialogService,
    protected pickupLocationsSearchService: PickupLocationsSearchFacade,
    protected pickupOptionFacade: PickupOptionFacade,
    protected preferredStoreFacade: PreferredStoreFacade,
    protected vcr: ViewContainerRef,
    protected cmsService: CmsService,
    protected intendedPickupLocationService: IntendedPickupLocationFacade,
    @Optional()
    protected outlet: OutletContextData<{ item: OrderEntry; cartType: string }>
  ) {
    // Intentional empty constructor
  }

  ngOnInit() {
    const outletContext =
      this.outlet?.context$?.pipe(
        map((context) => {
          this.cartType = context.cartType;
          return context.item;
        }),
        filter(orderEntryWithRequiredFields)
      ) ?? EMPTY;

    this.cmsService
      .getCurrentPage()
      .pipe(
        filter<Page>(Boolean),
        take(1),
        tap((cmsPage) => {
          this.page = cmsPage.pageId;
          this.pickupOptionFacade.setPageContext(cmsPage.pageId ?? '');
        })
      )
      .subscribe();

    this.availableForPickup$ = outletContext.pipe(
      map((orderEntry) => !!orderEntry.product.availableForPickup),
      startWith(false)
    );

    this.pickupOption$ = outletContext.pipe(
      withLatestFrom(
        this.activeCartFacade.getActive().pipe(filter(cartWithIdAndUserId))
      ),
      tap(([orderEntry, cart]) => {
        console.log('orderEntry', orderEntry);
        this.entryNumber = orderEntry.entryNumber;
        this.quantity = orderEntry.quantity;
        this.productCode = orderEntry.product.code;
        this.cartId = cart.user.uid === 'anonymous' ? cart.guid : cart.code;
        this.userId = cart.user.uid;
      }),
      switchMap(([orderEntry]) => {
        const pickupOption: PickupOption = orderEntry.deliveryPointOfService
          ? 'pickup'
          : 'delivery';
        this.pickupOptionFacade.setPickupOption(this.entryNumber, pickupOption);
        return this.pickupOptionFacade.getPickupOption(this.entryNumber);
      })
    );

    this.storeDetails$ = outletContext.pipe(
      map((orderEntry) => ({
        storeName: orderEntry.deliveryPointOfService?.name,
        productCode: orderEntry.product.code,
      })),
      switchMap(({ storeName, productCode }) =>
        iif(
          () => !!storeName,
          of(storeName as string).pipe(
            tap((storeName) => {
              return this.pickupLocationsSearchService.loadStoreDetails(
                storeName
              );
            }),
            concatMap((storeName) =>
              this.pickupLocationsSearchService.getStoreDetails(storeName)
            ),
            filter((storeDetails) => !!storeDetails),
            tap((storeDetails) => {
              this.intendedPickupLocationService.setIntendedLocation(
                productCode,
                {
                  ...storeDetails,
                  pickupOption: 'pickup',
                }
              );
            })
          ),
          this.intendedPickupLocationService
            .getIntendedLocation(productCode)
            .pipe(
              map((intendedLocation) => ({ intendedLocation, productCode })),
              switchMap(({ intendedLocation, productCode }) =>
                iif(
                  () => !!intendedLocation && !!intendedLocation.displayName,
                  of({
                    displayName: getProperty(intendedLocation, 'displayName'),
                    name: getProperty(intendedLocation, 'name'),
                  }),
                  this.preferredStoreFacade
                    .getPreferredStoreWithProductInStock(productCode)
                    .pipe(
                      map(({ name }) => name),
                      tap((storeName) =>
                        this.pickupLocationsSearchService.loadStoreDetails(
                          storeName
                        )
                      ),
                      concatMap((storeName: string) =>
                        this.pickupLocationsSearchService.getStoreDetails(
                          storeName
                        )
                      ),
                      filter((storeDetails) => !!storeDetails),
                      tap((storeDetails) => {
                        this.intendedPickupLocationService.setIntendedLocation(
                          productCode,
                          {
                            ...storeDetails,
                            pickupOption: 'delivery',
                          }
                        );
                      })
                    )
                )
              )
            )
        )
      ),
      map(({ displayName, name }) => ({ displayName, name })),
      tap((_) => (this.displayNameIsSet = true))
    );
  }

  onPickupOptionChange(pickupOption: PickupOption): void {
    this.pickupOptionFacade.setPickupOption(this.entryNumber, pickupOption);
    if (pickupOption === 'delivery') {
      this.activeCartFacade.updateEntry(
        this.entryNumber,
        this.quantity,
        undefined,
        true
      );
      return;
    }
    if (pickupOption === 'pickup') {
      this.subscription.add(
        this.storeDetails$
          .pipe(
            filter(({ name }) => !!name),
            tap(({ name }) =>
              this.activeCartFacade.updateEntry(
                this.entryNumber,
                this.quantity,
                name,
                true
              )
            )
          )
          .subscribe()
      );
    }

    if (!this.displayNameIsSet) {
      this.openDialog();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  openDialog(): void {
    const dialog = this.launchDialogService.openDialog(
      LAUNCH_CALLER.PICKUP_IN_STORE,
      this.element,
      this.vcr,
      {
        productCode: this.productCode,
        entryNumber: this.entryNumber,
        quantity: this.quantity,
      }
    );

    if (dialog) {
      dialog.pipe(take(1)).subscribe();
    }
  }
}
