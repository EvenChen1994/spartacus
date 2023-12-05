/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { isNotUndefined } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/order/root";
import * as i2 from "@spartacus/core";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "@spartacus/storefront";
export class OrderReturnRequestListComponent {
    constructor(returnRequestService, translation) {
        this.returnRequestService = returnRequestService;
        this.translation = translation;
        this.PAGE_SIZE = 5;
        this.returnRequests$ = this.returnRequestService.getOrderReturnRequestList(this.PAGE_SIZE).pipe(tap((requestList) => {
            if (requestList?.pagination?.sort) {
                this.sortType = requestList.pagination.sort;
            }
        }));
        /**
         * When "Order Return" feature is enabled, this component becomes one tab in
         * TabParagraphContainerComponent. This can be read from TabParagraphContainer.
         */
        this.tabTitleParam$ = this.returnRequests$.pipe(map((returnRequests) => returnRequests?.pagination?.totalResults), filter(isNotUndefined), take(1));
    }
    ngOnDestroy() {
        this.returnRequestService.clearOrderReturnRequestList();
    }
    changeSortCode(sortCode) {
        const event = {
            sortCode,
            currentPage: 0,
        };
        this.sortType = sortCode;
        this.fetchReturnRequests(event);
    }
    pageChange(page) {
        const event = {
            sortCode: this.sortType,
            currentPage: page,
        };
        this.fetchReturnRequests(event);
    }
    getSortLabels() {
        return combineLatest([
            this.translation.translate('sorting.date'),
            this.translation.translate('sorting.rma'),
        ]).pipe(map(([textByDate, textByRma]) => {
            return {
                byDate: textByDate,
                byRMA: textByRma,
            };
        }));
    }
    fetchReturnRequests(event) {
        this.returnRequestService.loadOrderReturnRequestList(this.PAGE_SIZE, event.currentPage, event.sortCode);
    }
}
OrderReturnRequestListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: OrderReturnRequestListComponent, deps: [{ token: i1.OrderReturnRequestFacade }, { token: i2.TranslationService }], target: i0.ɵɵFactoryTarget.Component });
OrderReturnRequestListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: OrderReturnRequestListComponent, selector: "cx-order-return-request-list", ngImport: i0, template: "<ng-container *ngIf=\"returnRequests$ | async as returnRequests\">\n  <div class=\"container\">\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"returnRequests.pagination.totalResults > 0\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top\">\n          <label class=\"cx-order-history-form-group form-group\"\n            ><span>{{ 'returnRequestList.sortBy' | cxTranslate }}</span>\n            <cx-sorting\n              [sortOptions]=\"returnRequests.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"returnRequests.pagination.sort\"\n              [ariaLabel]=\"'returnRequestList.sortReturns' | cxTranslate\"\n              ariaControls=\"order-return-table\"\n            ></cx-sorting>\n          </label>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"returnRequests.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table id=\"order-return-table\" class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'returnRequestList.returnRequestId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'returnRequestList.orderId' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'returnRequestList.date' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'returnRequestList.status' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let return of returnRequests.returnRequests\">\n              <td class=\"cx-order-history-code\">\n                <div class=\"cx-order-history-label\">\n                  {{ 'returnRequestList.returnRequestId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'returnRequestDetails',\n                      params: return\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ return?.rma }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-code\">\n                <div class=\"cx-order-history-label\">\n                  {{ 'returnRequestList.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: return?.order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ return?.order?.code }}</a\n                >\n              </td>\n\n              <td class=\"cx-order-history-placed\">\n                <div class=\"cx-order-history-label\">\n                  {{ 'returnRequestList.date' | cxTranslate }}\n                </div>\n                {{ return?.creationTime | cxDate: 'longDate' }}\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"cx-order-history-label\">\n                  {{ 'returnRequestList.status' | cxTranslate }}\n                </div>\n                {{\n                  'returnRequestList.statusDisplay_' + return?.status\n                    | cxTranslate\n                }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom\">\n          <label class=\"cx-order-history-form-group form-group\"\n            ><span>{{ 'returnRequestList.sortBy' | cxTranslate }}</span>\n            <cx-sorting\n              [sortOptions]=\"returnRequests.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"returnRequests.pagination.sort\"\n              [ariaLabel]=\"'returnRequestList.sortReturns' | cxTranslate\"\n              ariaControls=\"order-return-table\"\n            ></cx-sorting>\n          </label>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"returnRequests.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "component", type: i5.SortingComponent, selector: "cx-sorting", inputs: ["sortOptions", "ariaControls", "ariaLabel", "selectedOption", "placeholder", "sortLabels"], outputs: ["sortListEvent"] }, { kind: "component", type: i5.PaginationComponent, selector: "cx-pagination", inputs: ["pageRoute", "queryParam", "defaultPage", "pagination"], outputs: ["viewPageEvent"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i2.UrlPipe, name: "cxUrl" }, { kind: "pipe", type: i2.TranslatePipe, name: "cxTranslate" }, { kind: "pipe", type: i2.CxDatePipe, name: "cxDate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: OrderReturnRequestListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-order-return-request-list', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"returnRequests$ | async as returnRequests\">\n  <div class=\"container\">\n    <!-- BODY -->\n    <div class=\"cx-order-history-body\">\n      <ng-container *ngIf=\"returnRequests.pagination.totalResults > 0\">\n        <!-- Select Form and Pagination Top -->\n        <div class=\"cx-order-history-sort top\">\n          <label class=\"cx-order-history-form-group form-group\"\n            ><span>{{ 'returnRequestList.sortBy' | cxTranslate }}</span>\n            <cx-sorting\n              [sortOptions]=\"returnRequests.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"returnRequests.pagination.sort\"\n              [ariaLabel]=\"'returnRequestList.sortReturns' | cxTranslate\"\n              ariaControls=\"order-return-table\"\n            ></cx-sorting>\n          </label>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"returnRequests.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n        <!-- TABLE -->\n        <table id=\"order-return-table\" class=\"table cx-order-history-table\">\n          <thead class=\"cx-order-history-thead-mobile\">\n            <th scope=\"col\">\n              {{ 'returnRequestList.returnRequestId' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'returnRequestList.orderId' | cxTranslate }}</th>\n            <th scope=\"col\">\n              {{ 'returnRequestList.date' | cxTranslate }}\n            </th>\n            <th scope=\"col\">{{ 'returnRequestList.status' | cxTranslate }}</th>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let return of returnRequests.returnRequests\">\n              <td class=\"cx-order-history-code\">\n                <div class=\"cx-order-history-label\">\n                  {{ 'returnRequestList.returnRequestId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'returnRequestDetails',\n                      params: return\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ return?.rma }}</a\n                >\n              </td>\n              <td class=\"cx-order-history-code\">\n                <div class=\"cx-order-history-label\">\n                  {{ 'returnRequestList.orderId' | cxTranslate }}\n                </div>\n                <a\n                  [routerLink]=\"\n                    {\n                      cxRoute: 'orderDetails',\n                      params: return?.order\n                    } | cxUrl\n                  \"\n                  class=\"cx-order-history-value\"\n                >\n                  {{ return?.order?.code }}</a\n                >\n              </td>\n\n              <td class=\"cx-order-history-placed\">\n                <div class=\"cx-order-history-label\">\n                  {{ 'returnRequestList.date' | cxTranslate }}\n                </div>\n                {{ return?.creationTime | cxDate: 'longDate' }}\n              </td>\n              <td class=\"cx-order-history-status\">\n                <div class=\"cx-order-history-label\">\n                  {{ 'returnRequestList.status' | cxTranslate }}\n                </div>\n                {{\n                  'returnRequestList.statusDisplay_' + return?.status\n                    | cxTranslate\n                }}\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <!-- Select Form and Pagination Bottom -->\n        <div class=\"cx-order-history-sort bottom\">\n          <label class=\"cx-order-history-form-group form-group\"\n            ><span>{{ 'returnRequestList.sortBy' | cxTranslate }}</span>\n            <cx-sorting\n              [sortOptions]=\"returnRequests.sorts\"\n              [sortLabels]=\"getSortLabels() | async\"\n              (sortListEvent)=\"changeSortCode($event)\"\n              [selectedOption]=\"returnRequests.pagination.sort\"\n              [ariaLabel]=\"'returnRequestList.sortReturns' | cxTranslate\"\n              ariaControls=\"order-return-table\"\n            ></cx-sorting>\n          </label>\n          <div class=\"cx-order-history-pagination\">\n            <cx-pagination\n              [pagination]=\"returnRequests.pagination\"\n              (viewPageEvent)=\"pageChange($event)\"\n            ></cx-pagination>\n          </div>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.OrderReturnRequestFacade }, { type: i2.TranslationService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLXJlcXVlc3QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JkZXIvY29tcG9uZW50cy9yZXR1cm4tcmVxdWVzdC1saXN0L29yZGVyLXJldHVybi1yZXF1ZXN0LWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZGVyL2NvbXBvbmVudHMvcmV0dXJuLXJlcXVlc3QtbGlzdC9vcmRlci1yZXR1cm4tcmVxdWVzdC1saXN0LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0saUJBQWlCLENBQUM7QUFLckUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFPeEQsTUFBTSxPQUFPLCtCQUErQjtJQUMxQyxZQUNVLG9CQUE4QyxFQUM5QyxXQUErQjtRQUQvQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTBCO1FBQzlDLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUdqQyxjQUFTLEdBQUcsQ0FBQyxDQUFDO1FBR3RCLG9CQUFlLEdBQ2IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLHlCQUF5QixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ3RFLEdBQUcsQ0FBQyxDQUFDLFdBQTBDLEVBQUUsRUFBRTtZQUNqRCxJQUFJLFdBQVcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2FBQzdDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVKOzs7V0FHRztRQUNILG1CQUFjLEdBQXVCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUM1RCxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsWUFBWSxDQUFDLEVBQ2pFLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFDdEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSLENBQUM7SUF0QkMsQ0FBQztJQXdCSixXQUFXO1FBQ1QsSUFBSSxDQUFDLG9CQUFvQixDQUFDLDJCQUEyQixFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFnQjtRQUM3QixNQUFNLEtBQUssR0FBOEM7WUFDdkQsUUFBUTtZQUNSLFdBQVcsRUFBRSxDQUFDO1NBQ2YsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQVk7UUFDckIsTUFBTSxLQUFLLEdBQThDO1lBQ3ZELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDO1FBQ0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1lBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztTQUMxQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxFQUFFLEVBQUU7WUFDOUIsT0FBTztnQkFDTCxNQUFNLEVBQUUsVUFBVTtnQkFDbEIsS0FBSyxFQUFFLFNBQVM7YUFDakIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRU8sbUJBQW1CLENBQUMsS0FHM0I7UUFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsMEJBQTBCLENBQ2xELElBQUksQ0FBQyxTQUFTLEVBQ2QsS0FBSyxDQUFDLFdBQVcsRUFDakIsS0FBSyxDQUFDLFFBQVEsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7NEhBeEVVLCtCQUErQjtnSEFBL0IsK0JBQStCLG9FQ3BCNUMsMG5KQWtIQTsyRkQ5RmEsK0JBQStCO2tCQUwzQyxTQUFTOytCQUNFLDhCQUE4QixtQkFFdkIsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3RVbmRlZmluZWQsIFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBPcmRlclJldHVyblJlcXVlc3RGYWNhZGUsXG4gIFJldHVyblJlcXVlc3RMaXN0LFxufSBmcm9tICdAc3BhcnRhY3VzL29yZGVyL3Jvb3QnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItcmV0dXJuLXJlcXVlc3QtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1yZXR1cm4tcmVxdWVzdC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyUmV0dXJuUmVxdWVzdExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJldHVyblJlcXVlc3RTZXJ2aWNlOiBPcmRlclJldHVyblJlcXVlc3RGYWNhZGUsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIFBBR0VfU0laRSA9IDU7XG4gIHNvcnRUeXBlOiBzdHJpbmc7XG5cbiAgcmV0dXJuUmVxdWVzdHMkOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3RMaXN0IHwgdW5kZWZpbmVkPiA9XG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5nZXRPcmRlclJldHVyblJlcXVlc3RMaXN0KHRoaXMuUEFHRV9TSVpFKS5waXBlKFxuICAgICAgdGFwKChyZXF1ZXN0TGlzdDogUmV0dXJuUmVxdWVzdExpc3QgfCB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgaWYgKHJlcXVlc3RMaXN0Py5wYWdpbmF0aW9uPy5zb3J0KSB7XG4gICAgICAgICAgdGhpcy5zb3J0VHlwZSA9IHJlcXVlc3RMaXN0LnBhZ2luYXRpb24uc29ydDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gIC8qKlxuICAgKiBXaGVuIFwiT3JkZXIgUmV0dXJuXCIgZmVhdHVyZSBpcyBlbmFibGVkLCB0aGlzIGNvbXBvbmVudCBiZWNvbWVzIG9uZSB0YWIgaW5cbiAgICogVGFiUGFyYWdyYXBoQ29udGFpbmVyQ29tcG9uZW50LiBUaGlzIGNhbiBiZSByZWFkIGZyb20gVGFiUGFyYWdyYXBoQ29udGFpbmVyLlxuICAgKi9cbiAgdGFiVGl0bGVQYXJhbSQ6IE9ic2VydmFibGU8bnVtYmVyPiA9IHRoaXMucmV0dXJuUmVxdWVzdHMkLnBpcGUoXG4gICAgbWFwKChyZXR1cm5SZXF1ZXN0cykgPT4gcmV0dXJuUmVxdWVzdHM/LnBhZ2luYXRpb24/LnRvdGFsUmVzdWx0cyksXG4gICAgZmlsdGVyKGlzTm90VW5kZWZpbmVkKSxcbiAgICB0YWtlKDEpXG4gICk7XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5jbGVhck9yZGVyUmV0dXJuUmVxdWVzdExpc3QoKTtcbiAgfVxuXG4gIGNoYW5nZVNvcnRDb2RlKHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBldmVudDogeyBzb3J0Q29kZTogc3RyaW5nOyBjdXJyZW50UGFnZTogbnVtYmVyIH0gPSB7XG4gICAgICBzb3J0Q29kZSxcbiAgICAgIGN1cnJlbnRQYWdlOiAwLFxuICAgIH07XG4gICAgdGhpcy5zb3J0VHlwZSA9IHNvcnRDb2RlO1xuICAgIHRoaXMuZmV0Y2hSZXR1cm5SZXF1ZXN0cyhldmVudCk7XG4gIH1cblxuICBwYWdlQ2hhbmdlKHBhZ2U6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50OiB7IHNvcnRDb2RlOiBzdHJpbmc7IGN1cnJlbnRQYWdlOiBudW1iZXIgfSA9IHtcbiAgICAgIHNvcnRDb2RlOiB0aGlzLnNvcnRUeXBlLFxuICAgICAgY3VycmVudFBhZ2U6IHBhZ2UsXG4gICAgfTtcbiAgICB0aGlzLmZldGNoUmV0dXJuUmVxdWVzdHMoZXZlbnQpO1xuICB9XG5cbiAgZ2V0U29ydExhYmVscygpOiBPYnNlcnZhYmxlPHsgYnlEYXRlOiBzdHJpbmc7IGJ5Uk1BOiBzdHJpbmcgfT4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdzb3J0aW5nLmRhdGUnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdzb3J0aW5nLnJtYScpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFt0ZXh0QnlEYXRlLCB0ZXh0QnlSbWFdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgYnlEYXRlOiB0ZXh0QnlEYXRlLFxuICAgICAgICAgIGJ5Uk1BOiB0ZXh0QnlSbWEsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGZldGNoUmV0dXJuUmVxdWVzdHMoZXZlbnQ6IHtcbiAgICBzb3J0Q29kZTogc3RyaW5nO1xuICAgIGN1cnJlbnRQYWdlOiBudW1iZXI7XG4gIH0pOiB2b2lkIHtcbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmxvYWRPcmRlclJldHVyblJlcXVlc3RMaXN0KFxuICAgICAgdGhpcy5QQUdFX1NJWkUsXG4gICAgICBldmVudC5jdXJyZW50UGFnZSxcbiAgICAgIGV2ZW50LnNvcnRDb2RlXG4gICAgKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cInJldHVyblJlcXVlc3RzJCB8IGFzeW5jIGFzIHJldHVyblJlcXVlc3RzXCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8IS0tIEJPRFkgLS0+XG4gICAgPGRpdiBjbGFzcz1cImN4LW9yZGVyLWhpc3RvcnktYm9keVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJldHVyblJlcXVlc3RzLnBhZ2luYXRpb24udG90YWxSZXN1bHRzID4gMFwiPlxuICAgICAgICA8IS0tIFNlbGVjdCBGb3JtIGFuZCBQYWdpbmF0aW9uIFRvcCAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LW9yZGVyLWhpc3Rvcnktc29ydCB0b3BcIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjeC1vcmRlci1oaXN0b3J5LWZvcm0tZ3JvdXAgZm9ybS1ncm91cFwiXG4gICAgICAgICAgICA+PHNwYW4+e3sgJ3JldHVyblJlcXVlc3RMaXN0LnNvcnRCeScgfCBjeFRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxjeC1zb3J0aW5nXG4gICAgICAgICAgICAgIFtzb3J0T3B0aW9uc109XCJyZXR1cm5SZXF1ZXN0cy5zb3J0c1wiXG4gICAgICAgICAgICAgIFtzb3J0TGFiZWxzXT1cImdldFNvcnRMYWJlbHMoKSB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgKHNvcnRMaXN0RXZlbnQpPVwiY2hhbmdlU29ydENvZGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIFtzZWxlY3RlZE9wdGlvbl09XCJyZXR1cm5SZXF1ZXN0cy5wYWdpbmF0aW9uLnNvcnRcIlxuICAgICAgICAgICAgICBbYXJpYUxhYmVsXT1cIidyZXR1cm5SZXF1ZXN0TGlzdC5zb3J0UmV0dXJucycgfCBjeFRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgIGFyaWFDb250cm9scz1cIm9yZGVyLXJldHVybi10YWJsZVwiXG4gICAgICAgICAgICA+PC9jeC1zb3J0aW5nPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImN4LW9yZGVyLWhpc3RvcnktcGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPGN4LXBhZ2luYXRpb25cbiAgICAgICAgICAgICAgW3BhZ2luYXRpb25dPVwicmV0dXJuUmVxdWVzdHMucGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICh2aWV3UGFnZUV2ZW50KT1cInBhZ2VDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICA+PC9jeC1wYWdpbmF0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBUQUJMRSAtLT5cbiAgICAgICAgPHRhYmxlIGlkPVwib3JkZXItcmV0dXJuLXRhYmxlXCIgY2xhc3M9XCJ0YWJsZSBjeC1vcmRlci1oaXN0b3J5LXRhYmxlXCI+XG4gICAgICAgICAgPHRoZWFkIGNsYXNzPVwiY3gtb3JkZXItaGlzdG9yeS10aGVhZC1tb2JpbGVcIj5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlxuICAgICAgICAgICAgICB7eyAncmV0dXJuUmVxdWVzdExpc3QucmV0dXJuUmVxdWVzdElkJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+e3sgJ3JldHVyblJlcXVlc3RMaXN0Lm9yZGVySWQnIHwgY3hUcmFuc2xhdGUgfX08L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+XG4gICAgICAgICAgICAgIHt7ICdyZXR1cm5SZXF1ZXN0TGlzdC5kYXRlJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+e3sgJ3JldHVyblJlcXVlc3RMaXN0LnN0YXR1cycgfCBjeFRyYW5zbGF0ZSB9fTwvdGg+XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJldHVybiBvZiByZXR1cm5SZXF1ZXN0cy5yZXR1cm5SZXF1ZXN0c1wiPlxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjeC1vcmRlci1oaXN0b3J5LWNvZGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtb3JkZXItaGlzdG9yeS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAge3sgJ3JldHVyblJlcXVlc3RMaXN0LnJldHVyblJlcXVlc3RJZCcgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGN4Um91dGU6ICdyZXR1cm5SZXF1ZXN0RGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfSB8IGN4VXJsXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjeC1vcmRlci1oaXN0b3J5LXZhbHVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7eyByZXR1cm4/LnJtYSB9fTwvYVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzPVwiY3gtb3JkZXItaGlzdG9yeS1jb2RlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN4LW9yZGVyLWhpc3RvcnktbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIHt7ICdyZXR1cm5SZXF1ZXN0TGlzdC5vcmRlcklkJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgY3hSb3V0ZTogJ29yZGVyRGV0YWlscycsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiByZXR1cm4/Lm9yZGVyXG4gICAgICAgICAgICAgICAgICAgIH0gfCBjeFVybFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3gtb3JkZXItaGlzdG9yeS12YWx1ZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge3sgcmV0dXJuPy5vcmRlcj8uY29kZSB9fTwvYVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC90ZD5cblxuICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjeC1vcmRlci1oaXN0b3J5LXBsYWNlZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjeC1vcmRlci1oaXN0b3J5LWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICB7eyAncmV0dXJuUmVxdWVzdExpc3QuZGF0ZScgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt7IHJldHVybj8uY3JlYXRpb25UaW1lIHwgY3hEYXRlOiAnbG9uZ0RhdGUnIH19XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImN4LW9yZGVyLWhpc3Rvcnktc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN4LW9yZGVyLWhpc3RvcnktbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIHt7ICdyZXR1cm5SZXF1ZXN0TGlzdC5zdGF0dXMnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgJ3JldHVyblJlcXVlc3RMaXN0LnN0YXR1c0Rpc3BsYXlfJyArIHJldHVybj8uc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8IS0tIFNlbGVjdCBGb3JtIGFuZCBQYWdpbmF0aW9uIEJvdHRvbSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LW9yZGVyLWhpc3Rvcnktc29ydCBib3R0b21cIj5cbiAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjeC1vcmRlci1oaXN0b3J5LWZvcm0tZ3JvdXAgZm9ybS1ncm91cFwiXG4gICAgICAgICAgICA+PHNwYW4+e3sgJ3JldHVyblJlcXVlc3RMaXN0LnNvcnRCeScgfCBjeFRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxjeC1zb3J0aW5nXG4gICAgICAgICAgICAgIFtzb3J0T3B0aW9uc109XCJyZXR1cm5SZXF1ZXN0cy5zb3J0c1wiXG4gICAgICAgICAgICAgIFtzb3J0TGFiZWxzXT1cImdldFNvcnRMYWJlbHMoKSB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgKHNvcnRMaXN0RXZlbnQpPVwiY2hhbmdlU29ydENvZGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgIFtzZWxlY3RlZE9wdGlvbl09XCJyZXR1cm5SZXF1ZXN0cy5wYWdpbmF0aW9uLnNvcnRcIlxuICAgICAgICAgICAgICBbYXJpYUxhYmVsXT1cIidyZXR1cm5SZXF1ZXN0TGlzdC5zb3J0UmV0dXJucycgfCBjeFRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgIGFyaWFDb250cm9scz1cIm9yZGVyLXJldHVybi10YWJsZVwiXG4gICAgICAgICAgICA+PC9jeC1zb3J0aW5nPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImN4LW9yZGVyLWhpc3RvcnktcGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgPGN4LXBhZ2luYXRpb25cbiAgICAgICAgICAgICAgW3BhZ2luYXRpb25dPVwicmV0dXJuUmVxdWVzdHMucGFnaW5hdGlvblwiXG4gICAgICAgICAgICAgICh2aWV3UGFnZUV2ZW50KT1cInBhZ2VDaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgICAgICA+PC9jeC1wYWdpbmF0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19