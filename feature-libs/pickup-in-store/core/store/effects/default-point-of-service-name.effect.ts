/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { PointOfService, WindowRef } from '@spartacus/core';
import {
  PointOfServiceNames,
  PREFERRED_STORE_LOCAL_STORAGE_KEY,
} from '@spartacus/pickup-in-store/root';
import { UserProfileFacade } from '@spartacus/user/profile/root';
import { StoreFinderService } from '@spartacus/storefinder/core';
import { iif, Observable, of } from 'rxjs';

import {
  catchError,
  filter,
  map,
  mergeMap,
  switchMap,
  tap,
} from 'rxjs/operators';
import { DefaultPointOfServiceActions } from '../actions/index';
import { StateWithPickupLocations } from '../pickup-location-state';

@Injectable()
export class DefaultPointOfServiceEffect {
  constructor(
    private actions$: Actions,
    protected store: Store<StateWithPickupLocations>,
    protected userProfileService: UserProfileFacade,
    protected storeFinderService: StoreFinderService,
    protected winRef: WindowRef
  ) {}

  loadDefaultPointOfService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DefaultPointOfServiceActions.LOAD_DEFAULT_POINT_OF_SERVICE),
      switchMap(() =>
        this.userProfileService.get().pipe(
          mergeMap((preferredStore) =>
            iif(
              () =>
                !!preferredStore && !!preferredStore.defaultPointOfServiceName,
              of({
                name: preferredStore?.defaultPointOfServiceName,
                displayName: '',
              }),
              (() => {
                const PREFERRED_STORE = this.winRef.localStorage?.getItem(
                  PREFERRED_STORE_LOCAL_STORAGE_KEY
                );
                return of(
                  PREFERRED_STORE ? JSON.parse(PREFERRED_STORE) : undefined
                );
              })()
            )
          ),
          filter((defaultPointOfService) => defaultPointOfService),
          map((defaultPointOfService) => defaultPointOfService.name),
          tap((defaultPointOfService) =>
            this.storeFinderService.viewStoreById(defaultPointOfService)
          ),
          switchMap(
            (): Observable<PointOfService> =>
              this.storeFinderService.getFindStoreEntityById() as Observable<PointOfService>
          ),
          map(
            (pointOfService: PointOfService): PointOfServiceNames => ({
              displayName: pointOfService.displayName as string,
              name: pointOfService.name as string,
            })
          ),
          map((defaultPointOfService: PointOfServiceNames) =>
            DefaultPointOfServiceActions.LoadDefaultPointOfServiceSuccess({
              payload: defaultPointOfService,
            })
          ),
          catchError((_error) =>
            of(
              DefaultPointOfServiceActions.LoadDefaultPointOfServiceSuccess({
                payload: {
                  name: '',
                  displayName: '',
                },
              })
            )
          )
        )
      )
    )
  );

  setDefaultPointOfService$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DefaultPointOfServiceActions.SET_DEFAULT_POINT_OF_SERVICE),
      map((action): PointOfServiceNames => action['payload']),
      tap((preferredStore: PointOfServiceNames) =>
        this.winRef.localStorage?.setItem(
          PREFERRED_STORE_LOCAL_STORAGE_KEY,
          JSON.stringify(preferredStore)
        )
      ),
      switchMap((preferredStore: PointOfServiceNames) =>
        this.userProfileService
          .update({
            defaultPointOfServiceName: preferredStore.name,
          })
          .pipe(
            map(() => DefaultPointOfServiceActions.LoadDefaultPointOfService()),
            catchError((_error) =>
              of(DefaultPointOfServiceActions.LoadDefaultPointOfService)
            )
          )
      ),
      map(() => DefaultPointOfServiceActions.LoadDefaultPointOfService())
    )
  );
}