/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@spartacus/storefront";
import * as i3 from "@spartacus/core";
export class AsmCustomer360ProductItemComponent {
    constructor() {
        this.isOrderEntry = true;
        this.selectProduct = new EventEmitter();
    }
}
AsmCustomer360ProductItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AsmCustomer360ProductItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AsmCustomer360ProductItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: AsmCustomer360ProductItemComponent, selector: "cx-asm-customer-360-product-item", inputs: { product: "product", quantity: "quantity", isOrderEntry: "isOrderEntry" }, outputs: { selectProduct: "selectProduct" }, ngImport: i0, template: "<button\n  class=\"cx-asm-customer-360-product-item-media link\"\n  [attr.aria-label]=\"product?.name\"\n  (click)=\"selectProduct.emit(product)\"\n>\n  <cx-media\n    [container]=\"product?.images?.PRIMARY\"\n    format=\"product\"\n    [alt]=\"product?.name ?? ''\"\n  ></cx-media>\n</button>\n<div class=\"cx-asm-customer-360-product-item-content\">\n  <button\n    [attr.aria-label]=\"product?.name\"\n    (click)=\"selectProduct.emit(product)\"\n    class=\"cx-asm-customer-360-product-item-name link\"\n  >\n    <span title=\"{{ product?.name }}\">{{ product?.name }}</span>\n  </button>\n  <ng-container *ngIf=\"isOrderEntry; else notOrderEntryTemplate\">\n    <div class=\"cx-asm-customer-360-product-item-code\">\n      {{ product?.code }}\n    </div>\n    <div class=\"cx-asm-customer-360-product-item-quantity\" *ngIf=\"quantity\">\n      {{\n        'asmCustomer360.productItem.quantity' | cxTranslate: { count: quantity }\n      }}\n    </div>\n    <div class=\"cx-asm-customer-360-product-item-price\">\n      {{\n        'asmCustomer360.productItem.itemPrice'\n          | cxTranslate\n            : { price: product?.basePrice ?? product?.price?.formattedValue }\n      }}\n    </div>\n  </ng-container>\n  <ng-template #notOrderEntryTemplate>\n    <div\n      class=\"cx-asm-customer-360-product-item-out-of-stock\"\n      *ngIf=\"product.stock?.stockLevelStatus === 'outOfStock'\"\n    >\n      {{ 'asmCustomer360.productItem.outOfStock' | cxTranslate }}\n    </div>\n  </ng-template>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2.MediaComponent, selector: "cx-media", inputs: ["container", "format", "alt", "role", "loading"], outputs: ["loaded"] }, { kind: "pipe", type: i3.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AsmCustomer360ProductItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-asm-customer-360-product-item', changeDetection: ChangeDetectionStrategy.OnPush, template: "<button\n  class=\"cx-asm-customer-360-product-item-media link\"\n  [attr.aria-label]=\"product?.name\"\n  (click)=\"selectProduct.emit(product)\"\n>\n  <cx-media\n    [container]=\"product?.images?.PRIMARY\"\n    format=\"product\"\n    [alt]=\"product?.name ?? ''\"\n  ></cx-media>\n</button>\n<div class=\"cx-asm-customer-360-product-item-content\">\n  <button\n    [attr.aria-label]=\"product?.name\"\n    (click)=\"selectProduct.emit(product)\"\n    class=\"cx-asm-customer-360-product-item-name link\"\n  >\n    <span title=\"{{ product?.name }}\">{{ product?.name }}</span>\n  </button>\n  <ng-container *ngIf=\"isOrderEntry; else notOrderEntryTemplate\">\n    <div class=\"cx-asm-customer-360-product-item-code\">\n      {{ product?.code }}\n    </div>\n    <div class=\"cx-asm-customer-360-product-item-quantity\" *ngIf=\"quantity\">\n      {{\n        'asmCustomer360.productItem.quantity' | cxTranslate: { count: quantity }\n      }}\n    </div>\n    <div class=\"cx-asm-customer-360-product-item-price\">\n      {{\n        'asmCustomer360.productItem.itemPrice'\n          | cxTranslate\n            : { price: product?.basePrice ?? product?.price?.formattedValue }\n      }}\n    </div>\n  </ng-container>\n  <ng-template #notOrderEntryTemplate>\n    <div\n      class=\"cx-asm-customer-360-product-item-out-of-stock\"\n      *ngIf=\"product.stock?.stockLevelStatus === 'outOfStock'\"\n    >\n      {{ 'asmCustomer360.productItem.outOfStock' | cxTranslate }}\n    </div>\n  </ng-template>\n</div>\n" }]
        }], propDecorators: { product: [{
                type: Input
            }], quantity: [{
                type: Input
            }], isOrderEntry: [{
                type: Input
            }], selectProduct: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWN1c3RvbWVyLTM2MC1wcm9kdWN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL2FzbS9jdXN0b21lci0zNjAvY29tcG9uZW50cy9hc20tY3VzdG9tZXItMzYwLXByb2R1Y3QtaXRlbS9hc20tY3VzdG9tZXItMzYwLXByb2R1Y3QtaXRlbS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvYXNtL2N1c3RvbWVyLTM2MC9jb21wb25lbnRzL2FzbS1jdXN0b21lci0zNjAtcHJvZHVjdC1pdGVtL2FzbS1jdXN0b21lci0zNjAtcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFTdkIsTUFBTSxPQUFPLGtDQUFrQztJQUwvQztRQVFXLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztLQUN2RDs7K0hBTFksa0NBQWtDO21IQUFsQyxrQ0FBa0MseU1DckIvQywwK0NBNkNBOzJGRHhCYSxrQ0FBa0M7a0JBTDlDLFNBQVM7K0JBQ0Usa0NBQWtDLG1CQUUzQix1QkFBdUIsQ0FBQyxNQUFNOzhCQUd0QyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNJLGFBQWE7c0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0SXRlbSB9IGZyb20gJy4uL2FzbS1jdXN0b21lci0zNjAtcHJvZHVjdC1saXN0aW5nL3Byb2R1Y3QtaXRlbS5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFzbS1jdXN0b21lci0zNjAtcHJvZHVjdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FzbS1jdXN0b21lci0zNjAtcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFzbUN1c3RvbWVyMzYwUHJvZHVjdEl0ZW1Db21wb25lbnQge1xuICBASW5wdXQoKSBwcm9kdWN0OiBQcm9kdWN0SXRlbTtcbiAgQElucHV0KCkgcXVhbnRpdHk6IG51bWJlcjtcbiAgQElucHV0KCkgaXNPcmRlckVudHJ5ID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHNlbGVjdFByb2R1Y3QgPSBuZXcgRXZlbnRFbWl0dGVyPFByb2R1Y3Q+KCk7XG59XG4iLCI8YnV0dG9uXG4gIGNsYXNzPVwiY3gtYXNtLWN1c3RvbWVyLTM2MC1wcm9kdWN0LWl0ZW0tbWVkaWEgbGlua1wiXG4gIFthdHRyLmFyaWEtbGFiZWxdPVwicHJvZHVjdD8ubmFtZVwiXG4gIChjbGljayk9XCJzZWxlY3RQcm9kdWN0LmVtaXQocHJvZHVjdClcIlxuPlxuICA8Y3gtbWVkaWFcbiAgICBbY29udGFpbmVyXT1cInByb2R1Y3Q/LmltYWdlcz8uUFJJTUFSWVwiXG4gICAgZm9ybWF0PVwicHJvZHVjdFwiXG4gICAgW2FsdF09XCJwcm9kdWN0Py5uYW1lID8/ICcnXCJcbiAgPjwvY3gtbWVkaWE+XG48L2J1dHRvbj5cbjxkaXYgY2xhc3M9XCJjeC1hc20tY3VzdG9tZXItMzYwLXByb2R1Y3QtaXRlbS1jb250ZW50XCI+XG4gIDxidXR0b25cbiAgICBbYXR0ci5hcmlhLWxhYmVsXT1cInByb2R1Y3Q/Lm5hbWVcIlxuICAgIChjbGljayk9XCJzZWxlY3RQcm9kdWN0LmVtaXQocHJvZHVjdClcIlxuICAgIGNsYXNzPVwiY3gtYXNtLWN1c3RvbWVyLTM2MC1wcm9kdWN0LWl0ZW0tbmFtZSBsaW5rXCJcbiAgPlxuICAgIDxzcGFuIHRpdGxlPVwie3sgcHJvZHVjdD8ubmFtZSB9fVwiPnt7IHByb2R1Y3Q/Lm5hbWUgfX08L3NwYW4+XG4gIDwvYnV0dG9uPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNPcmRlckVudHJ5OyBlbHNlIG5vdE9yZGVyRW50cnlUZW1wbGF0ZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjeC1hc20tY3VzdG9tZXItMzYwLXByb2R1Y3QtaXRlbS1jb2RlXCI+XG4gICAgICB7eyBwcm9kdWN0Py5jb2RlIH19XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImN4LWFzbS1jdXN0b21lci0zNjAtcHJvZHVjdC1pdGVtLXF1YW50aXR5XCIgKm5nSWY9XCJxdWFudGl0eVwiPlxuICAgICAge3tcbiAgICAgICAgJ2FzbUN1c3RvbWVyMzYwLnByb2R1Y3RJdGVtLnF1YW50aXR5JyB8IGN4VHJhbnNsYXRlOiB7IGNvdW50OiBxdWFudGl0eSB9XG4gICAgICB9fVxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjeC1hc20tY3VzdG9tZXItMzYwLXByb2R1Y3QtaXRlbS1wcmljZVwiPlxuICAgICAge3tcbiAgICAgICAgJ2FzbUN1c3RvbWVyMzYwLnByb2R1Y3RJdGVtLml0ZW1QcmljZSdcbiAgICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICA6IHsgcHJpY2U6IHByb2R1Y3Q/LmJhc2VQcmljZSA/PyBwcm9kdWN0Py5wcmljZT8uZm9ybWF0dGVkVmFsdWUgfVxuICAgICAgfX1cbiAgICA8L2Rpdj5cbiAgPC9uZy1jb250YWluZXI+XG4gIDxuZy10ZW1wbGF0ZSAjbm90T3JkZXJFbnRyeVRlbXBsYXRlPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiY3gtYXNtLWN1c3RvbWVyLTM2MC1wcm9kdWN0LWl0ZW0tb3V0LW9mLXN0b2NrXCJcbiAgICAgICpuZ0lmPVwicHJvZHVjdC5zdG9jaz8uc3RvY2tMZXZlbFN0YXR1cyA9PT0gJ291dE9mU3RvY2snXCJcbiAgICA+XG4gICAgICB7eyAnYXNtQ3VzdG9tZXIzNjAucHJvZHVjdEl0ZW0ub3V0T2ZTdG9jaycgfCBjeFRyYW5zbGF0ZSB9fVxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9kaXY+XG4iXX0=