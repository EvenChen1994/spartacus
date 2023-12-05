/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/cart/base/root";
import * as i2 from "@angular/common";
import * as i3 from "@spartacus/storefront";
import * as i4 from "@spartacus/core";
export class CheckoutReviewOverviewComponent {
    constructor(activeCartFacade) {
        this.activeCartFacade = activeCartFacade;
    }
    get cart$() {
        return this.activeCartFacade.getActive();
    }
}
CheckoutReviewOverviewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CheckoutReviewOverviewComponent, deps: [{ token: i1.ActiveCartFacade }], target: i0.ɵɵFactoryTarget.Component });
CheckoutReviewOverviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: CheckoutReviewOverviewComponent, selector: "cx-checkout-review-overview", ngImport: i0, template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n    {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalUnitCount } }}:\n    {{ cart.totalPrice?.formattedValue }}\n  </div>\n  <cx-promotions\n    [promotions]=\"\n      (cart.appliedOrderPromotions || []).concat(\n        cart.potentialOrderPromotions || []\n      )\n    \"\n  ></cx-promotions>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.PromotionsComponent, selector: "cx-promotions", inputs: ["promotions"] }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i4.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CheckoutReviewOverviewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-checkout-review-overview', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <div class=\"cx-review-cart-total d-none d-lg-block d-xl-block\">\n    {{ 'cartItems.cartTotal' | cxTranslate: { count: cart.totalUnitCount } }}:\n    {{ cart.totalPrice?.formattedValue }}\n  </div>\n  <cx-promotions\n    [promotions]=\"\n      (cart.appliedOrderPromotions || []).concat(\n        cart.potentialOrderPromotions || []\n      )\n    \"\n  ></cx-promotions>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ActiveCartFacade }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcmV2aWV3LW92ZXJ2aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9jaGVja291dC9iYXNlL2NvbXBvbmVudHMvY2hlY2tvdXQtcmV2aWV3L2NoZWNrb3V0LXJldmlldy1vdmVydmlldy9jaGVja291dC1yZXZpZXctb3ZlcnZpZXcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL2NoZWNrb3V0L2Jhc2UvY29tcG9uZW50cy9jaGVja291dC1yZXZpZXcvY2hlY2tvdXQtcmV2aWV3LW92ZXJ2aWV3L2NoZWNrb3V0LXJldmlldy1vdmVydmlldy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0FBU25FLE1BQU0sT0FBTywrQkFBK0I7SUFDMUMsWUFBc0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRTVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7OzRIQUxVLCtCQUErQjtnSEFBL0IsK0JBQStCLG1FQ2Y1QywwYkFhQTsyRkRFYSwrQkFBK0I7a0JBTDNDLFNBQVM7K0JBQ0UsNkJBQTZCLG1CQUV0Qix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydEZhY2FkZSwgQ2FydCB9IGZyb20gJ0BzcGFydGFjdXMvY2FydC9iYXNlL3Jvb3QnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jaGVja291dC1yZXZpZXctb3ZlcnZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tvdXQtcmV2aWV3LW92ZXJ2aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0UmV2aWV3T3ZlcnZpZXdDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWN0aXZlQ2FydEZhY2FkZTogQWN0aXZlQ2FydEZhY2FkZSkge31cblxuICBnZXQgY2FydCQoKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydEZhY2FkZS5nZXRBY3RpdmUoKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImNhcnQkIHwgYXN5bmMgYXMgY2FydFwiPlxuICA8ZGl2IGNsYXNzPVwiY3gtcmV2aWV3LWNhcnQtdG90YWwgZC1ub25lIGQtbGctYmxvY2sgZC14bC1ibG9ja1wiPlxuICAgIHt7ICdjYXJ0SXRlbXMuY2FydFRvdGFsJyB8IGN4VHJhbnNsYXRlOiB7IGNvdW50OiBjYXJ0LnRvdGFsVW5pdENvdW50IH0gfX06XG4gICAge3sgY2FydC50b3RhbFByaWNlPy5mb3JtYXR0ZWRWYWx1ZSB9fVxuICA8L2Rpdj5cbiAgPGN4LXByb21vdGlvbnNcbiAgICBbcHJvbW90aW9uc109XCJcbiAgICAgIChjYXJ0LmFwcGxpZWRPcmRlclByb21vdGlvbnMgfHwgW10pLmNvbmNhdChcbiAgICAgICAgY2FydC5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMgfHwgW11cbiAgICAgIClcbiAgICBcIlxuICA+PC9jeC1wcm9tb3Rpb25zPlxuPC9uZy1jb250YWluZXI+XG4iXX0=