/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CheckoutPlaceOrderComponent } from '@spartacus/checkout/base/components';
import { ORDER_TYPE, recurrencePeriod, } from '@spartacus/order/root';
import { BehaviorSubject, merge, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/order/root";
import * as i2 from "@spartacus/core";
import * as i3 from "@angular/forms";
import * as i4 from "@spartacus/storefront";
import * as i5 from "../services/checkout-replenishment-form.service";
import * as i6 from "@angular/router";
import * as i7 from "@angular/common";
export class CheckoutScheduledReplenishmentPlaceOrderComponent extends CheckoutPlaceOrderComponent {
    constructor(orderFacade, routingService, fb, launchDialogService, vcr, checkoutReplenishmentFormService, scheduledReplenishmentOrderFacade) {
        super(orderFacade, routingService, fb, launchDialogService, vcr);
        this.orderFacade = orderFacade;
        this.routingService = routingService;
        this.fb = fb;
        this.launchDialogService = launchDialogService;
        this.vcr = vcr;
        this.checkoutReplenishmentFormService = checkoutReplenishmentFormService;
        this.scheduledReplenishmentOrderFacade = scheduledReplenishmentOrderFacade;
        this.subscriptions = new Subscription();
        this.daysOfWeekNotChecked$ = new BehaviorSubject(false);
    }
    submitForm() {
        if (this.checkoutSubmitForm.valid && !!this.currentOrderType) {
            this.placedOrder = this.launchDialogService.launch("PLACE_ORDER_SPINNER" /* LAUNCH_CALLER.PLACE_ORDER_SPINNER */, this.vcr);
            merge(this.currentOrderType === ORDER_TYPE.PLACE_ORDER
                ? this.orderFacade.placeOrder(this.checkoutSubmitForm.valid)
                : this.scheduledReplenishmentOrderFacade.scheduleReplenishmentOrder(this.scheduleReplenishmentFormData, this.checkoutSubmitForm.valid)).subscribe({
                error: () => {
                    if (this.placedOrder) {
                        this.placedOrder
                            .subscribe((component) => {
                            this.launchDialogService.clear("PLACE_ORDER_SPINNER" /* LAUNCH_CALLER.PLACE_ORDER_SPINNER */);
                            if (component) {
                                component.destroy();
                            }
                        })
                            .unsubscribe();
                    }
                },
                next: () => {
                    this.onSuccess();
                },
            });
        }
        else {
            this.checkoutSubmitForm.markAllAsTouched();
        }
    }
    ngOnInit() {
        this.subscriptions.add(this.checkoutReplenishmentFormService
            .getOrderType()
            .subscribe((orderType) => (this.currentOrderType = orderType)));
        this.subscriptions.add(this.checkoutReplenishmentFormService
            .getScheduleReplenishmentFormData()
            .subscribe((data) => {
            this.scheduleReplenishmentFormData = data;
            this.daysOfWeekNotChecked$.next(data.daysOfWeek?.length === 0 &&
                data.recurrencePeriod === recurrencePeriod.WEEKLY);
        }));
    }
    onSuccess() {
        switch (this.currentOrderType) {
            case ORDER_TYPE.PLACE_ORDER: {
                super.onSuccess();
                break;
            }
            case ORDER_TYPE.SCHEDULE_REPLENISHMENT_ORDER: {
                this.routingService.go({ cxRoute: 'replenishmentConfirmation' });
                break;
            }
        }
        this.checkoutReplenishmentFormService.resetScheduleReplenishmentFormData();
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
        super.ngOnDestroy();
    }
}
CheckoutScheduledReplenishmentPlaceOrderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CheckoutScheduledReplenishmentPlaceOrderComponent, deps: [{ token: i1.OrderFacade }, { token: i2.RoutingService }, { token: i3.UntypedFormBuilder }, { token: i4.LaunchDialogService }, { token: i0.ViewContainerRef }, { token: i5.CheckoutReplenishmentFormService }, { token: i1.ScheduledReplenishmentOrderFacade }], target: i0.ɵɵFactoryTarget.Component });
CheckoutScheduledReplenishmentPlaceOrderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: CheckoutScheduledReplenishmentPlaceOrderComponent, selector: "cx-place-order", usesInheritance: true, ngImport: i0, template: "<form class=\"cx-place-order-form form-check\" [formGroup]=\"checkoutSubmitForm\">\n  <div class=\"form-group\">\n    <label>\n      <input\n        formControlName=\"termsAndConditions\"\n        class=\"scaled-input form-check-input\"\n        type=\"checkbox\"\n      />\n      <span class=\"form-check-label\">\n        {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n        <a\n          [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n          class=\"cx-tc-link\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n        </a>\n      </span>\n    </label>\n  </div>\n\n  <button\n    (click)=\"submitForm()\"\n    class=\"btn btn-primary btn-block\"\n    [disabled]=\"termsAndConditionInvalid || (daysOfWeekNotChecked$ | async)\"\n    [cxAtMessage]=\"'checkoutReview.orderInProcess' | cxTranslate\"\n  >\n    {{ 'checkoutReview.placeOrder' | cxTranslate }}\n  </button>\n</form>\n", dependencies: [{ kind: "directive", type: i4.AtMessageDirective, selector: "[cxAtMessage]", inputs: ["cxAtMessage"] }, { kind: "directive", type: i6.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "pipe", type: i7.AsyncPipe, name: "async" }, { kind: "pipe", type: i2.UrlPipe, name: "cxUrl" }, { kind: "pipe", type: i2.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CheckoutScheduledReplenishmentPlaceOrderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-place-order', changeDetection: ChangeDetectionStrategy.OnPush, template: "<form class=\"cx-place-order-form form-check\" [formGroup]=\"checkoutSubmitForm\">\n  <div class=\"form-group\">\n    <label>\n      <input\n        formControlName=\"termsAndConditions\"\n        class=\"scaled-input form-check-input\"\n        type=\"checkbox\"\n      />\n      <span class=\"form-check-label\">\n        {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n        <a\n          [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n          class=\"cx-tc-link\"\n          target=\"_blank\"\n          rel=\"noopener noreferrer\"\n        >\n          {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n        </a>\n      </span>\n    </label>\n  </div>\n\n  <button\n    (click)=\"submitForm()\"\n    class=\"btn btn-primary btn-block\"\n    [disabled]=\"termsAndConditionInvalid || (daysOfWeekNotChecked$ | async)\"\n    [cxAtMessage]=\"'checkoutReview.orderInProcess' | cxTranslate\"\n  >\n    {{ 'checkoutReview.placeOrder' | cxTranslate }}\n  </button>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.OrderFacade }, { type: i2.RoutingService }, { type: i3.UntypedFormBuilder }, { type: i4.LaunchDialogService }, { type: i0.ViewContainerRef }, { type: i5.CheckoutReplenishmentFormService }, { type: i1.ScheduledReplenishmentOrderFacade }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGxhY2Utb3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL2NoZWNrb3V0L3NjaGVkdWxlZC1yZXBsZW5pc2htZW50L2NvbXBvbmVudHMvY2hlY2tvdXQtcGxhY2Utb3JkZXIvY2hlY2tvdXQtcGxhY2Utb3JkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL2NoZWNrb3V0L3NjaGVkdWxlZC1yZXBsZW5pc2htZW50L2NvbXBvbmVudHMvY2hlY2tvdXQtcGxhY2Utb3JkZXIvY2hlY2tvdXQtcGxhY2Utb3JkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUlWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRWxGLE9BQU8sRUFFTCxVQUFVLEVBQ1YsZ0JBQWdCLEdBR2pCLE1BQU0sdUJBQXVCLENBQUM7QUFFL0IsT0FBTyxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7QUFRNUQsTUFBTSxPQUFPLGlEQUNYLFNBQVEsMkJBQTJCO0lBVW5DLFlBQ1ksV0FBd0IsRUFDeEIsY0FBOEIsRUFDOUIsRUFBc0IsRUFDdEIsbUJBQXdDLEVBQ3hDLEdBQXFCLEVBQ3JCLGdDQUFrRSxFQUNsRSxpQ0FBb0U7UUFFOUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUUsRUFBRSxFQUFFLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBUnZELGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixPQUFFLEdBQUYsRUFBRSxDQUFvQjtRQUN0Qix3QkFB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QUNQO1NBQ0Y7UUFDRCxJQUFJLENBQUMsZ0NBQWdDLENBQUMsa0NBQWtDLEVBQUUsQ0FBQztJQUM3RSxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7OzhJQW5HVSxpREFBaUQ7a0lBQWpELGlEQUFpRCw2RUNoQzlELDgrQkErQkE7MkZEQ2EsaURBQWlEO2tCQUw3RCxTQUFTOytCQUNFLGdCQUFnQixtQkFFVCx1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW50eXBlZEZvcm1CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQbGFjZU9yZGVyQ29tcG9uZW50IH0gZnJvbSAnQHNwYXJ0YWN1cy9jaGVja291dC9iYXNlL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgT3JkZXJGYWNhZGUsXG4gIE9SREVSX1RZUEUsXG4gIHJlY3VycmVuY2VQZXJpb2QsXG4gIFNjaGVkdWxlZFJlcGxlbmlzaG1lbnRPcmRlckZhY2FkZSxcbiAgU2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9vcmRlci9yb290JztcbmltcG9ydCB7IExhdW5jaERpYWxvZ1NlcnZpY2UsIExBVU5DSF9DQUxMRVIgfSBmcm9tICdAc3BhcnRhY3VzL3N0b3JlZnJvbnQnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dFJlcGxlbmlzaG1lbnRGb3JtU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LXJlcGxlbmlzaG1lbnQtZm9ybS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcGxhY2Utb3JkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vY2hlY2tvdXQtcGxhY2Utb3JkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRTY2hlZHVsZWRSZXBsZW5pc2htZW50UGxhY2VPcmRlckNvbXBvbmVudFxuICBleHRlbmRzIENoZWNrb3V0UGxhY2VPcmRlckNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95XG57XG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb25zID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGN1cnJlbnRPcmRlclR5cGU6IE9SREVSX1RZUEU7XG4gIHNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhOiBTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtO1xuXG4gIGRheXNPZldlZWtOb3RDaGVja2VkJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvcmRlckZhY2FkZTogT3JkZXJGYWNhZGUsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmI6IFVudHlwZWRGb3JtQnVpbGRlcixcbiAgICBwcm90ZWN0ZWQgbGF1bmNoRGlhbG9nU2VydmljZTogTGF1bmNoRGlhbG9nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHByb3RlY3RlZCBjaGVja291dFJlcGxlbmlzaG1lbnRGb3JtU2VydmljZTogQ2hlY2tvdXRSZXBsZW5pc2htZW50Rm9ybVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNjaGVkdWxlZFJlcGxlbmlzaG1lbnRPcmRlckZhY2FkZTogU2NoZWR1bGVkUmVwbGVuaXNobWVudE9yZGVyRmFjYWRlXG4gICkge1xuICAgIHN1cGVyKG9yZGVyRmFjYWRlLCByb3V0aW5nU2VydmljZSwgZmIsIGxhdW5jaERpYWxvZ1NlcnZpY2UsIHZjcik7XG4gIH1cblxuICBzdWJtaXRGb3JtKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNoZWNrb3V0U3VibWl0Rm9ybS52YWxpZCAmJiAhIXRoaXMuY3VycmVudE9yZGVyVHlwZSkge1xuICAgICAgdGhpcy5wbGFjZWRPcmRlciA9IHRoaXMubGF1bmNoRGlhbG9nU2VydmljZS5sYXVuY2goXG4gICAgICAgIExBVU5DSF9DQUxMRVIuUExBQ0VfT1JERVJfU1BJTk5FUixcbiAgICAgICAgdGhpcy52Y3JcbiAgICAgICk7XG4gICAgICBtZXJnZShcbiAgICAgICAgdGhpcy5jdXJyZW50T3JkZXJUeXBlID09PSBPUkRFUl9UWVBFLlBMQUNFX09SREVSXG4gICAgICAgICAgPyB0aGlzLm9yZGVyRmFjYWRlLnBsYWNlT3JkZXIodGhpcy5jaGVja291dFN1Ym1pdEZvcm0udmFsaWQpXG4gICAgICAgICAgOiB0aGlzLnNjaGVkdWxlZFJlcGxlbmlzaG1lbnRPcmRlckZhY2FkZS5zY2hlZHVsZVJlcGxlbmlzaG1lbnRPcmRlcihcbiAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtRGF0YSxcbiAgICAgICAgICAgICAgdGhpcy5jaGVja291dFN1Ym1pdEZvcm0udmFsaWRcbiAgICAgICAgICAgIClcbiAgICAgICkuc3Vic2NyaWJlKHtcbiAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5wbGFjZWRPcmRlcikge1xuICAgICAgICAgICAgdGhpcy5wbGFjZWRPcmRlclxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxhdW5jaERpYWxvZ1NlcnZpY2UuY2xlYXIoXG4gICAgICAgICAgICAgICAgICBMQVVOQ0hfQ0FMTEVSLlBMQUNFX09SREVSX1NQSU5ORVJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQ6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uU3VjY2VzcygpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tvdXRTdWJtaXRGb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKFxuICAgICAgdGhpcy5jaGVja291dFJlcGxlbmlzaG1lbnRGb3JtU2VydmljZVxuICAgICAgICAuZ2V0T3JkZXJUeXBlKClcbiAgICAgICAgLnN1YnNjcmliZSgob3JkZXJUeXBlKSA9PiAodGhpcy5jdXJyZW50T3JkZXJUeXBlID0gb3JkZXJUeXBlKSlcbiAgICApO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcbiAgICAgIHRoaXMuY2hlY2tvdXRSZXBsZW5pc2htZW50Rm9ybVNlcnZpY2VcbiAgICAgICAgLmdldFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm1EYXRhKClcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0YSkgPT4ge1xuICAgICAgICAgIHRoaXMuc2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEgPSBkYXRhO1xuXG4gICAgICAgICAgdGhpcy5kYXlzT2ZXZWVrTm90Q2hlY2tlZCQubmV4dChcbiAgICAgICAgICAgIGRhdGEuZGF5c09mV2Vlaz8ubGVuZ3RoID09PSAwICYmXG4gICAgICAgICAgICAgIGRhdGEucmVjdXJyZW5jZVBlcmlvZCA9PT0gcmVjdXJyZW5jZVBlcmlvZC5XRUVLTFlcbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBvblN1Y2Nlc3MoKTogdm9pZCB7XG4gICAgc3dpdGNoICh0aGlzLmN1cnJlbnRPcmRlclR5cGUpIHtcbiAgICAgIGNhc2UgT1JERVJfVFlQRS5QTEFDRV9PUkRFUjoge1xuICAgICAgICBzdXBlci5vblN1Y2Nlc3MoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGNhc2UgT1JERVJfVFlQRS5TQ0hFRFVMRV9SRVBMRU5JU0hNRU5UX09SREVSOiB7XG4gICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAncmVwbGVuaXNobWVudENvbmZpcm1hdGlvbicgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNoZWNrb3V0UmVwbGVuaXNobWVudEZvcm1TZXJ2aWNlLnJlc2V0U2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybURhdGEoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy51bnN1YnNjcmliZSgpO1xuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gIH1cbn1cbiIsIjxmb3JtIGNsYXNzPVwiY3gtcGxhY2Utb3JkZXItZm9ybSBmb3JtLWNoZWNrXCIgW2Zvcm1Hcm91cF09XCJjaGVja291dFN1Ym1pdEZvcm1cIj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICA8bGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGVybXNBbmRDb25kaXRpb25zXCJcbiAgICAgICAgY2xhc3M9XCJzY2FsZWQtaW5wdXQgZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgIHt7ICdjaGVja291dFJldmlldy5jb25maXJtVGhhdFJlYWQnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgPGFcbiAgICAgICAgICBbcm91dGVyTGlua109XCJ7IGN4Um91dGU6ICd0ZXJtc0FuZENvbmRpdGlvbnMnIH0gfCBjeFVybFwiXG4gICAgICAgICAgY2xhc3M9XCJjeC10Yy1saW5rXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgJ2NoZWNrb3V0UmV2aWV3LnRlcm1zQW5kQ29uZGl0aW9ucycgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2E+XG4gICAgICA8L3NwYW4+XG4gICAgPC9sYWJlbD5cbiAgPC9kaXY+XG5cbiAgPGJ1dHRvblxuICAgIChjbGljayk9XCJzdWJtaXRGb3JtKClcIlxuICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiXG4gICAgW2Rpc2FibGVkXT1cInRlcm1zQW5kQ29uZGl0aW9uSW52YWxpZCB8fCAoZGF5c09mV2Vla05vdENoZWNrZWQkIHwgYXN5bmMpXCJcbiAgICBbY3hBdE1lc3NhZ2VdPVwiJ2NoZWNrb3V0UmV2aWV3Lm9yZGVySW5Qcm9jZXNzJyB8IGN4VHJhbnNsYXRlXCJcbiAgPlxuICAgIHt7ICdjaGVja291dFJldmlldy5wbGFjZU9yZGVyJyB8IGN4VHJhbnNsYXRlIH19XG4gIDwvYnV0dG9uPlxuPC9mb3JtPlxuIl19