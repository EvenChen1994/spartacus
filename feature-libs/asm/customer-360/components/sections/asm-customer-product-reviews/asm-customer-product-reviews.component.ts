/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Customer360ReviewList } from '@spartacus/asm/customer-360/root';
import { CxDatePipe, Product, TranslationService } from '@spartacus/core';
import { combineLatest, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  CustomerTableColumn,
  TableEntry,
} from '../../asm-customer-table/asm-customer-table.model';
import { Customer360SectionContext } from '../customer-360-section-context.model';
import { ReviewEntry } from './asm-customer-product-reviews.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'cx-asm-customer-product-reviews',
  templateUrl: './asm-customer-product-reviews.component.html',
  providers: [CxDatePipe],
})
export class AsmCustomerProductReviewsComponent implements OnInit {
  reviewColumns: Array<CustomerTableColumn> = [
    {
      property: 'item',
      i18nTextKey: 'customer360.productReviews.columnHeaders.item',
      navigatable: true,
    },
    {
      property: 'dateAndStatus',
      i18nTextKey: 'customer360.productReviews.columnHeaders.dateAndStatus',
    },
    {
      property: 'rating',
      i18nTextKey: 'customer360.productReviews.columnHeaders.rating',
      renderAsStarRating: true,
    },
    {
      property: 'reviewText',
      i18nTextKey: 'customer360.productReviews.columnHeaders.review',
    },
  ];

  reviewEntries$: Observable<Array<ReviewEntry>>;

  protected subscription = new Subscription();

  constructor(
    protected context: Customer360SectionContext<Customer360ReviewList>,
    protected datePipe: CxDatePipe,
    protected translation: TranslationService
  ) {}

  ngOnInit(): void {
    this.reviewEntries$ = combineLatest([
      this.context.data$,
      this.translation.translate('customer360.productReviews.sku'),
    ]).pipe(
      map(([data, skuLabel]) => {
        return data.reviews.map((entry) => ({
          ...entry,
          item: `${entry.productName}, ${skuLabel}: ${entry.productCode}`,
          dateAndStatus: `${this.getLongDate(new Date(entry.createdAt))} / ${
            entry.reviewStatus
          }`,
        }));
      })
    );
  }

  navigateTo(entry: TableEntry): void {
    const params: Product = {
      name: entry.productName as string,
      code: entry.productCode as string,
    };
    this.context.navigate$.next({ cxRoute: 'product', params });
  }

  private getLongDate(date: Date) {
    if (!date) {
      return '';
    }
    return this.datePipe.transform(date, 'dd-MM-yy hh:mm a') ?? '';
  }
}
