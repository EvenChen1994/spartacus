/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component } from '@angular/core';
import { GlobalMessageType, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../cms-components/misc/icon';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/common";
import * as i3 from "../../../shared/components/card/card.component";
import * as i4 from "../../../shared/components/spinner/spinner.component";
export class PaymentMethodsComponent {
    constructor(userPaymentService, translation, globalMessageService) {
        this.userPaymentService = userPaymentService;
        this.translation = translation;
        this.globalMessageService = globalMessageService;
        this.iconTypes = ICON_TYPE;
    }
    ngOnInit() {
        this.paymentMethods$ = this.userPaymentService.getPaymentMethods().pipe(tap((paymentDetails) => {
            // Set first payment method to DEFAULT if none is set
            if (paymentDetails.length > 0 &&
                !paymentDetails.find((paymentDetail) => paymentDetail.defaultPayment)) {
                this.setDefaultPaymentMethod(paymentDetails[0]);
            }
        }));
        this.editCard = undefined;
        this.loading$ = this.userPaymentService.getPaymentMethodsLoading();
        this.userPaymentService.loadPaymentMethods();
    }
    getCardContent({ defaultPayment, accountHolderName, expiryMonth, expiryYear, cardNumber, cardType, }) {
        return combineLatest([
            this.translation.translate('paymentCard.setAsDefault'),
            this.translation.translate('common.delete'),
            this.translation.translate('paymentCard.deleteConfirmation'),
            this.translation.translate('paymentCard.expires', {
                month: expiryMonth,
                year: expiryYear,
            }),
            this.translation.translate('paymentCard.defaultPaymentMethod'),
        ]).pipe(map(([textSetAsDefault, textDelete, textDeleteConfirmation, textExpires, textDefaultPaymentMethod,]) => {
            const actions = [];
            if (!defaultPayment) {
                actions.push({ name: textSetAsDefault, event: 'default' });
            }
            actions.push({ name: textDelete, event: 'edit' });
            const card = {
                role: 'region',
                header: defaultPayment ? textDefaultPaymentMethod : undefined,
                textBold: accountHolderName,
                text: [cardNumber ?? '', textExpires],
                actions,
                deleteMsg: textDeleteConfirmation,
                img: this.getCardIcon(cardType?.code ?? ''),
                label: defaultPayment
                    ? 'paymentCard.defaultPaymentLabel'
                    : 'paymentCard.additionalPaymentLabel',
            };
            return card;
        }));
    }
    deletePaymentMethod(paymentMethod) {
        if (paymentMethod.id) {
            this.userPaymentService.deletePaymentMethod(paymentMethod.id);
            this.editCard = undefined;
        }
    }
    setEdit(paymentMethod) {
        this.editCard = paymentMethod.id;
    }
    cancelCard() {
        this.editCard = undefined;
    }
    setDefaultPaymentMethod(paymentMethod) {
        this.userPaymentService.setPaymentMethodAsDefault(paymentMethod.id ?? '');
        this.globalMessageService?.add({ key: 'paymentMessages.setAsDefaultSuccessfully' }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
    getCardIcon(code) {
        let ccIcon;
        if (code === 'visa') {
            ccIcon = this.iconTypes.VISA;
        }
        else if (code === 'master' || code === 'mastercard_eurocard') {
            ccIcon = this.iconTypes.MASTER_CARD;
        }
        else if (code === 'diners') {
            ccIcon = this.iconTypes.DINERS_CLUB;
        }
        else if (code === 'amex') {
            ccIcon = this.iconTypes.AMEX;
        }
        else {
            ccIcon = this.iconTypes.CREDIT_CARD;
        }
        return ccIcon;
    }
}
PaymentMethodsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PaymentMethodsComponent, deps: [{ token: i1.UserPaymentService }, { token: i1.TranslationService }, { token: i1.GlobalMessageService }], target: i0.ɵɵFactoryTarget.Component });
PaymentMethodsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PaymentMethodsComponent, selector: "cx-payment-methods", ngImport: i0, template: "<ng-container *ngIf=\"paymentMethods$ | async as paymentMethods\">\n  <div class=\"cx-payment container\">\n    <div class=\"cx-header\">\n      <h2>\n        {{ 'paymentMethods.paymentMethods' | cxTranslate }}\n      </h2>\n    </div>\n\n    <div class=\"cx-body\">\n      <div class=\"cx-msg\">\n        {{\n          'paymentMethods.newPaymentMethodsAreAddedDuringCheckout' | cxTranslate\n        }}\n      </div>\n      <div *ngIf=\"loading$ | async; else cards\"><cx-spinner></cx-spinner></div>\n      <ng-template #cards>\n        <div\n          role=\"status\"\n          [attr.aria-label]=\"'common.loaded' | cxTranslate\"\n        ></div>\n        <div class=\"cx-existing row\">\n          <div\n            class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n            *ngFor=\"let paymentMethod of paymentMethods; let i = index\"\n          >\n            <div class=\"cx-payment-inner\">\n              <cx-card\n                [index]=\"i\"\n                [border]=\"true\"\n                [fitToContainer]=\"true\"\n                [content]=\"getCardContent(paymentMethod) | async\"\n                (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n                (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n                (editCard)=\"setEdit(paymentMethod)\"\n                [editMode]=\"editCard === paymentMethod.id\"\n                (cancelCard)=\"cancelCard()\"\n              ></cx-card>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.CardComponent, selector: "cx-card", inputs: ["border", "editMode", "isDefault", "content", "fitToContainer", "truncateText", "charactersLimit", "index"], outputs: ["deleteCard", "setDefaultCard", "sendCard", "editCard", "cancelCard"] }, { kind: "component", type: i4.SpinnerComponent, selector: "cx-spinner" }, { kind: "pipe", type: i2.AsyncPipe, name: "async" }, { kind: "pipe", type: i1.TranslatePipe, name: "cxTranslate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PaymentMethodsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-payment-methods', template: "<ng-container *ngIf=\"paymentMethods$ | async as paymentMethods\">\n  <div class=\"cx-payment container\">\n    <div class=\"cx-header\">\n      <h2>\n        {{ 'paymentMethods.paymentMethods' | cxTranslate }}\n      </h2>\n    </div>\n\n    <div class=\"cx-body\">\n      <div class=\"cx-msg\">\n        {{\n          'paymentMethods.newPaymentMethodsAreAddedDuringCheckout' | cxTranslate\n        }}\n      </div>\n      <div *ngIf=\"loading$ | async; else cards\"><cx-spinner></cx-spinner></div>\n      <ng-template #cards>\n        <div\n          role=\"status\"\n          [attr.aria-label]=\"'common.loaded' | cxTranslate\"\n        ></div>\n        <div class=\"cx-existing row\">\n          <div\n            class=\"cx-payment-card col-sm-12 col-md-12 col-lg-6\"\n            *ngFor=\"let paymentMethod of paymentMethods; let i = index\"\n          >\n            <div class=\"cx-payment-inner\">\n              <cx-card\n                [index]=\"i\"\n                [border]=\"true\"\n                [fitToContainer]=\"true\"\n                [content]=\"getCardContent(paymentMethod) | async\"\n                (deleteCard)=\"deletePaymentMethod(paymentMethod)\"\n                (setDefaultCard)=\"setDefaultPaymentMethod(paymentMethod)\"\n                (editCard)=\"setEdit(paymentMethod)\"\n                [editMode]=\"editCard === paymentMethod.id\"\n                (cancelCard)=\"cancelCard()\"\n              ></cx-card>\n            </div>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.UserPaymentService }, { type: i1.TranslationService }, { type: i1.GlobalMessageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L3BheW1lbnQtbWV0aG9kcy9wYXltZW50LW1ldGhvZHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvcGF5bWVudC1tZXRob2RzL3BheW1lbnQtbWV0aG9kcy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBRUwsaUJBQWlCLEdBSWxCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7O0FBTzlELE1BQU0sT0FBTyx1QkFBdUI7SUFNbEMsWUFDVSxrQkFBc0MsRUFDdEMsV0FBK0IsRUFDN0Isb0JBQTJDO1FBRjdDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQzdCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFOdkQsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQU9uQixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUNyRSxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRTtZQUNyQixxREFBcUQ7WUFDckQs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QUFTLENBQUM7SUFDNUIsQ0FBQztJQUVELHVCQUF1QixDQUFDLGFBQTZCO1FBQ25ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLENBQzVCLEVBQUUsR0FBRyxFQUFFLDBDQUEwQyxFQUFFLEVBQ25ELGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksTUFBYyxDQUFDO1FBQ25CLElBQUksSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUNuQixNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7U0FDOUI7YUFBTSxJQUFJLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLHFCQUFxQixFQUFFO1lBQzlELE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztTQUNyQzthQUFNLElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM1QixNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7U0FDckM7YUFBTSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1NBQzlCO2FBQU07WUFDTCxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7U0FDckM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztvSEF0SFUsdUJBQXVCO3dHQUF2Qix1QkFBdUIsMERDdkJwQyw2aERBNENBOzJGRHJCYSx1QkFBdUI7a0JBSm5DLFNBQVM7K0JBQ0Usb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgUGF5bWVudERldGFpbHMsXG4gIFRyYW5zbGF0aW9uU2VydmljZSxcbiAgVXNlclBheW1lbnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24nO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wYXltZW50LW1ldGhvZHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGF5bWVudC1tZXRob2RzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUGF5bWVudE1ldGhvZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwYXltZW50TWV0aG9kcyQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT47XG4gIGVkaXRDYXJkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcbiAgbG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyUGF5bWVudFNlcnZpY2U6IFVzZXJQYXltZW50U2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlPzogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGF5bWVudE1ldGhvZHMkID0gdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHMoKS5waXBlKFxuICAgICAgdGFwKChwYXltZW50RGV0YWlscykgPT4ge1xuICAgICAgICAvLyBTZXQgZmlyc3QgcGF5bWVudCBtZXRob2QgdG8gREVGQVVMVCBpZiBub25lIGlzIHNldFxuICAgICAgICBpZiAoXG4gICAgICAgICAgcGF5bWVudERldGFpbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICFwYXltZW50RGV0YWlscy5maW5kKChwYXltZW50RGV0YWlsKSA9PiBwYXltZW50RGV0YWlsLmRlZmF1bHRQYXltZW50KVxuICAgICAgICApIHtcbiAgICAgICAgICB0aGlzLnNldERlZmF1bHRQYXltZW50TWV0aG9kKHBheW1lbnREZXRhaWxzWzBdKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5lZGl0Q2FyZCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmxvYWRpbmckID0gdGhpcy51c2VyUGF5bWVudFNlcnZpY2UuZ2V0UGF5bWVudE1ldGhvZHNMb2FkaW5nKCk7XG4gICAgdGhpcy51c2VyUGF5bWVudFNlcnZpY2UubG9hZFBheW1lbnRNZXRob2RzKCk7XG4gIH1cblxuICBnZXRDYXJkQ29udGVudCh7XG4gICAgZGVmYXVsdFBheW1lbnQsXG4gICAgYWNjb3VudEhvbGRlck5hbWUsXG4gICAgZXhwaXJ5TW9udGgsXG4gICAgZXhwaXJ5WWVhcixcbiAgICBjYXJkTnVtYmVyLFxuICAgIGNhcmRUeXBlLFxuICB9OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYXltZW50Q2FyZC5zZXRBc0RlZmF1bHQnKSxcbiAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjb21tb24uZGVsZXRlJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZGVsZXRlQ29uZmlybWF0aW9uJyksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZXhwaXJlcycsIHtcbiAgICAgICAgbW9udGg6IGV4cGlyeU1vbnRoLFxuICAgICAgICB5ZWFyOiBleHBpcnlZZWFyLFxuICAgICAgfSksXG4gICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGF5bWVudENhcmQuZGVmYXVsdFBheW1lbnRNZXRob2QnKSxcbiAgICBdKS5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoW1xuICAgICAgICAgIHRleHRTZXRBc0RlZmF1bHQsXG4gICAgICAgICAgdGV4dERlbGV0ZSxcbiAgICAgICAgICB0ZXh0RGVsZXRlQ29uZmlybWF0aW9uLFxuICAgICAgICAgIHRleHRFeHBpcmVzLFxuICAgICAgICAgIHRleHREZWZhdWx0UGF5bWVudE1ldGhvZCxcbiAgICAgICAgXSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFjdGlvbnM6IHsgbmFtZTogc3RyaW5nOyBldmVudDogc3RyaW5nIH1bXSA9IFtdO1xuICAgICAgICAgIGlmICghZGVmYXVsdFBheW1lbnQpIHtcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaCh7IG5hbWU6IHRleHRTZXRBc0RlZmF1bHQsIGV2ZW50OiAnZGVmYXVsdCcgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGFjdGlvbnMucHVzaCh7IG5hbWU6IHRleHREZWxldGUsIGV2ZW50OiAnZWRpdCcgfSk7XG4gICAgICAgICAgY29uc3QgY2FyZDogQ2FyZCA9IHtcbiAgICAgICAgICAgIHJvbGU6ICdyZWdpb24nLFxuICAgICAgICAgICAgaGVhZGVyOiBkZWZhdWx0UGF5bWVudCA/IHRleHREZWZhdWx0UGF5bWVudE1ldGhvZCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRleHRCb2xkOiBhY2NvdW50SG9sZGVyTmFtZSxcbiAgICAgICAgICAgIHRleHQ6IFtjYXJkTnVtYmVyID8/ICcnLCB0ZXh0RXhwaXJlc10sXG4gICAgICAgICAgICBhY3Rpb25zLFxuICAgICAgICAgICAgZGVsZXRlTXNnOiB0ZXh0RGVsZXRlQ29uZmlybWF0aW9uLFxuICAgICAgICAgICAgaW1nOiB0aGlzLmdldENhcmRJY29uKGNhcmRUeXBlPy5jb2RlID8/ICcnKSxcbiAgICAgICAgICAgIGxhYmVsOiBkZWZhdWx0UGF5bWVudFxuICAgICAgICAgICAgICA/ICdwYXltZW50Q2FyZC5kZWZhdWx0UGF5bWVudExhYmVsJ1xuICAgICAgICAgICAgICA6ICdwYXltZW50Q2FyZC5hZGRpdGlvbmFsUGF5bWVudExhYmVsJyxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgICAgIH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZGVsZXRlUGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIGlmIChwYXltZW50TWV0aG9kLmlkKSB7XG4gICAgICB0aGlzLnVzZXJQYXltZW50U2VydmljZS5kZWxldGVQYXltZW50TWV0aG9kKHBheW1lbnRNZXRob2QuaWQpO1xuICAgICAgdGhpcy5lZGl0Q2FyZCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBzZXRFZGl0KHBheW1lbnRNZXRob2Q6IFBheW1lbnREZXRhaWxzKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0Q2FyZCA9IHBheW1lbnRNZXRob2QuaWQ7XG4gIH1cblxuICBjYW5jZWxDYXJkKCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdENhcmQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBzZXREZWZhdWx0UGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kOiBQYXltZW50RGV0YWlscyk6IHZvaWQge1xuICAgIHRoaXMudXNlclBheW1lbnRTZXJ2aWNlLnNldFBheW1lbnRNZXRob2RBc0RlZmF1bHQocGF5bWVudE1ldGhvZC5pZCA/PyAnJyk7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZT8uYWRkKFxuICAgICAgeyBrZXk6ICdwYXltZW50TWVzc2FnZXMuc2V0QXNEZWZhdWx0U3VjY2Vzc2Z1bGx5JyB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgKTtcbiAgfVxuXG4gIGdldENhcmRJY29uKGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IGNjSWNvbjogc3RyaW5nO1xuICAgIGlmIChjb2RlID09PSAndmlzYScpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLlZJU0E7XG4gICAgfSBlbHNlIGlmIChjb2RlID09PSAnbWFzdGVyJyB8fCBjb2RlID09PSAnbWFzdGVyY2FyZF9ldXJvY2FyZCcpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLk1BU1RFUl9DQVJEO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ2RpbmVycycpIHtcbiAgICAgIGNjSWNvbiA9IHRoaXMuaWNvblR5cGVzLkRJTkVSU19DTFVCO1xuICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gJ2FtZXgnKSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5BTUVYO1xuICAgIH0gZWxzZSB7XG4gICAgICBjY0ljb24gPSB0aGlzLmljb25UeXBlcy5DUkVESVRfQ0FSRDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2NJY29uO1xuICB9XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwicGF5bWVudE1ldGhvZHMkIHwgYXN5bmMgYXMgcGF5bWVudE1ldGhvZHNcIj5cbiAgPGRpdiBjbGFzcz1cImN4LXBheW1lbnQgY29udGFpbmVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImN4LWhlYWRlclwiPlxuICAgICAgPGgyPlxuICAgICAgICB7eyAncGF5bWVudE1ldGhvZHMucGF5bWVudE1ldGhvZHMnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgIDwvaDI+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY3gtYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImN4LW1zZ1wiPlxuICAgICAgICB7e1xuICAgICAgICAgICdwYXltZW50TWV0aG9kcy5uZXdQYXltZW50TWV0aG9kc0FyZUFkZGVkRHVyaW5nQ2hlY2tvdXQnIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImxvYWRpbmckIHwgYXN5bmM7IGVsc2UgY2FyZHNcIj48Y3gtc3Bpbm5lcj48L2N4LXNwaW5uZXI+PC9kaXY+XG4gICAgICA8bmctdGVtcGxhdGUgI2NhcmRzPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcm9sZT1cInN0YXR1c1wiXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInY29tbW9uLmxvYWRlZCcgfCBjeFRyYW5zbGF0ZVwiXG4gICAgICAgID48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LWV4aXN0aW5nIHJvd1wiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY3gtcGF5bWVudC1jYXJkIGNvbC1zbS0xMiBjb2wtbWQtMTIgY29sLWxnLTZcIlxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IHBheW1lbnRNZXRob2Qgb2YgcGF5bWVudE1ldGhvZHM7IGxldCBpID0gaW5kZXhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjeC1wYXltZW50LWlubmVyXCI+XG4gICAgICAgICAgICAgIDxjeC1jYXJkXG4gICAgICAgICAgICAgICAgW2luZGV4XT1cImlcIlxuICAgICAgICAgICAgICAgIFtib3JkZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgW2ZpdFRvQ29udGFpbmVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgIFtjb250ZW50XT1cImdldENhcmRDb250ZW50KHBheW1lbnRNZXRob2QpIHwgYXN5bmNcIlxuICAgICAgICAgICAgICAgIChkZWxldGVDYXJkKT1cImRlbGV0ZVBheW1lbnRNZXRob2QocGF5bWVudE1ldGhvZClcIlxuICAgICAgICAgICAgICAgIChzZXREZWZhdWx0Q2FyZCk9XCJzZXREZWZhdWx0UGF5bWVudE1ldGhvZChwYXltZW50TWV0aG9kKVwiXG4gICAgICAgICAgICAgICAgKGVkaXRDYXJkKT1cInNldEVkaXQocGF5bWVudE1ldGhvZClcIlxuICAgICAgICAgICAgICAgIFtlZGl0TW9kZV09XCJlZGl0Q2FyZCA9PT0gcGF5bWVudE1ldGhvZC5pZFwiXG4gICAgICAgICAgICAgICAgKGNhbmNlbENhcmQpPVwiY2FuY2VsQ2FyZCgpXCJcbiAgICAgICAgICAgICAgPjwvY3gtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=