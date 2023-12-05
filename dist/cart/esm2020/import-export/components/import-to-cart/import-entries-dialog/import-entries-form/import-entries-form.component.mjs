/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators, } from '@angular/forms';
import { FormUtils, } from '@spartacus/storefront';
import { of, Subject } from 'rxjs';
import { filter, startWith, switchMap, take, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/storefront";
import * as i2 from "../../import-products-from-csv.service";
import * as i3 from "@spartacus/cart/import-export/core";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
import * as i6 from "@spartacus/core";
export class ImportEntriesFormComponent {
    constructor(launchDialogService, importToCartService, importCsvService, filesFormValidators, importExportConfig) {
        this.launchDialogService = launchDialogService;
        this.importToCartService = importToCartService;
        this.importCsvService = importCsvService;
        this.filesFormValidators = filesFormValidators;
        this.importExportConfig = importExportConfig;
        this.formSubmitSubject$ = new Subject();
        this.submitEvent = new EventEmitter();
    }
    ngOnInit() {
        this.form = this.buildForm();
        this.formSubmitSubject$
            .pipe(tap(() => {
            if (this.form.invalid) {
                this.form.markAllAsTouched();
                FormUtils.deepUpdateValueAndValidity(this.form);
            }
        }), switchMap(() => this.form.statusChanges.pipe(startWith(this.form.get('file')?.status), filter((status) => status !== 'PENDING'), take(1))), filter((status) => status === 'VALID'))
            .subscribe(() => {
            this.save();
        });
    }
    close(reason) {
        this.launchDialogService.closeDialog(reason);
    }
    save() {
        const file = this.form.get('file')?.value?.[0];
        if (this.separator !== undefined) {
            this.importCsvService
                .loadFile(file, this.separator)
                .subscribe((loadedFile) => {
                this.submitEvent.emit({
                    products: this.importToCartService.csvDataToProduct(loadedFile),
                });
            });
        }
    }
    buildForm() {
        const form = new UntypedFormGroup({});
        form.setControl('file', new UntypedFormControl('', [Validators.required, this.filesFormValidators.maxSize(this.maxSize)], [
            (control) => this.separator !== undefined
                ? this.importCsvService.validateFile(control.value[0], {
                    separator: this.separator,
                    isDataParsable: this.importToCartService.isDataParsableToProducts,
                    maxEntries: this.maxEntries,
                })
                : of(null),
        ]));
        return form;
    }
    get allowedTypes() {
        return this.importExportConfig.cartImportExport?.import?.fileValidity
            ?.allowedTypes;
    }
    get maxSize() {
        return this.importExportConfig.cartImportExport?.import?.fileValidity
            ?.maxSize;
    }
    get maxEntries() {
        return this.importExportConfig.cartImportExport?.import?.fileValidity
            ?.maxEntries?.[this.type];
    }
    get separator() {
        return this.importExportConfig.cartImportExport?.file.separator;
    }
}
ImportEntriesFormComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ImportEntriesFormComponent, deps: [{ token: i1.LaunchDialogService }, { token: i2.ImportProductsFromCsvService }, { token: i1.ImportCsvFileService }, { token: i1.FilesFormValidators }, { token: i3.ImportExportConfig }], target: i0.ɵɵFactoryTarget.Component });
ImportEntriesFormComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: ImportEntriesFormComponent, selector: "cx-import-entries-form", inputs: { type: "type" }, outputs: { submitEvent: "submitEvent" }, ngImport: i0, template: "<form\n  *ngIf=\"form\"\n  [formGroup]=\"form\"\n  (submit)=\"formSubmitSubject$.next(undefined)\"\n>\n  <p class=\"cx-import-entries-subtitle\">\n    {{ 'importEntriesDialog.importProductsSubtitle' | cxTranslate }}\n  </p>\n  <p>\n    {{ 'importEntriesDialog.importProductFileDetails' | cxTranslate }}\n  </p>\n  <label>\n    <cx-file-upload [formControl]=\"form.get('file')\" [accept]=\"allowedTypes\">\n      {{ 'importEntriesDialog.selectFile' | cxTranslate }}\n    </cx-file-upload>\n    <cx-form-errors\n      [control]=\"form.get('file')\"\n      prefix=\"formErrors.file\"\n    ></cx-form-errors>\n  </label>\n  <div class=\"cx-import-entries-footer\">\n    <button\n      (click)=\"close('Close Import Products Dialog')\"\n      class=\"btn btn-secondary\"\n      type=\"button\"\n    >\n      {{ 'importEntriesDialog.cancel' | cxTranslate }}\n    </button>\n    <button\n      class=\"btn btn-primary\"\n      type=\"submit\"\n      [disabled]=\"form.get('file')?.status === 'PENDING'\"\n    >\n      {{ 'importEntriesDialog.upload' | cxTranslate }}\n    </button>\n  </div>\n</form>\n", dependencies: [{ kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i5.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "component", type: i1.FormErrorsComponent, selector: "cx-form-errors", inputs: ["prefix", "translationParams", "control"] }, { kind: "component", type: i1.FileUploadComponent, selector: "cx-file-upload", inputs: ["accept", "multiple"], outputs: ["update"] }, { kind: "pipe", type: i6.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: ImportEntriesFormComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-import-entries-form', changeDetection: ChangeDetectionStrategy.OnPush, template: "<form\n  *ngIf=\"form\"\n  [formGroup]=\"form\"\n  (submit)=\"formSubmitSubject$.next(undefined)\"\n>\n  <p class=\"cx-import-entries-subtitle\">\n    {{ 'importEntriesDialog.importProductsSubtitle' | cxTranslate }}\n  </p>\n  <p>\n    {{ 'importEntriesDialog.importProductFileDetails' | cxTranslate }}\n  </p>\n  <label>\n    <cx-file-upload [formControl]=\"form.get('file')\" [accept]=\"allowedTypes\">\n      {{ 'importEntriesDialog.selectFile' | cxTranslate }}\n    </cx-file-upload>\n    <cx-form-errors\n      [control]=\"form.get('file')\"\n      prefix=\"formErrors.file\"\n    ></cx-form-errors>\n  </label>\n  <div class=\"cx-import-entries-footer\">\n    <button\n      (click)=\"close('Close Import Products Dialog')\"\n      class=\"btn btn-secondary\"\n      type=\"button\"\n    >\n      {{ 'importEntriesDialog.cancel' | cxTranslate }}\n    </button>\n    <button\n      class=\"btn btn-primary\"\n      type=\"submit\"\n      [disabled]=\"form.get('file')?.status === 'PENDING'\"\n    >\n      {{ 'importEntriesDialog.upload' | cxTranslate }}\n    </button>\n  </div>\n</form>\n" }]
        }], ctorParameters: function () { return [{ type: i1.LaunchDialogService }, { type: i2.ImportProductsFromCsvService }, { type: i1.ImportCsvFileService }, { type: i1.FilesFormValidators }, { type: i3.ImportExportConfig }]; }, propDecorators: { submitEvent: [{
                type: Output
            }], type: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LWVudHJpZXMtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvY2FydC9pbXBvcnQtZXhwb3J0L2NvbXBvbmVudHMvaW1wb3J0LXRvLWNhcnQvaW1wb3J0LWVudHJpZXMtZGlhbG9nL2ltcG9ydC1lbnRyaWVzLWZvcm0vaW1wb3J0LWVudHJpZXMtZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvY2FydC9pbXBvcnQtZXhwb3J0L2NvbXBvbmVudHMvaW1wb3J0LXRvLWNhcnQvaW1wb3J0LWVudHJpZXMtZGlhbG9nL2ltcG9ydC1lbnRyaWVzLWZvcm0vaW1wb3J0LWVudHJpZXMtZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixnQkFBZ0IsRUFDaEIsVUFBVSxHQUNYLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEIsT0FBTyxFQUVMLFNBQVMsR0FHVixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0FBUXpFLE1BQU0sT0FBTywwQkFBMEI7SUFhckMsWUFDWSxtQkFBd0MsRUFDeEMsbUJBQWlELEVBQ2pELGdCQUFzQyxFQUN0QyxtQkFBd0MsRUFDeEMsa0JBQXNDO1FBSnRDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7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bkQsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2lCQUM1QixDQUFDO2dCQUNKLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1NBQ2YsQ0FDRixDQUNGLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFlBQVk7WUFDbkUsRUFBRSxZQUFZLENBQUM7SUFDbkIsQ0FBQztJQUVELElBQWMsT0FBTztRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsWUFBWTtZQUNuRSxFQUFFLE9BQU8sQ0FBQztJQUNkLENBQUM7SUFFRCxJQUFjLFVBQVU7UUFDdEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLEVBQUUsTUFBTSxFQUFFLFlBQVk7WUFDbkUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELElBQWMsU0FBUztRQUNyQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2xFLENBQUM7O3VIQXZHVSwwQkFBMEI7MkdBQTFCLDBCQUEwQixpSUNwQ3ZDLHlrQ0FxQ0E7MkZERGEsMEJBQTBCO2tCQUx0QyxTQUFTOytCQUNFLHdCQUF3QixtQkFFakIsdUJBQXVCLENBQUMsTUFBTTsyUEFRL0MsV0FBVztzQkFEVixNQUFNO2dCQU1QLElBQUk7c0JBREgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFVudHlwZWRGb3JtQ29udHJvbCxcbiAgVW50eXBlZEZvcm1Hcm91cCxcbiAgVmFsaWRhdG9ycyxcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3JkZXJFbnRyaWVzU291cmNlLCBQcm9kdWN0RGF0YSB9IGZyb20gJ0BzcGFydGFjdXMvY2FydC9iYXNlL3Jvb3QnO1xuaW1wb3J0IHsgSW1wb3J0RXhwb3J0Q29uZmlnIH0gZnJvbSAnQHNwYXJ0YWN1cy9jYXJ0L2ltcG9ydC1leHBvcnQvY29yZSc7XG5pbXBvcnQge1xuICBGaWxlc0Zvcm1WYWxpZGF0b3JzLFxuICBGb3JtVXRpbHMsXG4gIEltcG9ydENzdkZpbGVTZXJ2aWNlLFxuICBMYXVuY2hEaWFsb2dTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL3N0b3JlZnJvbnQnO1xuaW1wb3J0IHsgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3RhcnRXaXRoLCBzd2l0Y2hNYXAsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEltcG9ydFByb2R1Y3RzRnJvbUNzdlNlcnZpY2UgfSBmcm9tICcuLi8uLi9pbXBvcnQtcHJvZHVjdHMtZnJvbS1jc3Yuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWltcG9ydC1lbnRyaWVzLWZvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1wb3J0LWVudHJpZXMtZm9ybS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBJbXBvcnRFbnRyaWVzRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGZvcm06IFVudHlwZWRGb3JtR3JvdXA7XG4gIGxvYWRlZEZpbGU6IHN0cmluZ1tdW10gfCBudWxsO1xuICBmb3JtU3VibWl0U3ViamVjdCQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIEBPdXRwdXQoKVxuICBzdWJtaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8e1xuICAgIHByb2R1Y3RzOiBQcm9kdWN0RGF0YVtdO1xuICB9PigpO1xuXG4gIEBJbnB1dCgpXG4gIHR5cGU6IE9yZGVyRW50cmllc1NvdXJjZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbGF1bmNoRGlhbG9nU2VydmljZTogTGF1bmNoRGlhbG9nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgaW1wb3J0VG9DYXJ0U2VydmljZTogSW1wb3J0UHJvZHVjdHNGcm9tQ3N2U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgaW1wb3J0Q3N2U2VydmljZTogSW1wb3J0Q3N2RmlsZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZpbGVzRm9ybVZhbGlkYXRvcnM6IEZpbGVzRm9ybVZhbGlkYXRvcnMsXG4gICAgcHJvdGVjdGVkIGltcG9ydEV4cG9ydENvbmZpZzogSW1wb3J0RXhwb3J0Q29uZmlnXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmJ1aWxkRm9ybSgpO1xuXG4gICAgdGhpcy5mb3JtU3VibWl0U3ViamVjdCRcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLmZvcm0uaW52YWxpZCkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLm1hcmtBbGxBc1RvdWNoZWQoKTtcbiAgICAgICAgICAgIEZvcm1VdGlscy5kZWVwVXBkYXRlVmFsdWVBbmRWYWxpZGl0eSh0aGlzLmZvcm0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PlxuICAgICAgICAgIHRoaXMuZm9ybS5zdGF0dXNDaGFuZ2VzLnBpcGUoXG4gICAgICAgICAgICBzdGFydFdpdGgodGhpcy5mb3JtLmdldCgnZmlsZScpPy5zdGF0dXMpLFxuICAgICAgICAgICAgZmlsdGVyKChzdGF0dXMpID0+IHN0YXR1cyAhPT0gJ1BFTkRJTkcnKSxcbiAgICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIGZpbHRlcigoc3RhdHVzKSA9PiBzdGF0dXMgPT09ICdWQUxJRCcpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNsb3NlKHJlYXNvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmNsb3NlRGlhbG9nKHJlYXNvbik7XG4gIH1cblxuICBzYXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGU6IEZpbGUgPSB0aGlzLmZvcm0uZ2V0KCdmaWxlJyk/LnZhbHVlPy5bMF07XG4gICAgaWYgKHRoaXMuc2VwYXJhdG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaW1wb3J0Q3N2U2VydmljZVxuICAgICAgICAubG9hZEZpbGUoZmlsZSwgdGhpcy5zZXBhcmF0b3IpXG4gICAgICAgIC5zdWJzY3JpYmUoKGxvYWRlZEZpbGU6IHN0cmluZ1tdW10pID0+IHtcbiAgICAgICAgICB0aGlzLnN1Ym1pdEV2ZW50LmVtaXQoe1xuICAgICAgICAgICAgcHJvZHVjdHM6IHRoaXMuaW1wb3J0VG9DYXJ0U2VydmljZS5jc3ZEYXRhVG9Qcm9kdWN0KGxvYWRlZEZpbGUpLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgYnVpbGRGb3JtKCk6IFVudHlwZWRGb3JtR3JvdXAge1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgVW50eXBlZEZvcm1Hcm91cCh7fSk7XG4gICAgZm9ybS5zZXRDb250cm9sKFxuICAgICAgJ2ZpbGUnLFxuICAgICAgbmV3IFVudHlwZWRGb3JtQ29udHJvbChcbiAgICAgICAgJycsXG4gICAgICAgIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCB0aGlzLmZpbGVzRm9ybVZhbGlkYXRvcnMubWF4U2l6ZSh0aGlzLm1heFNpemUpXSxcbiAgICAgICAgW1xuICAgICAgICAgIChjb250cm9sKSA9PlxuICAgICAgICAgICAgdGhpcy5zZXBhcmF0b3IgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICA/IHRoaXMuaW1wb3J0Q3N2U2VydmljZS52YWxpZGF0ZUZpbGUoY29udHJvbC52YWx1ZVswXSwge1xuICAgICAgICAgICAgICAgICAgc2VwYXJhdG9yOiB0aGlzLnNlcGFyYXRvcixcbiAgICAgICAgICAgICAgICAgIGlzRGF0YVBhcnNhYmxlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmltcG9ydFRvQ2FydFNlcnZpY2UuaXNEYXRhUGFyc2FibGVUb1Byb2R1Y3RzLFxuICAgICAgICAgICAgICAgICAgbWF4RW50cmllczogdGhpcy5tYXhFbnRyaWVzLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogb2YobnVsbCksXG4gICAgICAgIF1cbiAgICAgIClcbiAgICApO1xuICAgIHJldHVybiBmb3JtO1xuICB9XG5cbiAgcHVibGljIGdldCBhbGxvd2VkVHlwZXMoKTogc3RyaW5nW10gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmltcG9ydEV4cG9ydENvbmZpZy5jYXJ0SW1wb3J0RXhwb3J0Py5pbXBvcnQ/LmZpbGVWYWxpZGl0eVxuICAgICAgPy5hbGxvd2VkVHlwZXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0IG1heFNpemUoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5pbXBvcnRFeHBvcnRDb25maWcuY2FydEltcG9ydEV4cG9ydD8uaW1wb3J0Py5maWxlVmFsaWRpdHlcbiAgICAgID8ubWF4U2l6ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgbWF4RW50cmllcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLmltcG9ydEV4cG9ydENvbmZpZy5jYXJ0SW1wb3J0RXhwb3J0Py5pbXBvcnQ/LmZpbGVWYWxpZGl0eVxuICAgICAgPy5tYXhFbnRyaWVzPy5bdGhpcy50eXBlXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXQgc2VwYXJhdG9yKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMuaW1wb3J0RXhwb3J0Q29uZmlnLmNhcnRJbXBvcnRFeHBvcnQ/LmZpbGUuc2VwYXJhdG9yO1xuICB9XG59XG4iLCI8Zm9ybVxuICAqbmdJZj1cImZvcm1cIlxuICBbZm9ybUdyb3VwXT1cImZvcm1cIlxuICAoc3VibWl0KT1cImZvcm1TdWJtaXRTdWJqZWN0JC5uZXh0KHVuZGVmaW5lZClcIlxuPlxuICA8cCBjbGFzcz1cImN4LWltcG9ydC1lbnRyaWVzLXN1YnRpdGxlXCI+XG4gICAge3sgJ2ltcG9ydEVudHJpZXNEaWFsb2cuaW1wb3J0UHJvZHVjdHNTdWJ0aXRsZScgfCBjeFRyYW5zbGF0ZSB9fVxuICA8L3A+XG4gIDxwPlxuICAgIHt7ICdpbXBvcnRFbnRyaWVzRGlhbG9nLmltcG9ydFByb2R1Y3RGaWxlRGV0YWlscycgfCBjeFRyYW5zbGF0ZSB9fVxuICA8L3A+XG4gIDxsYWJlbD5cbiAgICA8Y3gtZmlsZS11cGxvYWQgW2Zvcm1Db250cm9sXT1cImZvcm0uZ2V0KCdmaWxlJylcIiBbYWNjZXB0XT1cImFsbG93ZWRUeXBlc1wiPlxuICAgICAge3sgJ2ltcG9ydEVudHJpZXNEaWFsb2cuc2VsZWN0RmlsZScgfCBjeFRyYW5zbGF0ZSB9fVxuICAgIDwvY3gtZmlsZS11cGxvYWQ+XG4gICAgPGN4LWZvcm0tZXJyb3JzXG4gICAgICBbY29udHJvbF09XCJmb3JtLmdldCgnZmlsZScpXCJcbiAgICAgIHByZWZpeD1cImZvcm1FcnJvcnMuZmlsZVwiXG4gICAgPjwvY3gtZm9ybS1lcnJvcnM+XG4gIDwvbGFiZWw+XG4gIDxkaXYgY2xhc3M9XCJjeC1pbXBvcnQtZW50cmllcy1mb290ZXJcIj5cbiAgICA8YnV0dG9uXG4gICAgICAoY2xpY2spPVwiY2xvc2UoJ0Nsb3NlIEltcG9ydCBQcm9kdWN0cyBEaWFsb2cnKVwiXG4gICAgICBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgID5cbiAgICAgIHt7ICdpbXBvcnRFbnRyaWVzRGlhbG9nLmNhbmNlbCcgfCBjeFRyYW5zbGF0ZSB9fVxuICAgIDwvYnV0dG9uPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgW2Rpc2FibGVkXT1cImZvcm0uZ2V0KCdmaWxlJyk/LnN0YXR1cyA9PT0gJ1BFTkRJTkcnXCJcbiAgICA+XG4gICAgICB7eyAnaW1wb3J0RW50cmllc0RpYWxvZy51cGxvYWQnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Zvcm0+XG4iXX0=