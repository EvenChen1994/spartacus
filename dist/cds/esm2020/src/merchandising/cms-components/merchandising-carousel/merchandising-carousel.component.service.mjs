/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { MerchandisingCarouselClickedEvent, MerchandisingCarouselViewedEvent, } from './model';
import * as i0 from "@angular/core";
import * as i1 from "../../facade";
import * as i2 from "@spartacus/core";
import * as i3 from "../../../profiletag";
import * as i4 from "../../../config";
const DEFAULT_CAROUSEL_VIEWPORT_THRESHOLD = 80;
export class MerchandisingCarouselComponentService {
    constructor(cdsMerchandisingProductService, productService, profileTagEventService, cdsConfig) {
        this.cdsMerchandisingProductService = cdsMerchandisingProductService;
        this.productService = productService;
        this.profileTagEventService = profileTagEventService;
        this.cdsConfig = cdsConfig;
    }
    getMerchandisingCaourselViewportThreshold(cmsComponent) {
        const viewportPercentage = cmsComponent.viewportPercentage ??
            this.cdsConfig?.cds?.merchandising?.defaultCarouselViewportThreshold ??
            DEFAULT_CAROUSEL_VIEWPORT_THRESHOLD;
        return viewportPercentage / 100;
    }
    getMerchandisingCarouselModel(cmsComponent) {
        return this.cdsMerchandisingProductService
            .loadProductsForStrategy(cmsComponent.strategy, cmsComponent.numberToDisplay)
            .pipe(map((strategy) => {
            const metadata = this.getCarouselMetadata(strategy.products, cmsComponent);
            const items$ = this.mapStrategyProductsToCarouselItems(strategy.products);
            const productIds = this.mapStrategyProductsToProductIds(strategy.products);
            const id = this.getMerchandisingCarouselModelId(cmsComponent, strategy.request);
            return {
                id,
                items$,
                productIds,
                metadata,
                title: cmsComponent.title,
                backgroundColor: cmsComponent.backgroundColour,
                textColor: cmsComponent.textColour,
            };
        }));
    }
    sendCarouselViewEvent(lastSendModelId, merchandisingCarouselModel$) {
        return merchandisingCarouselModel$.pipe(filter((model) => model.id !== lastSendModelId), tap((merchandisingCarouselModel) => {
            const carouselEvent = this.getCarouselEventFromCarouselModel(merchandisingCarouselModel);
            this.profileTagEventService.notifyProfileTagOfEventOccurrence(new MerchandisingCarouselViewedEvent(carouselEvent, merchandisingCarouselModel.productIds));
        }));
    }
    sendCarouselItemClickedEvent(merchandisingCarouselModel, clickedProduct) {
        const carouselEvent = this.getCarouselEventFromCarouselModel(merchandisingCarouselModel);
        carouselEvent.metadata = {
            ...carouselEvent.metadata,
            ...clickedProduct.metadata,
        };
        this.profileTagEventService.notifyProfileTagOfEventOccurrence(new MerchandisingCarouselClickedEvent(carouselEvent, clickedProduct.metadata.slot, clickedProduct.code, clickedProduct.images?.PRIMARY['product']?.url));
    }
    getCarouselMetadata(strategyProducts, componentData) {
        const metadata = strategyProducts.metadata ?? {};
        if (strategyProducts.products && strategyProducts.products.length) {
            metadata.slots = strategyProducts.products.length;
        }
        metadata.title = componentData.title;
        metadata.name = componentData.name;
        metadata.strategyid = componentData.strategy;
        metadata.id = componentData.uid;
        return metadata;
    }
    mapStrategyProductsToCarouselItems(strategyProducts) {
        return strategyProducts && strategyProducts.products
            ? strategyProducts.products.map((strategyProduct, index) => this.productService
                .get(strategyProduct.id, ["details" /* ProductScope.DETAILS */, "price" /* ProductScope.PRICE */])
                .pipe(map((product) => ({
                ...product,
                metadata: this.getCarouselItemMetadata(strategyProduct, index + 1),
            }))))
            : [EMPTY];
    }
    mapStrategyProductsToProductIds(strategyProducts) {
        return strategyProducts && strategyProducts.products
            ? strategyProducts.products.map((strategyProduct) => strategyProduct.id)
            : [];
    }
    getMerchandisingCarouselModelId(cmsComponent, request) {
        return (cmsComponent.uid +
            '_' +
            cmsComponent.strategy +
            '_' +
            JSON.stringify(request.queryParams));
    }
    getCarouselItemMetadata(strategyProduct, index) {
        const metadata = strategyProduct.metadata ?? {};
        metadata.slot = index;
        metadata.id = strategyProduct.id;
        return metadata;
    }
    getCarouselEventFromCarouselModel(carouselModel) {
        return {
            carouselId: carouselModel.metadata.id,
            carouselName: carouselModel.metadata.name,
            strategyId: carouselModel.metadata.strategyid,
            metadata: carouselModel.metadata,
        };
    }
}
MerchandisingCarouselComponentService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MerchandisingCarouselComponentService, deps: [{ token: i1.CdsMerchandisingProductService }, { token: i2.ProductService }, { token: i3.ProfileTagEventService }, { token: i4.CdsConfig }], target: i0.ɵɵFactoryTarget.Injectable });
MerchandisingCarouselComponentService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MerchandisingCarouselComponentService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: MerchandisingCarouselComponentService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.CdsMerchandisingProductService }, { type: i2.ProductService }, { type: i3.ProfileTagEventService }, { type: i4.CdsConfig }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyY2hhbmRpc2luZy1jYXJvdXNlbC5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ludGVncmF0aW9uLWxpYnMvY2RzL3NyYy9tZXJjaGFuZGlzaW5nL2Ntcy1jb21wb25lbnRzL21lcmNoYW5kaXNpbmctY2Fyb3VzZWwvbWVyY2hhbmRpc2luZy1jYXJvdXNlbC5jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBY2xELE9BQU8sRUFFTCxpQ0FBaUMsRUFFakMsZ0NBQWdDLEdBQ2pDLE1BQU0sU0FBUyxDQUFDOzs7Ozs7QUFFakIsTUFBTSxtQ0FBbUMsR0FBRyxFQUFFLENBQUM7QUFLL0MsTUFBTSxPQUFPLHFDQUFxQztJQUNoRCxZQUNZLDhCQUE4RCxFQUM5RCxjQUE4QixFQUM5QixzQkFBOEMsRUFDOUMsU0FBb0I7UUFIcEIsbUNBQThCLEdBQTlCLDhCQUE4QixDQUFnQztRQUM5RCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5QyxjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQzdCLENBQUM7SUFFSix5Q0FBeUMsQ0FDdkMsWUFBK0M7UUFFL0MsTUFBTSxrQkFBa0IsR0FDdEIsWUFBWSxDQUFDLGtCQUFrQjtZQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsZ0NBQWdDO1lBQ3BFLG1DQUFtQyxDQUFDO1FBRXRDLE9BQU8sa0JBQWtCLEdBQUcsR0FBRyxDQUFDO0lBQ2xDLENBQUM7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QUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUV2RSxRQUFRLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztRQUN0QixRQUFRLENBQUMsRUFBRSxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7UUFFakMsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVPLGlDQUFpQyxDQUN2QyxhQUF5QztRQUV6QyxPQUFPO1lBQ0wsVUFBVSxFQUFFLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNyQyxZQUFZLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJO1lBQ3pDLFVBQVUsRUFBRSxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVU7WUFDN0MsUUFBUSxFQUFFLGFBQWEsQ0FBQyxRQUFRO1NBQ2pDLENBQUM7SUFDSixDQUFDOztrSUFsTFUscUNBQXFDO3NJQUFyQyxxQ0FBcUMsY0FGcEMsTUFBTTsyRkFFUCxxQ0FBcUM7a0JBSGpELFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UsIFByb2R1Y3RTY29wZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBFTVBUWSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIENtc01lcmNoYW5kaXNpbmdDYXJvdXNlbENvbXBvbmVudCxcbiAgU3RyYXRlZ3lSZXF1ZXN0LFxufSBmcm9tICcuLi8uLi8uLi9jZHMtbW9kZWxzJztcbmltcG9ydCB7IENkc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBQcm9maWxlVGFnRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcHJvZmlsZXRhZyc7XG5pbXBvcnQgeyBDZHNNZXJjaGFuZGlzaW5nUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUnO1xuaW1wb3J0IHtcbiAgTWVyY2hhbmRpc2luZ01ldGFkYXRhLFxuICBNZXJjaGFuZGlzaW5nUHJvZHVjdCxcbiAgU3RyYXRlZ3lQcm9kdWN0LFxuICBTdHJhdGVneVByb2R1Y3RzLFxufSBmcm9tICcuLi8uLi9tb2RlbCc7XG5pbXBvcnQge1xuICBDYXJvdXNlbEV2ZW50LFxuICBNZXJjaGFuZGlzaW5nQ2Fyb3VzZWxDbGlja2VkRXZlbnQsXG4gIE1lcmNoYW5kaXNpbmdDYXJvdXNlbE1vZGVsLFxuICBNZXJjaGFuZGlzaW5nQ2Fyb3VzZWxWaWV3ZWRFdmVudCxcbn0gZnJvbSAnLi9tb2RlbCc7XG5cbmNvbnN0IERFRkFVTFRfQ0FST1VTRUxfVklFV1BPUlRfVEhSRVNIT0xEID0gODA7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBNZXJjaGFuZGlzaW5nQ2Fyb3VzZWxDb21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNkc01lcmNoYW5kaXNpbmdQcm9kdWN0U2VydmljZTogQ2RzTWVyY2hhbmRpc2luZ1Byb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb2ZpbGVUYWdFdmVudFNlcnZpY2U6IFByb2ZpbGVUYWdFdmVudFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNkc0NvbmZpZzogQ2RzQ29uZmlnXG4gICkge31cblxuICBnZXRNZXJjaGFuZGlzaW5nQ2FvdXJzZWxWaWV3cG9ydFRocmVzaG9sZChcbiAgICBjbXNDb21wb25lbnQ6IENtc01lcmNoYW5kaXNpbmdDYXJvdXNlbENvbXBvbmVudFxuICApOiBudW1iZXIge1xuICAgIGNvbnN0IHZpZXdwb3J0UGVyY2VudGFnZSA9XG4gICAgICBjbXNDb21wb25lbnQudmlld3BvcnRQZXJjZW50YWdlID8/XG4gICAgICB0aGlzLmNkc0NvbmZpZz8uY2RzPy5tZXJjaGFuZGlzaW5nPy5kZWZhdWx0Q2Fyb3VzZWxWaWV3cG9ydFRocmVzaG9sZCA/P1xuICAgICAgREVGQVVMVF9DQVJPVVNFTF9WSUVXUE9SVF9USFJFU0hPTEQ7XG5cbiAgICByZXR1cm4gdmlld3BvcnRQZXJjZW50YWdlIC8gMTAwO1xuICB9XG5cbiAgZ2V0TWVyY2hhbmRpc2luZ0Nhcm91c2VsTW9kZWwoXG4gICAgY21zQ29tcG9uZW50OiBDbXNNZXJjaGFuZGlzaW5nQ2Fyb3VzZWxDb21wb25lbnRcbiAgKTogT2JzZXJ2YWJsZTxNZXJjaGFuZGlzaW5nQ2Fyb3VzZWxNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLmNkc01lcmNoYW5kaXNpbmdQcm9kdWN0U2VydmljZVxuICAgICAgLmxvYWRQcm9kdWN0c0ZvclN0cmF0ZWd5KFxuICAgICAgICBjbXNDb21wb25lbnQuc3RyYXRlZ3ksXG4gICAgICAgIGNtc0NvbXBvbmVudC5udW1iZXJUb0Rpc3BsYXlcbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHN0cmF0ZWd5KSA9PiB7XG4gICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB0aGlzLmdldENhcm91c2VsTWV0YWRhdGEoXG4gICAgICAgICAgICBzdHJhdGVneS5wcm9kdWN0cyxcbiAgICAgICAgICAgIGNtc0NvbXBvbmVudFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgaXRlbXMkID0gdGhpcy5tYXBTdHJhdGVneVByb2R1Y3RzVG9DYXJvdXNlbEl0ZW1zKFxuICAgICAgICAgICAgc3RyYXRlZ3kucHJvZHVjdHNcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZHMgPSB0aGlzLm1hcFN0cmF0ZWd5UHJvZHVjdHNUb1Byb2R1Y3RJZHMoXG4gICAgICAgICAgICBzdHJhdGVneS5wcm9kdWN0c1xuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgaWQgPSB0aGlzLmdldE1lcmNoYW5kaXNpbmdDYXJvdXNlbE1vZGVsSWQoXG4gICAgICAgICAgICBjbXNDb21wb25lbnQsXG4gICAgICAgICAgICBzdHJhdGVneS5yZXF1ZXN0XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGl0ZW1zJCxcbiAgICAgICAgICAgIHByb2R1Y3RJZHMsXG4gICAgICAgICAgICBtZXRhZGF0YSxcbiAgICAgICAgICAgIHRpdGxlOiBjbXNDb21wb25lbnQudGl0bGUsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNtc0NvbXBvbmVudC5iYWNrZ3JvdW5kQ29sb3VyLFxuICAgICAgICAgICAgdGV4dENvbG9yOiBjbXNDb21wb25lbnQudGV4dENvbG91cixcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHNlbmRDYXJvdXNlbFZpZXdFdmVudChcbiAgICBsYXN0U2VuZE1vZGVsSWQ6IHN0cmluZyxcbiAgICBtZXJjaGFuZGlzaW5nQ2Fyb3VzZWxNb2RlbCQ6IE9ic2VydmFibGU8TWVyY2hhbmRpc2luZ0Nhcm91c2VsTW9kZWw+XG4gICk6IE9ic2VydmFibGU8TWVyY2hhbmRpc2luZ0Nhcm91c2VsTW9kZWw+IHtcbiAgICByZXR1cm4gbWVyY2hhbmRpc2luZ0Nhcm91c2VsTW9kZWwkLnBpcGUoXG4gICAgICBmaWx0ZXIoKG1vZGVsKSA9PiBtb2RlbC5pZCAhPT0gbGFzdFNlbmRNb2RlbElkKSxcbiAgICAgIHRhcCgobWVyY2hhbmRpc2luZ0Nhcm91c2VsTW9kZWwpID0+IHtcbiAgICAgICAgY29uc3QgY2Fyb3VzZWxFdmVudDogQ2Fyb3VzZWxFdmVudCA9XG4gICAgICAgICAgdGhpcy5nZXRDYXJvdXNlbEV2ZW50RnJvbUNhcm91c2VsTW9kZWwobWVyY2hhbmRpc2luZ0Nhcm91c2VsTW9kZWwpO1xuICAgICAgICB0aGlzLnByb2ZpbGVUYWdFdmVudFNlcnZpY2Uubm90aWZ5UHJvZmlsZVRhZ09mRXZlbnRPY2N1cnJlbmNlKFxuICAgICAgICAgIG5ldyBNZXJjaGFuZGlzaW5nQ2Fyb3VzZWxWaWV3ZWRFdmVudChcbiAgICAgICAgICAgIGNhcm91c2VsRXZlbnQsXG4gICAgICAgICAgICBtZXJjaGFuZGlzaW5nQ2Fyb3VzZWxNb2RlbC5wcm9kdWN0SWRzXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgc2VuZENhcm91c2VsSXRlbUNsaWNrZWRFdmVudChcbiAgICBtZXJjaGFuZGlzaW5nQ2Fyb3VzZWxNb2RlbDogTWVyY2hhbmRpc2luZ0Nhcm91c2VsTW9kZWwsXG4gICAgY2xpY2tlZFByb2R1Y3Q6IE1lcmNoYW5kaXNpbmdQcm9kdWN0XG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGNhcm91c2VsRXZlbnQ6IENhcm91c2VsRXZlbnQgPSB0aGlzLmdldENhcm91c2VsRXZlbnRGcm9tQ2Fyb3VzZWxNb2RlbChcbiAgICAgIG1lcmNoYW5kaXNpbmdDYXJvdXNlbE1vZGVsXG4gICAgKTtcblxuICAgIGNhcm91c2VsRXZlbnQubWV0YWRhdGEgPSB7XG4gICAgICAuLi5jYXJvdXNlbEV2ZW50Lm1ldGFkYXRhLFxuICAgICAgLi4uY2xpY2tlZFByb2R1Y3QubWV0YWRhdGEsXG4gICAgfTtcblxuICAgIHRoaXMucHJvZmlsZVRhZ0V2ZW50U2VydmljZS5ub3RpZnlQcm9maWxlVGFnT2ZFdmVudE9jY3VycmVuY2UoXG4gICAgICBuZXcgTWVyY2hhbmRpc2luZ0Nhcm91c2VsQ2xpY2tlZEV2ZW50KFxuICAgICAgICBjYXJvdXNlbEV2ZW50LFxuICAgICAgICBjbGlja2VkUHJvZHVjdC5tZXRhZGF0YS5zbG90LFxuICAgICAgICBjbGlja2VkUHJvZHVjdC5jb2RlLFxuICAgICAgICBjbGlja2VkUHJvZHVjdC5pbWFnZXM/LlBSSU1BUllbJ3Byb2R1Y3QnXT8udXJsXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2Fyb3VzZWxNZXRhZGF0YShcbiAgICBzdHJhdGVneVByb2R1Y3RzOiBTdHJhdGVneVByb2R1Y3RzLFxuICAgIGNvbXBvbmVudERhdGE6IENtc01lcmNoYW5kaXNpbmdDYXJvdXNlbENvbXBvbmVudFxuICApOiBNZXJjaGFuZGlzaW5nTWV0YWRhdGEge1xuICAgIGNvbnN0IG1ldGFkYXRhOiBNZXJjaGFuZGlzaW5nTWV0YWRhdGEgPSBzdHJhdGVneVByb2R1Y3RzLm1ldGFkYXRhID8/IHt9O1xuICAgIGlmIChzdHJhdGVneVByb2R1Y3RzLnByb2R1Y3RzICYmIHN0cmF0ZWd5UHJvZHVjdHMucHJvZHVjdHMubGVuZ3RoKSB7XG4gICAgICBtZXRhZGF0YS5zbG90cyA9IHN0cmF0ZWd5UHJvZHVjdHMucHJvZHVjdHMubGVuZ3RoO1xuICAgIH1cblxuICAgIG1ldGFkYXRhLnRpdGxlID0gY29tcG9uZW50RGF0YS50aXRsZTtcbiAgICBtZXRhZGF0YS5uYW1lID0gY29tcG9uZW50RGF0YS5uYW1lO1xuICAgIG1ldGFkYXRhLnN0cmF0ZWd5aWQgPSBjb21wb25lbnREYXRhLnN0cmF0ZWd5O1xuICAgIG1ldGFkYXRhLmlkID0gY29tcG9uZW50RGF0YS51aWQ7XG5cbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH1cblxuICBwcml2YXRlIG1hcFN0cmF0ZWd5UHJvZHVjdHNUb0Nhcm91c2VsSXRlbXMoXG4gICAgc3RyYXRlZ3lQcm9kdWN0czogU3RyYXRlZ3lQcm9kdWN0c1xuICApOiBPYnNlcnZhYmxlPE1lcmNoYW5kaXNpbmdQcm9kdWN0PltdIHtcbiAgICByZXR1cm4gc3RyYXRlZ3lQcm9kdWN0cyAmJiBzdHJhdGVneVByb2R1Y3RzLnByb2R1Y3RzXG4gICAgICA/IHN0cmF0ZWd5UHJvZHVjdHMucHJvZHVjdHMubWFwKChzdHJhdGVneVByb2R1Y3QsIGluZGV4KSA9PlxuICAgICAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2VcbiAgICAgICAgICAgIC5nZXQoc3RyYXRlZ3lQcm9kdWN0LmlkLCBbUHJvZHVjdFNjb3BlLkRFVEFJTFMsIFByb2R1Y3RTY29wZS5QUklDRV0pXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKChwcm9kdWN0KSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgbWV0YWRhdGE6IHRoaXMuZ2V0Q2Fyb3VzZWxJdGVtTWV0YWRhdGEoXG4gICAgICAgICAgICAgICAgICBzdHJhdGVneVByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICBpbmRleCArIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgOiBbRU1QVFldO1xuICB9XG5cbiAgcHJpdmF0ZSBtYXBTdHJhdGVneVByb2R1Y3RzVG9Qcm9kdWN0SWRzKFxuICAgIHN0cmF0ZWd5UHJvZHVjdHM6IFN0cmF0ZWd5UHJvZHVjdHNcbiAgKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBzdHJhdGVneVByb2R1Y3RzICYmIHN0cmF0ZWd5UHJvZHVjdHMucHJvZHVjdHNcbiAgICAgID8gc3RyYXRlZ3lQcm9kdWN0cy5wcm9kdWN0cy5tYXAoKHN0cmF0ZWd5UHJvZHVjdCkgPT4gc3RyYXRlZ3lQcm9kdWN0LmlkKVxuICAgICAgOiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TWVyY2hhbmRpc2luZ0Nhcm91c2VsTW9kZWxJZChcbiAgICBjbXNDb21wb25lbnQ6IENtc01lcmNoYW5kaXNpbmdDYXJvdXNlbENvbXBvbmVudCxcbiAgICByZXF1ZXN0OiBTdHJhdGVneVJlcXVlc3RcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgY21zQ29tcG9uZW50LnVpZCArXG4gICAgICAnXycgK1xuICAgICAgY21zQ29tcG9uZW50LnN0cmF0ZWd5ICtcbiAgICAgICdfJyArXG4gICAgICBKU09OLnN0cmluZ2lmeShyZXF1ZXN0LnF1ZXJ5UGFyYW1zKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldENhcm91c2VsSXRlbU1ldGFkYXRhKFxuICAgIHN0cmF0ZWd5UHJvZHVjdDogU3RyYXRlZ3lQcm9kdWN0LFxuICAgIGluZGV4OiBudW1iZXJcbiAgKTogTWVyY2hhbmRpc2luZ01ldGFkYXRhIHtcbiAgICBjb25zdCBtZXRhZGF0YTogTWVyY2hhbmRpc2luZ01ldGFkYXRhID0gc3RyYXRlZ3lQcm9kdWN0Lm1ldGFkYXRhID8/IHt9O1xuXG4gICAgbWV0YWRhdGEuc2xvdCA9IGluZGV4O1xuICAgIG1ldGFkYXRhLmlkID0gc3RyYXRlZ3lQcm9kdWN0LmlkO1xuXG4gICAgcmV0dXJuIG1ldGFkYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYXJvdXNlbEV2ZW50RnJvbUNhcm91c2VsTW9kZWwoXG4gICAgY2Fyb3VzZWxNb2RlbDogTWVyY2hhbmRpc2luZ0Nhcm91c2VsTW9kZWxcbiAgKTogQ2Fyb3VzZWxFdmVudCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcm91c2VsSWQ6IGNhcm91c2VsTW9kZWwubWV0YWRhdGEuaWQsXG4gICAgICBjYXJvdXNlbE5hbWU6IGNhcm91c2VsTW9kZWwubWV0YWRhdGEubmFtZSxcbiAgICAgIHN0cmF0ZWd5SWQ6IGNhcm91c2VsTW9kZWwubWV0YWRhdGEuc3RyYXRlZ3lpZCxcbiAgICAgIG1ldGFkYXRhOiBjYXJvdXNlbE1vZGVsLm1ldGFkYXRhLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==