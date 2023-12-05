/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ICON_TYPE } from '@spartacus/storefront';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/router";
import * as i5 from "@spartacus/storefront";
export class StoreFinderSearchComponent {
    constructor(routingService) {
        this.routingService = routingService;
        this.searchBox = new UntypedFormControl();
        this.iconTypes = ICON_TYPE;
    }
    findStores(address) {
        this.routingService.go(['store-finder/find'], {
            queryParams: {
                query: address,
            },
        });
    }
    viewStoresWithMyLoc() {
        this.routingService.go(['store-finder/find'], {
            queryParams: {
                useMyLocation: true,
            },
        });
    }
    onKey(event) {
        if (this.searchBox.value &&
            this.searchBox.value.length &&
            event.key === 'Enter') {
            this.findStores(this.searchBox.value);
        }
    }
}
StoreFinderSearchComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: StoreFinderSearchComponent, deps: [{ token: i1.RoutingService }], target: i0.ɵɵFactoryTarget.Component });
StoreFinderSearchComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: StoreFinderSearchComponent, selector: "cx-store-finder-search", ngImport: i0, template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"form-group search-wrapper\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          [attr.aria-label]=\"'storeFinder.searchBoxLabel' | cxTranslate\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n        />\n        <cx-icon\n          [attr.tabindex]=\"queryInput.value?.length ? 0 : -1\"\n          [type]=\"iconTypes.SEARCH\"\n          role=\"button\"\n          [attr.aria-label]=\"'storeFinder.searchNearestStores' | cxTranslate\"\n          class=\"search\"\n          (keyup)=\"onKey($event)\"\n          [routerLink]=\"['/store-finder/find']\"\n          [queryParams]=\"{ query: queryInput.value }\"\n          [ngClass]=\"{\n            'disabled-action': !(queryInput.value && queryInput.value.length)\n          }\"\n        ></cx-icon>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"row cx-search-links mb-3\">\n        <div class=\"col-6\">\n          <button\n            (click)=\"viewStoresWithMyLoc()\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.useMyLocation' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-6\">\n          <button\n            [routerLink]=\"['/store-finder/view-all']\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.viewAllStores' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i4.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "component", type: i5.IconComponent, selector: "cx-icon,[cxIcon]", inputs: ["cxIcon", "type"] }, { kind: "pipe", type: i1.TranslatePipe, name: "cxTranslate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: StoreFinderSearchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-store-finder-search', template: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"form-group search-wrapper\">\n        <input\n          #queryInput\n          [formControl]=\"searchBox\"\n          (keyup)=\"onKey($event)\"\n          type=\"text\"\n          class=\"form-control\"\n          [attr.aria-label]=\"'storeFinder.searchBoxLabel' | cxTranslate\"\n          placeholder=\"{{ 'storeFinder.searchBox' | cxTranslate }}\"\n        />\n        <cx-icon\n          [attr.tabindex]=\"queryInput.value?.length ? 0 : -1\"\n          [type]=\"iconTypes.SEARCH\"\n          role=\"button\"\n          [attr.aria-label]=\"'storeFinder.searchNearestStores' | cxTranslate\"\n          class=\"search\"\n          (keyup)=\"onKey($event)\"\n          [routerLink]=\"['/store-finder/find']\"\n          [queryParams]=\"{ query: queryInput.value }\"\n          [ngClass]=\"{\n            'disabled-action': !(queryInput.value && queryInput.value.length)\n          }\"\n        ></cx-icon>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-6\">\n      <div class=\"row cx-search-links mb-3\">\n        <div class=\"col-6\">\n          <button\n            (click)=\"viewStoresWithMyLoc()\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.useMyLocation' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-6\">\n          <button\n            [routerLink]=\"['/store-finder/view-all']\"\n            class=\"btn btn-primary btn-block\"\n          >\n            {{ 'storeFinder.viewAllStores' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.RoutingService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvc3RvcmVmaW5kZXIvY29tcG9uZW50cy9zdG9yZS1maW5kZXItc2VhcmNoL3N0b3JlLWZpbmRlci1zZWFyY2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3N0b3JlZmluZGVyL2NvbXBvbmVudHMvc3RvcmUtZmluZGVyLXNlYXJjaC9zdG9yZS1maW5kZXItc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7OztBQU1sRCxNQUFNLE9BQU8sMEJBQTBCO0lBSXJDLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUhsRCxjQUFTLEdBQXVCLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUN6RCxjQUFTLEdBQUcsU0FBUyxDQUFDO0lBRStCLENBQUM7SUFFdEQsVUFBVSxDQUFDLE9BQWU7UUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1lBQzVDLFdBQVcsRUFBRTtnQkFDWCxLQUFLLEVBQUUsT0FBTzthQUNmO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDNUMsV0FBVyxFQUFFO2dCQUNYLGFBQWEsRUFBRSxJQUFJO2FBQ3BCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFVO1FBQ2QsSUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUMzQixLQUFLLENBQUMsR0FBRyxLQUFLLE9BQU8sRUFDckI7WUFDQSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDOzt1SEE5QlUsMEJBQTBCOzJHQUExQiwwQkFBMEIsOERDZnZDLG1xREFrREE7MkZEbkNhLDBCQUEwQjtrQkFKdEMsU0FBUzsrQkFDRSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJ0BzcGFydGFjdXMvc3RvcmVmcm9udCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0b3JlLWZpbmRlci1zZWFyY2gnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyU2VhcmNoQ29tcG9uZW50IHtcbiAgc2VhcmNoQm94OiBVbnR5cGVkRm9ybUNvbnRyb2wgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCk7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSkge31cblxuICBmaW5kU3RvcmVzKGFkZHJlc3M6IHN0cmluZykge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oWydzdG9yZS1maW5kZXIvZmluZCddLCB7XG4gICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICBxdWVyeTogYWRkcmVzcyxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICB2aWV3U3RvcmVzV2l0aE15TG9jKCkge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oWydzdG9yZS1maW5kZXIvZmluZCddLCB7XG4gICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICB1c2VNeUxvY2F0aW9uOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uS2V5KGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnNlYXJjaEJveC52YWx1ZSAmJlxuICAgICAgdGhpcy5zZWFyY2hCb3gudmFsdWUubGVuZ3RoICYmXG4gICAgICBldmVudC5rZXkgPT09ICdFbnRlcidcbiAgICApIHtcbiAgICAgIHRoaXMuZmluZFN0b3Jlcyh0aGlzLnNlYXJjaEJveC52YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEyIGNvbC1sZy02XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzZWFyY2gtd3JhcHBlclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAjcXVlcnlJbnB1dFxuICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzZWFyY2hCb3hcIlxuICAgICAgICAgIChrZXl1cCk9XCJvbktleSgkZXZlbnQpXCJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3N0b3JlRmluZGVyLnNlYXJjaEJveExhYmVsJyB8IGN4VHJhbnNsYXRlXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ICdzdG9yZUZpbmRlci5zZWFyY2hCb3gnIHwgY3hUcmFuc2xhdGUgfX1cIlxuICAgICAgICAvPlxuICAgICAgICA8Y3gtaWNvblxuICAgICAgICAgIFthdHRyLnRhYmluZGV4XT1cInF1ZXJ5SW5wdXQudmFsdWU/Lmxlbmd0aCA/IDAgOiAtMVwiXG4gICAgICAgICAgW3R5cGVdPVwiaWNvblR5cGVzLlNFQVJDSFwiXG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInc3RvcmVGaW5kZXIuc2VhcmNoTmVhcmVzdFN0b3JlcycgfCBjeFRyYW5zbGF0ZVwiXG4gICAgICAgICAgY2xhc3M9XCJzZWFyY2hcIlxuICAgICAgICAgIChrZXl1cCk9XCJvbktleSgkZXZlbnQpXCJcbiAgICAgICAgICBbcm91dGVyTGlua109XCJbJy9zdG9yZS1maW5kZXIvZmluZCddXCJcbiAgICAgICAgICBbcXVlcnlQYXJhbXNdPVwieyBxdWVyeTogcXVlcnlJbnB1dC52YWx1ZSB9XCJcbiAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAnZGlzYWJsZWQtYWN0aW9uJzogIShxdWVyeUlucHV0LnZhbHVlICYmIHF1ZXJ5SW5wdXQudmFsdWUubGVuZ3RoKVxuICAgICAgICAgIH1cIlxuICAgICAgICA+PC9jeC1pY29uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMiBjb2wtbGctNlwiPlxuICAgICAgPGRpdiBjbGFzcz1cInJvdyBjeC1zZWFyY2gtbGlua3MgbWItM1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTZcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAoY2xpY2spPVwidmlld1N0b3Jlc1dpdGhNeUxvYygpXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgJ3N0b3JlRmluZGVyLnVzZU15TG9jYXRpb24nIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtNlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cIlsnL3N0b3JlLWZpbmRlci92aWV3LWFsbCddXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgJ3N0b3JlRmluZGVyLnZpZXdBbGxTdG9yZXMnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==