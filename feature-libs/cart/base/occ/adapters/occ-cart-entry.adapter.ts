/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartEntryAdapter } from '@spartacus/cart/base/core';
import {
  AddEntryOptions,
  BaseCartOptions,
  CartModification,
  CART_MODIFICATION_NORMALIZER,
  RemoveEntryOptions,
  UpdateEntryOptions,
} from '@spartacus/cart/base/root';
import {
  ConverterService,
  HttpPayload,
  OccEndpointsService,
} from '@spartacus/core';
import { Observable } from 'rxjs';

@Injectable()
export class OccCartEntryAdapter implements CartEntryAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpointsService: OccEndpointsService,
    protected converterService: ConverterService
  ) {}

  /**
   *
   * @deprecated since 5.1.0, and will be removed in the future major version.
   * Instead, use `add(options: BaseCartOptions<AddEntryOptions>)`.
   */
  // TODO:#object-extensibility-deprecation - remove
  public add(
    userId: string,
    cartId: string,
    productCode: string,
    quantity?: number
  ): Observable<CartModification>;
  // TODO:#object-extensibility-deprecation - remove
  public add(
    options: BaseCartOptions<AddEntryOptions>
  ): Observable<CartModification>;
  public add(
    // TODO:#object-extensibility-deprecation - rename to `options`
    optionsOrUserId:
      | BaseCartOptions<AddEntryOptions>
      // TODO:#object-extensibility-deprecation - remove the "| string" part, and everything that follows it.
      | string,
    cartId?: string,
    productCode?: string,
    quantity?: number
  ): Observable<CartModification> {
    let augmentedOptions: Omit<
      AddEntryOptions,
      'userId' | 'cartId' | 'productCode' | 'quantity'
    > = {};
    let userId: string;

    // TODO:#object-extensibility-deprecation - remove the `if` and its body
    if (typeof optionsOrUserId === 'string') {
      userId = optionsOrUserId;
    } else {
      ({ userId, cartId, productCode, quantity, ...augmentedOptions } =
        optionsOrUserId);
    }

    quantity = quantity || 1;

    // TODO:#object-extensibility-deprecation - should be able to remove `cartId!` assertion and the `eslint-disable-next-line` rule below
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const urlParams = { userId, cartId: cartId!, quantity };
    const url = this.occEndpointsService.buildUrl('addEntries', { urlParams });

    const body: any = {
      // TODO:#object-extensibility-deprecation - should be able to remove  and the `productCode!` assertion and the `eslint-disable-next-line` rule below
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      product: { code: productCode! },
      quantity,
      ...augmentedOptions,
    };
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    // Handle b2b case where the x-www-form-urlencoded is still used
    if (url.includes(`quantity=${quantity}`)) {
      headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      });
      // we don't want to send the quantity twice
      delete body.quantity;
    }

    return this.http
      .post<CartModification>(url, body, { headers })
      .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
  }

  /**
   *
   * @deprecated since 5.1.0, and will be removed in the future major version.
   * Instead, use `update(options: BaseCartOptions<UpdateEntryOptions>)`.
   */
  // TODO:#object-extensibility-deprecation - remove
  public update(
    userId: string,
    cartId: string,
    entryNumber: string | number,
    quantity: number,
    pickupStore?: string
  ): Observable<CartModification>;
  // TODO:#object-extensibility-deprecation - remove
  public update(
    options: BaseCartOptions<UpdateEntryOptions>
  ): Observable<CartModification>;
  public update(
    // TODO:#object-extensibility-deprecation - rename to `options`
    optionsOrUserId:
      | BaseCartOptions<UpdateEntryOptions>
      // TODO:#object-extensibility-deprecation - remove the "| string" part, and all params after it
      | string,
    cartId?: string,
    entryNumber?: string | number,
    quantity?: number,
    pickupStore?: string
  ): Observable<CartModification> {
    // TODO:#object-extensibility-deprecation - remove the whole if-block
    if (typeof optionsOrUserId === 'string') {
      let params = {};
      if (pickupStore) {
        params = {
          deliveryPointOfService: {
            name: pickupStore,
          },
        };
      }

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });

      const url = this.occEndpointsService.buildUrl('updateEntries', {
        urlParams: {
          userId: optionsOrUserId,
          cartId,
          entryNumber,
        },
      });

      return this.http
        .patch<CartModification>(url, { quantity, ...params }, { headers })
        .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    }

    const { body, urlParams } = this.createUpdateOptions(optionsOrUserId);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = this.occEndpointsService.buildUrl('updateEntries', {
      urlParams,
    });

    return this.http
      .patch<CartModification>(url, body, { headers })
      .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
  }

  /**
   * Creates HTTP's body and URL params based on
   * the provided options.
   */
  protected createUpdateOptions(
    options: BaseCartOptions<UpdateEntryOptions>
  ): HttpPayload {
    const { userId, cartId, entryNumber, quantity, ...augmentedOptions } =
      options;

    return {
      body: {
        quantity,
        ...augmentedOptions,
      },
      urlParams: {
        userId,
        cartId,
        entryNumber,
      },
    };
  }

  /**
   *
   * @deprecated since 5.1.0, and will be removed in the future major version.
   * Instead, use `remove(options: BaseCartOptions<RemoveEntryOptions>)`.
   */
  // TODO:#object-extensibility-deprecation - remove
  public remove(
    userId: string,
    cartId: string,
    entryNumber: string | number
  ): Observable<any>;
  // TODO:#object-extensibility-deprecation - remove
  public remove(options: BaseCartOptions<RemoveEntryOptions>): Observable<any>;
  public remove(
    // TODO:#object-extensibility-deprecation - rename to `options`
    optionsOrUserId:
      | BaseCartOptions<RemoveEntryOptions>
      // TODO:#object-extensibility-deprecation - remove the "| string" part, and everything that follows it.
      | string,
    cartId?: string,
    entryNumber?: string | number
  ): Observable<any> {
    let augmentedOptions: Omit<
      UpdateEntryOptions,
      'userId' | 'cartId' | 'entryNumber' | 'quantity'
    > = {};
    let userId: string;

    // TODO:#object-extensibility-deprecation - remove the `if` and its body
    if (typeof optionsOrUserId === 'string') {
      userId = optionsOrUserId;
    } else {
      ({ userId, cartId, entryNumber, ...augmentedOptions } = optionsOrUserId);
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    const url = this.occEndpointsService.buildUrl('removeEntries', {
      urlParams: {
        userId,
        cartId,
        entryNumber,
        // TODO:#xxx - pass the augmented options here?
        ...augmentedOptions,
      },
    });

    return this.http.delete(url, { headers });
  }
}
