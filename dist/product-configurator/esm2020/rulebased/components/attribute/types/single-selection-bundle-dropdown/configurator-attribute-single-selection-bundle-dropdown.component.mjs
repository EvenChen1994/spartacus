/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, Optional, } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Configurator } from '../../../../core/model/configurator.model';
import { ConfiguratorAttributeSingleSelectionBaseComponent } from '../base/configurator-attribute-single-selection-base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../quantity/configurator-attribute-quantity.service";
import * as i2 from "@spartacus/core";
import * as i3 from "../../composition/configurator-attribute-composition.model";
import * as i4 from "../../../../core/facade/configurator-commons.service";
import * as i5 from "../../../service/configurator-storefront-utils.service";
import * as i6 from "@angular/common";
import * as i7 from "../../product-card/configurator-attribute-product-card.component";
import * as i8 from "@angular/forms";
import * as i9 from "@spartacus/storefront";
import * as i10 from "../../quantity/configurator-attribute-quantity.component";
import * as i11 from "../../../price/configurator-price.component";
export class ConfiguratorAttributeSingleSelectionBundleDropdownComponent extends ConfiguratorAttributeSingleSelectionBaseComponent {
    constructor(quantityService, translation, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService) {
        super(quantityService, translation, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService);
        this.quantityService = quantityService;
        this.translation = translation;
        this.attributeComponentContext = attributeComponentContext;
        this.configuratorCommonsService = configuratorCommonsService;
        this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
        this.RETRACT_VALUE_CODE = Configurator.RetractValueCode;
        this.attributeDropDownForm = new UntypedFormControl('');
        this.group = attributeComponentContext.group.id;
    }
    ngOnInit() {
        this.attributeDropDownForm.setValue(this.attribute.selectedSingleValue);
        const values = this.attribute.values;
        if (values && values.length > 0) {
            const selectedValue = values.find((value) => value.selected);
            if (selectedValue) {
                this.selectionValue = selectedValue;
            }
        }
    }
    /**
     * Returns selected value. We assume that when this method is called,
     * a selection has been made before. In case this assumption is false,
     * an error is thrown
     * @returns selected value
     */
    get selectedValue() {
        let selectedValue;
        if (this.selectionValue) {
            selectedValue = this.selectionValue;
        }
        else {
            throw new Error('selectedValue called without a defined selectionValue');
        }
        return selectedValue;
    }
    /**
     * Extract corresponding product card parameters
     *
     * @return {ConfiguratorAttributeProductCardComponentOptions} - New product card options
     */
    extractProductCardParameters() {
        return {
            hideRemoveButton: true,
            productBoundValue: this.selectedValue,
            singleDropdown: true,
            withQuantity: false,
            loading$: this.loading$,
            attributeId: this.getAttributeCode(this.attribute),
            attributeName: this.attribute.name,
            itemCount: 0,
            itemIndex: 0,
        };
    }
    /**
     * Verifies whether a selection value is defined and its value code is not a retract one.
     *
     * @returns {boolean} - 'True' if a selection value is defined and its value code is not a retract one, otherwise 'false'.
     */
    isNotRetractValue() {
        return ((this.selectionValue &&
            this.selectionValue?.valueCode !== Configurator.RetractValueCode) ??
            false);
    }
    /**
     * Verifies whether a value code is a retract one.
     *
     * @param {string} valueCode - Value code
     * @returns {boolean} - 'True' if a value code is a retract one, otherwise 'false'.
     */
    isRetractValue(valueCode) {
        return valueCode === Configurator.RetractValueCode;
    }
}
ConfiguratorAttributeSingleSelectionBundleDropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ConfiguratorAttributeSingleSelectionBundleDropdownComponent, deps: [{ token: i1.ConfiguratorAttributeQuantityService }, { token: i2.TranslationService }, { token: i3.ConfiguratorAttributeCompositionContext }, { token: i4.ConfiguratorCommonsService }, { token: i5.ConfiguratorStorefrontUtilsService, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ConfiguratorAttributeSingleSelectionBundleDropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ConfiguratorAttributeSingleSelectionBundleDropdownComponent, selector: "cx-configurator-attribute-single-selection-bundle-dropdown", usesInheritance: true, ngImport: i0, template: "<div class=\"form-group\" *ngIf=\"attribute?.values?.length\">\n  <label\n    for=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n    class=\"cx-visually-hidden\"\n  >\n    {{\n      'configurator.a11y.listbox'\n        | cxTranslate\n          : {\n              count: attribute.values?.length\n            }\n    }}\n  </label>\n  <ng-container *cxFeatureLevel=\"'!6.2'\">\n    <select\n      id=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n      class=\"form-control\"\n      [formControl]=\"attributeDropDownForm\"\n      [cxFocus]=\"{ key: attribute.name }\"\n      (change)=\"onSelect(attributeDropDownForm.value)\"\n      [attr.aria-describedby]=\"createAttributeUiKey('label', attribute.name)\"\n    >\n      <option\n        *ngFor=\"let item of attribute.values\"\n        [label]=\"getLabel(false, item.valueDisplay, undefined, item)\"\n        [selected]=\"item.selected\"\n        [value]=\"item.valueCode\"\n        [attr.aria-label]=\"\n          isRetractValue(item.valueCode)\n            ? ('configurator.a11y.forAttribute'\n              | cxTranslate\n                : { value: item.valueDisplay, attribute: attribute.label })\n            : item.valuePrice && item.valuePrice?.value !== 0\n            ? ('configurator.a11y.selectedValueOfAttributeFullWithPrice'\n              | cxTranslate\n                : {\n                    value: item.valueDisplay,\n                    attribute: attribute.label,\n                    price: item.valuePriceTotal?.formattedValue ?? 0\n                  })\n            : ('configurator.a11y.selectedValueOfAttributeFull'\n              | cxTranslate\n                : { value: item.valueDisplay, attribute: attribute.label })\n        \"\n        [value]=\"item.valueCode\"\n      >\n        {{ getLabel(false, item.valueDisplay, undefined, item) }}\n      </option>\n    </select>\n  </ng-container>\n  <ng-container *cxFeatureLevel=\"'6.2'\">\n    <select\n      id=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n      class=\"form-control\"\n      [ngClass]=\"{\n        'cx-required-error-msg ': (showRequiredErrorMessage$ | async)\n      }\"\n      [formControl]=\"attributeDropDownForm\"\n      [cxFocus]=\"{ key: attribute.name }\"\n      (change)=\"onSelect(attributeDropDownForm.value)\"\n      [attr.aria-describedby]=\"createAttributeUiKey('label', attribute.name)\"\n    >\n      <option\n        *ngFor=\"let item of attribute.values\"\n        [label]=\"getLabel(false, item.valueDisplay, undefined, item)\"\n        [selected]=\"item.selected\"\n        [value]=\"item.valueCode\"\n        [attr.aria-label]=\"\n          isRetractValue(item.valueCode)\n            ? ('configurator.a11y.forAttribute'\n              | cxTranslate\n                : { value: item.valueDisplay, attribute: attribute.label })\n            : item.valuePrice && item.valuePrice?.value !== 0\n            ? ('configurator.a11y.selectedValueOfAttributeFullWithPrice'\n              | cxTranslate\n                : {\n                    value: item.valueDisplay,\n                    attribute: attribute.label,\n                    price: item.valuePriceTotal?.formattedValue ?? 0\n                  })\n            : ('configurator.a11y.selectedValueOfAttributeFull'\n              | cxTranslate\n                : { value: item.valueDisplay, attribute: attribute.label })\n        \"\n        [value]=\"item.valueCode\"\n      >\n        {{ getLabel(false, item.valueDisplay, undefined, item) }}\n      </option>\n    </select>\n  </ng-container>\n</div>\n\n<cx-configurator-attribute-product-card\n  *ngIf=\"isNotRetractValue()\"\n  id=\"{{\n    createAttributeValueIdForConfigurator(attribute, selectedValue.valueCode)\n  }}\"\n  (handleDeselect)=\"onSelect(RETRACT_VALUE_CODE)\"\n  [productCardOptions]=\"extractProductCardParameters()\"\n>\n</cx-configurator-attribute-product-card>\n\n<div *ngIf=\"withQuantity\" class=\"cx-attribute-level-quantity-price\">\n  <cx-configurator-attribute-quantity\n    (changeQuantity)=\"onChangeQuantity($event, attributeDropDownForm)\"\n    [quantityOptions]=\"extractQuantityParameters(attributeDropDownForm)\"\n  ></cx-configurator-attribute-quantity>\n  <cx-configurator-price\n    [formula]=\"extractPriceFormulaParameters()\"\n  ></cx-configurator-price>\n</div>\n", dependencies: [{ kind: "directive", type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i7.ConfiguratorAttributeProductCardComponent, selector: "cx-configurator-attribute-product-card", inputs: ["productCardOptions"], outputs: ["handleDeselect", "handleQuantity", "handleSelect"] }, { kind: "directive", type: i8.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i8.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i8.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i9.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "directive", type: i8.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i10.ConfiguratorAttributeQuantityComponent, selector: "cx-configurator-attribute-quantity", inputs: ["quantityOptions"], outputs: ["changeQuantity"] }, { kind: "component", type: i11.ConfiguratorPriceComponent, selector: "cx-configurator-price", inputs: ["formula"] }, { kind: "directive", type: i2.FeatureLevelDirective, selector: "[cxFeatureLevel]", inputs: ["cxFeatureLevel"] }, { kind: "pipe", type: i6.AsyncPipe, name: "async" }, { kind: "pipe", type: i2.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ConfiguratorAttributeSingleSelectionBundleDropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-configurator-attribute-single-selection-bundle-dropdown', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"form-group\" *ngIf=\"attribute?.values?.length\">\n  <label\n    for=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n    class=\"cx-visually-hidden\"\n  >\n    {{\n      'configurator.a11y.listbox'\n        | cxTranslate\n          : {\n              count: attribute.values?.length\n            }\n    }}\n  </label>\n  <ng-container *cxFeatureLevel=\"'!6.2'\">\n    <select\n      id=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n      class=\"form-control\"\n      [formControl]=\"attributeDropDownForm\"\n      [cxFocus]=\"{ key: attribute.name }\"\n      (change)=\"onSelect(attributeDropDownForm.value)\"\n      [attr.aria-describedby]=\"createAttributeUiKey('label', attribute.name)\"\n    >\n      <option\n        *ngFor=\"let item of attribute.values\"\n        [label]=\"getLabel(false, item.valueDisplay, undefined, item)\"\n        [selected]=\"item.selected\"\n        [value]=\"item.valueCode\"\n        [attr.aria-label]=\"\n          isRetractValue(item.valueCode)\n            ? ('configurator.a11y.forAttribute'\n              | cxTranslate\n                : { value: item.valueDisplay, attribute: attribute.label })\n            : item.valuePrice && item.valuePrice?.value !== 0\n            ? ('configurator.a11y.selectedValueOfAttributeFullWithPrice'\n              | cxTranslate\n                : {\n                    value: item.valueDisplay,\n                    attribute: attribute.label,\n                    price: item.valuePriceTotal?.formattedValue ?? 0\n                  })\n            : ('configurator.a11y.selectedValueOfAttributeFull'\n              | cxTranslate\n                : { value: item.valueDisplay, attribute: attribute.label })\n        \"\n        [value]=\"item.valueCode\"\n      >\n        {{ getLabel(false, item.valueDisplay, undefined, item) }}\n      </option>\n    </select>\n  </ng-container>\n  <ng-container *cxFeatureLevel=\"'6.2'\">\n    <select\n      id=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n      class=\"form-control\"\n      [ngClass]=\"{\n        'cx-required-error-msg ': (showRequiredErrorMessage$ | async)\n      }\"\n      [formControl]=\"attributeDropDownForm\"\n      [cxFocus]=\"{ key: attribute.name }\"\n      (change)=\"onSelect(attributeDropDownForm.value)\"\n      [attr.aria-describedby]=\"createAttributeUiKey('label', attribute.name)\"\n    >\n      <option\n        *ngFor=\"let item of attribute.values\"\n        [label]=\"getLabel(false, item.valueDisplay, undefined, item)\"\n        [selected]=\"item.selected\"\n        [value]=\"item.valueCode\"\n        [attr.aria-label]=\"\n          isRetractValue(item.valueCode)\n            ? ('configurator.a11y.forAttribute'\n              | cxTranslate\n                : { value: item.valueDisplay, attribute: attribute.label })\n            : item.valuePrice && item.valuePrice?.value !== 0\n            ? ('configurator.a11y.selectedValueOfAttributeFullWithPrice'\n              | cxTranslate\n                : {\n                    value: item.valueDisplay,\n                    attribute: attribute.label,\n                    price: item.valuePriceTotal?.formattedValue ?? 0\n                  })\n            : ('configurator.a11y.selectedValueOfAttributeFull'\n              | cxTranslate\n                : { value: item.valueDisplay, attribute: attribute.label })\n        \"\n        [value]=\"item.valueCode\"\n      >\n        {{ getLabel(false, item.valueDisplay, undefined, item) }}\n      </option>\n    </select>\n  </ng-container>\n</div>\n\n<cx-configurator-attribute-product-card\n  *ngIf=\"isNotRetractValue()\"\n  id=\"{{\n    createAttributeValueIdForConfigurator(attribute, selectedValue.valueCode)\n  }}\"\n  (handleDeselect)=\"onSelect(RETRACT_VALUE_CODE)\"\n  [productCardOptions]=\"extractProductCardParameters()\"\n>\n</cx-configurator-attribute-product-card>\n\n<div *ngIf=\"withQuantity\" class=\"cx-attribute-level-quantity-price\">\n  <cx-configurator-attribute-quantity\n    (changeQuantity)=\"onChangeQuantity($event, attributeDropDownForm)\"\n    [quantityOptions]=\"extractQuantityParameters(attributeDropDownForm)\"\n  ></cx-configurator-attribute-quantity>\n  <cx-configurator-price\n    [formula]=\"extractPriceFormulaParameters()\"\n  ></cx-configurator-price>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ConfiguratorAttributeQuantityService }, { type: i2.TranslationService }, { type: i3.ConfiguratorAttributeCompositionContext }, { type: i4.ConfiguratorCommonsService }, { type: i5.ConfiguratorStorefrontUtilsService, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1zaW5nbGUtc2VsZWN0aW9uLWJ1bmRsZS1kcm9wZG93bi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvcHJvZHVjdC1jb25maWd1cmF0b3IvcnVsZWJhc2VkL2NvbXBvbmVudHMvYXR0cmlidXRlL3R5cGVzL3NpbmdsZS1zZWxlY3Rpb24tYnVuZGxlLWRyb3Bkb3duL2NvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtc2luZ2xlLXNlbGVjdGlvbi1idW5kbGUtZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3Byb2R1Y3QtY29uZmlndXJhdG9yL3J1bGViYXNlZC9jb21wb25lbnRzL2F0dHJpYnV0ZS90eXBlcy9zaW5nbGUtc2VsZWN0aW9uLWJ1bmRsZS1kcm9wZG93bi9jb25maWd1cmF0b3ItYXR0cmlidXRlLXNpbmdsZS1zZWxlY3Rpb24tYnVuZGxlLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBSXpFLE9BQU8sRUFBRSxpREFBaUQsRUFBRSxNQUFNLGdFQUFnRSxDQUFDOzs7Ozs7Ozs7Ozs7O0FBVW5JLE1BQU0sT0FBTywyREFDWCxTQUFRLGlEQUFpRDtJQTRCekQsWUFDWSxlQUFxRCxFQUNyRCxXQUErQixFQUMvQix5QkFBa0UsRUFDbEUsMEJBQXNELEVBRXRELGtDQUF1RTtRQUVqRixLQUFLLENBQ0gsZUFBZSxFQUNmLFdBQVcsRUFDWCx5QkFBeUIsRUFDekIsMEJBQTBCLEVBQzFCLGtDQUFrQyxDQUNuQyxDQUFDO1FBYlEsb0JBQWUsR0FBZixlQUFlLENBQXNDO1FBQ3JELGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQXlDO1FBQ2xFLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFFdEQsdUNBQWtDLEdBQWxDLGtDQUFrQyxDQUFxQztRQS9CMUUsdUJBQWtCLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixDQUFDO1FBQzVELDBCQUFxQixHQUFHLElBQUksa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7UUF3Q2pELElBQUksQ0FBQyxLQUFLLEdBQUcseUJBQXlCLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRXhFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3RCxJQUFJLGFBQWEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7YUFDckM7U0FDRjtJQUNILENBQUM7SUFDRDs7Ozs7T0FLRztJQUNILElBQUksYUFBYTtRQUNmLElBQUksYUFBaUMsQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDckM7YUFBTTtZQUNMLE1BQU0sSUFBSSxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQztTQUMxRTtRQUNELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsNEJBQTRCO1FBQzFCLE9BQU87WUFDTCxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ3JDLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixXQUFXLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDbEQsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSTtZQUNsQyxTQUFTLEVBQUUsQ0FBQztZQUNaLFNBQVMsRUFBRSxDQUFDO1NBQ2IsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsaUJBQWlCO1FBQ2YsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFDbEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLEtBQUssWUFBWSxDQUFDLGdCQUFnQixDQUFDO1lBQ25FLEtBQUssQ0FDTixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsY0FBYyxDQUFDLFNBQWlCO1FBQzlCLE9BQU8sU0FBUyxLQUFLLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNyRCxDQUFDOzt3SkFuSFUsMkRBQTJEOzRJQUEzRCwyREFBMkQseUhDNUJ4RSw4c0lBK0dBOzJGRG5GYSwyREFBMkQ7a0JBTnZFLFNBQVM7K0JBQ0UsNERBQTRELG1CQUdyRCx1QkFBdUIsQ0FBQyxNQUFNOzswQkFvQzVDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBDb25maWd1cmF0b3IgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL21vZGVsL2NvbmZpZ3VyYXRvci5tb2RlbCc7XG5pbXBvcnQgeyBDb25maWd1cmF0b3JBdHRyaWJ1dGVDb21wb3NpdGlvbkNvbnRleHQgfSBmcm9tICcuLi8uLi9jb21wb3NpdGlvbi9jb25maWd1cmF0b3ItYXR0cmlidXRlLWNvbXBvc2l0aW9uLm1vZGVsJztcbmltcG9ydCB7IENvbmZpZ3VyYXRvckF0dHJpYnV0ZVByb2R1Y3RDYXJkQ29tcG9uZW50T3B0aW9ucyB9IGZyb20gJy4uLy4uL3Byb2R1Y3QtY2FyZC9jb25maWd1cmF0b3ItYXR0cmlidXRlLXByb2R1Y3QtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29uZmlndXJhdG9yQXR0cmlidXRlUXVhbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcXVhbnRpdHkvY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1xdWFudGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRvckF0dHJpYnV0ZVNpbmdsZVNlbGVjdGlvbkJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2NvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtc2luZ2xlLXNlbGVjdGlvbi1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maWd1cmF0b3JDb21tb25zU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvZmFjYWRlL2NvbmZpZ3VyYXRvci1jb21tb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlndXJhdG9yU3RvcmVmcm9udFV0aWxzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2UvY29uZmlndXJhdG9yLXN0b3JlZnJvbnQtdXRpbHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtc2luZ2xlLXNlbGVjdGlvbi1idW5kbGUtZHJvcGRvd24nLFxuICB0ZW1wbGF0ZVVybDpcbiAgICAnLi9jb25maWd1cmF0b3ItYXR0cmlidXRlLXNpbmdsZS1zZWxlY3Rpb24tYnVuZGxlLWRyb3Bkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRvckF0dHJpYnV0ZVNpbmdsZVNlbGVjdGlvbkJ1bmRsZURyb3Bkb3duQ29tcG9uZW50XG4gIGV4dGVuZHMgQ29uZmlndXJhdG9yQXR0cmlidXRlU2luZ2xlU2VsZWN0aW9uQmFzZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdFxue1xuICByZWFkb25seSBSRVRSQUNUX1ZBTFVFX0NPREUgPSBDb25maWd1cmF0b3IuUmV0cmFjdFZhbHVlQ29kZTtcbiAgYXR0cmlidXRlRHJvcERvd25Gb3JtID0gbmV3IFVudHlwZWRGb3JtQ29udHJvbCgnJyk7XG4gIHNlbGVjdGlvblZhbHVlPzogQ29uZmlndXJhdG9yLlZhbHVlO1xuICBncm91cDogc3RyaW5nO1xuXG4gIC8vIFRPRE8gKENYU1BBLTMzOTIpOiBtYWtlIENvbmZpZ3VyYXRvclN0b3JlZnJvbnRVdGlsc1NlcnZpY2UgYSByZXF1aXJlZCBkZXBlbmRlbmN5XG4gIGNvbnN0cnVjdG9yKFxuICAgIHF1YW50aXR5U2VydmljZTogQ29uZmlndXJhdG9yQXR0cmlidXRlUXVhbnRpdHlTZXJ2aWNlLFxuICAgIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgYXR0cmlidXRlQ29tcG9uZW50Q29udGV4dDogQ29uZmlndXJhdG9yQXR0cmlidXRlQ29tcG9zaXRpb25Db250ZXh0LFxuICAgIGNvbmZpZ3VyYXRvckNvbW1vbnNTZXJ2aWNlOiBDb25maWd1cmF0b3JDb21tb25zU2VydmljZSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3VuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGNvbmZpZ3VyYXRvclN0b3JlZnJvbnRVdGlsc1NlcnZpY2U6IENvbmZpZ3VyYXRvclN0b3JlZnJvbnRVdGlsc1NlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgNi4yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBxdWFudGl0eVNlcnZpY2U6IENvbmZpZ3VyYXRvckF0dHJpYnV0ZVF1YW50aXR5U2VydmljZSxcbiAgICB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIGF0dHJpYnV0ZUNvbXBvbmVudENvbnRleHQ6IENvbmZpZ3VyYXRvckF0dHJpYnV0ZUNvbXBvc2l0aW9uQ29udGV4dCxcbiAgICBjb25maWd1cmF0b3JDb21tb25zU2VydmljZTogQ29uZmlndXJhdG9yQ29tbW9uc1NlcnZpY2VcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcXVhbnRpdHlTZXJ2aWNlOiBDb25maWd1cmF0b3JBdHRyaWJ1dGVRdWFudGl0eVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF0dHJpYnV0ZUNvbXBvbmVudENvbnRleHQ6IENvbmZpZ3VyYXRvckF0dHJpYnV0ZUNvbXBvc2l0aW9uQ29udGV4dCxcbiAgICBwcm90ZWN0ZWQgY29uZmlndXJhdG9yQ29tbW9uc1NlcnZpY2U6IENvbmZpZ3VyYXRvckNvbW1vbnNTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRvclN0b3JlZnJvbnRVdGlsc1NlcnZpY2U/OiBDb25maWd1cmF0b3JTdG9yZWZyb250VXRpbHNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKFxuICAgICAgcXVhbnRpdHlTZXJ2aWNlLFxuICAgICAgdHJhbnNsYXRpb24sXG4gICAgICBhdHRyaWJ1dGVDb21wb25lbnRDb250ZXh0LFxuICAgICAgY29uZmlndXJhdG9yQ29tbW9uc1NlcnZpY2UsXG4gICAgICBjb25maWd1cmF0b3JTdG9yZWZyb250VXRpbHNTZXJ2aWNlXG4gICAgKTtcblxuICAgIHRoaXMuZ3JvdXAgPSBhdHRyaWJ1dGVDb21wb25lbnRDb250ZXh0Lmdyb3VwLmlkO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hdHRyaWJ1dGVEcm9wRG93bkZvcm0uc2V0VmFsdWUodGhpcy5hdHRyaWJ1dGUuc2VsZWN0ZWRTaW5nbGVWYWx1ZSk7XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmF0dHJpYnV0ZS52YWx1ZXM7XG4gICAgaWYgKHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHZhbHVlcy5maW5kKCh2YWx1ZSkgPT4gdmFsdWUuc2VsZWN0ZWQpO1xuICAgICAgaWYgKHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25WYWx1ZSA9IHNlbGVjdGVkVmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIHNlbGVjdGVkIHZhbHVlLiBXZSBhc3N1bWUgdGhhdCB3aGVuIHRoaXMgbWV0aG9kIGlzIGNhbGxlZCxcbiAgICogYSBzZWxlY3Rpb24gaGFzIGJlZW4gbWFkZSBiZWZvcmUuIEluIGNhc2UgdGhpcyBhc3N1bXB0aW9uIGlzIGZhbHNlLFxuICAgKiBhbiBlcnJvciBpcyB0aHJvd25cbiAgICogQHJldHVybnMgc2VsZWN0ZWQgdmFsdWVcbiAgICovXG4gIGdldCBzZWxlY3RlZFZhbHVlKCk6IENvbmZpZ3VyYXRvci5WYWx1ZSB7XG4gICAgbGV0IHNlbGVjdGVkVmFsdWU6IENvbmZpZ3VyYXRvci5WYWx1ZTtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb25WYWx1ZSkge1xuICAgICAgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuc2VsZWN0aW9uVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignc2VsZWN0ZWRWYWx1ZSBjYWxsZWQgd2l0aG91dCBhIGRlZmluZWQgc2VsZWN0aW9uVmFsdWUnKTtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkVmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdCBjb3JyZXNwb25kaW5nIHByb2R1Y3QgY2FyZCBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEByZXR1cm4ge0NvbmZpZ3VyYXRvckF0dHJpYnV0ZVByb2R1Y3RDYXJkQ29tcG9uZW50T3B0aW9uc30gLSBOZXcgcHJvZHVjdCBjYXJkIG9wdGlvbnNcbiAgICovXG4gIGV4dHJhY3RQcm9kdWN0Q2FyZFBhcmFtZXRlcnMoKTogQ29uZmlndXJhdG9yQXR0cmlidXRlUHJvZHVjdENhcmRDb21wb25lbnRPcHRpb25zIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGlkZVJlbW92ZUJ1dHRvbjogdHJ1ZSxcbiAgICAgIHByb2R1Y3RCb3VuZFZhbHVlOiB0aGlzLnNlbGVjdGVkVmFsdWUsXG4gICAgICBzaW5nbGVEcm9wZG93bjogdHJ1ZSxcbiAgICAgIHdpdGhRdWFudGl0eTogZmFsc2UsXG4gICAgICBsb2FkaW5nJDogdGhpcy5sb2FkaW5nJCxcbiAgICAgIGF0dHJpYnV0ZUlkOiB0aGlzLmdldEF0dHJpYnV0ZUNvZGUodGhpcy5hdHRyaWJ1dGUpLFxuICAgICAgYXR0cmlidXRlTmFtZTogdGhpcy5hdHRyaWJ1dGUubmFtZSxcbiAgICAgIGl0ZW1Db3VudDogMCxcbiAgICAgIGl0ZW1JbmRleDogMCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFZlcmlmaWVzIHdoZXRoZXIgYSBzZWxlY3Rpb24gdmFsdWUgaXMgZGVmaW5lZCBhbmQgaXRzIHZhbHVlIGNvZGUgaXMgbm90IGEgcmV0cmFjdCBvbmUuXG4gICAqXG4gICAqIEByZXR1cm5zIHtib29sZWFufSAtICdUcnVlJyBpZiBhIHNlbGVjdGlvbiB2YWx1ZSBpcyBkZWZpbmVkIGFuZCBpdHMgdmFsdWUgY29kZSBpcyBub3QgYSByZXRyYWN0IG9uZSwgb3RoZXJ3aXNlICdmYWxzZScuXG4gICAqL1xuICBpc05vdFJldHJhY3RWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuc2VsZWN0aW9uVmFsdWUgJiZcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25WYWx1ZT8udmFsdWVDb2RlICE9PSBDb25maWd1cmF0b3IuUmV0cmFjdFZhbHVlQ29kZSkgPz9cbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWZXJpZmllcyB3aGV0aGVyIGEgdmFsdWUgY29kZSBpcyBhIHJldHJhY3Qgb25lLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVDb2RlIC0gVmFsdWUgY29kZVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSAnVHJ1ZScgaWYgYSB2YWx1ZSBjb2RlIGlzIGEgcmV0cmFjdCBvbmUsIG90aGVyd2lzZSAnZmFsc2UnLlxuICAgKi9cbiAgaXNSZXRyYWN0VmFsdWUodmFsdWVDb2RlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWVDb2RlID09PSBDb25maWd1cmF0b3IuUmV0cmFjdFZhbHVlQ29kZTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiAqbmdJZj1cImF0dHJpYnV0ZT8udmFsdWVzPy5sZW5ndGhcIj5cbiAgPGxhYmVsXG4gICAgZm9yPVwie3sgY3JlYXRlQXR0cmlidXRlSWRGb3JDb25maWd1cmF0b3IoYXR0cmlidXRlKSB9fVwiXG4gICAgY2xhc3M9XCJjeC12aXN1YWxseS1oaWRkZW5cIlxuICA+XG4gICAge3tcbiAgICAgICdjb25maWd1cmF0b3IuYTExeS5saXN0Ym94J1xuICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgOiB7XG4gICAgICAgICAgICAgIGNvdW50OiBhdHRyaWJ1dGUudmFsdWVzPy5sZW5ndGhcbiAgICAgICAgICAgIH1cbiAgICB9fVxuICA8L2xhYmVsPlxuICA8bmctY29udGFpbmVyICpjeEZlYXR1cmVMZXZlbD1cIichNi4yJ1wiPlxuICAgIDxzZWxlY3RcbiAgICAgIGlkPVwie3sgY3JlYXRlQXR0cmlidXRlSWRGb3JDb25maWd1cmF0b3IoYXR0cmlidXRlKSB9fVwiXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiYXR0cmlidXRlRHJvcERvd25Gb3JtXCJcbiAgICAgIFtjeEZvY3VzXT1cInsga2V5OiBhdHRyaWJ1dGUubmFtZSB9XCJcbiAgICAgIChjaGFuZ2UpPVwib25TZWxlY3QoYXR0cmlidXRlRHJvcERvd25Gb3JtLnZhbHVlKVwiXG4gICAgICBbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XT1cImNyZWF0ZUF0dHJpYnV0ZVVpS2V5KCdsYWJlbCcsIGF0dHJpYnV0ZS5uYW1lKVwiXG4gICAgPlxuICAgICAgPG9wdGlvblxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBhdHRyaWJ1dGUudmFsdWVzXCJcbiAgICAgICAgW2xhYmVsXT1cImdldExhYmVsKGZhbHNlLCBpdGVtLnZhbHVlRGlzcGxheSwgdW5kZWZpbmVkLCBpdGVtKVwiXG4gICAgICAgIFtzZWxlY3RlZF09XCJpdGVtLnNlbGVjdGVkXCJcbiAgICAgICAgW3ZhbHVlXT1cIml0ZW0udmFsdWVDb2RlXCJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJcbiAgICAgICAgICBpc1JldHJhY3RWYWx1ZShpdGVtLnZhbHVlQ29kZSlcbiAgICAgICAgICAgID8gKCdjb25maWd1cmF0b3IuYTExeS5mb3JBdHRyaWJ1dGUnXG4gICAgICAgICAgICAgIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICA6IHsgdmFsdWU6IGl0ZW0udmFsdWVEaXNwbGF5LCBhdHRyaWJ1dGU6IGF0dHJpYnV0ZS5sYWJlbCB9KVxuICAgICAgICAgICAgOiBpdGVtLnZhbHVlUHJpY2UgJiYgaXRlbS52YWx1ZVByaWNlPy52YWx1ZSAhPT0gMFxuICAgICAgICAgICAgPyAoJ2NvbmZpZ3VyYXRvci5hMTF5LnNlbGVjdGVkVmFsdWVPZkF0dHJpYnV0ZUZ1bGxXaXRoUHJpY2UnXG4gICAgICAgICAgICAgIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWVEaXNwbGF5LFxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGU6IGF0dHJpYnV0ZS5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0udmFsdWVQcmljZVRvdGFsPy5mb3JtYXR0ZWRWYWx1ZSA/PyAwXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiAoJ2NvbmZpZ3VyYXRvci5hMTF5LnNlbGVjdGVkVmFsdWVPZkF0dHJpYnV0ZUZ1bGwnXG4gICAgICAgICAgICAgIHwgY3hUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICA6IHsgdmFsdWU6IGl0ZW0udmFsdWVEaXNwbGF5LCBhdHRyaWJ1dGU6IGF0dHJpYnV0ZS5sYWJlbCB9KVxuICAgICAgICBcIlxuICAgICAgICBbdmFsdWVdPVwiaXRlbS52YWx1ZUNvZGVcIlxuICAgICAgPlxuICAgICAgICB7eyBnZXRMYWJlbChmYWxzZSwgaXRlbS52YWx1ZURpc3BsYXksIHVuZGVmaW5lZCwgaXRlbSkgfX1cbiAgICAgIDwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICA8L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqY3hGZWF0dXJlTGV2ZWw9XCInNi4yJ1wiPlxuICAgIDxzZWxlY3RcbiAgICAgIGlkPVwie3sgY3JlYXRlQXR0cmlidXRlSWRGb3JDb25maWd1cmF0b3IoYXR0cmlidXRlKSB9fVwiXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICdjeC1yZXF1aXJlZC1lcnJvci1tc2cgJzogKHNob3dSZXF1aXJlZEVycm9yTWVzc2FnZSQgfCBhc3luYylcbiAgICAgIH1cIlxuICAgICAgW2Zvcm1Db250cm9sXT1cImF0dHJpYnV0ZURyb3BEb3duRm9ybVwiXG4gICAgICBbY3hGb2N1c109XCJ7IGtleTogYXR0cmlidXRlLm5hbWUgfVwiXG4gICAgICAoY2hhbmdlKT1cIm9uU2VsZWN0KGF0dHJpYnV0ZURyb3BEb3duRm9ybS52YWx1ZSlcIlxuICAgICAgW2F0dHIuYXJpYS1kZXNjcmliZWRieV09XCJjcmVhdGVBdHRyaWJ1dGVVaUtleSgnbGFiZWwnLCBhdHRyaWJ1dGUubmFtZSlcIlxuICAgID5cbiAgICAgIDxvcHRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgYXR0cmlidXRlLnZhbHVlc1wiXG4gICAgICAgIFtsYWJlbF09XCJnZXRMYWJlbChmYWxzZSwgaXRlbS52YWx1ZURpc3BsYXksIHVuZGVmaW5lZCwgaXRlbSlcIlxuICAgICAgICBbc2VsZWN0ZWRdPVwiaXRlbS5zZWxlY3RlZFwiXG4gICAgICAgIFt2YWx1ZV09XCJpdGVtLnZhbHVlQ29kZVwiXG4gICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiXG4gICAgICAgICAgaXNSZXRyYWN0VmFsdWUoaXRlbS52YWx1ZUNvZGUpXG4gICAgICAgICAgICA/ICgnY29uZmlndXJhdG9yLmExMXkuZm9yQXR0cmlidXRlJ1xuICAgICAgICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgOiB7IHZhbHVlOiBpdGVtLnZhbHVlRGlzcGxheSwgYXR0cmlidXRlOiBhdHRyaWJ1dGUubGFiZWwgfSlcbiAgICAgICAgICAgIDogaXRlbS52YWx1ZVByaWNlICYmIGl0ZW0udmFsdWVQcmljZT8udmFsdWUgIT09IDBcbiAgICAgICAgICAgID8gKCdjb25maWd1cmF0b3IuYTExeS5zZWxlY3RlZFZhbHVlT2ZBdHRyaWJ1dGVGdWxsV2l0aFByaWNlJ1xuICAgICAgICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlRGlzcGxheSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlOiBhdHRyaWJ1dGUubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgIHByaWNlOiBpdGVtLnZhbHVlUHJpY2VUb3RhbD8uZm9ybWF0dGVkVmFsdWUgPz8gMFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogKCdjb25maWd1cmF0b3IuYTExeS5zZWxlY3RlZFZhbHVlT2ZBdHRyaWJ1dGVGdWxsJ1xuICAgICAgICAgICAgICB8IGN4VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgOiB7IHZhbHVlOiBpdGVtLnZhbHVlRGlzcGxheSwgYXR0cmlidXRlOiBhdHRyaWJ1dGUubGFiZWwgfSlcbiAgICAgICAgXCJcbiAgICAgICAgW3ZhbHVlXT1cIml0ZW0udmFsdWVDb2RlXCJcbiAgICAgID5cbiAgICAgICAge3sgZ2V0TGFiZWwoZmFsc2UsIGl0ZW0udmFsdWVEaXNwbGF5LCB1bmRlZmluZWQsIGl0ZW0pIH19XG4gICAgICA8L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPGN4LWNvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtcHJvZHVjdC1jYXJkXG4gICpuZ0lmPVwiaXNOb3RSZXRyYWN0VmFsdWUoKVwiXG4gIGlkPVwie3tcbiAgICBjcmVhdGVBdHRyaWJ1dGVWYWx1ZUlkRm9yQ29uZmlndXJhdG9yKGF0dHJpYnV0ZSwgc2VsZWN0ZWRWYWx1ZS52YWx1ZUNvZGUpXG4gIH19XCJcbiAgKGhhbmRsZURlc2VsZWN0KT1cIm9uU2VsZWN0KFJFVFJBQ1RfVkFMVUVfQ09ERSlcIlxuICBbcHJvZHVjdENhcmRPcHRpb25zXT1cImV4dHJhY3RQcm9kdWN0Q2FyZFBhcmFtZXRlcnMoKVwiXG4+XG48L2N4LWNvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtcHJvZHVjdC1jYXJkPlxuXG48ZGl2ICpuZ0lmPVwid2l0aFF1YW50aXR5XCIgY2xhc3M9XCJjeC1hdHRyaWJ1dGUtbGV2ZWwtcXVhbnRpdHktcHJpY2VcIj5cbiAgPGN4LWNvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtcXVhbnRpdHlcbiAgICAoY2hhbmdlUXVhbnRpdHkpPVwib25DaGFuZ2VRdWFudGl0eSgkZXZlbnQsIGF0dHJpYnV0ZURyb3BEb3duRm9ybSlcIlxuICAgIFtxdWFudGl0eU9wdGlvbnNdPVwiZXh0cmFjdFF1YW50aXR5UGFyYW1ldGVycyhhdHRyaWJ1dGVEcm9wRG93bkZvcm0pXCJcbiAgPjwvY3gtY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1xdWFudGl0eT5cbiAgPGN4LWNvbmZpZ3VyYXRvci1wcmljZVxuICAgIFtmb3JtdWxhXT1cImV4dHJhY3RQcmljZUZvcm11bGFQYXJhbWV0ZXJzKClcIlxuICA+PC9jeC1jb25maWd1cmF0b3ItcHJpY2U+XG48L2Rpdj5cbiJdfQ==