/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Period, } from '@spartacus/organization/administration/core';
import { tap } from 'rxjs/operators';
import { CurrentItemService } from '../../shared/current-item.service';
import { ItemService } from '../../shared/item.service';
import { CurrentPermissionService } from '../services/current-permission.service';
import { PermissionItemService } from '../services/permission-item.service';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/item.service";
import * as i2 from "@spartacus/organization/administration/core";
import * as i3 from "@spartacus/core";
import * as i4 from "@angular/common";
import * as i5 from "@ng-select/ng-select";
import * as i6 from "@angular/forms";
import * as i7 from "@spartacus/storefront";
import * as i8 from "../../shared/form/form.component";
export class PermissionFormComponent {
    constructor(itemService, unitService, currencyService, permissionService) {
        this.itemService = itemService;
        this.unitService = unitService;
        this.currencyService = currencyService;
        this.permissionService = permissionService;
        this.form = this.itemService.getForm();
        this.units$ = this.unitService
            .getActiveUnitList()
            .pipe(tap((units) => {
            if (units && units.length === 1) {
                this.form?.get('orgUnit.uid')?.setValue(units[0].id);
            }
        }));
        this.currencies$ = this.currencyService.getAll().pipe(tap((currency) => {
            if (currency.length === 1) {
                this.form?.get('currency.isocode')?.setValue(currency[0]?.isocode);
            }
        }));
        this.types$ = this.permissionService.getTypes();
        this.periods = Object.keys(Period);
    }
    ngOnInit() {
        this.unitService.loadList();
    }
}
PermissionFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PermissionFormComponent, deps: [{ token: i1.ItemService }, { token: i2.OrgUnitService }, { token: i3.CurrencyService }, { token: i2.PermissionService }], target: i0.ɵɵFactoryTarget.Component });
PermissionFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: PermissionFormComponent, selector: "cx-org-permission-form", host: { classAttribute: "content-wrapper" }, providers: [
        {
            provide: ItemService,
            useExisting: PermissionItemService,
        },
        {
            provide: CurrentItemService,
            useExisting: CurrentPermissionService,
        },
    ], ngImport: i0, template: "<cx-org-form i18nRoot=\"orgPurchaseLimit\">\n  <ng-container *ngIf=\"form\" [formGroup]=\"form\" main>\n    <label>\n      <span class=\"label-content required\">{{\n        'orgPurchaseLimit.code' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        required\n        placeholder=\"{{ 'orgPurchaseLimit.code' | cxTranslate }}\"\n        formControlName=\"code\"\n      />\n      <cx-form-errors [control]=\"form.get('code')\"></cx-form-errors>\n    </label>\n\n    <label\n      *ngIf=\"(types$ | async)?.length\"\n      [formGroup]=\"$any(form.get('orderApprovalPermissionType'))\"\n    >\n      <span class=\"label-content required\">{{\n        'orgPurchaseLimit.orderApprovalPermissionType' | cxTranslate\n      }}</span>\n      <ng-select\n        [inputAttrs]=\"{ required: 'true' }\"\n        formControlName=\"code\"\n        [searchable]=\"false\"\n        [clearable]=\"false\"\n        [items]=\"(types$ | async) ?? null\"\n        bindLabel=\"name\"\n        bindValue=\"code\"\n        [readonly]=\"form.disabled\"\n        appendTo=\"cx-org-list\"\n        [placeholder]=\"\n          'orgPurchaseLimit.orderApprovalPermissionType' | cxTranslate\n        \"\n      >\n      </ng-select>\n      <cx-form-errors\n        [control]=\"form.get('orderApprovalPermissionType.code')\"\n      ></cx-form-errors>\n    </label>\n\n    <label *ngIf=\"form.get('periodRange')\">\n      <span class=\"label-content required\">{{\n        'orgPurchaseLimit.periodRange' | cxTranslate\n      }}</span>\n      <ng-select\n        [inputAttrs]=\"{ required: 'true' }\"\n        formControlName=\"periodRange\"\n        [searchable]=\"false\"\n        [clearable]=\"false\"\n        [items]=\"periods\"\n        appendTo=\"cx-org-list\"\n        [placeholder]=\"'orgPurchaseLimit.periodRange' | cxTranslate\"\n      >\n      </ng-select>\n      <cx-form-errors [control]=\"form.get('periodRange')\"></cx-form-errors>\n    </label>\n\n    <label\n      *ngIf=\"form.get('currency')\"\n      [formGroup]=\"$any(form.get('currency'))\"\n    >\n      <span class=\"label-content required\">{{\n        'orgPurchaseLimit.currency' | cxTranslate\n      }}</span>\n      <ng-select\n        *ngIf=\"currencies$ | async as currencies\"\n        [inputAttrs]=\"{ required: 'true' }\"\n        formControlName=\"isocode\"\n        [searchable]=\"false\"\n        [clearable]=\"false\"\n        [items]=\"currencies\"\n        bindLabel=\"name\"\n        bindValue=\"isocode\"\n        [placeholder]=\"'orgPurchaseLimit.currency' | cxTranslate\"\n      >\n      </ng-select>\n      <cx-form-errors [control]=\"form.get('currency.isocode')\"></cx-form-errors>\n    </label>\n\n    <label *ngIf=\"form.get('threshold')\">\n      <span class=\"label-content required\">{{\n        'orgPurchaseLimit.threshold' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"number\"\n        required\n        placeholder=\"{{ 'orgPurchaseLimit.threshold' | cxTranslate }}\"\n        formControlName=\"threshold\"\n      />\n      <cx-form-errors [control]=\"form.get('threshold')\"></cx-form-errors>\n    </label>\n\n    <label [formGroup]=\"$any(form.get('orgUnit'))\">\n      <span class=\"label-content required\">{{\n        'orgPurchaseLimit.orgUnit' | cxTranslate\n      }}</span>\n      <ng-select\n        [inputAttrs]=\"{ required: 'true' }\"\n        formControlName=\"uid\"\n        [searchable]=\"true\"\n        [clearable]=\"false\"\n        [items]=\"(units$ | async) ?? null\"\n        bindLabel=\"name\"\n        bindValue=\"id\"\n        [readonly]=\"form.get('orgUnit')?.disabled ?? false\"\n        appendTo=\"cx-org-list\"\n        [placeholder]=\"'orgPurchaseLimit.orgUnit' | cxTranslate\"\n      >\n      </ng-select>\n      <cx-form-errors [control]=\"form.get('orgUnit.uid')\"></cx-form-errors>\n    </label>\n  </ng-container>\n</cx-org-form>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.NgSelectComponent, selector: "ng-select", inputs: ["bindLabel", "bindValue", "markFirst", "placeholder", "notFoundText", "typeToSearchText", "addTagText", "loadingText", "clearAllText", "appearance", "dropdownPosition", "appendTo", "loading", "closeOnSelect", "hideSelected", "selectOnTab", "openOnEnter", "maxSelectedItems", "groupBy", "groupValue", "bufferAmount", "virtualScroll", "selectableGroup", "selectableGroupAsModel", "searchFn", "trackByFn", "clearOnBackspace", "labelForId", "inputAttrs", "tabIndex", "readonly", "searchWhileComposing", "minTermLength", "editableSearchTerm", "keyDownFn", "typeahead", "multiple", "addTag", "searchable", "clearable", "isOpen", "items", "compareWith", "clearSearchOnAdd"], outputs: ["blur", "focus", "change", "open", "close", "search", "clear", "add", "remove", "scroll", "scrollToEnd"] }, { kind: "directive", type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i6.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i6.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i6.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i6.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "component", type: i7.FormErrorsComponent, selector: "cx-form-errors", inputs: ["prefix", "translationParams", "control"] }, { kind: "component", type: i8.FormComponent, selector: "cx-org-form", inputs: ["i18nRoot", "animateBack", "subtitle"] }, { kind: "pipe", type: i4.AsyncPipe, name: "async" }, { kind: "pipe", type: i3.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PermissionFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-permission-form', changeDetection: ChangeDetectionStrategy.OnPush, host: { class: 'content-wrapper' }, providers: [
                        {
                            provide: ItemService,
                            useExisting: PermissionItemService,
                        },
                        {
                            provide: CurrentItemService,
                            useExisting: CurrentPermissionService,
                        },
                    ], template: "<cx-org-form i18nRoot=\"orgPurchaseLimit\">\n  <ng-container *ngIf=\"form\" [formGroup]=\"form\" main>\n    <label>\n      <span class=\"label-content required\">{{\n        'orgPurchaseLimit.code' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"text\"\n        required\n        placeholder=\"{{ 'orgPurchaseLimit.code' | cxTranslate }}\"\n        formControlName=\"code\"\n      />\n      <cx-form-errors [control]=\"form.get('code')\"></cx-form-errors>\n    </label>\n\n    <label\n      *ngIf=\"(types$ | async)?.length\"\n      [formGroup]=\"$any(form.get('orderApprovalPermissionType'))\"\n    >\n      <span class=\"label-content required\">{{\n        'orgPurchaseLimit.orderApprovalPermissionType' | cxTranslate\n      }}</span>\n      <ng-select\n        [inputAttrs]=\"{ required: 'true' }\"\n        formControlName=\"code\"\n        [searchable]=\"false\"\n        [clearable]=\"false\"\n        [items]=\"(types$ | async) ?? null\"\n        bindLabel=\"name\"\n        bindValue=\"code\"\n        [readonly]=\"form.disabled\"\n        appendTo=\"cx-org-list\"\n        [placeholder]=\"\n          'orgPurchaseLimit.orderApprovalPermissionType' | cxTranslate\n        \"\n      >\n      </ng-select>\n      <cx-form-errors\n        [control]=\"form.get('orderApprovalPermissionType.code')\"\n      ></cx-form-errors>\n    </label>\n\n    <label *ngIf=\"form.get('periodRange')\">\n      <span class=\"label-content required\">{{\n        'orgPurchaseLimit.periodRange' | cxTranslate\n      }}</span>\n      <ng-select\n        [inputAttrs]=\"{ required: 'true' }\"\n        formControlName=\"periodRange\"\n        [searchable]=\"false\"\n        [clearable]=\"false\"\n        [items]=\"periods\"\n        appendTo=\"cx-org-list\"\n        [placeholder]=\"'orgPurchaseLimit.periodRange' | cxTranslate\"\n      >\n      </ng-select>\n      <cx-form-errors [control]=\"form.get('periodRange')\"></cx-form-errors>\n    </label>\n\n    <label\n      *ngIf=\"form.get('currency')\"\n      [formGroup]=\"$any(form.get('currency'))\"\n    >\n      <span class=\"label-content required\">{{\n        'orgPurchaseLimit.currency' | cxTranslate\n      }}</span>\n      <ng-select\n        *ngIf=\"currencies$ | async as currencies\"\n        [inputAttrs]=\"{ required: 'true' }\"\n        formControlName=\"isocode\"\n        [searchable]=\"false\"\n        [clearable]=\"false\"\n        [items]=\"currencies\"\n        bindLabel=\"name\"\n        bindValue=\"isocode\"\n        [placeholder]=\"'orgPurchaseLimit.currency' | cxTranslate\"\n      >\n      </ng-select>\n      <cx-form-errors [control]=\"form.get('currency.isocode')\"></cx-form-errors>\n    </label>\n\n    <label *ngIf=\"form.get('threshold')\">\n      <span class=\"label-content required\">{{\n        'orgPurchaseLimit.threshold' | cxTranslate\n      }}</span>\n      <input\n        class=\"form-control\"\n        type=\"number\"\n        required\n        placeholder=\"{{ 'orgPurchaseLimit.threshold' | cxTranslate }}\"\n        formControlName=\"threshold\"\n      />\n      <cx-form-errors [control]=\"form.get('threshold')\"></cx-form-errors>\n    </label>\n\n    <label [formGroup]=\"$any(form.get('orgUnit'))\">\n      <span class=\"label-content required\">{{\n        'orgPurchaseLimit.orgUnit' | cxTranslate\n      }}</span>\n      <ng-select\n        [inputAttrs]=\"{ required: 'true' }\"\n        formControlName=\"uid\"\n        [searchable]=\"true\"\n        [clearable]=\"false\"\n        [items]=\"(units$ | async) ?? null\"\n        bindLabel=\"name\"\n        bindValue=\"id\"\n        [readonly]=\"form.get('orgUnit')?.disabled ?? false\"\n        appendTo=\"cx-org-list\"\n        [placeholder]=\"'orgPurchaseLimit.orgUnit' | cxTranslate\"\n      >\n      </ng-select>\n      <cx-form-errors [control]=\"form.get('orgUnit.uid')\"></cx-form-errors>\n    </label>\n  </ng-container>\n</cx-org-form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ItemService }, { type: i2.OrgUnitService }, { type: i3.CurrencyService }, { type: i2.PermissionService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy9wZXJtaXNzaW9uL2Zvcm0vcGVybWlzc2lvbi1mb3JtLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy9wZXJtaXNzaW9uL2Zvcm0vcGVybWlzc2lvbi1mb3JtLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBTzNFLE9BQU8sRUFHTCxNQUFNLEdBR1AsTUFBTSw2Q0FBNkMsQ0FBQztBQUVyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7Ozs7O0FBa0I1RSxNQUFNLE9BQU8sdUJBQXVCO0lBMEJsQyxZQUNZLFdBQW9DLEVBQ3BDLFdBQTJCLEVBQzNCLGVBQWdDLEVBQ2hDLGlCQUFvQztRQUhwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7UUFDcEMsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQzNCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBN0JoRCxTQUFJLEdBQTRCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFM0QsV0FBTSxHQUEwQyxJQUFJLENBQUMsV0FBVzthQUM3RCxpQkFBaUIsRUFBRTthQUNuQixJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDWixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsYUFBYSxDQUFDLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN0RDtRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7UUFFSixnQkFBVyxHQUEyQixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FDdEUsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDZixJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDcEU7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBRUYsV0FBTSxHQUNKLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVwQyxZQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQU8zQixDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7b0hBbkNVLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLDhGQVh2QjtRQUNUO1lBQ0UsT0FBTyxFQUFFLFdBQVc7WUFDcEIsV0FBVyxFQUFFLHFCQUFxQjtTQUNuQztRQUNEO1lBQ0UsT0FBTyxFQUFFLGtCQUFrQjtZQUMzQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDO0tBQ0YsMEJDekNILHEySEFxSEE7MkZEMUVhLHVCQUF1QjtrQkFoQm5DLFNBQVM7K0JBQ0Usd0JBQXdCLG1CQUVqQix1QkFBdUIsQ0FBQyxNQUFNLFFBQ3pDLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLGFBQ3ZCO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxXQUFXOzRCQUNwQixXQUFXLEVBQUUscUJBQXFCO3lCQUNuQzt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsa0JBQWtCOzRCQUMzQixXQUFXLEVBQUUsd0JBQXdCO3lCQUN0QztxQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVW50eXBlZEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEN1cnJlbmN5LFxuICBDdXJyZW5jeVNlcnZpY2UsXG4gIE9yZGVyQXBwcm92YWxQZXJtaXNzaW9uVHlwZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIEIyQlVuaXROb2RlLFxuICBPcmdVbml0U2VydmljZSxcbiAgUGVyaW9kLFxuICBQZXJtaXNzaW9uLFxuICBQZXJtaXNzaW9uU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXJyZW50SXRlbVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvY3VycmVudC1pdGVtLnNlcnZpY2UnO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvaXRlbS5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbnRQZXJtaXNzaW9uU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2N1cnJlbnQtcGVybWlzc2lvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBlcm1pc3Npb25JdGVtU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3Blcm1pc3Npb24taXRlbS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JnLXBlcm1pc3Npb24tZm9ybScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZXJtaXNzaW9uLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaG9zdDogeyBjbGFzczogJ2NvbnRlbnQtd3JhcHBlcicgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogSXRlbVNlcnZpY2UsXG4gICAgICB1c2VFeGlzdGluZzogUGVybWlzc2lvbkl0ZW1TZXJ2aWNlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ3VycmVudEl0ZW1TZXJ2aWNlLFxuICAgICAgdXNlRXhpc3Rpbmc6IEN1cnJlbnRQZXJtaXNzaW9uU2VydmljZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06IFVudHlwZWRGb3JtR3JvdXAgfCBudWxsID0gdGhpcy5pdGVtU2VydmljZS5nZXRGb3JtKCk7XG5cbiAgdW5pdHMkOiBPYnNlcnZhYmxlPEIyQlVuaXROb2RlW10gfCB1bmRlZmluZWQ+ID0gdGhpcy51bml0U2VydmljZVxuICAgIC5nZXRBY3RpdmVVbml0TGlzdCgpXG4gICAgLnBpcGUoXG4gICAgICB0YXAoKHVuaXRzKSA9PiB7XG4gICAgICAgIGlmICh1bml0cyAmJiB1bml0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICB0aGlzLmZvcm0/LmdldCgnb3JnVW5pdC51aWQnKT8uc2V0VmFsdWUodW5pdHNbMF0uaWQpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgY3VycmVuY2llcyQ6IE9ic2VydmFibGU8Q3VycmVuY3lbXT4gPSB0aGlzLmN1cnJlbmN5U2VydmljZS5nZXRBbGwoKS5waXBlKFxuICAgIHRhcCgoY3VycmVuY3kpID0+IHtcbiAgICAgIGlmIChjdXJyZW5jeS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGhpcy5mb3JtPy5nZXQoJ2N1cnJlbmN5Lmlzb2NvZGUnKT8uc2V0VmFsdWUoY3VycmVuY3lbMF0/Lmlzb2NvZGUpO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG5cbiAgdHlwZXMkOiBPYnNlcnZhYmxlPE9yZGVyQXBwcm92YWxQZXJtaXNzaW9uVHlwZVtdIHwgdW5kZWZpbmVkPiA9XG4gICAgdGhpcy5wZXJtaXNzaW9uU2VydmljZS5nZXRUeXBlcygpO1xuXG4gIHBlcmlvZHMgPSBPYmplY3Qua2V5cyhQZXJpb2QpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBpdGVtU2VydmljZTogSXRlbVNlcnZpY2U8UGVybWlzc2lvbj4sXG4gICAgcHJvdGVjdGVkIHVuaXRTZXJ2aWNlOiBPcmdVbml0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHBlcm1pc3Npb25TZXJ2aWNlOiBQZXJtaXNzaW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51bml0U2VydmljZS5sb2FkTGlzdCgpO1xuICB9XG59XG4iLCI8Y3gtb3JnLWZvcm0gaTE4blJvb3Q9XCJvcmdQdXJjaGFzZUxpbWl0XCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgbWFpbj5cbiAgICA8bGFiZWw+XG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsLWNvbnRlbnQgcmVxdWlyZWRcIj57e1xuICAgICAgICAnb3JnUHVyY2hhc2VMaW1pdC5jb2RlJyB8IGN4VHJhbnNsYXRlXG4gICAgICB9fTwvc3Bhbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ7eyAnb3JnUHVyY2hhc2VMaW1pdC5jb2RlJyB8IGN4VHJhbnNsYXRlIH19XCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiY29kZVwiXG4gICAgICAvPlxuICAgICAgPGN4LWZvcm0tZXJyb3JzIFtjb250cm9sXT1cImZvcm0uZ2V0KCdjb2RlJylcIj48L2N4LWZvcm0tZXJyb3JzPlxuICAgIDwvbGFiZWw+XG5cbiAgICA8bGFiZWxcbiAgICAgICpuZ0lmPVwiKHR5cGVzJCB8IGFzeW5jKT8ubGVuZ3RoXCJcbiAgICAgIFtmb3JtR3JvdXBdPVwiJGFueShmb3JtLmdldCgnb3JkZXJBcHByb3ZhbFBlcm1pc3Npb25UeXBlJykpXCJcbiAgICA+XG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsLWNvbnRlbnQgcmVxdWlyZWRcIj57e1xuICAgICAgICAnb3JnUHVyY2hhc2VMaW1pdC5vcmRlckFwcHJvdmFsUGVybWlzc2lvblR5cGUnIHwgY3hUcmFuc2xhdGVcbiAgICAgIH19PC9zcGFuPlxuICAgICAgPG5nLXNlbGVjdFxuICAgICAgICBbaW5wdXRBdHRyc109XCJ7IHJlcXVpcmVkOiAndHJ1ZScgfVwiXG4gICAgICAgIGZvcm1Db250cm9sTmFtZT1cImNvZGVcIlxuICAgICAgICBbc2VhcmNoYWJsZV09XCJmYWxzZVwiXG4gICAgICAgIFtjbGVhcmFibGVdPVwiZmFsc2VcIlxuICAgICAgICBbaXRlbXNdPVwiKHR5cGVzJCB8IGFzeW5jKSA/PyBudWxsXCJcbiAgICAgICAgYmluZExhYmVsPVwibmFtZVwiXG4gICAgICAgIGJpbmRWYWx1ZT1cImNvZGVcIlxuICAgICAgICBbcmVhZG9ubHldPVwiZm9ybS5kaXNhYmxlZFwiXG4gICAgICAgIGFwcGVuZFRvPVwiY3gtb3JnLWxpc3RcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiXG4gICAgICAgICAgJ29yZ1B1cmNoYXNlTGltaXQub3JkZXJBcHByb3ZhbFBlcm1pc3Npb25UeXBlJyB8IGN4VHJhbnNsYXRlXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICA8L25nLXNlbGVjdD5cbiAgICAgIDxjeC1mb3JtLWVycm9yc1xuICAgICAgICBbY29udHJvbF09XCJmb3JtLmdldCgnb3JkZXJBcHByb3ZhbFBlcm1pc3Npb25UeXBlLmNvZGUnKVwiXG4gICAgICA+PC9jeC1mb3JtLWVycm9ycz5cbiAgICA8L2xhYmVsPlxuXG4gICAgPGxhYmVsICpuZ0lmPVwiZm9ybS5nZXQoJ3BlcmlvZFJhbmdlJylcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwtY29udGVudCByZXF1aXJlZFwiPnt7XG4gICAgICAgICdvcmdQdXJjaGFzZUxpbWl0LnBlcmlvZFJhbmdlJyB8IGN4VHJhbnNsYXRlXG4gICAgICB9fTwvc3Bhbj5cbiAgICAgIDxuZy1zZWxlY3RcbiAgICAgICAgW2lucHV0QXR0cnNdPVwieyByZXF1aXJlZDogJ3RydWUnIH1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwZXJpb2RSYW5nZVwiXG4gICAgICAgIFtzZWFyY2hhYmxlXT1cImZhbHNlXCJcbiAgICAgICAgW2NsZWFyYWJsZV09XCJmYWxzZVwiXG4gICAgICAgIFtpdGVtc109XCJwZXJpb2RzXCJcbiAgICAgICAgYXBwZW5kVG89XCJjeC1vcmctbGlzdFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInb3JnUHVyY2hhc2VMaW1pdC5wZXJpb2RSYW5nZScgfCBjeFRyYW5zbGF0ZVwiXG4gICAgICA+XG4gICAgICA8L25nLXNlbGVjdD5cbiAgICAgIDxjeC1mb3JtLWVycm9ycyBbY29udHJvbF09XCJmb3JtLmdldCgncGVyaW9kUmFuZ2UnKVwiPjwvY3gtZm9ybS1lcnJvcnM+XG4gICAgPC9sYWJlbD5cblxuICAgIDxsYWJlbFxuICAgICAgKm5nSWY9XCJmb3JtLmdldCgnY3VycmVuY3knKVwiXG4gICAgICBbZm9ybUdyb3VwXT1cIiRhbnkoZm9ybS5nZXQoJ2N1cnJlbmN5JykpXCJcbiAgICA+XG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsLWNvbnRlbnQgcmVxdWlyZWRcIj57e1xuICAgICAgICAnb3JnUHVyY2hhc2VMaW1pdC5jdXJyZW5jeScgfCBjeFRyYW5zbGF0ZVxuICAgICAgfX08L3NwYW4+XG4gICAgICA8bmctc2VsZWN0XG4gICAgICAgICpuZ0lmPVwiY3VycmVuY2llcyQgfCBhc3luYyBhcyBjdXJyZW5jaWVzXCJcbiAgICAgICAgW2lucHV0QXR0cnNdPVwieyByZXF1aXJlZDogJ3RydWUnIH1cIlxuICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJpc29jb2RlXCJcbiAgICAgICAgW3NlYXJjaGFibGVdPVwiZmFsc2VcIlxuICAgICAgICBbY2xlYXJhYmxlXT1cImZhbHNlXCJcbiAgICAgICAgW2l0ZW1zXT1cImN1cnJlbmNpZXNcIlxuICAgICAgICBiaW5kTGFiZWw9XCJuYW1lXCJcbiAgICAgICAgYmluZFZhbHVlPVwiaXNvY29kZVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInb3JnUHVyY2hhc2VMaW1pdC5jdXJyZW5jeScgfCBjeFRyYW5zbGF0ZVwiXG4gICAgICA+XG4gICAgICA8L25nLXNlbGVjdD5cbiAgICAgIDxjeC1mb3JtLWVycm9ycyBbY29udHJvbF09XCJmb3JtLmdldCgnY3VycmVuY3kuaXNvY29kZScpXCI+PC9jeC1mb3JtLWVycm9ycz5cbiAgICA8L2xhYmVsPlxuXG4gICAgPGxhYmVsICpuZ0lmPVwiZm9ybS5nZXQoJ3RocmVzaG9sZCcpXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsLWNvbnRlbnQgcmVxdWlyZWRcIj57e1xuICAgICAgICAnb3JnUHVyY2hhc2VMaW1pdC50aHJlc2hvbGQnIHwgY3hUcmFuc2xhdGVcbiAgICAgIH19PC9zcGFuPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgIHJlcXVpcmVkXG4gICAgICAgIHBsYWNlaG9sZGVyPVwie3sgJ29yZ1B1cmNoYXNlTGltaXQudGhyZXNob2xkJyB8IGN4VHJhbnNsYXRlIH19XCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidGhyZXNob2xkXCJcbiAgICAgIC8+XG4gICAgICA8Y3gtZm9ybS1lcnJvcnMgW2NvbnRyb2xdPVwiZm9ybS5nZXQoJ3RocmVzaG9sZCcpXCI+PC9jeC1mb3JtLWVycm9ycz5cbiAgICA8L2xhYmVsPlxuXG4gICAgPGxhYmVsIFtmb3JtR3JvdXBdPVwiJGFueShmb3JtLmdldCgnb3JnVW5pdCcpKVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbC1jb250ZW50IHJlcXVpcmVkXCI+e3tcbiAgICAgICAgJ29yZ1B1cmNoYXNlTGltaXQub3JnVW5pdCcgfCBjeFRyYW5zbGF0ZVxuICAgICAgfX08L3NwYW4+XG4gICAgICA8bmctc2VsZWN0XG4gICAgICAgIFtpbnB1dEF0dHJzXT1cInsgcmVxdWlyZWQ6ICd0cnVlJyB9XCJcbiAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwidWlkXCJcbiAgICAgICAgW3NlYXJjaGFibGVdPVwidHJ1ZVwiXG4gICAgICAgIFtjbGVhcmFibGVdPVwiZmFsc2VcIlxuICAgICAgICBbaXRlbXNdPVwiKHVuaXRzJCB8IGFzeW5jKSA/PyBudWxsXCJcbiAgICAgICAgYmluZExhYmVsPVwibmFtZVwiXG4gICAgICAgIGJpbmRWYWx1ZT1cImlkXCJcbiAgICAgICAgW3JlYWRvbmx5XT1cImZvcm0uZ2V0KCdvcmdVbml0Jyk/LmRpc2FibGVkID8/IGZhbHNlXCJcbiAgICAgICAgYXBwZW5kVG89XCJjeC1vcmctbGlzdFwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCInb3JnUHVyY2hhc2VMaW1pdC5vcmdVbml0JyB8IGN4VHJhbnNsYXRlXCJcbiAgICAgID5cbiAgICAgIDwvbmctc2VsZWN0PlxuICAgICAgPGN4LWZvcm0tZXJyb3JzIFtjb250cm9sXT1cImZvcm0uZ2V0KCdvcmdVbml0LnVpZCcpXCI+PC9jeC1mb3JtLWVycm9ycz5cbiAgICA8L2xhYmVsPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvY3gtb3JnLWZvcm0+XG4iXX0=