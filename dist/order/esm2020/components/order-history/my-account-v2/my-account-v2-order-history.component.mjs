/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component, inject } from '@angular/core';
import { MyAccountV2OrderHistoryService } from '@spartacus/order/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { OrderHistoryComponent } from '../order-history.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
import * as i3 from "@spartacus/storefront";
import * as i4 from "./consolidated-information/my-account-v2-order-consolidated-information.component";
import * as i5 from "@spartacus/core";
export class MyAccountV2OrderHistoryComponent extends OrderHistoryComponent {
    constructor() {
        super(...arguments);
        this.service = inject(MyAccountV2OrderHistoryService);
        this.ITEMS_PER_PAGE = 5;
        this.isLoaded$ = new BehaviorSubject(false);
        this.orders$ = this.service
            .getOrderHistoryList(this.ITEMS_PER_PAGE)
            .pipe(tap((orders) => {
            this.isLoaded$.next(true);
            super.setOrderHistoryParams(orders);
        }));
    }
    pageChange(page) {
        this.isLoaded$.next(false);
        this.service.clearOrderList();
        super.pageChange(page);
    }
}
MyAccountV2OrderHistoryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyAccountV2OrderHistoryComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
MyAccountV2OrderHistoryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: MyAccountV2OrderHistoryComponent, selector: "cx-my-account-v2-order-history", usesInheritance: true, ngImport: i0, template: "<div\n  *ngIf=\"orders$ | async as orderHistory; else noOrder\"\n  [attr.aria-label]=\"'myAccountV2OrderHistory.orderListResults' | cxTranslate\"\n>\n  <!-- HEADER -->\n  <div class=\"cx-my-account-v2-order-history-header\">\n    <h2>\n      {{\n        'myAccountV2OrderHistory.heading'\n          | cxTranslate: { param: tabTitleParam$ | async }\n      }}\n    </h2>\n  </div>\n  <!--BODY-->\n  <div class=\"cx-my-account-v2-order-history-body\">\n    <ng-container\n      *ngIf=\"orderHistory.pagination.totalResults > 0; else noOrder\"\n    >\n      <ng-container *ngFor=\"let order of orderHistory.orders\">\n        <div class=\"cx-each-order\">\n          <!--eg: Order # 12345-->\n          <div\n            class=\"cx-my-account-v2-order-history-code\"\n            [attr.aria-label]=\"\n              'myAccountV2OrderHistory.orderCodeLabel' | cxTranslate\n            \"\n            (click)=\"goToOrderDetail(order)\"\n          >\n            <a\n              [routerLink]=\"\n                {\n                  cxRoute: 'orderDetails',\n                  params: order\n                } | cxUrl\n              \"\n            >\n              {{ 'orderHistory.orderId' | cxTranslate }} {{ order?.code }}</a\n            >\n          </div>\n\n          <!--eg: 12,October,2022 | Total Price: $12.00-->\n          <div class=\"cx-my-account-v2-order-summary\">\n            <span\n              [attr.aria-label]=\"\n                'myAccountV2OrderHistory.orderPlaced' | cxTranslate\n              \"\n            >\n              {{ order.placed | cxDate: 'd, MMMM, yyyy' }} |\n            </span>\n            <span\n              [attr.aria-label]=\"\n                'myAccountV2OrderHistory.totalPriceLabel' | cxTranslate\n              \"\n            >\n              <strong>\n                {{\n                  'myAccountV2OrderHistory.totalPrice'\n                    | cxTranslate: { param: order.total?.formattedValue }\n                }}\n              </strong>\n            </span>\n          </div>\n\n          <!--eg: Display consolidated order information-->\n          <cx-my-account-v2-order-consolidated-information [order]=\"order\">\n          </cx-my-account-v2-order-consolidated-information>\n        </div>\n      </ng-container>\n\n      <!-- PAGINATION -->\n      <div\n        *ngIf=\"orderHistory.pagination.totalPages > 1\"\n        class=\"cx-order-history-pagination\"\n        [attr.aria-label]=\"\n          'myAccountV2OrderHistory.orderListPagination' | cxTranslate\n        \"\n      >\n        <cx-pagination\n          [pagination]=\"orderHistory.pagination\"\n          (viewPageEvent)=\"pageChange($event)\"\n        ></cx-pagination>\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<!-- NO ORDER CONTAINER -->\n<ng-template #noOrder>\n  <div *ngIf=\"isLoaded$ | async; else loading\">\n    <div [attr.aria-label]=\"'orderHistory.notFound' | cxTranslate\">\n      {{ 'orderHistory.noOrders' | cxTranslate }}\n    </div>\n    <a\n      [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n      routerLinkActive=\"active\"\n      class=\"cx-no-order\"\n      >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n    >\n  </div>\n</ng-template>\n\n<!-- ORDER HISTORY DATA STILL LOADING -->\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i2.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "component", type: i3.PaginationComponent, selector: "cx-pagination", inputs: ["pageRoute", "queryParam", "defaultPage", "pagination"], outputs: ["viewPageEvent"] }, { kind: "component", type: i3.SpinnerComponent, selector: "cx-spinner" }, { kind: "component", type: i4.MyAccountV2OrderConsolidatedInformationComponent, selector: "cx-my-account-v2-order-consolidated-information", inputs: ["order"] }, { kind: "pipe", type: i1.AsyncPipe, name: "async" }, { kind: "pipe", type: i5.UrlPipe, name: "cxUrl" }, { kind: "pipe", type: i5.TranslatePipe, name: "cxTranslate" }, { kind: "pipe", type: i5.CxDatePipe, name: "cxDate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyAccountV2OrderHistoryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-my-account-v2-order-history', template: "<div\n  *ngIf=\"orders$ | async as orderHistory; else noOrder\"\n  [attr.aria-label]=\"'myAccountV2OrderHistory.orderListResults' | cxTranslate\"\n>\n  <!-- HEADER -->\n  <div class=\"cx-my-account-v2-order-history-header\">\n    <h2>\n      {{\n        'myAccountV2OrderHistory.heading'\n          | cxTranslate: { param: tabTitleParam$ | async }\n      }}\n    </h2>\n  </div>\n  <!--BODY-->\n  <div class=\"cx-my-account-v2-order-history-body\">\n    <ng-container\n      *ngIf=\"orderHistory.pagination.totalResults > 0; else noOrder\"\n    >\n      <ng-container *ngFor=\"let order of orderHistory.orders\">\n        <div class=\"cx-each-order\">\n          <!--eg: Order # 12345-->\n          <div\n            class=\"cx-my-account-v2-order-history-code\"\n            [attr.aria-label]=\"\n              'myAccountV2OrderHistory.orderCodeLabel' | cxTranslate\n            \"\n            (click)=\"goToOrderDetail(order)\"\n          >\n            <a\n              [routerLink]=\"\n                {\n                  cxRoute: 'orderDetails',\n                  params: order\n                } | cxUrl\n              \"\n            >\n              {{ 'orderHistory.orderId' | cxTranslate }} {{ order?.code }}</a\n            >\n          </div>\n\n          <!--eg: 12,October,2022 | Total Price: $12.00-->\n          <div class=\"cx-my-account-v2-order-summary\">\n            <span\n              [attr.aria-label]=\"\n                'myAccountV2OrderHistory.orderPlaced' | cxTranslate\n              \"\n            >\n              {{ order.placed | cxDate: 'd, MMMM, yyyy' }} |\n            </span>\n            <span\n              [attr.aria-label]=\"\n                'myAccountV2OrderHistory.totalPriceLabel' | cxTranslate\n              \"\n            >\n              <strong>\n                {{\n                  'myAccountV2OrderHistory.totalPrice'\n                    | cxTranslate: { param: order.total?.formattedValue }\n                }}\n              </strong>\n            </span>\n          </div>\n\n          <!--eg: Display consolidated order information-->\n          <cx-my-account-v2-order-consolidated-information [order]=\"order\">\n          </cx-my-account-v2-order-consolidated-information>\n        </div>\n      </ng-container>\n\n      <!-- PAGINATION -->\n      <div\n        *ngIf=\"orderHistory.pagination.totalPages > 1\"\n        class=\"cx-order-history-pagination\"\n        [attr.aria-label]=\"\n          'myAccountV2OrderHistory.orderListPagination' | cxTranslate\n        \"\n      >\n        <cx-pagination\n          [pagination]=\"orderHistory.pagination\"\n          (viewPageEvent)=\"pageChange($event)\"\n        ></cx-pagination>\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<!-- NO ORDER CONTAINER -->\n<ng-template #noOrder>\n  <div *ngIf=\"isLoaded$ | async; else loading\">\n    <div [attr.aria-label]=\"'orderHistory.notFound' | cxTranslate\">\n      {{ 'orderHistory.noOrders' | cxTranslate }}\n    </div>\n    <a\n      [routerLink]=\"{ cxRoute: 'home' } | cxUrl\"\n      routerLinkActive=\"active\"\n      class=\"cx-no-order\"\n      >{{ 'orderHistory.startShopping' | cxTranslate }}</a\n    >\n  </div>\n</ng-template>\n\n<!-- ORDER HISTORY DATA STILL LOADING -->\n<ng-template #loading>\n  <div class=\"cx-spinner\">\n    <cx-spinner></cx-spinner>\n  </div>\n</ng-template>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYWNjb3VudC12Mi1vcmRlci1oaXN0b3J5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmRlci9jb21wb25lbnRzL29yZGVyLWhpc3RvcnkvbXktYWNjb3VudC12Mi9teS1hY2NvdW50LXYyLW9yZGVyLWhpc3RvcnkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZGVyL2NvbXBvbmVudHMvb3JkZXItaGlzdG9yeS9teS1hY2NvdW50LXYyL215LWFjY291bnQtdjItb3JkZXItaGlzdG9yeS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFdkUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7QUFNbkUsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLHFCQUFxQjtJQUozRTs7UUFLWSxZQUFPLEdBQUcsTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUM7UUFDeEMsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDdEMsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ2hELFlBQU8sR0FBaUQsSUFBSSxDQUFDLE9BQU87YUFDakUsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQzthQUN4QyxJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsTUFBd0MsRUFBRSxFQUFFO1lBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FDSCxDQUFDO0tBTUw7SUFMQyxVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7NkhBaEJVLGdDQUFnQztpSEFBaEMsZ0NBQWdDLDZGQ2pCN0MsNHlHQTJHQTsyRkQxRmEsZ0NBQWdDO2tCQUo1QyxTQUFTOytCQUNFLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNeUFjY291bnRWMk9yZGVySGlzdG9yeVNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL29yZGVyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJIaXN0b3J5TGlzdFZpZXcgfSBmcm9tICdAc3BhcnRhY3VzL29yZGVyL3Jvb3QnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckhpc3RvcnlDb21wb25lbnQgfSBmcm9tICcuLi9vcmRlci1oaXN0b3J5LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW15LWFjY291bnQtdjItb3JkZXItaGlzdG9yeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9teS1hY2NvdW50LXYyLW9yZGVyLWhpc3RvcnkuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBNeUFjY291bnRWMk9yZGVySGlzdG9yeUNvbXBvbmVudCBleHRlbmRzIE9yZGVySGlzdG9yeUNvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBzZXJ2aWNlID0gaW5qZWN0KE15QWNjb3VudFYyT3JkZXJIaXN0b3J5U2VydmljZSk7XG4gIHByb3RlY3RlZCByZWFkb25seSBJVEVNU19QRVJfUEFHRSA9IDU7XG4gIGlzTG9hZGVkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBvcmRlcnMkOiBPYnNlcnZhYmxlPE9yZGVySGlzdG9yeUxpc3RWaWV3IHwgdW5kZWZpbmVkPiA9IHRoaXMuc2VydmljZVxuICAgIC5nZXRPcmRlckhpc3RvcnlMaXN0KHRoaXMuSVRFTVNfUEVSX1BBR0UpXG4gICAgLnBpcGUoXG4gICAgICB0YXAoKG9yZGVyczogT3JkZXJIaXN0b3J5TGlzdFZpZXcgfCB1bmRlZmluZWQpID0+IHtcbiAgICAgICAgdGhpcy5pc0xvYWRlZCQubmV4dCh0cnVlKTtcbiAgICAgICAgc3VwZXIuc2V0T3JkZXJIaXN0b3J5UGFyYW1zKG9yZGVycyk7XG4gICAgICB9KVxuICAgICk7XG4gIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pc0xvYWRlZCQubmV4dChmYWxzZSk7XG4gICAgdGhpcy5zZXJ2aWNlLmNsZWFyT3JkZXJMaXN0KCk7XG4gICAgc3VwZXIucGFnZUNoYW5nZShwYWdlKTtcbiAgfVxufVxuIiwiPGRpdlxuICAqbmdJZj1cIm9yZGVycyQgfCBhc3luYyBhcyBvcmRlckhpc3Rvcnk7IGVsc2Ugbm9PcmRlclwiXG4gIFthdHRyLmFyaWEtbGFiZWxdPVwiJ215QWNjb3VudFYyT3JkZXJIaXN0b3J5Lm9yZGVyTGlzdFJlc3VsdHMnIHwgY3hUcmFuc2xhdGVcIlxuPlxuICA8IS0tIEhFQURFUiAtLT5cbiAgPGRpdiBjbGFzcz1cImN4LW15LWFjY291bnQtdjItb3JkZXItaGlzdG9yeS1oZWFkZXJcIj5cbiAgICA8aDI+XG4gICAgICB7e1xuICAgICAgICAnbXlBY2NvdW50VjJPcmRlckhpc3RvcnkuaGVhZGluZydcbiAgICAgICAgICB8IGN4VHJhbnNsYXRlOiB7IHBhcmFtOiB0YWJUaXRsZVBhcmFtJCB8IGFzeW5jIH1cbiAgICAgIH19XG4gICAgPC9oMj5cbiAgPC9kaXY+XG4gIDwhLS1CT0RZLS0+XG4gIDxkaXYgY2xhc3M9XCJjeC1teS1hY2NvdW50LXYyLW9yZGVyLWhpc3RvcnktYm9keVwiPlxuICAgIDxuZy1jb250YWluZXJcbiAgICAgICpuZ0lmPVwib3JkZXJIaXN0b3J5LnBhZ2luYXRpb24udG90YWxSZXN1bHRzID4gMDsgZWxzZSBub09yZGVyXCJcbiAgICA+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcmRlciBvZiBvcmRlckhpc3Rvcnkub3JkZXJzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjeC1lYWNoLW9yZGVyXCI+XG4gICAgICAgICAgPCEtLWVnOiBPcmRlciAjIDEyMzQ1LS0+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJjeC1teS1hY2NvdW50LXYyLW9yZGVyLWhpc3RvcnktY29kZVwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIlxuICAgICAgICAgICAgICAnbXlBY2NvdW50VjJPcmRlckhpc3Rvcnkub3JkZXJDb2RlTGFiZWwnIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZ29Ub09yZGVyRGV0YWlsKG9yZGVyKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY3hSb3V0ZTogJ29yZGVyRGV0YWlscycsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IG9yZGVyXG4gICAgICAgICAgICAgICAgfSB8IGN4VXJsXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt7ICdvcmRlckhpc3Rvcnkub3JkZXJJZCcgfCBjeFRyYW5zbGF0ZSB9fSB7eyBvcmRlcj8uY29kZSB9fTwvYVxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLWVnOiAxMixPY3RvYmVyLDIwMjIgfCBUb3RhbCBQcmljZTogJDEyLjAwLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImN4LW15LWFjY291bnQtdjItb3JkZXItc3VtbWFyeVwiPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAgICAgICAgICAgICAnbXlBY2NvdW50VjJPcmRlckhpc3Rvcnkub3JkZXJQbGFjZWQnIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgb3JkZXIucGxhY2VkIHwgY3hEYXRlOiAnZCwgTU1NTSwgeXl5eScgfX0gfFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAgICAgICAgICAgICAnbXlBY2NvdW50VjJPcmRlckhpc3RvcnkudG90YWxQcmljZUxhYmVsJyB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICdteUFjY291bnRWMk9yZGVySGlzdG9yeS50b3RhbFByaWNlJ1xuICAgICAgICAgICAgICAgICAgICB8IGN4VHJhbnNsYXRlOiB7IHBhcmFtOiBvcmRlci50b3RhbD8uZm9ybWF0dGVkVmFsdWUgfVxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPCEtLWVnOiBEaXNwbGF5IGNvbnNvbGlkYXRlZCBvcmRlciBpbmZvcm1hdGlvbi0tPlxuICAgICAgICAgIDxjeC1teS1hY2NvdW50LXYyLW9yZGVyLWNvbnNvbGlkYXRlZC1pbmZvcm1hdGlvbiBbb3JkZXJdPVwib3JkZXJcIj5cbiAgICAgICAgICA8L2N4LW15LWFjY291bnQtdjItb3JkZXItY29uc29saWRhdGVkLWluZm9ybWF0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8IS0tIFBBR0lOQVRJT04gLS0+XG4gICAgICA8ZGl2XG4gICAgICAgICpuZ0lmPVwib3JkZXJIaXN0b3J5LnBhZ2luYXRpb24udG90YWxQYWdlcyA+IDFcIlxuICAgICAgICBjbGFzcz1cImN4LW9yZGVyLWhpc3RvcnktcGFnaW5hdGlvblwiXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiXG4gICAgICAgICAgJ215QWNjb3VudFYyT3JkZXJIaXN0b3J5Lm9yZGVyTGlzdFBhZ2luYXRpb24nIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAgPGN4LXBhZ2luYXRpb25cbiAgICAgICAgICBbcGFnaW5hdGlvbl09XCJvcmRlckhpc3RvcnkucGFnaW5hdGlvblwiXG4gICAgICAgICAgKHZpZXdQYWdlRXZlbnQpPVwicGFnZUNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgPjwvY3gtcGFnaW5hdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48IS0tIE5PIE9SREVSIENPTlRBSU5FUiAtLT5cbjxuZy10ZW1wbGF0ZSAjbm9PcmRlcj5cbiAgPGRpdiAqbmdJZj1cImlzTG9hZGVkJCB8IGFzeW5jOyBlbHNlIGxvYWRpbmdcIj5cbiAgICA8ZGl2IFthdHRyLmFyaWEtbGFiZWxdPVwiJ29yZGVySGlzdG9yeS5ub3RGb3VuZCcgfCBjeFRyYW5zbGF0ZVwiPlxuICAgICAge3sgJ29yZGVySGlzdG9yeS5ub09yZGVycycgfCBjeFRyYW5zbGF0ZSB9fVxuICAgIDwvZGl2PlxuICAgIDxhXG4gICAgICBbcm91dGVyTGlua109XCJ7IGN4Um91dGU6ICdob21lJyB9IHwgY3hVcmxcIlxuICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiXG4gICAgICBjbGFzcz1cImN4LW5vLW9yZGVyXCJcbiAgICAgID57eyAnb3JkZXJIaXN0b3J5LnN0YXJ0U2hvcHBpbmcnIHwgY3hUcmFuc2xhdGUgfX08L2FcbiAgICA+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPCEtLSBPUkRFUiBISVNUT1JZIERBVEEgU1RJTEwgTE9BRElORyAtLT5cbjxuZy10ZW1wbGF0ZSAjbG9hZGluZz5cbiAgPGRpdiBjbGFzcz1cImN4LXNwaW5uZXJcIj5cbiAgICA8Y3gtc3Bpbm5lcj48L2N4LXNwaW5uZXI+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==