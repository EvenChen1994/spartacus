/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component, Input } from '@angular/core';
import { Validators, } from '@angular/forms';
import { CustomFormValidators } from '@spartacus/storefront';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/user/profile/root";
import * as i2 from "@spartacus/core";
import * as i3 from "@angular/forms";
import * as i4 from "@spartacus/storefront";
export class OrderGuestRegisterFormComponent {
    constructor(userRegisterFacade, routingService, authService, fb) {
        this.userRegisterFacade = userRegisterFacade;
        this.routingService = routingService;
        this.authService = authService;
        this.fb = fb;
        this.guestRegisterForm = this.fb.group({
            password: [
                '',
                [Validators.required, CustomFormValidators.passwordValidator],
            ],
            passwordconf: ['', Validators.required],
        }, {
            validators: CustomFormValidators.passwordsMustMatch('password', 'passwordconf'),
        });
    }
    submit() {
        if (this.guestRegisterForm.valid) {
            this.userRegisterFacade.registerGuest(this.guid, this.guestRegisterForm.value.password);
            if (!this.subscription) {
                this.subscription = this.authService
                    .isUserLoggedIn()
                    .subscribe((isLoggedIn) => {
                    if (isLoggedIn) {
                        this.routingService.go({ cxRoute: 'home' });
                    }
                });
            }
        }
        else {
            this.guestRegisterForm.markAllAsTouched();
        }
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
OrderGuestRegisterFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: OrderGuestRegisterFormComponent, deps: [{ token: i1.UserRegisterFacade }, { token: i2.RoutingService }, { token: i2.AuthService }, { token: i3.UntypedFormBuilder }], target: i0.ɵɵFactoryTarget.Component });
OrderGuestRegisterFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: OrderGuestRegisterFormComponent, selector: "cx-guest-register-form", inputs: { guid: "guid", email: "email" }, ngImport: i0, template: "<div class=\"register-guest\">\n  <div class=\"col-md-6 col-lg-4\">\n    <h3>{{ 'checkoutOrderConfirmation.createAccount' | cxTranslate }}</h3>\n    <p>\n      {{\n        'checkoutOrderConfirmation.createAccountForNext'\n          | cxTranslate: { email: email }\n      }}\n    </p>\n\n    <form (ngSubmit)=\"submit()\" [formGroup]=\"guestRegisterForm\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.password.label' | cxTranslate\n          }}</span>\n          <input\n            required=\"true\"\n            class=\"form-control\"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n            formControlName=\"password\"\n            [attr.aria-label]=\"'register.password.placeholder' | cxTranslate\"\n            cxPasswordVisibilitySwitch\n          />\n          <cx-form-errors\n            [control]=\"guestRegisterForm.get('password')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.confirmPassword.label' | cxTranslate\n          }}</span>\n          <input\n            required=\"true\"\n            class=\"form-control\"\n            type=\"password\"\n            name=\"passwordconf\"\n            placeholder=\"{{\n              'register.confirmPassword.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"passwordconf\"\n            [attr.aria-label]=\"\n              'register.confirmPassword.placeholder' | cxTranslate\n            \"\n            cxPasswordVisibilitySwitch\n          />\n          <cx-form-errors\n            [control]=\"guestRegisterForm.get('passwordconf')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-block btn-primary\">\n        {{ 'common.submit' | cxTranslate }}\n      </button>\n    </form>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i4.FormErrorsComponent, selector: "cx-form-errors", inputs: ["prefix", "translationParams", "control"] }, { kind: "directive", type: i4.PasswordVisibilityToggleDirective, selector: "[cxPasswordVisibilitySwitch][type=\"password\"]" }, { kind: "pipe", type: i2.TranslatePipe, name: "cxTranslate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: OrderGuestRegisterFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-guest-register-form', template: "<div class=\"register-guest\">\n  <div class=\"col-md-6 col-lg-4\">\n    <h3>{{ 'checkoutOrderConfirmation.createAccount' | cxTranslate }}</h3>\n    <p>\n      {{\n        'checkoutOrderConfirmation.createAccountForNext'\n          | cxTranslate: { email: email }\n      }}\n    </p>\n\n    <form (ngSubmit)=\"submit()\" [formGroup]=\"guestRegisterForm\">\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.password.label' | cxTranslate\n          }}</span>\n          <input\n            required=\"true\"\n            class=\"form-control\"\n            type=\"password\"\n            name=\"password\"\n            placeholder=\"{{ 'register.password.placeholder' | cxTranslate }}\"\n            formControlName=\"password\"\n            [attr.aria-label]=\"'register.password.placeholder' | cxTranslate\"\n            cxPasswordVisibilitySwitch\n          />\n          <cx-form-errors\n            [control]=\"guestRegisterForm.get('password')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n\n      <div class=\"form-group\">\n        <label>\n          <span class=\"label-content\">{{\n            'register.confirmPassword.label' | cxTranslate\n          }}</span>\n          <input\n            required=\"true\"\n            class=\"form-control\"\n            type=\"password\"\n            name=\"passwordconf\"\n            placeholder=\"{{\n              'register.confirmPassword.placeholder' | cxTranslate\n            }}\"\n            formControlName=\"passwordconf\"\n            [attr.aria-label]=\"\n              'register.confirmPassword.placeholder' | cxTranslate\n            \"\n            cxPasswordVisibilitySwitch\n          />\n          <cx-form-errors\n            [control]=\"guestRegisterForm.get('passwordconf')\"\n          ></cx-form-errors>\n        </label>\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-block btn-primary\">\n        {{ 'common.submit' | cxTranslate }}\n      </button>\n    </form>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.UserRegisterFacade }, { type: i2.RoutingService }, { type: i2.AuthService }, { type: i3.UntypedFormBuilder }]; }, propDecorators: { guid: [{
                type: Input
            }], email: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZ3Vlc3QtcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JkZXIvY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24vb3JkZXItZ3Vlc3QtcmVnaXN0ZXItZm9ybS9vcmRlci1ndWVzdC1yZWdpc3Rlci1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmRlci9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9vcmRlci1ndWVzdC1yZWdpc3Rlci1mb3JtL29yZGVyLWd1ZXN0LXJlZ2lzdGVyLWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFHTCxVQUFVLEdBQ1gsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBUTdELE1BQU0sT0FBTywrQkFBK0I7SUFxQjFDLFlBQ1ksa0JBQXNDLEVBQ3RDLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3hCLEVBQXNCO1FBSHRCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQW9CO1FBcEJsQyxzQkFBaUIsR0FBcUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQ2pEO1lBQ0UsUUFBUSxFQUFFO2dCQUNSLEVBQUU7Z0JBQ0YsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO2FBQzlEO1lBQ0QsWUFBWSxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDeEMsRUFDRDtZQUNFLFVBQVUsRUFBRSxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FDakQsVUFBVSxFQUNWLGNBQWMsQ0FDZjtTQUNGLENBQ0YsQ0FBQztJQU9DLENBQUM7SUFFSixNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQ25DLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ3RDLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVztxQkFDakMsY0FBYyxFQUFFO3FCQUNoQixTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtvQkFDeEIsSUFBSSxVQUFVLEVBQUU7d0JBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztxQkFDN0M7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDTjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDOzs0SEFwRFUsK0JBQStCO2dIQUEvQiwrQkFBK0Isd0dDckI1QywrZ0VBK0RBOzJGRDFDYSwrQkFBK0I7a0JBSjNDLFNBQVM7K0JBQ0Usd0JBQXdCO2lNQUl6QixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBVbnR5cGVkRm9ybUJ1aWxkZXIsXG4gIFVudHlwZWRGb3JtR3JvdXAsXG4gIFZhbGlkYXRvcnMsXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDdXN0b21Gb3JtVmFsaWRhdG9ycyB9IGZyb20gJ0BzcGFydGFjdXMvc3RvcmVmcm9udCc7XG5pbXBvcnQgeyBVc2VyUmVnaXN0ZXJGYWNhZGUgfSBmcm9tICdAc3BhcnRhY3VzL3VzZXIvcHJvZmlsZS9yb290JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1ndWVzdC1yZWdpc3Rlci1mb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWd1ZXN0LXJlZ2lzdGVyLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckd1ZXN0UmVnaXN0ZXJGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgZ3VpZDogc3RyaW5nO1xuICBASW5wdXQoKSBlbWFpbDogc3RyaW5nO1xuXG4gIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBndWVzdFJlZ2lzdGVyRm9ybTogVW50eXBlZEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoXG4gICAge1xuICAgICAgcGFzc3dvcmQ6IFtcbiAgICAgICAgJycsXG4gICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBDdXN0b21Gb3JtVmFsaWRhdG9ycy5wYXNzd29yZFZhbGlkYXRvcl0sXG4gICAgICBdLFxuICAgICAgcGFzc3dvcmRjb25mOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgIH0sXG4gICAge1xuICAgICAgdmFsaWRhdG9yczogQ3VzdG9tRm9ybVZhbGlkYXRvcnMucGFzc3dvcmRzTXVzdE1hdGNoKFxuICAgICAgICAncGFzc3dvcmQnLFxuICAgICAgICAncGFzc3dvcmRjb25mJ1xuICAgICAgKSxcbiAgICB9XG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJSZWdpc3RlckZhY2FkZTogVXNlclJlZ2lzdGVyRmFjYWRlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmI6IFVudHlwZWRGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgc3VibWl0KCkge1xuICAgIGlmICh0aGlzLmd1ZXN0UmVnaXN0ZXJGb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLnVzZXJSZWdpc3RlckZhY2FkZS5yZWdpc3Rlckd1ZXN0KFxuICAgICAgICB0aGlzLmd1aWQsXG4gICAgICAgIHRoaXMuZ3Vlc3RSZWdpc3RlckZvcm0udmFsdWUucGFzc3dvcmRcbiAgICAgICk7XG4gICAgICBpZiAoIXRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5hdXRoU2VydmljZVxuICAgICAgICAgIC5pc1VzZXJMb2dnZWRJbigpXG4gICAgICAgICAgLnN1YnNjcmliZSgoaXNMb2dnZWRJbikgPT4ge1xuICAgICAgICAgICAgaWYgKGlzTG9nZ2VkSW4pIHtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ndWVzdFJlZ2lzdGVyRm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cInJlZ2lzdGVyLWd1ZXN0XCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBjb2wtbGctNFwiPlxuICAgIDxoMz57eyAnY2hlY2tvdXRPcmRlckNvbmZpcm1hdGlvbi5jcmVhdGVBY2NvdW50JyB8IGN4VHJhbnNsYXRlIH19PC9oMz5cbiAgICA8cD5cbiAgICAgIHt7XG4gICAgICAgICdjaGVja291dE9yZGVyQ29uZmlybWF0aW9uLmNyZWF0ZUFjY291bnRGb3JOZXh0J1xuICAgICAgICAgIHwgY3hUcmFuc2xhdGU6IHsgZW1haWw6IGVtYWlsIH1cbiAgICAgIH19XG4gICAgPC9wPlxuXG4gICAgPGZvcm0gKG5nU3VibWl0KT1cInN1Ym1pdCgpXCIgW2Zvcm1Hcm91cF09XCJndWVzdFJlZ2lzdGVyRm9ybVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwtY29udGVudFwiPnt7XG4gICAgICAgICAgICAncmVnaXN0ZXIucGFzc3dvcmQubGFiZWwnIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlcXVpcmVkPVwidHJ1ZVwiXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ3JlZ2lzdGVyLnBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IGN4VHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3JlZ2lzdGVyLnBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IGN4VHJhbnNsYXRlXCJcbiAgICAgICAgICAgIGN4UGFzc3dvcmRWaXNpYmlsaXR5U3dpdGNoXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Y3gtZm9ybS1lcnJvcnNcbiAgICAgICAgICAgIFtjb250cm9sXT1cImd1ZXN0UmVnaXN0ZXJGb3JtLmdldCgncGFzc3dvcmQnKVwiXG4gICAgICAgICAgPjwvY3gtZm9ybS1lcnJvcnM+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwtY29udGVudFwiPnt7XG4gICAgICAgICAgICAncmVnaXN0ZXIuY29uZmlybVBhc3N3b3JkLmxhYmVsJyB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZXF1aXJlZD1cInRydWVcIlxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZGNvbmZcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e1xuICAgICAgICAgICAgICAncmVnaXN0ZXIuY29uZmlybVBhc3N3b3JkLnBsYWNlaG9sZGVyJyB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICB9fVwiXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZGNvbmZcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAgICAgICAgICAgJ3JlZ2lzdGVyLmNvbmZpcm1QYXNzd29yZC5wbGFjZWhvbGRlcicgfCBjeFRyYW5zbGF0ZVxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIGN4UGFzc3dvcmRWaXNpYmlsaXR5U3dpdGNoXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Y3gtZm9ybS1lcnJvcnNcbiAgICAgICAgICAgIFtjb250cm9sXT1cImd1ZXN0UmVnaXN0ZXJGb3JtLmdldCgncGFzc3dvcmRjb25mJylcIlxuICAgICAgICAgID48L2N4LWZvcm0tZXJyb3JzPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVwiPlxuICAgICAgICB7eyAnY29tbW9uLnN1Ym1pdCcgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19