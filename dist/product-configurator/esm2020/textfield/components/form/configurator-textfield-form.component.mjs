/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component } from '@angular/core';
import { CommonConfigurator, ConfiguratorRouter, } from '@spartacus/product-configurator/common';
import { map, switchMap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../core/facade/configurator-textfield.service";
import * as i2 from "@spartacus/product-configurator/common";
import * as i3 from "@angular/common";
import * as i4 from "../input-field/configurator-textfield-input-field.component";
import * as i5 from "../input-field-readonly/configurator-textfield-input-field-readonly.component";
import * as i6 from "../add-to-cart-button/configurator-textfield-add-to-cart-button.component";
import * as i7 from "@spartacus/core";
export class ConfiguratorTextfieldFormComponent {
    constructor(configuratorTextfieldService, configRouterExtractorService) {
        this.configuratorTextfieldService = configuratorTextfieldService;
        this.configRouterExtractorService = configRouterExtractorService;
        this.configuration$ = this.configRouterExtractorService.extractRouterData().pipe(switchMap((routerData) => {
            switch (routerData.owner.type) {
                case CommonConfigurator.OwnerType.PRODUCT:
                    return this.configuratorTextfieldService.createConfiguration(routerData.owner);
                case CommonConfigurator.OwnerType.CART_ENTRY:
                    return this.configuratorTextfieldService.readConfigurationForCartEntry(routerData.owner);
                case CommonConfigurator.OwnerType.ORDER_ENTRY:
                    return this.configuratorTextfieldService.readConfigurationForOrderEntry(routerData.owner);
            }
        }));
        this.isEditable$ = this.configRouterExtractorService
            .extractRouterData()
            .pipe(map((routerData) => routerData.pageType === ConfiguratorRouter.PageType.CONFIGURATION));
    }
    /**
     * Updates a configuration attribute
     * @param attribute - Configuration attribute, always containing a string typed value
     */
    updateConfiguration(attribute) {
        this.configuratorTextfieldService.updateConfiguration(attribute);
    }
}
ConfiguratorTextfieldFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ConfiguratorTextfieldFormComponent, deps: [{ token: i1.ConfiguratorTextfieldService }, { token: i2.ConfiguratorRouterExtractorService }], target: i0.ɵɵFactoryTarget.Component });
ConfiguratorTextfieldFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ConfiguratorTextfieldFormComponent, selector: "cx-configurator-textfield-form", ngImport: i0, template: "<ng-container *ngIf=\"configuration$ | async as configuration\">\n  <ng-container *ngIf=\"isEditable$ | async as isEditable; else readonly\">\n    <span class=\"cx-visually-hidden\">\n      {{ 'configurator.a11y.editAttributesAndValues' | cxTranslate }}\n    </span>\n    <div\n      class=\"cx-attribute\"\n      *ngFor=\"let attribute of configuration.configurationInfos\"\n    >\n      <cx-configurator-textfield-input-field\n        [attribute]=\"attribute\"\n        (inputChange)=\"updateConfiguration($event)\"\n      ></cx-configurator-textfield-input-field>\n    </div>\n\n    <cx-configurator-textfield-add-to-cart-button\n      [configuration]=\"configuration\"\n    ></cx-configurator-textfield-add-to-cart-button>\n  </ng-container>\n  <ng-template #readonly>\n    <span class=\"cx-visually-hidden\">\n      {{ 'configurator.a11y.listOfAttributesAndValues' | cxTranslate }}\n    </span>\n    <div\n      class=\"cx-attribute\"\n      *ngFor=\"let attribute of configuration.configurationInfos\"\n    >\n      <cx-configurator-textfield-input-field-readonly\n        [attribute]=\"attribute\"\n      ></cx-configurator-textfield-input-field-readonly>\n    </div>\n  </ng-template>\n</ng-container>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.ConfiguratorTextfieldInputFieldComponent, selector: "cx-configurator-textfield-input-field", inputs: ["attribute"], outputs: ["inputChange"] }, { kind: "component", type: i5.ConfiguratorTextfieldInputFieldReadonlyComponent, selector: "cx-configurator-textfield-input-field-readonly", inputs: ["attribute"] }, { kind: "component", type: i6.ConfiguratorTextfieldAddToCartButtonComponent, selector: "cx-configurator-textfield-add-to-cart-button", inputs: ["configuration", "productCode"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i7.TranslatePipe, name: "cxTranslate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ConfiguratorTextfieldFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-configurator-textfield-form', template: "<ng-container *ngIf=\"configuration$ | async as configuration\">\n  <ng-container *ngIf=\"isEditable$ | async as isEditable; else readonly\">\n    <span class=\"cx-visually-hidden\">\n      {{ 'configurator.a11y.editAttributesAndValues' | cxTranslate }}\n    </span>\n    <div\n      class=\"cx-attribute\"\n      *ngFor=\"let attribute of configuration.configurationInfos\"\n    >\n      <cx-configurator-textfield-input-field\n        [attribute]=\"attribute\"\n        (inputChange)=\"updateConfiguration($event)\"\n      ></cx-configurator-textfield-input-field>\n    </div>\n\n    <cx-configurator-textfield-add-to-cart-button\n      [configuration]=\"configuration\"\n    ></cx-configurator-textfield-add-to-cart-button>\n  </ng-container>\n  <ng-template #readonly>\n    <span class=\"cx-visually-hidden\">\n      {{ 'configurator.a11y.listOfAttributesAndValues' | cxTranslate }}\n    </span>\n    <div\n      class=\"cx-attribute\"\n      *ngFor=\"let attribute of configuration.configurationInfos\"\n    >\n      <cx-configurator-textfield-input-field-readonly\n        [attribute]=\"attribute\"\n      ></cx-configurator-textfield-input-field-readonly>\n    </div>\n  </ng-template>\n</ng-container>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ConfiguratorTextfieldService }, { type: i2.ConfiguratorRouterExtractorService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdG9yLXRleHRmaWVsZC1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9wcm9kdWN0LWNvbmZpZ3VyYXRvci90ZXh0ZmllbGQvY29tcG9uZW50cy9mb3JtL2NvbmZpZ3VyYXRvci10ZXh0ZmllbGQtZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvcHJvZHVjdC1jb25maWd1cmF0b3IvdGV4dGZpZWxkL2NvbXBvbmVudHMvZm9ybS9jb25maWd1cmF0b3ItdGV4dGZpZWxkLWZvcm0uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixrQkFBa0IsR0FFbkIsTUFBTSx3Q0FBd0MsQ0FBQztBQUVoRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7QUFRaEQsTUFBTSxPQUFPLGtDQUFrQztJQThCN0MsWUFDWSw0QkFBMEQsRUFDMUQsNEJBQWdFO1FBRGhFLGlDQUE0QixHQUE1Qiw0QkFBNEIsQ0FBOEI7UUFDMUQsaUNBQTRCLEdBQTVCLDRCQUE0QixDQUFvQztRQS9CNUUsbUJBQWMsR0FDWixJQUFJLENBQUMsNEJBQTRCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQ3hELFNBQVMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3ZCLFFBQVEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7Z0JBQzdCLEtBQUssa0JBQWtCLENBQUMsU0FBUyxDQUFDLE9BQU87b0JBQ3ZDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLG1CQUFtQixDQUMxRCxVQUFVLENBQUMsS0FBSyxDQUNqQixDQUFDO2dCQUNKLEtBQUssa0JBQWtCLENBQUMsU0FBUyxDQUFDLFVBQVU7b0JBQzFDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLDZCQUE2QixDQUNwRSxVQUFVLENBQUMsS0FBSyxDQUNqQixDQUFDO2dCQUNKLEtBQUssa0JBQWtCLENBQUMsU0FBUyxDQUFDLFdBQVc7b0JBQzNDLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixDQUFDLDhCQUE4QixDQUNyRSxVQUFVLENBQUMsS0FBSyxDQUNqQixDQUFDO2FBQ0w7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUosZ0JBQVcsR0FBd0IsSUFBSSxDQUFDLDRCQUE0QjthQUNqRSxpQkFBaUIsRUFBRTthQUNuQixJQUFJLENBQ0gsR0FBRyxDQUNELENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FDYixVQUFVLENBQUMsUUFBUSxLQUFLLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQ3BFLENBQ0YsQ0FBQztJQUtELENBQUM7SUFFSjs7O09BR0c7SUFDSCxtQkFBbUIsQ0FDakIsU0FBa0Q7UUFFbEQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7OytIQTNDVSxrQ0FBa0M7bUhBQWxDLGtDQUFrQyxzRUNyQi9DLDZyQ0FpQ0E7MkZEWmEsa0NBQWtDO2tCQUo5QyxTQUFTOytCQUNFLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29tbW9uQ29uZmlndXJhdG9yLFxuICBDb25maWd1cmF0b3JSb3V0ZXIsXG4gIENvbmZpZ3VyYXRvclJvdXRlckV4dHJhY3RvclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvcHJvZHVjdC1jb25maWd1cmF0b3IvY29tbW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdG9yVGV4dGZpZWxkU2VydmljZSB9IGZyb20gJy4uLy4uL2NvcmUvZmFjYWRlL2NvbmZpZ3VyYXRvci10ZXh0ZmllbGQuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0b3JUZXh0ZmllbGQgfSBmcm9tICcuLi8uLi9jb3JlL21vZGVsL2NvbmZpZ3VyYXRvci10ZXh0ZmllbGQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb25maWd1cmF0b3ItdGV4dGZpZWxkLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlndXJhdG9yLXRleHRmaWVsZC1mb3JtLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdG9yVGV4dGZpZWxkRm9ybUNvbXBvbmVudCB7XG4gIGNvbmZpZ3VyYXRpb24kOiBPYnNlcnZhYmxlPENvbmZpZ3VyYXRvclRleHRmaWVsZC5Db25maWd1cmF0aW9uPiA9XG4gICAgdGhpcy5jb25maWdSb3V0ZXJFeHRyYWN0b3JTZXJ2aWNlLmV4dHJhY3RSb3V0ZXJEYXRhKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocm91dGVyRGF0YSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHJvdXRlckRhdGEub3duZXIudHlwZSkge1xuICAgICAgICAgIGNhc2UgQ29tbW9uQ29uZmlndXJhdG9yLk93bmVyVHlwZS5QUk9EVUNUOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdG9yVGV4dGZpZWxkU2VydmljZS5jcmVhdGVDb25maWd1cmF0aW9uKFxuICAgICAgICAgICAgICByb3V0ZXJEYXRhLm93bmVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgIGNhc2UgQ29tbW9uQ29uZmlndXJhdG9yLk93bmVyVHlwZS5DQVJUX0VOVFJZOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlndXJhdG9yVGV4dGZpZWxkU2VydmljZS5yZWFkQ29uZmlndXJhdGlvbkZvckNhcnRFbnRyeShcbiAgICAgICAgICAgICAgcm91dGVyRGF0YS5vd25lclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICBjYXNlIENvbW1vbkNvbmZpZ3VyYXRvci5Pd25lclR5cGUuT1JERVJfRU5UUlk6XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25maWd1cmF0b3JUZXh0ZmllbGRTZXJ2aWNlLnJlYWRDb25maWd1cmF0aW9uRm9yT3JkZXJFbnRyeShcbiAgICAgICAgICAgICAgcm91dGVyRGF0YS5vd25lclxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gIGlzRWRpdGFibGUkOiBPYnNlcnZhYmxlPGJvb2xlYW4+ID0gdGhpcy5jb25maWdSb3V0ZXJFeHRyYWN0b3JTZXJ2aWNlXG4gICAgLmV4dHJhY3RSb3V0ZXJEYXRhKClcbiAgICAucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgKHJvdXRlckRhdGEpID0+XG4gICAgICAgICAgcm91dGVyRGF0YS5wYWdlVHlwZSA9PT0gQ29uZmlndXJhdG9yUm91dGVyLlBhZ2VUeXBlLkNPTkZJR1VSQVRJT05cbiAgICAgIClcbiAgICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWd1cmF0b3JUZXh0ZmllbGRTZXJ2aWNlOiBDb25maWd1cmF0b3JUZXh0ZmllbGRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb25maWdSb3V0ZXJFeHRyYWN0b3JTZXJ2aWNlOiBDb25maWd1cmF0b3JSb3V0ZXJFeHRyYWN0b3JTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogVXBkYXRlcyBhIGNvbmZpZ3VyYXRpb24gYXR0cmlidXRlXG4gICAqIEBwYXJhbSBhdHRyaWJ1dGUgLSBDb25maWd1cmF0aW9uIGF0dHJpYnV0ZSwgYWx3YXlzIGNvbnRhaW5pbmcgYSBzdHJpbmcgdHlwZWQgdmFsdWVcbiAgICovXG4gIHVwZGF0ZUNvbmZpZ3VyYXRpb24oXG4gICAgYXR0cmlidXRlOiBDb25maWd1cmF0b3JUZXh0ZmllbGQuQ29uZmlndXJhdGlvbkluZm9cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5jb25maWd1cmF0b3JUZXh0ZmllbGRTZXJ2aWNlLnVwZGF0ZUNvbmZpZ3VyYXRpb24oYXR0cmlidXRlKTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImNvbmZpZ3VyYXRpb24kIHwgYXN5bmMgYXMgY29uZmlndXJhdGlvblwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNFZGl0YWJsZSQgfCBhc3luYyBhcyBpc0VkaXRhYmxlOyBlbHNlIHJlYWRvbmx5XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJjeC12aXN1YWxseS1oaWRkZW5cIj5cbiAgICAgIHt7ICdjb25maWd1cmF0b3IuYTExeS5lZGl0QXR0cmlidXRlc0FuZFZhbHVlcycgfCBjeFRyYW5zbGF0ZSB9fVxuICAgIDwvc3Bhbj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImN4LWF0dHJpYnV0ZVwiXG4gICAgICAqbmdGb3I9XCJsZXQgYXR0cmlidXRlIG9mIGNvbmZpZ3VyYXRpb24uY29uZmlndXJhdGlvbkluZm9zXCJcbiAgICA+XG4gICAgICA8Y3gtY29uZmlndXJhdG9yLXRleHRmaWVsZC1pbnB1dC1maWVsZFxuICAgICAgICBbYXR0cmlidXRlXT1cImF0dHJpYnV0ZVwiXG4gICAgICAgIChpbnB1dENoYW5nZSk9XCJ1cGRhdGVDb25maWd1cmF0aW9uKCRldmVudClcIlxuICAgICAgPjwvY3gtY29uZmlndXJhdG9yLXRleHRmaWVsZC1pbnB1dC1maWVsZD5cbiAgICA8L2Rpdj5cblxuICAgIDxjeC1jb25maWd1cmF0b3ItdGV4dGZpZWxkLWFkZC10by1jYXJ0LWJ1dHRvblxuICAgICAgW2NvbmZpZ3VyYXRpb25dPVwiY29uZmlndXJhdGlvblwiXG4gICAgPjwvY3gtY29uZmlndXJhdG9yLXRleHRmaWVsZC1hZGQtdG8tY2FydC1idXR0b24+XG4gIDwvbmctY29udGFpbmVyPlxuICA8bmctdGVtcGxhdGUgI3JlYWRvbmx5PlxuICAgIDxzcGFuIGNsYXNzPVwiY3gtdmlzdWFsbHktaGlkZGVuXCI+XG4gICAgICB7eyAnY29uZmlndXJhdG9yLmExMXkubGlzdE9mQXR0cmlidXRlc0FuZFZhbHVlcycgfCBjeFRyYW5zbGF0ZSB9fVxuICAgIDwvc3Bhbj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImN4LWF0dHJpYnV0ZVwiXG4gICAgICAqbmdGb3I9XCJsZXQgYXR0cmlidXRlIG9mIGNvbmZpZ3VyYXRpb24uY29uZmlndXJhdGlvbkluZm9zXCJcbiAgICA+XG4gICAgICA8Y3gtY29uZmlndXJhdG9yLXRleHRmaWVsZC1pbnB1dC1maWVsZC1yZWFkb25seVxuICAgICAgICBbYXR0cmlidXRlXT1cImF0dHJpYnV0ZVwiXG4gICAgICA+PC9jeC1jb25maWd1cmF0b3ItdGV4dGZpZWxkLWlucHV0LWZpZWxkLXJlYWRvbmx5PlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuPC9uZy1jb250YWluZXI+XG4iXX0=