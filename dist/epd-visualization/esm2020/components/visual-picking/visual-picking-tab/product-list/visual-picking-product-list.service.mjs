/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { EventEmitter, Injectable } from '@angular/core';
import { combineLatest, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, shareReplay, switchMap, tap, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/storefront";
import * as i2 from "@spartacus/core";
import * as i3 from "../product-filter/visual-picking-product-filter.service";
import * as i4 from "@spartacus/epd-visualization/root";
export class VisualPickingProductListService {
    constructor(currentProductService, productReferenceService, visualPickingProductFilterService, epdVisualizationConfig) {
        this.currentProductService = currentProductService;
        this.productReferenceService = productReferenceService;
        this.visualPickingProductFilterService = visualPickingProductFilterService;
        this.epdVisualizationConfig = epdVisualizationConfig;
        this.DEFAULT_ITEMS_PER_SLIDE = 7;
        this.currentProduct$ = this.currentProductService
            .getProduct()
            .pipe(filter((product) => !!product && !!product.code), map((product) => product), distinctUntilChanged((p1, p2) => p1.code === p2.code));
        this.productReferences$ = new Subject();
        this.activeSlideStartIndex = 0;
        this.itemsPerSlide = this.DEFAULT_ITEMS_PER_SLIDE;
        this.selectedProductCodesChange = new EventEmitter();
        this.filteredItems$ = this.getVisualPickingProductListItems(this.getFilteredProductReferences(), this.selectedProductCodesChange).pipe(shareReplay());
    }
    /**
     * Initializes the service.
     */
    initialize() {
        this.getFilteredProductReferencesSubscription =
            this.getFilteredProductReferences().subscribe(() => {
                this.activeSlideStartIndex = 0;
            });
        this.visualPickingProductFilterService.filter = '';
        this.filteredItemsSubscription = this.filteredItems$.subscribe((items) => {
            const firstSelectedItemIndex = items.findIndex((item) => item.selected);
            if (firstSelectedItemIndex !== -1) {
                this.activeSlideStartIndex =
                    firstSelectedItemIndex -
                        (firstSelectedItemIndex % this.itemsPerSlide);
            }
        });
        this.selectedProductCodes = [];
        this.productReferencesSubscription = this._getProductReferences().subscribe(this.productReferences$);
    }
    ngOnDestroy() {
        this.getFilteredProductReferencesSubscription?.unsubscribe();
        this.filteredItemsSubscription?.unsubscribe();
        this.productReferencesSubscription?.unsubscribe();
    }
    get productReferenceType() {
        const epdVisualization = this.epdVisualizationConfig
            .epdVisualization;
        const visualPickingConfig = epdVisualization.visualPicking;
        return visualPickingConfig.productReferenceType;
    }
    /**
     * Returns an Observable that produces the spare part product references for the current product.
     * @returns An Observable that produces the spare part product references for the current product.
     */
    getProductReferences() {
        return this.productReferences$;
    }
    _getProductReferences() {
        return this.currentProduct$.pipe(tap((product) => this.productReferenceService.loadProductReferences(product.code, this.productReferenceType)), switchMap((product) => this.productReferenceService.getProductReferences(product.code, this.productReferenceType)), filter((productReferences) => productReferences !== undefined));
    }
    /**
     * Returns an Observable that produces a filtered array of spare part product references for the current product.
     * Filtering is performed by the VisualPickingProductFilterService.
     * @returns An Observable that produces a filtered array of spare part product references for the current product.
     */
    getFilteredProductReferences() {
        return this.visualPickingProductFilterService
            .getFilteredProducts(this.getProductReferences())
            .pipe(shareReplay());
    }
    set selectedProductCodes(selectedProductCodes) {
        this._selectedProductCodes = selectedProductCodes;
        this.selectedProductCodesChange.next(selectedProductCodes);
    }
    get selectedProductCodes() {
        return this._selectedProductCodes;
    }
    /**
     * Used to create the list item model data for the visual picking product list.
     * Returns an observable containing an array of VisualPickingProductListItem objects created by combining the latest values from
     * an Observable producing an array of product references and
     * an Observable producing an array of selected product codes.
     * The VisualPickingProductListItem model object combines a ProductReference for a spare part and the selected state of the list item.
     * @param productReferences$ An Observable producing the array of ProductReference values to map.
     * @param selectedProductCodes$ An Observable producing the array of selected product codes.
     * @returns An Observable producing an array of VisualPickingProductListItem values.
     */
    getVisualPickingProductListItems(productReferences$, selectedProductCodes$) {
        return combineLatest([productReferences$, selectedProductCodes$]).pipe(filter(([productReferences, selectedProductCodes]) => !!productReferences && !!selectedProductCodes), map(([productReferences, selectedProductCodes]) => {
            return productReferences
                .filter((productReference) => !!productReference.target && !!productReference.target.code)
                .map((productReference) => {
                const product = productReference.target;
                const productCode = product.code;
                const selected = selectedProductCodes.indexOf(productCode) !== -1;
                return {
                    product,
                    selected,
                };
            });
        }));
    }
}
VisualPickingProductListService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: VisualPickingProductListService, deps: [{ token: i1.CurrentProductService }, { token: i2.ProductReferenceService }, { token: i3.VisualPickingProductFilterService }, { token: i4.EpdVisualizationConfig }], target: i0.ɵɵFactoryTarget.Injectable });
VisualPickingProductListService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: VisualPickingProductListService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: VisualPickingProductListService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.CurrentProductService }, { type: i2.ProductReferenceService }, { type: i3.VisualPickingProductFilterService }, { type: i4.EpdVisualizationConfig }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlzdWFsLXBpY2tpbmctcHJvZHVjdC1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9pbnRlZ3JhdGlvbi1saWJzL2VwZC12aXN1YWxpemF0aW9uL2NvbXBvbmVudHMvdmlzdWFsLXBpY2tpbmcvdmlzdWFsLXBpY2tpbmctdGFiL3Byb2R1Y3QtbGlzdC92aXN1YWwtcGlja2luZy1wcm9kdWN0LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFZcEUsT0FBTyxFQUFFLGFBQWEsRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3hFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxXQUFXLEVBQ1gsU0FBUyxFQUNULEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFPeEIsTUFBTSxPQUFPLCtCQUErQjtJQUMxQyxZQUNZLHFCQUE0QyxFQUM1Qyx1QkFBZ0QsRUFDaEQsaUNBQW9FLEVBQ3BFLHNCQUE4QztRQUg5QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDaEQsc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztRQUNwRSwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBR3ZDLDRCQUF1QixHQUFHLENBQUMsQ0FBQztRQThDeEMsb0JBQWUsR0FBd0IsSUFBSSxDQUFDLHFCQUFxQjthQUNyRSxVQUFVLEVBQUU7YUFDWixJQUFJLENBQ0gsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQ2hELEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFB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O2dCQUNuRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsSUFBYyxDQUFDO2dCQUMzQyxNQUFNLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2xFLE9BQU87b0JBQ0wsT0FBTztvQkFDUCxRQUFRO2lCQUNULENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs0SEF6SlUsK0JBQStCO2dJQUEvQiwrQkFBK0IsY0FGOUIsTUFBTTsyRkFFUCwrQkFBK0I7a0JBSDNDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFByb2R1Y3QsXG4gIFByb2R1Y3RSZWZlcmVuY2UsXG4gIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgRXBkVmlzdWFsaXphdGlvbkNvbmZpZyxcbiAgRXBkVmlzdWFsaXphdGlvbklubmVyQ29uZmlnLFxuICBWaXN1YWxQaWNraW5nQ29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2VwZC12aXN1YWxpemF0aW9uL3Jvb3QnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9zdG9yZWZyb250JztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzaGFyZVJlcGxheSxcbiAgc3dpdGNoTWFwLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFZpc3VhbFBpY2tpbmdQcm9kdWN0RmlsdGVyU2VydmljZSB9IGZyb20gJy4uL3Byb2R1Y3QtZmlsdGVyL3Zpc3VhbC1waWNraW5nLXByb2R1Y3QtZmlsdGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmlzdWFsUGlja2luZ1Byb2R1Y3RMaXN0SXRlbSB9IGZyb20gJy4vbW9kZWwvdmlzdWFsLXBpY2tpbmctcHJvZHVjdC1saXN0LWl0ZW0ubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVmlzdWFsUGlja2luZ1Byb2R1Y3RMaXN0U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFJlZmVyZW5jZVNlcnZpY2U6IFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB2aXN1YWxQaWNraW5nUHJvZHVjdEZpbHRlclNlcnZpY2U6IFZpc3VhbFBpY2tpbmdQcm9kdWN0RmlsdGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZXBkVmlzdWFsaXphdGlvbkNvbmZpZzogRXBkVmlzdWFsaXphdGlvbkNvbmZpZ1xuICApIHt9XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IERFRkFVTFRfSVRFTVNfUEVSX1NMSURFID0gNztcblxuICBwcml2YXRlIGdldEZpbHRlcmVkUHJvZHVjdFJlZmVyZW5jZXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBwcm9kdWN0UmVmZXJlbmNlc1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIGZpbHRlcmVkSXRlbXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHNlcnZpY2UuXG4gICAqL1xuICBwdWJsaWMgaW5pdGlhbGl6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdldEZpbHRlcmVkUHJvZHVjdFJlZmVyZW5jZXNTdWJzY3JpcHRpb24gPVxuICAgICAgdGhpcy5nZXRGaWx0ZXJlZFByb2R1Y3RSZWZlcmVuY2VzKCkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3RpdmVTbGlkZVN0YXJ0SW5kZXggPSAwO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnZpc3VhbFBpY2tpbmdQcm9kdWN0RmlsdGVyU2VydmljZS5maWx0ZXIgPSAnJztcblxuICAgIHRoaXMuZmlsdGVyZWRJdGVtc1N1YnNjcmlwdGlvbiA9IHRoaXMuZmlsdGVyZWRJdGVtcyQuc3Vic2NyaWJlKChpdGVtcykgPT4ge1xuICAgICAgY29uc3QgZmlyc3RTZWxlY3RlZEl0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5zZWxlY3RlZCk7XG4gICAgICBpZiAoZmlyc3RTZWxlY3RlZEl0ZW1JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5hY3RpdmVTbGlkZVN0YXJ0SW5kZXggPVxuICAgICAgICAgIGZpcnN0U2VsZWN0ZWRJdGVtSW5kZXggLVxuICAgICAgICAgIChmaXJzdFNlbGVjdGVkSXRlbUluZGV4ICUgdGhpcy5pdGVtc1BlclNsaWRlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2VsZWN0ZWRQcm9kdWN0Q29kZXMgPSBbXTtcbiAgICB0aGlzLnByb2R1Y3RSZWZlcmVuY2VzU3Vic2NyaXB0aW9uID0gdGhpcy5fZ2V0UHJvZHVjdFJlZmVyZW5jZXMoKS5zdWJzY3JpYmUoXG4gICAgICB0aGlzLnByb2R1Y3RSZWZlcmVuY2VzJFxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmdldEZpbHRlcmVkUHJvZHVjdFJlZmVyZW5jZXNTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zU3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMucHJvZHVjdFJlZmVyZW5jZXNTdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldCBwcm9kdWN0UmVmZXJlbmNlVHlwZSgpIHtcbiAgICBjb25zdCBlcGRWaXN1YWxpemF0aW9uID0gdGhpcy5lcGRWaXN1YWxpemF0aW9uQ29uZmlnXG4gICAgICAuZXBkVmlzdWFsaXphdGlvbiBhcyBFcGRWaXN1YWxpemF0aW9uSW5uZXJDb25maWc7XG4gICAgY29uc3QgdmlzdWFsUGlja2luZ0NvbmZpZyA9XG4gICAgICBlcGRWaXN1YWxpemF0aW9uLnZpc3VhbFBpY2tpbmcgYXMgVmlzdWFsUGlja2luZ0NvbmZpZztcbiAgICByZXR1cm4gdmlzdWFsUGlja2luZ0NvbmZpZy5wcm9kdWN0UmVmZXJlbmNlVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBjdXJyZW50UHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD4gPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZVxuICAgIC5nZXRQcm9kdWN0KClcbiAgICAucGlwZShcbiAgICAgIGZpbHRlcigocHJvZHVjdCkgPT4gISFwcm9kdWN0ICYmICEhcHJvZHVjdC5jb2RlKSxcbiAgICAgIG1hcCgocHJvZHVjdCkgPT4gcHJvZHVjdCBhcyBQcm9kdWN0KSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwMSwgcDIpID0+IHAxLmNvZGUgPT09IHAyLmNvZGUpXG4gICAgKTtcblxuICBwcml2YXRlIHByb2R1Y3RSZWZlcmVuY2VzJCA9IG5ldyBTdWJqZWN0PFByb2R1Y3RSZWZlcmVuY2VbXT4oKTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgcHJvZHVjZXMgdGhlIHNwYXJlIHBhcnQgcHJvZHVjdCByZWZlcmVuY2VzIGZvciB0aGUgY3VycmVudCBwcm9kdWN0LlxuICAgKiBAcmV0dXJucyBBbiBPYnNlcnZhYmxlIHRoYXQgcHJvZHVjZXMgdGhlIHNwYXJlIHBhcnQgcHJvZHVjdCByZWZlcmVuY2VzIGZvciB0aGUgY3VycmVudCBwcm9kdWN0LlxuICAgKi9cbiAgcHVibGljIGdldFByb2R1Y3RSZWZlcmVuY2VzKCk6IE9ic2VydmFibGU8UHJvZHVjdFJlZmVyZW5jZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdFJlZmVyZW5jZXMkO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJvZHVjdFJlZmVyZW5jZXMoKTogT2JzZXJ2YWJsZTxQcm9kdWN0UmVmZXJlbmNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UHJvZHVjdCQucGlwZShcbiAgICAgIHRhcCgocHJvZHVjdDogUHJvZHVjdCkgPT5cbiAgICAgICAgdGhpcy5wcm9kdWN0UmVmZXJlbmNlU2VydmljZS5sb2FkUHJvZHVjdFJlZmVyZW5jZXMoXG4gICAgICAgICAgcHJvZHVjdC5jb2RlIGFzIHN0cmluZyxcbiAgICAgICAgICB0aGlzLnByb2R1Y3RSZWZlcmVuY2VUeXBlXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBzd2l0Y2hNYXAoKHByb2R1Y3QpID0+XG4gICAgICAgIHRoaXMucHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UuZ2V0UHJvZHVjdFJlZmVyZW5jZXMoXG4gICAgICAgICAgcHJvZHVjdC5jb2RlIGFzIHN0cmluZyxcbiAgICAgICAgICB0aGlzLnByb2R1Y3RSZWZlcmVuY2VUeXBlXG4gICAgICAgIClcbiAgICAgICksXG4gICAgICBmaWx0ZXIoXG4gICAgICAgIChwcm9kdWN0UmVmZXJlbmNlczogUHJvZHVjdFJlZmVyZW5jZVtdKSA9PlxuICAgICAgICAgIHByb2R1Y3RSZWZlcmVuY2VzICE9PSB1bmRlZmluZWRcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IHByb2R1Y2VzIGEgZmlsdGVyZWQgYXJyYXkgb2Ygc3BhcmUgcGFydCBwcm9kdWN0IHJlZmVyZW5jZXMgZm9yIHRoZSBjdXJyZW50IHByb2R1Y3QuXG4gICAqIEZpbHRlcmluZyBpcyBwZXJmb3JtZWQgYnkgdGhlIFZpc3VhbFBpY2tpbmdQcm9kdWN0RmlsdGVyU2VydmljZS5cbiAgICogQHJldHVybnMgQW4gT2JzZXJ2YWJsZSB0aGF0IHByb2R1Y2VzIGEgZmlsdGVyZWQgYXJyYXkgb2Ygc3BhcmUgcGFydCBwcm9kdWN0IHJlZmVyZW5jZXMgZm9yIHRoZSBjdXJyZW50IHByb2R1Y3QuXG4gICAqL1xuICBwdWJsaWMgZ2V0RmlsdGVyZWRQcm9kdWN0UmVmZXJlbmNlcygpOiBPYnNlcnZhYmxlPFByb2R1Y3RSZWZlcmVuY2VbXT4ge1xuICAgIHJldHVybiB0aGlzLnZpc3VhbFBpY2tpbmdQcm9kdWN0RmlsdGVyU2VydmljZVxuICAgICAgLmdldEZpbHRlcmVkUHJvZHVjdHModGhpcy5nZXRQcm9kdWN0UmVmZXJlbmNlcygpKVxuICAgICAgLnBpcGUoc2hhcmVSZXBsYXkoKSk7XG4gIH1cblxuICBwdWJsaWMgYWN0aXZlU2xpZGVTdGFydEluZGV4ID0gMDtcbiAgcHVibGljIGl0ZW1zUGVyU2xpZGUgPSB0aGlzLkRFRkFVTFRfSVRFTVNfUEVSX1NMSURFO1xuXG4gIHB1YmxpYyBzZXQgc2VsZWN0ZWRQcm9kdWN0Q29kZXMoc2VsZWN0ZWRQcm9kdWN0Q29kZXM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fc2VsZWN0ZWRQcm9kdWN0Q29kZXMgPSBzZWxlY3RlZFByb2R1Y3RDb2RlcztcbiAgICB0aGlzLnNlbGVjdGVkUHJvZHVjdENvZGVzQ2hhbmdlLm5leHQoc2VsZWN0ZWRQcm9kdWN0Q29kZXMpO1xuICB9XG4gIHB1YmxpYyBnZXQgc2VsZWN0ZWRQcm9kdWN0Q29kZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFByb2R1Y3RDb2RlcztcbiAgfVxuICBwcml2YXRlIF9zZWxlY3RlZFByb2R1Y3RDb2Rlczogc3RyaW5nW107XG4gIHB1YmxpYyBzZWxlY3RlZFByb2R1Y3RDb2Rlc0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gY3JlYXRlIHRoZSBsaXN0IGl0ZW0gbW9kZWwgZGF0YSBmb3IgdGhlIHZpc3VhbCBwaWNraW5nIHByb2R1Y3QgbGlzdC5cbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIGNvbnRhaW5pbmcgYW4gYXJyYXkgb2YgVmlzdWFsUGlja2luZ1Byb2R1Y3RMaXN0SXRlbSBvYmplY3RzIGNyZWF0ZWQgYnkgY29tYmluaW5nIHRoZSBsYXRlc3QgdmFsdWVzIGZyb21cbiAgICogYW4gT2JzZXJ2YWJsZSBwcm9kdWNpbmcgYW4gYXJyYXkgb2YgcHJvZHVjdCByZWZlcmVuY2VzIGFuZFxuICAgKiBhbiBPYnNlcnZhYmxlIHByb2R1Y2luZyBhbiBhcnJheSBvZiBzZWxlY3RlZCBwcm9kdWN0IGNvZGVzLlxuICAgKiBUaGUgVmlzdWFsUGlja2luZ1Byb2R1Y3RMaXN0SXRlbSBtb2RlbCBvYmplY3QgY29tYmluZXMgYSBQcm9kdWN0UmVmZXJlbmNlIGZvciBhIHNwYXJlIHBhcnQgYW5kIHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiB0aGUgbGlzdCBpdGVtLlxuICAgKiBAcGFyYW0gcHJvZHVjdFJlZmVyZW5jZXMkIEFuIE9ic2VydmFibGUgcHJvZHVjaW5nIHRoZSBhcnJheSBvZiBQcm9kdWN0UmVmZXJlbmNlIHZhbHVlcyB0byBtYXAuXG4gICAqIEBwYXJhbSBzZWxlY3RlZFByb2R1Y3RDb2RlcyQgQW4gT2JzZXJ2YWJsZSBwcm9kdWNpbmcgdGhlIGFycmF5IG9mIHNlbGVjdGVkIHByb2R1Y3QgY29kZXMuXG4gICAqIEByZXR1cm5zIEFuIE9ic2VydmFibGUgcHJvZHVjaW5nIGFuIGFycmF5IG9mIFZpc3VhbFBpY2tpbmdQcm9kdWN0TGlzdEl0ZW0gdmFsdWVzLlxuICAgKi9cbiAgcHVibGljIGdldFZpc3VhbFBpY2tpbmdQcm9kdWN0TGlzdEl0ZW1zKFxuICAgIHByb2R1Y3RSZWZlcmVuY2VzJDogT2JzZXJ2YWJsZTxQcm9kdWN0UmVmZXJlbmNlW10+LFxuICAgIHNlbGVjdGVkUHJvZHVjdENvZGVzJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT5cbiAgKTogT2JzZXJ2YWJsZTxWaXN1YWxQaWNraW5nUHJvZHVjdExpc3RJdGVtW10+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbcHJvZHVjdFJlZmVyZW5jZXMkLCBzZWxlY3RlZFByb2R1Y3RDb2RlcyRdKS5waXBlKFxuICAgICAgZmlsdGVyKFxuICAgICAgICAoW3Byb2R1Y3RSZWZlcmVuY2VzLCBzZWxlY3RlZFByb2R1Y3RDb2Rlc10pID0+XG4gICAgICAgICAgISFwcm9kdWN0UmVmZXJlbmNlcyAmJiAhIXNlbGVjdGVkUHJvZHVjdENvZGVzXG4gICAgICApLFxuICAgICAgbWFwKChbcHJvZHVjdFJlZmVyZW5jZXMsIHNlbGVjdGVkUHJvZHVjdENvZGVzXSkgPT4ge1xuICAgICAgICByZXR1cm4gcHJvZHVjdFJlZmVyZW5jZXNcbiAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgKHByb2R1Y3RSZWZlcmVuY2UpID0+XG4gICAgICAgICAgICAgICEhcHJvZHVjdFJlZmVyZW5jZS50YXJnZXQgJiYgISFwcm9kdWN0UmVmZXJlbmNlLnRhcmdldC5jb2RlXG4gICAgICAgICAgKVxuICAgICAgICAgIC5tYXAoKHByb2R1Y3RSZWZlcmVuY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0UmVmZXJlbmNlLnRhcmdldCBhcyBQcm9kdWN0O1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdENvZGUgPSBwcm9kdWN0LmNvZGUgYXMgc3RyaW5nO1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBzZWxlY3RlZFByb2R1Y3RDb2Rlcy5pbmRleE9mKHByb2R1Y3RDb2RlKSAhPT0gLTE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBwcm9kdWN0LFxuICAgICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZmlsdGVyZWRJdGVtcyQ6IE9ic2VydmFibGU8VmlzdWFsUGlja2luZ1Byb2R1Y3RMaXN0SXRlbVtdPiA9XG4gICAgdGhpcy5nZXRWaXN1YWxQaWNraW5nUHJvZHVjdExpc3RJdGVtcyhcbiAgICAgIHRoaXMuZ2V0RmlsdGVyZWRQcm9kdWN0UmVmZXJlbmNlcygpLFxuICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3RDb2Rlc0NoYW5nZVxuICAgICkucGlwZShzaGFyZVJlcGxheSgpKTtcbn1cbiJdfQ==