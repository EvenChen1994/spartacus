/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@spartacus/product/bulk-pricing/core";
import * as i3 from "@angular/common";
export class BulkPricingTableComponent {
    constructor(routingService, bulkPricingService) {
        this.routingService = routingService;
        this.bulkPricingService = bulkPricingService;
        this.PRODUCT_KEY = 'productCode';
    }
    ngOnInit() {
        this.priceTiers$ = this.getPrices();
    }
    formatQuantity(tier) {
        let formattedQuantityRange = '';
        if (!tier.maxQuantity) {
            formattedQuantityRange = tier.minQuantity + '+';
        }
        else {
            formattedQuantityRange = tier.minQuantity + ' - ' + tier.maxQuantity;
        }
        return formattedQuantityRange;
    }
    getPrices() {
        return this.routingService.getRouterState().pipe(switchMap((state) => {
            const productCode = state.state.params[this.PRODUCT_KEY];
            return this.bulkPricingService.getBulkPrices(productCode);
        }));
    }
}
BulkPricingTableComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: BulkPricingTableComponent, deps: [{ token: i1.RoutingService }, { token: i2.BulkPricingService }], target: i0.ɵɵFactoryTarget.Component });
BulkPricingTableComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: BulkPricingTableComponent, selector: "cx-bulk-pricing-table", ngImport: i0, template: "<ng-container *ngIf=\"priceTiers$ | async as priceTiers\">\n  <div class=\"cx-bulk-pricing-table-container\" *ngIf=\"priceTiers.length > 0\">\n    <table class=\"table\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">{{ 'bulkPricingTable.quantity' | cxTranslate }}</th>\n          <th scope=\"col\">{{ 'bulkPricingTable.price' | cxTranslate }}</th>\n          <th scope=\"col\">{{ 'bulkPricingTable.discount' | cxTranslate }}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let tier of priceTiers\">\n          <td>{{ formatQuantity(tier) }}</td>\n          <td>{{ tier.formattedValue }}</td>\n          <td>{{ tier.formattedDiscount }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i1.TranslatePipe, name: "cxTranslate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: BulkPricingTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-bulk-pricing-table', template: "<ng-container *ngIf=\"priceTiers$ | async as priceTiers\">\n  <div class=\"cx-bulk-pricing-table-container\" *ngIf=\"priceTiers.length > 0\">\n    <table class=\"table\">\n      <thead class=\"thead-light\">\n        <tr>\n          <th scope=\"col\">{{ 'bulkPricingTable.quantity' | cxTranslate }}</th>\n          <th scope=\"col\">{{ 'bulkPricingTable.price' | cxTranslate }}</th>\n          <th scope=\"col\">{{ 'bulkPricingTable.discount' | cxTranslate }}</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let tier of priceTiers\">\n          <td>{{ formatQuantity(tier) }}</td>\n          <td>{{ tier.formattedValue }}</td>\n          <td>{{ tier.formattedDiscount }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.RoutingService }, { type: i2.BulkPricingService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVsay1wcmljaW5nLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9wcm9kdWN0L2J1bGstcHJpY2luZy9jb21wb25lbnRzL2J1bGstcHJpY2luZy10YWJsZS9idWxrLXByaWNpbmctdGFibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3Byb2R1Y3QvYnVsay1wcmljaW5nL2NvbXBvbmVudHMvYnVsay1wcmljaW5nLXRhYmxlL2J1bGstcHJpY2luZy10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUtsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBTTNDLE1BQU0sT0FBTyx5QkFBeUI7SUFLcEMsWUFDWSxjQUE4QixFQUM5QixrQkFBc0M7UUFEdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFOL0IsZ0JBQVcsR0FBRyxhQUFhLENBQUM7SUFPNUMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQWU7UUFDNUIsSUFBSSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7U0FDakQ7YUFBTTtZQUNMLHNCQUFzQixHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDdEU7UUFDRCxPQUFPLHNCQUFzQixDQUFDO0lBQ2hDLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDOUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbEIsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pELE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7c0hBL0JVLHlCQUF5QjswR0FBekIseUJBQXlCLDZEQ2pCdEMsd3dCQW9CQTsyRkRIYSx5QkFBeUI7a0JBSnJDLFNBQVM7K0JBQ0UsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJ1bGtQcmljaW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvcHJvZHVjdC9idWxrLXByaWNpbmcvY29yZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCdWxrUHJpY2UgfSBmcm9tICdAc3BhcnRhY3VzL3Byb2R1Y3QvYnVsay1wcmljaW5nL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1idWxrLXByaWNpbmctdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vYnVsay1wcmljaW5nLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQnVsa1ByaWNpbmdUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByb3RlY3RlZCByZWFkb25seSBQUk9EVUNUX0tFWSA9ICdwcm9kdWN0Q29kZSc7XG5cbiAgcHJpY2VUaWVycyQ6IE9ic2VydmFibGU8QnVsa1ByaWNlW10gfCB1bmRlZmluZWQ+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGJ1bGtQcmljaW5nU2VydmljZTogQnVsa1ByaWNpbmdTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnByaWNlVGllcnMkID0gdGhpcy5nZXRQcmljZXMoKTtcbiAgfVxuXG4gIGZvcm1hdFF1YW50aXR5KHRpZXI6IEJ1bGtQcmljZSk6IHN0cmluZyB7XG4gICAgbGV0IGZvcm1hdHRlZFF1YW50aXR5UmFuZ2UgPSAnJztcbiAgICBpZiAoIXRpZXIubWF4UXVhbnRpdHkpIHtcbiAgICAgIGZvcm1hdHRlZFF1YW50aXR5UmFuZ2UgPSB0aWVyLm1pblF1YW50aXR5ICsgJysnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtYXR0ZWRRdWFudGl0eVJhbmdlID0gdGllci5taW5RdWFudGl0eSArICcgLSAnICsgdGllci5tYXhRdWFudGl0eTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdHRlZFF1YW50aXR5UmFuZ2U7XG4gIH1cblxuICBnZXRQcmljZXMoKTogT2JzZXJ2YWJsZTxCdWxrUHJpY2VbXSB8IHVuZGVmaW5lZD4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoc3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZHVjdENvZGUgPSBzdGF0ZS5zdGF0ZS5wYXJhbXNbdGhpcy5QUk9EVUNUX0tFWV07XG4gICAgICAgIHJldHVybiB0aGlzLmJ1bGtQcmljaW5nU2VydmljZS5nZXRCdWxrUHJpY2VzKHByb2R1Y3RDb2RlKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cInByaWNlVGllcnMkIHwgYXN5bmMgYXMgcHJpY2VUaWVyc1wiPlxuICA8ZGl2IGNsYXNzPVwiY3gtYnVsay1wcmljaW5nLXRhYmxlLWNvbnRhaW5lclwiICpuZ0lmPVwicHJpY2VUaWVycy5sZW5ndGggPiAwXCI+XG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIj5cbiAgICAgIDx0aGVhZCBjbGFzcz1cInRoZWFkLWxpZ2h0XCI+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj57eyAnYnVsa1ByaWNpbmdUYWJsZS5xdWFudGl0eScgfCBjeFRyYW5zbGF0ZSB9fTwvdGg+XG4gICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+e3sgJ2J1bGtQcmljaW5nVGFibGUucHJpY2UnIHwgY3hUcmFuc2xhdGUgfX08L3RoPlxuICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPnt7ICdidWxrUHJpY2luZ1RhYmxlLmRpc2NvdW50JyB8IGN4VHJhbnNsYXRlIH19PC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgdGllciBvZiBwcmljZVRpZXJzXCI+XG4gICAgICAgICAgPHRkPnt7IGZvcm1hdFF1YW50aXR5KHRpZXIpIH19PC90ZD5cbiAgICAgICAgICA8dGQ+e3sgdGllci5mb3JtYXR0ZWRWYWx1ZSB9fTwvdGQ+XG4gICAgICAgICAgPHRkPnt7IHRpZXIuZm9ybWF0dGVkRGlzY291bnQgfX08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuIl19