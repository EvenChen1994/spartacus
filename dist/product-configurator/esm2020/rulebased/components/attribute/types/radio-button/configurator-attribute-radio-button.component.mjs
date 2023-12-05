/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, Optional, } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { ConfiguratorAttributeSingleSelectionBaseComponent } from '../base/configurator-attribute-single-selection-base.component';
import * as i0 from "@angular/core";
import * as i1 from "../../quantity/configurator-attribute-quantity.service";
import * as i2 from "@spartacus/core";
import * as i3 from "../../composition/configurator-attribute-composition.model";
import * as i4 from "../../../../core/facade/configurator-commons.service";
import * as i5 from "../../../service/configurator-storefront-utils.service";
import * as i6 from "@angular/common";
import * as i7 from "../../quantity/configurator-attribute-quantity.component";
import * as i8 from "@angular/forms";
import * as i9 from "@spartacus/storefront";
import * as i10 from "../../../price/configurator-price.component";
import * as i11 from "../numeric-input-field/configurator-attribute-numeric-input-field.component";
import * as i12 from "../input-field/configurator-attribute-input-field.component";
export class ConfiguratorAttributeRadioButtonComponent extends ConfiguratorAttributeSingleSelectionBaseComponent {
    constructor(quantityService, translation, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService) {
        super(quantityService, translation, attributeComponentContext, configuratorCommonsService, configuratorStorefrontUtilsService);
        this.quantityService = quantityService;
        this.translation = translation;
        this.attributeComponentContext = attributeComponentContext;
        this.configuratorCommonsService = configuratorCommonsService;
        this.configuratorStorefrontUtilsService = configuratorStorefrontUtilsService;
        this.attributeRadioButtonForm = new UntypedFormControl('');
    }
    ngOnInit() {
        this.attributeRadioButtonForm.setValue(this.attribute.selectedSingleValue);
    }
}
ConfiguratorAttributeRadioButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ConfiguratorAttributeRadioButtonComponent, deps: [{ token: i1.ConfiguratorAttributeQuantityService }, { token: i2.TranslationService }, { token: i3.ConfiguratorAttributeCompositionContext }, { token: i4.ConfiguratorCommonsService }, { token: i5.ConfiguratorStorefrontUtilsService, optional: true }], target: i0.ɵɵFactoryTarget.Component });
ConfiguratorAttributeRadioButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ConfiguratorAttributeRadioButtonComponent, selector: "cx-configurator-attribute-radio-button", usesInheritance: true, ngImport: i0, template: "<fieldset>\n  <legend style=\"display: none\">{{ attribute.label }}</legend>\n  <div id=\"{{ createAttributeIdForConfigurator(attribute) }}\">\n    <div *ngIf=\"withQuantity\" class=\"cx-attribute-level-quantity-price\">\n      <cx-configurator-attribute-quantity\n        (changeQuantity)=\"onChangeQuantity($event)\"\n        [quantityOptions]=\"extractQuantityParameters()\"\n      ></cx-configurator-attribute-quantity>\n      <cx-configurator-price\n        [formula]=\"extractPriceFormulaParameters()\"\n      ></cx-configurator-price>\n    </div>\n\n    <div class=\"form-check\" *ngFor=\"let value of attribute.values\">\n      <div class=\"cx-value-label-pair\">\n        <input\n          id=\"{{\n            createAttributeValueIdForConfigurator(attribute, value.valueCode)\n          }}\"\n          class=\"form-check-input\"\n          type=\"radio\"\n          formcontrolname=\"attributeRadioButtonForm\"\n          [formControl]=\"attributeRadioButtonForm\"\n          [attr.required]=\"attribute.required\"\n          [value]=\"value.valueCode\"\n          name=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n          attr.name=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n          [cxFocus]=\"{ key: attribute.name + '-' + value.name }\"\n          [attr.aria-label]=\"getAriaLabel(value, attribute)\"\n          [attr.checked]=\"\n            attributeRadioButtonForm.value === value.valueCode\n              ? 'checked'\n              : null\n          \"\n          [attr.aria-describedby]=\"\n            createAttributeUiKey('label', attribute.name)\n          \"\n          (change)=\"onSelect(value.valueCode)\"\n        />\n        <label\n          id=\"{{ createValueUiKey('label', attribute.name, value.valueCode) }}\"\n          for=\"{{\n            createAttributeValueIdForConfigurator(attribute, value.valueCode)\n          }}\"\n          aria-hidden=\"true\"\n          class=\"form-check-label form-radio-label\"\n          >{{ getLabel(expMode, value.valueDisplay, value.valueCode) }}</label\n        >\n      </div>\n\n      <div class=\"cx-value-price\">\n        <cx-configurator-price\n          [formula]=\"extractValuePriceFormulaParameters(value)\"\n        ></cx-configurator-price>\n      </div>\n    </div>\n\n    <cx-configurator-attribute-numeric-input-field\n      *ngIf=\"isAdditionalValueNumeric\"\n      class=\"cx-configurator-attribute-additional-value\"\n    ></cx-configurator-attribute-numeric-input-field>\n\n    <cx-configurator-attribute-input-field\n      *ngIf=\"isAdditionalValueAlphaNumeric\"\n      class=\"cx-configurator-attribute-additional-value\"\n    >\n    </cx-configurator-attribute-input-field>\n  </div>\n</fieldset>\n", dependencies: [{ kind: "directive", type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i7.ConfiguratorAttributeQuantityComponent, selector: "cx-configurator-attribute-quantity", inputs: ["quantityOptions"], outputs: ["changeQuantity"] }, { kind: "directive", type: i8.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i8.RadioControlValueAccessor, selector: "input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]", inputs: ["name", "formControlName", "value"] }, { kind: "directive", type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i8.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i9.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "directive", type: i8.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "component", type: i10.ConfiguratorPriceComponent, selector: "cx-configurator-price", inputs: ["formula"] }, { kind: "component", type: i11.ConfiguratorAttributeNumericInputFieldComponent, selector: "cx-configurator-attribute-numeric-input-field" }, { kind: "component", type: i12.ConfiguratorAttributeInputFieldComponent, selector: "cx-configurator-attribute-input-field" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ConfiguratorAttributeRadioButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-configurator-attribute-radio-button', changeDetection: ChangeDetectionStrategy.OnPush, template: "<fieldset>\n  <legend style=\"display: none\">{{ attribute.label }}</legend>\n  <div id=\"{{ createAttributeIdForConfigurator(attribute) }}\">\n    <div *ngIf=\"withQuantity\" class=\"cx-attribute-level-quantity-price\">\n      <cx-configurator-attribute-quantity\n        (changeQuantity)=\"onChangeQuantity($event)\"\n        [quantityOptions]=\"extractQuantityParameters()\"\n      ></cx-configurator-attribute-quantity>\n      <cx-configurator-price\n        [formula]=\"extractPriceFormulaParameters()\"\n      ></cx-configurator-price>\n    </div>\n\n    <div class=\"form-check\" *ngFor=\"let value of attribute.values\">\n      <div class=\"cx-value-label-pair\">\n        <input\n          id=\"{{\n            createAttributeValueIdForConfigurator(attribute, value.valueCode)\n          }}\"\n          class=\"form-check-input\"\n          type=\"radio\"\n          formcontrolname=\"attributeRadioButtonForm\"\n          [formControl]=\"attributeRadioButtonForm\"\n          [attr.required]=\"attribute.required\"\n          [value]=\"value.valueCode\"\n          name=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n          attr.name=\"{{ createAttributeIdForConfigurator(attribute) }}\"\n          [cxFocus]=\"{ key: attribute.name + '-' + value.name }\"\n          [attr.aria-label]=\"getAriaLabel(value, attribute)\"\n          [attr.checked]=\"\n            attributeRadioButtonForm.value === value.valueCode\n              ? 'checked'\n              : null\n          \"\n          [attr.aria-describedby]=\"\n            createAttributeUiKey('label', attribute.name)\n          \"\n          (change)=\"onSelect(value.valueCode)\"\n        />\n        <label\n          id=\"{{ createValueUiKey('label', attribute.name, value.valueCode) }}\"\n          for=\"{{\n            createAttributeValueIdForConfigurator(attribute, value.valueCode)\n          }}\"\n          aria-hidden=\"true\"\n          class=\"form-check-label form-radio-label\"\n          >{{ getLabel(expMode, value.valueDisplay, value.valueCode) }}</label\n        >\n      </div>\n\n      <div class=\"cx-value-price\">\n        <cx-configurator-price\n          [formula]=\"extractValuePriceFormulaParameters(value)\"\n        ></cx-configurator-price>\n      </div>\n    </div>\n\n    <cx-configurator-attribute-numeric-input-field\n      *ngIf=\"isAdditionalValueNumeric\"\n      class=\"cx-configurator-attribute-additional-value\"\n    ></cx-configurator-attribute-numeric-input-field>\n\n    <cx-configurator-attribute-input-field\n      *ngIf=\"isAdditionalValueAlphaNumeric\"\n      class=\"cx-configurator-attribute-additional-value\"\n    >\n    </cx-configurator-attribute-input-field>\n  </div>\n</fieldset>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ConfiguratorAttributeQuantityService }, { type: i2.TranslationService }, { type: i3.ConfiguratorAttributeCompositionContext }, { type: i4.ConfiguratorCommonsService }, { type: i5.ConfiguratorStorefrontUtilsService, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1yYWRpby1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3Byb2R1Y3QtY29uZmlndXJhdG9yL3J1bGViYXNlZC9jb21wb25lbnRzL2F0dHJpYnV0ZS90eXBlcy9yYWRpby1idXR0b24vY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1yYWRpby1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3Byb2R1Y3QtY29uZmlndXJhdG9yL3J1bGViYXNlZC9jb21wb25lbnRzL2F0dHJpYnV0ZS90eXBlcy9yYWRpby1idXR0b24vY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUlwRCxPQUFPLEVBQUUsaURBQWlELEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUFRbkksTUFBTSxPQUFPLHlDQUNYLFNBQVEsaURBQWlEO0lBeUJ6RCxZQUNZLGVBQXFELEVBQ3JELFdBQStCLEVBQy9CLHlCQUFrRSxFQUNsRSwwQkFBc0QsRUFFdEQsa0NBQXVFO1FBRWpGLEtBQUssQ0FDSCxlQUFlLEVBQ2YsV0FBVyxFQUNYLHlCQUF5QixFQUN6QiwwQkFBMEIsRUFDMUIsa0NBQWtDLENBQ25DLENBQUM7UUFiUSxvQkFBZSxHQUFmLGVBQWUsQ0FBc0M7UUFDckQsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQy9CLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBeUM7UUFDbEUsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQUV0RCx1Q0FBa0MsR0FBbEMsa0NBQWtDLENBQXFDO1FBNUJuRiw2QkFBd0IsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBcUN0RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdFLENBQUM7O3NJQTdDVSx5Q0FBeUM7MEhBQXpDLHlDQUF5QyxxR0MxQnRELGdxRkFxRUE7MkZEM0NhLHlDQUF5QztrQkFMckQsU0FBUzsrQkFDRSx3Q0FBd0MsbUJBRWpDLHVCQUF1QixDQUFDLE1BQU07OzBCQWlDNUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdG9yQ29tbW9uc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2ZhY2FkZS9jb25maWd1cmF0b3ItY29tbW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRvckF0dHJpYnV0ZUNvbXBvc2l0aW9uQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uL2NvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtY29tcG9zaXRpb24ubW9kZWwnO1xuaW1wb3J0IHsgVW50eXBlZEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgQ29uZmlndXJhdG9yQXR0cmlidXRlUXVhbnRpdHlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcXVhbnRpdHkvY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1xdWFudGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpZ3VyYXRvckF0dHJpYnV0ZVNpbmdsZVNlbGVjdGlvbkJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2NvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtc2luZ2xlLXNlbGVjdGlvbi1iYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb25maWd1cmF0b3JTdG9yZWZyb250VXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZS9jb25maWd1cmF0b3Itc3RvcmVmcm9udC11dGlscy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1yYWRpby1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1yYWRpby1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdG9yQXR0cmlidXRlUmFkaW9CdXR0b25Db21wb25lbnRcbiAgZXh0ZW5kcyBDb25maWd1cmF0b3JBdHRyaWJ1dGVTaW5nbGVTZWxlY3Rpb25CYXNlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0XG57XG4gIGF0dHJpYnV0ZVJhZGlvQnV0dG9uRm9ybSA9IG5ldyBVbnR5cGVkRm9ybUNvbnRyb2woJycpO1xuXG4gIC8vIFRPRE8gKENYU1BBLTMzOTIpOiBtYWtlIENvbmZpZ3VyYXRvclN0b3JlZnJvbnRVdGlsc1NlcnZpY2UgYSByZXF1aXJlZCBkZXBlbmRlbmN5XG4gIGNvbnN0cnVjdG9yKFxuICAgIHF1YW50aXR5U2VydmljZTogQ29uZmlndXJhdG9yQXR0cmlidXRlUXVhbnRpdHlTZXJ2aWNlLFxuICAgIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgYXR0cmlidXRlQ29tcG9uZW50Q29udGV4dDogQ29uZmlndXJhdG9yQXR0cmlidXRlQ29tcG9zaXRpb25Db250ZXh0LFxuICAgIGNvbmZpZ3VyYXRvckNvbW1vbnNTZXJ2aWNlOiBDb25maWd1cmF0b3JDb21tb25zU2VydmljZSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L3VuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGNvbmZpZ3VyYXRvclN0b3JlZnJvbnRVdGlsc1NlcnZpY2U6IENvbmZpZ3VyYXRvclN0b3JlZnJvbnRVdGlsc1NlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgNi4yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBxdWFudGl0eVNlcnZpY2U6IENvbmZpZ3VyYXRvckF0dHJpYnV0ZVF1YW50aXR5U2VydmljZSxcbiAgICB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIGF0dHJpYnV0ZUNvbXBvbmVudENvbnRleHQ6IENvbmZpZ3VyYXRvckF0dHJpYnV0ZUNvbXBvc2l0aW9uQ29udGV4dCxcbiAgICBjb25maWd1cmF0b3JDb21tb25zU2VydmljZTogQ29uZmlndXJhdG9yQ29tbW9uc1NlcnZpY2VcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcXVhbnRpdHlTZXJ2aWNlOiBDb25maWd1cmF0b3JBdHRyaWJ1dGVRdWFudGl0eVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF0dHJpYnV0ZUNvbXBvbmVudENvbnRleHQ6IENvbmZpZ3VyYXRvckF0dHJpYnV0ZUNvbXBvc2l0aW9uQ29udGV4dCxcbiAgICBwcm90ZWN0ZWQgY29uZmlndXJhdG9yQ29tbW9uc1NlcnZpY2U6IENvbmZpZ3VyYXRvckNvbW1vbnNTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpXG4gICAgcHJvdGVjdGVkIGNvbmZpZ3VyYXRvclN0b3JlZnJvbnRVdGlsc1NlcnZpY2U/OiBDb25maWd1cmF0b3JTdG9yZWZyb250VXRpbHNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKFxuICAgICAgcXVhbnRpdHlTZXJ2aWNlLFxuICAgICAgdHJhbnNsYXRpb24sXG4gICAgICBhdHRyaWJ1dGVDb21wb25lbnRDb250ZXh0LFxuICAgICAgY29uZmlndXJhdG9yQ29tbW9uc1NlcnZpY2UsXG4gICAgICBjb25maWd1cmF0b3JTdG9yZWZyb250VXRpbHNTZXJ2aWNlXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuYXR0cmlidXRlUmFkaW9CdXR0b25Gb3JtLnNldFZhbHVlKHRoaXMuYXR0cmlidXRlLnNlbGVjdGVkU2luZ2xlVmFsdWUpO1xuICB9XG59XG4iLCI8ZmllbGRzZXQ+XG4gIDxsZWdlbmQgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+e3sgYXR0cmlidXRlLmxhYmVsIH19PC9sZWdlbmQ+XG4gIDxkaXYgaWQ9XCJ7eyBjcmVhdGVBdHRyaWJ1dGVJZEZvckNvbmZpZ3VyYXRvcihhdHRyaWJ1dGUpIH19XCI+XG4gICAgPGRpdiAqbmdJZj1cIndpdGhRdWFudGl0eVwiIGNsYXNzPVwiY3gtYXR0cmlidXRlLWxldmVsLXF1YW50aXR5LXByaWNlXCI+XG4gICAgICA8Y3gtY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1xdWFudGl0eVxuICAgICAgICAoY2hhbmdlUXVhbnRpdHkpPVwib25DaGFuZ2VRdWFudGl0eSgkZXZlbnQpXCJcbiAgICAgICAgW3F1YW50aXR5T3B0aW9uc109XCJleHRyYWN0UXVhbnRpdHlQYXJhbWV0ZXJzKClcIlxuICAgICAgPjwvY3gtY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1xdWFudGl0eT5cbiAgICAgIDxjeC1jb25maWd1cmF0b3ItcHJpY2VcbiAgICAgICAgW2Zvcm11bGFdPVwiZXh0cmFjdFByaWNlRm9ybXVsYVBhcmFtZXRlcnMoKVwiXG4gICAgICA+PC9jeC1jb25maWd1cmF0b3ItcHJpY2U+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiBhdHRyaWJ1dGUudmFsdWVzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY3gtdmFsdWUtbGFiZWwtcGFpclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInt7XG4gICAgICAgICAgICBjcmVhdGVBdHRyaWJ1dGVWYWx1ZUlkRm9yQ29uZmlndXJhdG9yKGF0dHJpYnV0ZSwgdmFsdWUudmFsdWVDb2RlKVxuICAgICAgICAgIH19XCJcbiAgICAgICAgICBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgZm9ybWNvbnRyb2xuYW1lPVwiYXR0cmlidXRlUmFkaW9CdXR0b25Gb3JtXCJcbiAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwiYXR0cmlidXRlUmFkaW9CdXR0b25Gb3JtXCJcbiAgICAgICAgICBbYXR0ci5yZXF1aXJlZF09XCJhdHRyaWJ1dGUucmVxdWlyZWRcIlxuICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZS52YWx1ZUNvZGVcIlxuICAgICAgICAgIG5hbWU9XCJ7eyBjcmVhdGVBdHRyaWJ1dGVJZEZvckNvbmZpZ3VyYXRvcihhdHRyaWJ1dGUpIH19XCJcbiAgICAgICAgICBhdHRyLm5hbWU9XCJ7eyBjcmVhdGVBdHRyaWJ1dGVJZEZvckNvbmZpZ3VyYXRvcihhdHRyaWJ1dGUpIH19XCJcbiAgICAgICAgICBbY3hGb2N1c109XCJ7IGtleTogYXR0cmlidXRlLm5hbWUgKyAnLScgKyB2YWx1ZS5uYW1lIH1cIlxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZ2V0QXJpYUxhYmVsKHZhbHVlLCBhdHRyaWJ1dGUpXCJcbiAgICAgICAgICBbYXR0ci5jaGVja2VkXT1cIlxuICAgICAgICAgICAgYXR0cmlidXRlUmFkaW9CdXR0b25Gb3JtLnZhbHVlID09PSB2YWx1ZS52YWx1ZUNvZGVcbiAgICAgICAgICAgICAgPyAnY2hlY2tlZCdcbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XT1cIlxuICAgICAgICAgICAgY3JlYXRlQXR0cmlidXRlVWlLZXkoJ2xhYmVsJywgYXR0cmlidXRlLm5hbWUpXG4gICAgICAgICAgXCJcbiAgICAgICAgICAoY2hhbmdlKT1cIm9uU2VsZWN0KHZhbHVlLnZhbHVlQ29kZSlcIlxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICBpZD1cInt7IGNyZWF0ZVZhbHVlVWlLZXkoJ2xhYmVsJywgYXR0cmlidXRlLm5hbWUsIHZhbHVlLnZhbHVlQ29kZSkgfX1cIlxuICAgICAgICAgIGZvcj1cInt7XG4gICAgICAgICAgICBjcmVhdGVBdHRyaWJ1dGVWYWx1ZUlkRm9yQ29uZmlndXJhdG9yKGF0dHJpYnV0ZSwgdmFsdWUudmFsdWVDb2RlKVxuICAgICAgICAgIH19XCJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbCBmb3JtLXJhZGlvLWxhYmVsXCJcbiAgICAgICAgICA+e3sgZ2V0TGFiZWwoZXhwTW9kZSwgdmFsdWUudmFsdWVEaXNwbGF5LCB2YWx1ZS52YWx1ZUNvZGUpIH19PC9sYWJlbFxuICAgICAgICA+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImN4LXZhbHVlLXByaWNlXCI+XG4gICAgICAgIDxjeC1jb25maWd1cmF0b3ItcHJpY2VcbiAgICAgICAgICBbZm9ybXVsYV09XCJleHRyYWN0VmFsdWVQcmljZUZvcm11bGFQYXJhbWV0ZXJzKHZhbHVlKVwiXG4gICAgICAgID48L2N4LWNvbmZpZ3VyYXRvci1wcmljZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGN4LWNvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtbnVtZXJpYy1pbnB1dC1maWVsZFxuICAgICAgKm5nSWY9XCJpc0FkZGl0aW9uYWxWYWx1ZU51bWVyaWNcIlxuICAgICAgY2xhc3M9XCJjeC1jb25maWd1cmF0b3ItYXR0cmlidXRlLWFkZGl0aW9uYWwtdmFsdWVcIlxuICAgID48L2N4LWNvbmZpZ3VyYXRvci1hdHRyaWJ1dGUtbnVtZXJpYy1pbnB1dC1maWVsZD5cblxuICAgIDxjeC1jb25maWd1cmF0b3ItYXR0cmlidXRlLWlucHV0LWZpZWxkXG4gICAgICAqbmdJZj1cImlzQWRkaXRpb25hbFZhbHVlQWxwaGFOdW1lcmljXCJcbiAgICAgIGNsYXNzPVwiY3gtY29uZmlndXJhdG9yLWF0dHJpYnV0ZS1hZGRpdGlvbmFsLXZhbHVlXCJcbiAgICA+XG4gICAgPC9jeC1jb25maWd1cmF0b3ItYXR0cmlidXRlLWlucHV0LWZpZWxkPlxuICA8L2Rpdj5cbjwvZmllbGRzZXQ+XG4iXX0=