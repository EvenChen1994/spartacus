/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component, ViewChild, } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/order/root";
import * as i2 from "@spartacus/storefront";
import * as i3 from "@angular/common";
import * as i4 from "@angular/router";
import * as i5 from "@spartacus/core";
export class ReplenishmentOrderCancellationComponent {
    constructor(replenishmentOrderHistoryFacade, vcr, launchDialogService) {
        this.replenishmentOrderHistoryFacade = replenishmentOrderHistoryFacade;
        this.vcr = vcr;
        this.launchDialogService = launchDialogService;
        this.subscription = new Subscription();
        this.replenishmentOrder$ = this.replenishmentOrderHistoryFacade.getReplenishmentOrderDetails();
    }
    openDialog() {
        const dialog = this.launchDialogService.openDialog("REPLENISHMENT_ORDER" /* LAUNCH_CALLER.REPLENISHMENT_ORDER */, this.element, this.vcr);
        if (dialog) {
            this.subscription.add(dialog.pipe(take(1)).subscribe());
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.replenishmentOrderHistoryFacade.clearReplenishmentOrderDetails();
    }
}
ReplenishmentOrderCancellationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ReplenishmentOrderCancellationComponent, deps: [{ token: i1.ReplenishmentOrderHistoryFacade }, { token: i0.ViewContainerRef }, { token: i2.LaunchDialogService }], target: i0.ɵɵFactoryTarget.Component });
ReplenishmentOrderCancellationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ReplenishmentOrderCancellationComponent, selector: "cx-replenishment-order-cancellation", viewQueries: [{ propertyName: "element", first: true, predicate: ["element"], descendants: true }], ngImport: i0, template: "<div class=\"cx-cancel-replenishment-btns row\">\n  <div class=\"col-xs-12 col-md-5 col-lg-4\">\n    <a\n      class=\"btn btn-block btn-secondary\"\n      [routerLink]=\"\n        {\n          cxRoute: 'replenishmentOrders'\n        } | cxUrl\n      \"\n    >\n      {{ 'common.back' | cxTranslate }}\n    </a>\n  </div>\n  <div\n    *ngIf=\"(replenishmentOrder$ | async)?.active\"\n    class=\"col-xs-12 col-md-5 col-lg-4\"\n  >\n    <button #element class=\"btn btn-block btn-secondary\" (click)=\"openDialog()\">\n      {{ 'orderDetails.cancelReplenishment.title' | cxTranslate }}\n    </button>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i4.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i5.TranslatePipe, name: "cxTranslate" }, { kind: "pipe", type: i5.UrlPipe, name: "cxUrl" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ReplenishmentOrderCancellationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-replenishment-order-cancellation', template: "<div class=\"cx-cancel-replenishment-btns row\">\n  <div class=\"col-xs-12 col-md-5 col-lg-4\">\n    <a\n      class=\"btn btn-block btn-secondary\"\n      [routerLink]=\"\n        {\n          cxRoute: 'replenishmentOrders'\n        } | cxUrl\n      \"\n    >\n      {{ 'common.back' | cxTranslate }}\n    </a>\n  </div>\n  <div\n    *ngIf=\"(replenishmentOrder$ | async)?.active\"\n    class=\"col-xs-12 col-md-5 col-lg-4\"\n  >\n    <button #element class=\"btn btn-block btn-secondary\" (click)=\"openDialog()\">\n      {{ 'orderDetails.cancelReplenishment.title' | cxTranslate }}\n    </button>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ReplenishmentOrderHistoryFacade }, { type: i0.ViewContainerRef }, { type: i2.LaunchDialogService }]; }, propDecorators: { element: [{
                type: ViewChild,
                args: ['element']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGVuaXNobWVudC1vcmRlci1jYW5jZWxsYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZGVyL2NvbXBvbmVudHMvcmVwbGVuaXNobWVudC1vcmRlci1kZXRhaWxzL3JlcGxlbmlzaG1lbnQtb3JkZXItY2FuY2VsbGF0aW9uL3JlcGxlbmlzaG1lbnQtb3JkZXItY2FuY2VsbGF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmRlci9jb21wb25lbnRzL3JlcGxlbmlzaG1lbnQtb3JkZXItZGV0YWlscy9yZXBsZW5pc2htZW50LW9yZGVyLWNhbmNlbGxhdGlvbi9yZXBsZW5pc2htZW50LW9yZGVyLWNhbmNlbGxhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLFNBQVMsRUFHVCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7QUFNdEMsTUFBTSxPQUFPLHVDQUF1QztJQVFsRCxZQUNZLCtCQUFnRSxFQUNoRSxHQUFxQixFQUNyQixtQkFBd0M7UUFGeEMsb0NBQStCLEdBQS9CLCtCQUErQixDQUFpQztRQUNoRSxRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUNyQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBUjVDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxQyx3QkFBbUIsR0FDakIsSUFBSSxDQUFDLCtCQUErQixDQUFDLDRCQUE0QixFQUFFLENBQUM7SUFNbkUsQ0FBQztJQUVKLFVBQVU7UUFDUixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxnRUFFaEQsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsR0FBRyxDQUNULENBQUM7UUFFRixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsK0JBQStCLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUN4RSxDQUFDOztvSUE3QlUsdUNBQXVDO3dIQUF2Qyx1Q0FBdUMsK0tDekJwRCw2bUJBc0JBOzJGREdhLHVDQUF1QztrQkFKbkQsU0FBUzsrQkFDRSxxQ0FBcUM7dUxBSXpCLE9BQU87c0JBQTVCLFNBQVM7dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgUmVwbGVuaXNobWVudE9yZGVyLFxuICBSZXBsZW5pc2htZW50T3JkZXJIaXN0b3J5RmFjYWRlLFxufSBmcm9tICdAc3BhcnRhY3VzL29yZGVyL3Jvb3QnO1xuaW1wb3J0IHsgTGF1bmNoRGlhbG9nU2VydmljZSwgTEFVTkNIX0NBTExFUiB9IGZyb20gJ0BzcGFydGFjdXMvc3RvcmVmcm9udCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJlcGxlbmlzaG1lbnQtb3JkZXItY2FuY2VsbGF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlcGxlbmlzaG1lbnQtb3JkZXItY2FuY2VsbGF0aW9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUmVwbGVuaXNobWVudE9yZGVyQ2FuY2VsbGF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnZWxlbWVudCcpIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcmVwbGVuaXNobWVudE9yZGVyJDogT2JzZXJ2YWJsZTxSZXBsZW5pc2htZW50T3JkZXI+ID1cbiAgICB0aGlzLnJlcGxlbmlzaG1lbnRPcmRlckhpc3RvcnlGYWNhZGUuZ2V0UmVwbGVuaXNobWVudE9yZGVyRGV0YWlscygpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByZXBsZW5pc2htZW50T3JkZXJIaXN0b3J5RmFjYWRlOiBSZXBsZW5pc2htZW50T3JkZXJIaXN0b3J5RmFjYWRlLFxuICAgIHByb3RlY3RlZCB2Y3I6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJvdGVjdGVkIGxhdW5jaERpYWxvZ1NlcnZpY2U6IExhdW5jaERpYWxvZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLm9wZW5EaWFsb2coXG4gICAgICBMQVVOQ0hfQ0FMTEVSLlJFUExFTklTSE1FTlRfT1JERVIsXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLnZjclxuICAgICk7XG5cbiAgICBpZiAoZGlhbG9nKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoZGlhbG9nLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5yZXBsZW5pc2htZW50T3JkZXJIaXN0b3J5RmFjYWRlLmNsZWFyUmVwbGVuaXNobWVudE9yZGVyRGV0YWlscygpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiY3gtY2FuY2VsLXJlcGxlbmlzaG1lbnQtYnRucyByb3dcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC14cy0xMiBjb2wtbWQtNSBjb2wtbGctNFwiPlxuICAgIDxhXG4gICAgICBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXNlY29uZGFyeVwiXG4gICAgICBbcm91dGVyTGlua109XCJcbiAgICAgICAge1xuICAgICAgICAgIGN4Um91dGU6ICdyZXBsZW5pc2htZW50T3JkZXJzJ1xuICAgICAgICB9IHwgY3hVcmxcbiAgICAgIFwiXG4gICAgPlxuICAgICAge3sgJ2NvbW1vbi5iYWNrJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgPC9hPlxuICA8L2Rpdj5cbiAgPGRpdlxuICAgICpuZ0lmPVwiKHJlcGxlbmlzaG1lbnRPcmRlciQgfCBhc3luYyk/LmFjdGl2ZVwiXG4gICAgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTUgY29sLWxnLTRcIlxuICA+XG4gICAgPGJ1dHRvbiAjZWxlbWVudCBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXNlY29uZGFyeVwiIChjbGljayk9XCJvcGVuRGlhbG9nKClcIj5cbiAgICAgIHt7ICdvcmRlckRldGFpbHMuY2FuY2VsUmVwbGVuaXNobWVudC50aXRsZScgfCBjeFRyYW5zbGF0ZSB9fVxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19