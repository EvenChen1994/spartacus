/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@spartacus/core";
export class MyAccountV2ConsignmentEntriesComponent {
    getConsignmentNumber(code) {
        if (code) {
            const consignmentNumber = Number(code.split('_')[1]);
            if (!isNaN(consignmentNumber)) {
                return (consignmentNumber + 1).toString();
            }
        }
        return code;
    }
}
MyAccountV2ConsignmentEntriesComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyAccountV2ConsignmentEntriesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyAccountV2ConsignmentEntriesComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: MyAccountV2ConsignmentEntriesComponent, selector: "cx-my-account-v2-consignment-entries", inputs: { consignments: "consignments", orderCode: "orderCode" }, ngImport: i0, template: "<ng-container *ngFor=\"let consignment of consignments; index as i\">\n  <!--\nexample:\nConsignment 1 | In Process | Last Updated: 13, September, 2023\nConsignment 2 | Tracking Number: 5657474 | Estimated Delivery: 22, September, 2023\n  -->\n  <div\n    class=\"cx-consignment-info\"\n    [attr.aria-label]=\"\n      'myAccountV2OrderHistory.consignmentDetailLabel' | cxTranslate\n    \"\n    *ngIf=\"consignment\"\n  >\n    <span\n      [attr.aria-label]=\"\n        'myAccountV2OrderHistory.consignmentNumberLabel' | cxTranslate\n      \"\n    >\n      {{\n        'myAccountV2OrderHistory.consignmentCode'\n          | cxTranslate: { param: i + 1 }\n      }}\n    </span>\n    |\n    <ng-container *ngIf=\"consignment.trackingID; else showLastUpdated\">\n      <ng-container *ngIf=\"consignment.consignmentTracking as tracking\">\n        <span\n          [attr.aria-label]=\"\n            'orderDetails.consignmentTracking.dialog.trackingId' | cxTranslate\n          \"\n        >\n          {{\n            'orderDetails.consignmentTracking.dialog.trackingId' | cxTranslate\n          }}:\n          <ng-container *ngIf=\"tracking.trackingUrl; else showNumber\">\n            <a\n              class=\"cx-tracking-id\"\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              [href]=\"tracking.trackingUrl\"\n              >{{ tracking.trackingID }}</a\n            >\n          </ng-container>\n          |\n        </span>\n        <span\n          [attr.aria-label]=\"\n            'myAccountV2OrderHistory.estimateDeliveryLabel' | cxTranslate\n          \"\n        >\n          {{\n            'orderDetails.consignmentTracking.dialog.estimate' | cxTranslate\n          }}:\n          {{ tracking.targetArrivalDate | cxDate: 'd, MMMM, yyyy' }}\n        </span>\n        <ng-template #showNumber>\n          {{ tracking.trackingID }}\n        </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-template #showLastUpdated>\n      <span\n        [attr.aria-label]=\"\n          'myAccountV2OrderHistory.consignmentStatusLabel' | cxTranslate\n        \"\n        *ngIf=\"consignment.status\"\n      >\n        {{\n          'orderDetails.deliveryStatus_' + consignment?.status?.toUpperCase()\n            | cxTranslate\n        }}\n      </span>\n      <span\n        *ngIf=\"consignment.statusDate\"\n        [attr.aria-label]=\"\n          'myAccountV2OrderHistory.consignmentStatusDateLabel' | cxTranslate\n        \"\n      >\n        |\n        {{\n          'myAccountV2OrderHistory.statusDate'\n            | cxTranslate\n              : { param: consignment.statusDate | cxDate: 'd, MMMM, yyyy' }\n        }}\n      </span>\n    </ng-template>\n  </div>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i2.TranslatePipe, name: "cxTranslate" }, { kind: "pipe", type: i2.CxDatePipe, name: "cxDate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MyAccountV2ConsignmentEntriesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-my-account-v2-consignment-entries', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngFor=\"let consignment of consignments; index as i\">\n  <!--\nexample:\nConsignment 1 | In Process | Last Updated: 13, September, 2023\nConsignment 2 | Tracking Number: 5657474 | Estimated Delivery: 22, September, 2023\n  -->\n  <div\n    class=\"cx-consignment-info\"\n    [attr.aria-label]=\"\n      'myAccountV2OrderHistory.consignmentDetailLabel' | cxTranslate\n    \"\n    *ngIf=\"consignment\"\n  >\n    <span\n      [attr.aria-label]=\"\n        'myAccountV2OrderHistory.consignmentNumberLabel' | cxTranslate\n      \"\n    >\n      {{\n        'myAccountV2OrderHistory.consignmentCode'\n          | cxTranslate: { param: i + 1 }\n      }}\n    </span>\n    |\n    <ng-container *ngIf=\"consignment.trackingID; else showLastUpdated\">\n      <ng-container *ngIf=\"consignment.consignmentTracking as tracking\">\n        <span\n          [attr.aria-label]=\"\n            'orderDetails.consignmentTracking.dialog.trackingId' | cxTranslate\n          \"\n        >\n          {{\n            'orderDetails.consignmentTracking.dialog.trackingId' | cxTranslate\n          }}:\n          <ng-container *ngIf=\"tracking.trackingUrl; else showNumber\">\n            <a\n              class=\"cx-tracking-id\"\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              [href]=\"tracking.trackingUrl\"\n              >{{ tracking.trackingID }}</a\n            >\n          </ng-container>\n          |\n        </span>\n        <span\n          [attr.aria-label]=\"\n            'myAccountV2OrderHistory.estimateDeliveryLabel' | cxTranslate\n          \"\n        >\n          {{\n            'orderDetails.consignmentTracking.dialog.estimate' | cxTranslate\n          }}:\n          {{ tracking.targetArrivalDate | cxDate: 'd, MMMM, yyyy' }}\n        </span>\n        <ng-template #showNumber>\n          {{ tracking.trackingID }}\n        </ng-template>\n      </ng-container>\n    </ng-container>\n    <ng-template #showLastUpdated>\n      <span\n        [attr.aria-label]=\"\n          'myAccountV2OrderHistory.consignmentStatusLabel' | cxTranslate\n        \"\n        *ngIf=\"consignment.status\"\n      >\n        {{\n          'orderDetails.deliveryStatus_' + consignment?.status?.toUpperCase()\n            | cxTranslate\n        }}\n      </span>\n      <span\n        *ngIf=\"consignment.statusDate\"\n        [attr.aria-label]=\"\n          'myAccountV2OrderHistory.consignmentStatusDateLabel' | cxTranslate\n        \"\n      >\n        |\n        {{\n          'myAccountV2OrderHistory.statusDate'\n            | cxTranslate\n              : { param: consignment.statusDate | cxDate: 'd, MMMM, yyyy' }\n        }}\n      </span>\n    </ng-template>\n  </div>\n</ng-container>\n" }]
        }], propDecorators: { consignments: [{
                type: Input
            }], orderCode: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYWNjb3VudC12Mi1jb25zaWdubWVudC1lbnRyaWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmRlci9jb21wb25lbnRzL29yZGVyLWhpc3RvcnkvbXktYWNjb3VudC12Mi9jb25zaWdubWVudC1lbnRyaWVzL215LWFjY291bnQtdjItY29uc2lnbm1lbnQtZW50cmllcy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JkZXIvY29tcG9uZW50cy9vcmRlci1oaXN0b3J5L215LWFjY291bnQtdjIvY29uc2lnbm1lbnQtZW50cmllcy9teS1hY2NvdW50LXYyLWNvbnNpZ25tZW50LWVudHJpZXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTFFLE1BQU0sT0FBTyxzQ0FBc0M7SUFNakQsb0JBQW9CLENBQUMsSUFBYTtRQUNoQyxJQUFJLElBQUksRUFBRTtZQUNSLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUMzQztTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzttSUFkVSxzQ0FBc0M7dUhBQXRDLHNDQUFzQyw4SUNkbkQsb3JGQXdGQTsyRkQxRWEsc0NBQXNDO2tCQUxsRCxTQUFTOytCQUNFLHNDQUFzQyxtQkFFL0IsdUJBQXVCLENBQUMsTUFBTTs4QkFJL0MsWUFBWTtzQkFEWCxLQUFLO2dCQUdOLFNBQVM7c0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25zaWdubWVudFZpZXcgfSBmcm9tICdAc3BhcnRhY3VzL29yZGVyL3Jvb3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1teS1hY2NvdW50LXYyLWNvbnNpZ25tZW50LWVudHJpZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vbXktYWNjb3VudC12Mi1jb25zaWdubWVudC1lbnRyaWVzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE15QWNjb3VudFYyQ29uc2lnbm1lbnRFbnRyaWVzQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgY29uc2lnbm1lbnRzPzogQ29uc2lnbm1lbnRWaWV3W107XG4gIEBJbnB1dCgpXG4gIG9yZGVyQ29kZT86IHN0cmluZztcblxuICBnZXRDb25zaWdubWVudE51bWJlcihjb2RlPzogc3RyaW5nKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBpZiAoY29kZSkge1xuICAgICAgY29uc3QgY29uc2lnbm1lbnROdW1iZXIgPSBOdW1iZXIoY29kZS5zcGxpdCgnXycpWzFdKTtcbiAgICAgIGlmICghaXNOYU4oY29uc2lnbm1lbnROdW1iZXIpKSB7XG4gICAgICAgIHJldHVybiAoY29uc2lnbm1lbnROdW1iZXIgKyAxKS50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29kZTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY29uc2lnbm1lbnQgb2YgY29uc2lnbm1lbnRzOyBpbmRleCBhcyBpXCI+XG4gIDwhLS1cbmV4YW1wbGU6XG5Db25zaWdubWVudCAxIHwgSW4gUHJvY2VzcyB8IExhc3QgVXBkYXRlZDogMTMsIFNlcHRlbWJlciwgMjAyM1xuQ29uc2lnbm1lbnQgMiB8IFRyYWNraW5nIE51bWJlcjogNTY1NzQ3NCB8IEVzdGltYXRlZCBEZWxpdmVyeTogMjIsIFNlcHRlbWJlciwgMjAyM1xuICAtLT5cbiAgPGRpdlxuICAgIGNsYXNzPVwiY3gtY29uc2lnbm1lbnQtaW5mb1wiXG4gICAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAgICdteUFjY291bnRWMk9yZGVySGlzdG9yeS5jb25zaWdubWVudERldGFpbExhYmVsJyB8IGN4VHJhbnNsYXRlXG4gICAgXCJcbiAgICAqbmdJZj1cImNvbnNpZ25tZW50XCJcbiAgPlxuICAgIDxzcGFuXG4gICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIlxuICAgICAgICAnbXlBY2NvdW50VjJPcmRlckhpc3RvcnkuY29uc2lnbm1lbnROdW1iZXJMYWJlbCcgfCBjeFRyYW5zbGF0ZVxuICAgICAgXCJcbiAgICA+XG4gICAgICB7e1xuICAgICAgICAnbXlBY2NvdW50VjJPcmRlckhpc3RvcnkuY29uc2lnbm1lbnRDb2RlJ1xuICAgICAgICAgIHwgY3hUcmFuc2xhdGU6IHsgcGFyYW06IGkgKyAxIH1cbiAgICAgIH19XG4gICAgPC9zcGFuPlxuICAgIHxcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29uc2lnbm1lbnQudHJhY2tpbmdJRDsgZWxzZSBzaG93TGFzdFVwZGF0ZWRcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb25zaWdubWVudC5jb25zaWdubWVudFRyYWNraW5nIGFzIHRyYWNraW5nXCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAgICAgICAgICdvcmRlckRldGFpbHMuY29uc2lnbm1lbnRUcmFja2luZy5kaWFsb2cudHJhY2tpbmdJZCcgfCBjeFRyYW5zbGF0ZVxuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICB7e1xuICAgICAgICAgICAgJ29yZGVyRGV0YWlscy5jb25zaWdubWVudFRyYWNraW5nLmRpYWxvZy50cmFja2luZ0lkJyB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgfX06XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRyYWNraW5nLnRyYWNraW5nVXJsOyBlbHNlIHNob3dOdW1iZXJcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzPVwiY3gtdHJhY2tpbmctaWRcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgW2hyZWZdPVwidHJhY2tpbmcudHJhY2tpbmdVcmxcIlxuICAgICAgICAgICAgICA+e3sgdHJhY2tpbmcudHJhY2tpbmdJRCB9fTwvYVxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIHxcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhblxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiXG4gICAgICAgICAgICAnbXlBY2NvdW50VjJPcmRlckhpc3RvcnkuZXN0aW1hdGVEZWxpdmVyeUxhYmVsJyB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7XG4gICAgICAgICAgICAnb3JkZXJEZXRhaWxzLmNvbnNpZ25tZW50VHJhY2tpbmcuZGlhbG9nLmVzdGltYXRlJyB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgfX06XG4gICAgICAgICAge3sgdHJhY2tpbmcudGFyZ2V0QXJyaXZhbERhdGUgfCBjeERhdGU6ICdkLCBNTU1NLCB5eXl5JyB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjc2hvd051bWJlcj5cbiAgICAgICAgICB7eyB0cmFja2luZy50cmFja2luZ0lEIH19XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8bmctdGVtcGxhdGUgI3Nob3dMYXN0VXBkYXRlZD5cbiAgICAgIDxzcGFuXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiXG4gICAgICAgICAgJ215QWNjb3VudFYyT3JkZXJIaXN0b3J5LmNvbnNpZ25tZW50U3RhdHVzTGFiZWwnIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgXCJcbiAgICAgICAgKm5nSWY9XCJjb25zaWdubWVudC5zdGF0dXNcIlxuICAgICAgPlxuICAgICAgICB7e1xuICAgICAgICAgICdvcmRlckRldGFpbHMuZGVsaXZlcnlTdGF0dXNfJyArIGNvbnNpZ25tZW50Py5zdGF0dXM/LnRvVXBwZXJDYXNlKClcbiAgICAgICAgICAgIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgfX1cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxzcGFuXG4gICAgICAgICpuZ0lmPVwiY29uc2lnbm1lbnQuc3RhdHVzRGF0ZVwiXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiXG4gICAgICAgICAgJ215QWNjb3VudFYyT3JkZXJIaXN0b3J5LmNvbnNpZ25tZW50U3RhdHVzRGF0ZUxhYmVsJyB8IGN4VHJhbnNsYXRlXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIHxcbiAgICAgICAge3tcbiAgICAgICAgICAnbXlBY2NvdW50VjJPcmRlckhpc3Rvcnkuc3RhdHVzRGF0ZSdcbiAgICAgICAgICAgIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgICAgICAgOiB7IHBhcmFtOiBjb25zaWdubWVudC5zdGF0dXNEYXRlIHwgY3hEYXRlOiAnZCwgTU1NTSwgeXl5eScgfVxuICAgICAgICB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=