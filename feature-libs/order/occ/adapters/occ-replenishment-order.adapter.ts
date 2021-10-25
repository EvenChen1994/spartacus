import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ConverterService,
  Occ,
  OccEndpointsService,
  OrderHistoryList,
  ReplenishmentOrder,
  ReplenishmentOrderList,
} from '@spartacus/core';
import { ReplenishmentOrderAdapter } from '@spartacus/order/core';
import {
  ORDER_HISTORY_NORMALIZER,
  REPLENISHMENT_ORDER_HISTORY_NORMALIZER,
  REPLENISHMENT_ORDER_NORMALIZER,
} from '@spartacus/order/root';
import { Observable } from 'rxjs';

@Injectable()
export class OccReplenishmentOrderAdapter implements ReplenishmentOrderAdapter {
  constructor(
    protected http: HttpClient,
    protected occEndpoints: OccEndpointsService,
    protected converter: ConverterService
  ) {}
  public load(
    userId: string,
    replenishmentOrderCode: string
  ): Observable<ReplenishmentOrder> {
    return this.http
      .get<Occ.ReplenishmentOrder>(
        this.occEndpoints.buildUrl('replenishmentOrderDetails', {
          urlParams: { userId, replenishmentOrderCode },
        })
      )
      .pipe(this.converter.pipeable(REPLENISHMENT_ORDER_NORMALIZER));
  }

  public loadReplenishmentDetailsHistory(
    userId: string,
    replenishmentOrderCode: string,
    pageSize?: number,
    currentPage?: number,
    sort?: string
  ): Observable<OrderHistoryList> {
    const params: { [key: string]: string } = {};

    if (pageSize) {
      params['pageSize'] = pageSize.toString();
    }
    if (currentPage) {
      params['currentPage'] = currentPage.toString();
    }
    if (sort) {
      params['sort'] = sort.toString();
    }

    return this.http
      .get<Occ.OrderHistoryList>(
        this.occEndpoints.buildUrl('replenishmentOrderDetailsHistory', {
          urlParams: { userId, replenishmentOrderCode },
          queryParams: params,
        })
      )
      .pipe(this.converter.pipeable(ORDER_HISTORY_NORMALIZER));
  }

  public cancelReplenishmentOrder(
    userId: string,
    replenishmentOrderCode: string
  ): Observable<ReplenishmentOrder> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .patch<Occ.ReplenishmentOrder>(
        this.occEndpoints.buildUrl('cancelReplenishmentOrder', {
          urlParams: { userId, replenishmentOrderCode },
        }),
        {},
        { headers }
      )
      .pipe(this.converter.pipeable(REPLENISHMENT_ORDER_NORMALIZER));
  }

  public loadHistory(
    userId: string,
    pageSize?: number,
    currentPage?: number,
    sort?: string
  ): Observable<ReplenishmentOrderList> {
    const params: { [key: string]: string } = {};
    if (pageSize) {
      params['pageSize'] = pageSize.toString();
    }
    if (currentPage) {
      params['currentPage'] = currentPage.toString();
    }
    if (sort) {
      params['sort'] = sort.toString();
    }

    const url = this.occEndpoints.buildUrl('replenishmentOrderHistory', {
      urlParams: { userId },
      queryParams: params,
    });

    return this.http
      .get<Occ.ReplenishmentOrderList>(url)
      .pipe(this.converter.pipeable(REPLENISHMENT_ORDER_HISTORY_NORMALIZER));
  }
}
