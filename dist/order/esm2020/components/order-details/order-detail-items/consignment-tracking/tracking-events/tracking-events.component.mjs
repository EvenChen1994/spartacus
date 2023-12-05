/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, HostListener, } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/order/root";
import * as i2 from "@spartacus/storefront";
import * as i3 from "@angular/common";
import * as i4 from "@spartacus/core";
export class TrackingEventsComponent {
    handleClick(event) {
        if (event.target.tagName === this.el.nativeElement.tagName) {
            this.close('Cross click');
        }
    }
    constructor(orderHistoryFacade, launchDialogService, el) {
        this.orderHistoryFacade = orderHistoryFacade;
        this.launchDialogService = launchDialogService;
        this.el = el;
        this.subscription = new Subscription();
        this.focusConfig = {
            trap: true,
            block: true,
            autofocus: 'button',
            focusOnEscape: true,
        };
    }
    ngOnInit() {
        this.subscription.add(this.launchDialogService.data$.subscribe((data) => {
            if (data) {
                this.init(data.tracking$, data.shipDate);
            }
        }));
    }
    ngOnDestroy() {
        this.orderHistoryFacade.clearConsignmentTracking();
        this.subscription?.unsubscribe();
    }
    init(tracking$, shipDate) {
        this.tracking$ = tracking$;
        this.shipDate = shipDate;
    }
    close(reason) {
        this.launchDialogService.closeDialog(reason);
    }
}
TrackingEventsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TrackingEventsComponent, deps: [{ token: i1.OrderHistoryFacade }, { token: i2.LaunchDialogService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
TrackingEventsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: TrackingEventsComponent, selector: "cx-tracking-events", host: { listeners: { "click": "handleClick($event)" } }, ngImport: i0, template: "<div\n  class=\"cx-consignment-tracking-dialog\"\n  [cxFocus]=\"focusConfig\"\n  (esc)=\"close('Escape clicked')\"\n>\n  <div class=\"cx-consignment-tracking-container\">\n    <ng-container\n      *ngIf=\"tracking$ | async as consignmentTracking; else loading\"\n    >\n      <!-- Modal Header -->\n      <div class=\"cx-modal-header\">\n        <div class=\"cx-consignment-tracking-title modal-title\">\n          {{ 'orderDetails.consignmentTracking.dialog.header' | cxTranslate }}\n        </div>\n        <button\n          type=\"button\"\n          class=\"close\"\n          [attr.aria-label]=\"'common.close' | cxTranslate\"\n          (click)=\"close('Cross click')\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <!-- Modal Body -->\n      <!-- shipment header -->\n      <ng-container\n        *ngIf=\"\n          consignmentTracking?.carrierDetails &&\n            consignmentTracking?.trackingID;\n          else noTracking\n        \"\n      >\n        <div class=\"cx-shipment-heading\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-6\">\n              <div class=\"cx-shipment-title\">\n                {{\n                  'orderDetails.consignmentTracking.dialog.shipped'\n                    | cxTranslate\n                }}\n              </div>\n              <div class=\"cx-shipment-content\">\n                {{ shipDate | cxDate: 'medium' }}\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-md-6\">\n              <div class=\"cx-shipment-title\">\n                {{\n                  'orderDetails.consignmentTracking.dialog.estimate'\n                    | cxTranslate\n                }}\n              </div>\n              <div class=\"cx-shipment-content\">\n                {{ consignmentTracking?.targetArrivalDate | cxDate: 'medium' }}\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-6\">\n              <div class=\"cx-shipment-title\">\n                {{\n                  'orderDetails.consignmentTracking.dialog.carrier'\n                    | cxTranslate\n                }}\n              </div>\n              <div class=\"cx-shipment-content\">\n                {{ consignmentTracking?.carrierDetails?.name }}\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-md-6\">\n              <div class=\"cx-shipment-title\">\n                {{\n                  'orderDetails.consignmentTracking.dialog.trackingId'\n                    | cxTranslate\n                }}\n              </div>\n              <div class=\"cx-shipment-content\">\n                <ng-container *ngIf=\"consignmentTracking?.trackingUrl\">\n                  <a\n                    target=\"_blank\"\n                    rel=\"noopener noreferrer\"\n                    [href]=\"consignmentTracking.trackingUrl\"\n                    >{{ consignmentTracking?.trackingID }}</a\n                  >\n                </ng-container>\n                <ng-container *ngIf=\"!consignmentTracking?.trackingUrl\">\n                  <label>\n                    {{ consignmentTracking?.trackingID }}\n                  </label>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- tracking events -->\n      <div class=\"cx-tracking-events modal-body\">\n        <ng-container\n          *ngFor=\"let consignmentEvent of consignmentTracking.trackingEvents\"\n        >\n          <div class=\"cx-tracking-event-body\">\n            <div class=\"cx-tracking-event-content\">\n              {{ consignmentEvent.eventDate | cxDate: 'medium' }}\n            </div>\n            <div class=\"cx-tracking-event-title\">\n              {{ consignmentEvent.referenceCode }}\n            </div>\n            <div class=\"cx-tracking-event-content\">\n              {{ consignmentEvent.detail }}\n            </div>\n            <div class=\"cx-tracking-event-city\">\n              location: {{ consignmentEvent.location }}\n            </div>\n          </div>\n        </ng-container>\n      </div>\n    </ng-container>\n\n    <ng-template #noTracking>\n      <div class=\"cx-no-tracking-heading\">\n        <div class=\"cx-shipment-content\">\n          {{\n            'orderDetails.consignmentTracking.dialog.noTracking' | cxTranslate\n          }}\n        </div>\n      </div>\n    </ng-template>\n\n    <ng-template #loading>\n      <div class=\"cx-tracking-loading\">\n        <div class=\"header modal-header\">\n          <div class=\"title modal-title\">\n            {{\n              'orderDetails.consignmentTracking.dialog.loadingHeader'\n                | cxTranslate\n            }}\n          </div>\n          <button\n            type=\"button\"\n            class=\"close btn-dismiss\"\n            [attr.aria-label]=\"'common.close' | cxTranslate\"\n            (click)=\"close('Cross click')\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <!-- Modal Body -->\n        <div class=\"body modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <cx-spinner></cx-spinner>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.SpinnerComponent, selector: "cx-spinner" }, { kind: "directive", type: i2.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i4.TranslatePipe, name: "cxTranslate" }, { kind: "pipe", type: i4.CxDatePipe, name: "cxDate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: TrackingEventsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-tracking-events', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div\n  class=\"cx-consignment-tracking-dialog\"\n  [cxFocus]=\"focusConfig\"\n  (esc)=\"close('Escape clicked')\"\n>\n  <div class=\"cx-consignment-tracking-container\">\n    <ng-container\n      *ngIf=\"tracking$ | async as consignmentTracking; else loading\"\n    >\n      <!-- Modal Header -->\n      <div class=\"cx-modal-header\">\n        <div class=\"cx-consignment-tracking-title modal-title\">\n          {{ 'orderDetails.consignmentTracking.dialog.header' | cxTranslate }}\n        </div>\n        <button\n          type=\"button\"\n          class=\"close\"\n          [attr.aria-label]=\"'common.close' | cxTranslate\"\n          (click)=\"close('Cross click')\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <!-- Modal Body -->\n      <!-- shipment header -->\n      <ng-container\n        *ngIf=\"\n          consignmentTracking?.carrierDetails &&\n            consignmentTracking?.trackingID;\n          else noTracking\n        \"\n      >\n        <div class=\"cx-shipment-heading\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-6\">\n              <div class=\"cx-shipment-title\">\n                {{\n                  'orderDetails.consignmentTracking.dialog.shipped'\n                    | cxTranslate\n                }}\n              </div>\n              <div class=\"cx-shipment-content\">\n                {{ shipDate | cxDate: 'medium' }}\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-md-6\">\n              <div class=\"cx-shipment-title\">\n                {{\n                  'orderDetails.consignmentTracking.dialog.estimate'\n                    | cxTranslate\n                }}\n              </div>\n              <div class=\"cx-shipment-content\">\n                {{ consignmentTracking?.targetArrivalDate | cxDate: 'medium' }}\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-6\">\n              <div class=\"cx-shipment-title\">\n                {{\n                  'orderDetails.consignmentTracking.dialog.carrier'\n                    | cxTranslate\n                }}\n              </div>\n              <div class=\"cx-shipment-content\">\n                {{ consignmentTracking?.carrierDetails?.name }}\n              </div>\n            </div>\n            <div class=\"col-sm-12 col-md-6\">\n              <div class=\"cx-shipment-title\">\n                {{\n                  'orderDetails.consignmentTracking.dialog.trackingId'\n                    | cxTranslate\n                }}\n              </div>\n              <div class=\"cx-shipment-content\">\n                <ng-container *ngIf=\"consignmentTracking?.trackingUrl\">\n                  <a\n                    target=\"_blank\"\n                    rel=\"noopener noreferrer\"\n                    [href]=\"consignmentTracking.trackingUrl\"\n                    >{{ consignmentTracking?.trackingID }}</a\n                  >\n                </ng-container>\n                <ng-container *ngIf=\"!consignmentTracking?.trackingUrl\">\n                  <label>\n                    {{ consignmentTracking?.trackingID }}\n                  </label>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n\n      <!-- tracking events -->\n      <div class=\"cx-tracking-events modal-body\">\n        <ng-container\n          *ngFor=\"let consignmentEvent of consignmentTracking.trackingEvents\"\n        >\n          <div class=\"cx-tracking-event-body\">\n            <div class=\"cx-tracking-event-content\">\n              {{ consignmentEvent.eventDate | cxDate: 'medium' }}\n            </div>\n            <div class=\"cx-tracking-event-title\">\n              {{ consignmentEvent.referenceCode }}\n            </div>\n            <div class=\"cx-tracking-event-content\">\n              {{ consignmentEvent.detail }}\n            </div>\n            <div class=\"cx-tracking-event-city\">\n              location: {{ consignmentEvent.location }}\n            </div>\n          </div>\n        </ng-container>\n      </div>\n    </ng-container>\n\n    <ng-template #noTracking>\n      <div class=\"cx-no-tracking-heading\">\n        <div class=\"cx-shipment-content\">\n          {{\n            'orderDetails.consignmentTracking.dialog.noTracking' | cxTranslate\n          }}\n        </div>\n      </div>\n    </ng-template>\n\n    <ng-template #loading>\n      <div class=\"cx-tracking-loading\">\n        <div class=\"header modal-header\">\n          <div class=\"title modal-title\">\n            {{\n              'orderDetails.consignmentTracking.dialog.loadingHeader'\n                | cxTranslate\n            }}\n          </div>\n          <button\n            type=\"button\"\n            class=\"close btn-dismiss\"\n            [attr.aria-label]=\"'common.close' | cxTranslate\"\n            (click)=\"close('Cross click')\"\n          >\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <!-- Modal Body -->\n        <div class=\"body modal-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <cx-spinner></cx-spinner>\n            </div>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.OrderHistoryFacade }, { type: i2.LaunchDialogService }, { type: i0.ElementRef }]; }, propDecorators: { handleClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2tpbmctZXZlbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmRlci9jb21wb25lbnRzL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlsLWl0ZW1zL2NvbnNpZ25tZW50LXRyYWNraW5nL3RyYWNraW5nLWV2ZW50cy90cmFja2luZy1ldmVudHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZGVyL2NvbXBvbmVudHMvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWwtaXRlbXMvY29uc2lnbm1lbnQtdHJhY2tpbmcvdHJhY2tpbmctZXZlbnRzL3RyYWNraW5nLWV2ZW50cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxHQUdiLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7OztBQU9oRCxNQUFNLE9BQU8sdUJBQXVCO0lBYWxDLFdBQVcsQ0FBQyxLQUFjO1FBQ3hCLElBQUssS0FBSyxDQUFDLE1BQWMsQ0FBQyxPQUFPLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQ25FLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDM0I7SUFDSCxDQUFDO0lBRUQsWUFDWSxrQkFBc0MsRUFDdEMsbUJBQXdDLEVBQ3hDLEVBQWM7UUFGZCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQXJCbEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTFDLGdCQUFXLEdBQWdCO1lBQ3pCLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUk7WUFDWCxTQUFTLEVBQUUsUUFBUTtZQUNuQixhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDO0lBYUMsQ0FBQztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNoRCxJQUFJLElBQUksRUFBRTtnQkFDUixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzFDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsSUFBSSxDQUFDLFNBQTBDLEVBQUUsUUFBYztRQUM3RCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQVk7UUFDaEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDOztvSEEvQ1UsdUJBQXVCO3dHQUF2Qix1QkFBdUIsbUhDdkJwQywyMEtBZ0tBOzJGRHpJYSx1QkFBdUI7a0JBTG5DLFNBQVM7K0JBQ0Usb0JBQW9CLG1CQUViLHVCQUF1QixDQUFDLE1BQU07b0tBZS9DLFdBQVc7c0JBRFYsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcsIE9yZGVySGlzdG9yeUZhY2FkZSB9IGZyb20gJ0BzcGFydGFjdXMvb3JkZXIvcm9vdCc7XG5pbXBvcnQgeyBGb2N1c0NvbmZpZywgTGF1bmNoRGlhbG9nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvc3RvcmVmcm9udCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdHJhY2tpbmctZXZlbnRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RyYWNraW5nLWV2ZW50cy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFja2luZ0V2ZW50c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHRyYWNraW5nJDogT2JzZXJ2YWJsZTxDb25zaWdubWVudFRyYWNraW5nPjtcbiAgc2hpcERhdGU6IERhdGU7XG5cbiAgZm9jdXNDb25maWc6IEZvY3VzQ29uZmlnID0ge1xuICAgIHRyYXA6IHRydWUsXG4gICAgYmxvY2s6IHRydWUsXG4gICAgYXV0b2ZvY3VzOiAnYnV0dG9uJyxcbiAgICBmb2N1c09uRXNjYXBlOiB0cnVlLFxuICB9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgaGFuZGxlQ2xpY2soZXZlbnQ6IFVJRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoKGV2ZW50LnRhcmdldCBhcyBhbnkpLnRhZ05hbWUgPT09IHRoaXMuZWwubmF0aXZlRWxlbWVudC50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsb3NlKCdDcm9zcyBjbGljaycpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvcmRlckhpc3RvcnlGYWNhZGU6IE9yZGVySGlzdG9yeUZhY2FkZSxcbiAgICBwcm90ZWN0ZWQgbGF1bmNoRGlhbG9nU2VydmljZTogTGF1bmNoRGlhbG9nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWw6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMubGF1bmNoRGlhbG9nU2VydmljZS5kYXRhJC5zdWJzY3JpYmUoKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICB0aGlzLmluaXQoZGF0YS50cmFja2luZyQsIGRhdGEuc2hpcERhdGUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm9yZGVySGlzdG9yeUZhY2FkZS5jbGVhckNvbnNpZ25tZW50VHJhY2tpbmcoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGluaXQodHJhY2tpbmckOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+LCBzaGlwRGF0ZTogRGF0ZSkge1xuICAgIHRoaXMudHJhY2tpbmckID0gdHJhY2tpbmckO1xuICAgIHRoaXMuc2hpcERhdGUgPSBzaGlwRGF0ZTtcbiAgfVxuXG4gIGNsb3NlKHJlYXNvbj86IGFueSk6IHZvaWQge1xuICAgIHRoaXMubGF1bmNoRGlhbG9nU2VydmljZS5jbG9zZURpYWxvZyhyZWFzb24pO1xuICB9XG59XG4iLCI8ZGl2XG4gIGNsYXNzPVwiY3gtY29uc2lnbm1lbnQtdHJhY2tpbmctZGlhbG9nXCJcbiAgW2N4Rm9jdXNdPVwiZm9jdXNDb25maWdcIlxuICAoZXNjKT1cImNsb3NlKCdFc2NhcGUgY2xpY2tlZCcpXCJcbj5cbiAgPGRpdiBjbGFzcz1cImN4LWNvbnNpZ25tZW50LXRyYWNraW5nLWNvbnRhaW5lclwiPlxuICAgIDxuZy1jb250YWluZXJcbiAgICAgICpuZ0lmPVwidHJhY2tpbmckIHwgYXN5bmMgYXMgY29uc2lnbm1lbnRUcmFja2luZzsgZWxzZSBsb2FkaW5nXCJcbiAgICA+XG4gICAgICA8IS0tIE1vZGFsIEhlYWRlciAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjeC1tb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LWNvbnNpZ25tZW50LXRyYWNraW5nLXRpdGxlIG1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAge3sgJ29yZGVyRGV0YWlscy5jb25zaWdubWVudFRyYWNraW5nLmRpYWxvZy5oZWFkZXInIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cImNsb3NlXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidjb21tb24uY2xvc2UnIHwgY3hUcmFuc2xhdGVcIlxuICAgICAgICAgIChjbGljayk9XCJjbG9zZSgnQ3Jvc3MgY2xpY2snKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPCEtLSBNb2RhbCBCb2R5IC0tPlxuICAgICAgPCEtLSBzaGlwbWVudCBoZWFkZXIgLS0+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgY29uc2lnbm1lbnRUcmFja2luZz8uY2FycmllckRldGFpbHMgJiZcbiAgICAgICAgICAgIGNvbnNpZ25tZW50VHJhY2tpbmc/LnRyYWNraW5nSUQ7XG4gICAgICAgICAgZWxzZSBub1RyYWNraW5nXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjeC1zaGlwbWVudC1oZWFkaW5nXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtc2hpcG1lbnQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgJ29yZGVyRGV0YWlscy5jb25zaWdubWVudFRyYWNraW5nLmRpYWxvZy5zaGlwcGVkJ1xuICAgICAgICAgICAgICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjeC1zaGlwbWVudC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge3sgc2hpcERhdGUgfCBjeERhdGU6ICdtZWRpdW0nIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjeC1zaGlwbWVudC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAnb3JkZXJEZXRhaWxzLmNvbnNpZ25tZW50VHJhY2tpbmcuZGlhbG9nLmVzdGltYXRlJ1xuICAgICAgICAgICAgICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjeC1zaGlwbWVudC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAge3sgY29uc2lnbm1lbnRUcmFja2luZz8udGFyZ2V0QXJyaXZhbERhdGUgfCBjeERhdGU6ICdtZWRpdW0nIH19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyIGNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjeC1zaGlwbWVudC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAnb3JkZXJEZXRhaWxzLmNvbnNpZ25tZW50VHJhY2tpbmcuZGlhbG9nLmNhcnJpZXInXG4gICAgICAgICAgICAgICAgICAgIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN4LXNoaXBtZW50LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICB7eyBjb25zaWdubWVudFRyYWNraW5nPy5jYXJyaWVyRGV0YWlscz8ubmFtZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMiBjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtc2hpcG1lbnQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgJ29yZGVyRGV0YWlscy5jb25zaWdubWVudFRyYWNraW5nLmRpYWxvZy50cmFja2luZ0lkJ1xuICAgICAgICAgICAgICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjeC1zaGlwbWVudC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbnNpZ25tZW50VHJhY2tpbmc/LnRyYWNraW5nVXJsXCI+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICAgICAgW2hyZWZdPVwiY29uc2lnbm1lbnRUcmFja2luZy50cmFja2luZ1VybFwiXG4gICAgICAgICAgICAgICAgICAgID57eyBjb25zaWdubWVudFRyYWNraW5nPy50cmFja2luZ0lEIH19PC9hXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFjb25zaWdubWVudFRyYWNraW5nPy50cmFja2luZ1VybFwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICB7eyBjb25zaWdubWVudFRyYWNraW5nPy50cmFja2luZ0lEIH19XG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICA8IS0tIHRyYWNraW5nIGV2ZW50cyAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjeC10cmFja2luZy1ldmVudHMgbW9kYWwtYm9keVwiPlxuICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbnNpZ25tZW50RXZlbnQgb2YgY29uc2lnbm1lbnRUcmFja2luZy50cmFja2luZ0V2ZW50c1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY3gtdHJhY2tpbmctZXZlbnQtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN4LXRyYWNraW5nLWV2ZW50LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAge3sgY29uc2lnbm1lbnRFdmVudC5ldmVudERhdGUgfCBjeERhdGU6ICdtZWRpdW0nIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjeC10cmFja2luZy1ldmVudC10aXRsZVwiPlxuICAgICAgICAgICAgICB7eyBjb25zaWdubWVudEV2ZW50LnJlZmVyZW5jZUNvZGUgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN4LXRyYWNraW5nLWV2ZW50LWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAge3sgY29uc2lnbm1lbnRFdmVudC5kZXRhaWwgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN4LXRyYWNraW5nLWV2ZW50LWNpdHlcIj5cbiAgICAgICAgICAgICAgbG9jYXRpb246IHt7IGNvbnNpZ25tZW50RXZlbnQubG9jYXRpb24gfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLXRlbXBsYXRlICNub1RyYWNraW5nPlxuICAgICAgPGRpdiBjbGFzcz1cImN4LW5vLXRyYWNraW5nLWhlYWRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN4LXNoaXBtZW50LWNvbnRlbnRcIj5cbiAgICAgICAgICB7e1xuICAgICAgICAgICAgJ29yZGVyRGV0YWlscy5jb25zaWdubWVudFRyYWNraW5nLmRpYWxvZy5ub1RyYWNraW5nJyB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgPG5nLXRlbXBsYXRlICNsb2FkaW5nPlxuICAgICAgPGRpdiBjbGFzcz1cImN4LXRyYWNraW5nLWxvYWRpbmdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlciBtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGUgbW9kYWwtdGl0bGVcIj5cbiAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICdvcmRlckRldGFpbHMuY29uc2lnbm1lbnRUcmFja2luZy5kaWFsb2cubG9hZGluZ0hlYWRlcidcbiAgICAgICAgICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgY2xhc3M9XCJjbG9zZSBidG4tZGlzbWlzc1wiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidjb21tb24uY2xvc2UnIHwgY3hUcmFuc2xhdGVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNsb3NlKCdDcm9zcyBjbGljaycpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPCEtLSBNb2RhbCBCb2R5IC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm9keSBtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICAgICAgICAgICA8Y3gtc3Bpbm5lcj48L2N4LXNwaW5uZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19