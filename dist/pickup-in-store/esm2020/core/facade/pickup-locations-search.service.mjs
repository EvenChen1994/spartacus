/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable } from '@angular/core';
import { select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { BrowserLocationActions, HideOutOfStockSelectors, PickupLocationActions, PickupLocationsSelectors, StockLevelActions, StockSelectors, ToggleHideOutOfStockOptionsAction, } from '../store/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class PickupLocationsSearchService {
    constructor(store) {
        this.store = store;
        this.subscription = new Subscription();
        // Intentional empty constructor
    }
    stockLevelAtStore(productCode, storeName) {
        this.store.dispatch(StockLevelActions.StockLevelAtStore({
            payload: { productCode, storeName },
        }));
    }
    getStockLevelAtStore(productCode, storeName) {
        return this.store.pipe(select(StockSelectors.getStockAtStore(productCode, storeName)));
    }
    startSearch(searchParams) {
        this.store.dispatch(new StockLevelActions.StockLevel(searchParams));
    }
    hasSearchStarted(productCode) {
        return this.store.pipe(select(StockSelectors.hasSearchStartedForProductCode(productCode)));
    }
    isSearchRunning() {
        return this.store.pipe(select(StockSelectors.getStockLoading));
    }
    getSearchResults(productCode) {
        return this.store.pipe(select(StockSelectors.getStoresWithStockForProductCode(productCode)));
    }
    clearSearchResults() {
        this.store.dispatch(new StockLevelActions.ClearStockData());
    }
    getHideOutOfStock() {
        return this.store.pipe(select(HideOutOfStockSelectors.getHideOutOfStockState));
    }
    setBrowserLocation(latitude, longitude) {
        this.store.dispatch(BrowserLocationActions.AddBrowserLocation({
            payload: { latitude, longitude },
        }));
    }
    toggleHideOutOfStock() {
        this.store.dispatch(ToggleHideOutOfStockOptionsAction());
    }
    loadStoreDetails(storeName) {
        this.subscription.add(this.getStoreDetails(storeName)
            .pipe(filter((storeDetails) => !storeDetails), tap((_storeDetails) => this.store.dispatch(PickupLocationActions.GetStoreDetailsById({ payload: storeName }))))
            .subscribe());
    }
    getStoreDetails(name) {
        return this.store.pipe(select(PickupLocationsSelectors.getStoreDetailsByName(name)));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
PickupLocationsSearchService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PickupLocationsSearchService, deps: [{ token: i1.Store }], target: i0.ɵɵFactoryTarget.Injectable });
PickupLocationsSearchService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PickupLocationsSearchService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PickupLocationsSearchService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Store }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja3VwLWxvY2F0aW9ucy1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9waWNrdXAtaW4tc3RvcmUvY29yZS9mYWNhZGUvcGlja3VwLWxvY2F0aW9ucy1zZWFyY2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsTUFBTSxFQUFTLE1BQU0sYUFBYSxDQUFDO0FBTTVDLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHVCQUF1QixFQUN2QixxQkFBcUIsRUFDckIsd0JBQXdCLEVBR3hCLGlCQUFpQixFQUNqQixjQUFjLEVBQ2QsaUNBQWlDLEdBQ2xDLE1BQU0sZ0JBQWdCLENBQUM7OztBQUd4QixNQUFNLE9BQU8sNEJBQTRCO0lBSXZDLFlBQ1ksS0FBdUQ7UUFBdkQsVUFBSyxHQUFMLEtBQUssQ0FBa0Q7UUFGbkUsaUJBQVksR0FBaUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUk5QyxnQ0FBZ0M7SUFDbEMsQ0FBQztJQUVELGlCQUFpQixDQUFDLFdBQW1CLEVBQUUsU0FBaUI7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDO1lBQ2xDLE9BQU8sRUFBRSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUU7U0FDcEMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQsb0JBQW9CLENBQ2xCLFdBQW1CLEVBQ25CLFNBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUMvRCxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVcsQ0FBQyxZQUF1QztRQUNqRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxXQUFtQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLDhCQUE4QixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ25FLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxXQUFtQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLGdDQUFnQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ3JFLENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksaUJBQWlCLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHVCQUF1QixDQUFDLHNCQUFzQixDQUFDLENBQ3ZELENBQUM7SUFDSixDQUFDO0lBRUQsa0JBQWtCLENBQUMsUUFBZ0IsRUFBRSxTQUFpQjtRQUNwRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsc0JBQXNCLENBQUMsa0JBQWtCLENBQUM7WUFDeEMsT0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRTtTQUNqQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsaUNBQWlDLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxTQUFpQjtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7YUFDNUIsSUFBSSxDQUNILE1BQU0sQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFDdkMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLHFCQUFxQixDQUFDLG1CQUFtQixDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQ2xFLENBQ0YsQ0FDRjthQUNBLFNBQVMsRUFBRSxDQUNmLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZSxDQUFDLElBQVk7UUFDMUIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQzdELENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7eUhBNUZVLDRCQUE0Qjs2SEFBNUIsNEJBQTRCOzJGQUE1Qiw0QkFBNEI7a0JBRHhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQb2ludE9mU2VydmljZSwgUG9pbnRPZlNlcnZpY2VTdG9jaywgU3RvY2sgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgUGlja3VwTG9jYXRpb25zU2VhcmNoRmFjYWRlLFxuICBTdG9ja0xvY2F0aW9uU2VhcmNoUGFyYW1zLFxufSBmcm9tICdAc3BhcnRhY3VzL3BpY2t1cC1pbi1zdG9yZS9yb290JztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBCcm93c2VyTG9jYXRpb25BY3Rpb25zLFxuICBIaWRlT3V0T2ZTdG9ja1NlbGVjdG9ycyxcbiAgUGlja3VwTG9jYXRpb25BY3Rpb25zLFxuICBQaWNrdXBMb2NhdGlvbnNTZWxlY3RvcnMsXG4gIFN0YXRlV2l0aFBpY2t1cExvY2F0aW9ucyxcbiAgU3RhdGVXaXRoU3RvY2ssXG4gIFN0b2NrTGV2ZWxBY3Rpb25zLFxuICBTdG9ja1NlbGVjdG9ycyxcbiAgVG9nZ2xlSGlkZU91dE9mU3RvY2tPcHRpb25zQWN0aW9uLFxufSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQaWNrdXBMb2NhdGlvbnNTZWFyY2hTZXJ2aWNlXG4gIGltcGxlbWVudHMgUGlja3VwTG9jYXRpb25zU2VhcmNoRmFjYWRlLCBPbkRlc3Ryb3lcbntcbiAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU3RvY2sgJiBTdGF0ZVdpdGhQaWNrdXBMb2NhdGlvbnM+XG4gICkge1xuICAgIC8vIEludGVudGlvbmFsIGVtcHR5IGNvbnN0cnVjdG9yXG4gIH1cblxuICBzdG9ja0xldmVsQXRTdG9yZShwcm9kdWN0Q29kZTogc3RyaW5nLCBzdG9yZU5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBTdG9ja0xldmVsQWN0aW9ucy5TdG9ja0xldmVsQXRTdG9yZSh7XG4gICAgICAgIHBheWxvYWQ6IHsgcHJvZHVjdENvZGUsIHN0b3JlTmFtZSB9LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0U3RvY2tMZXZlbEF0U3RvcmUoXG4gICAgcHJvZHVjdENvZGU6IHN0cmluZyxcbiAgICBzdG9yZU5hbWU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFN0b2NrIHwgdW5kZWZpbmVkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTdG9ja1NlbGVjdG9ycy5nZXRTdG9ja0F0U3RvcmUocHJvZHVjdENvZGUsIHN0b3JlTmFtZSkpXG4gICAgKTtcbiAgfVxuXG4gIHN0YXJ0U2VhcmNoKHNlYXJjaFBhcmFtczogU3RvY2tMb2NhdGlvblNlYXJjaFBhcmFtcyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFN0b2NrTGV2ZWxBY3Rpb25zLlN0b2NrTGV2ZWwoc2VhcmNoUGFyYW1zKSk7XG4gIH1cblxuICBoYXNTZWFyY2hTdGFydGVkKHByb2R1Y3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFN0b2NrU2VsZWN0b3JzLmhhc1NlYXJjaFN0YXJ0ZWRGb3JQcm9kdWN0Q29kZShwcm9kdWN0Q29kZSkpXG4gICAgKTtcbiAgfVxuXG4gIGlzU2VhcmNoUnVubmluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChTdG9ja1NlbGVjdG9ycy5nZXRTdG9ja0xvYWRpbmcpKTtcbiAgfVxuXG4gIGdldFNlYXJjaFJlc3VsdHMocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UG9pbnRPZlNlcnZpY2VTdG9ja1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTdG9ja1NlbGVjdG9ycy5nZXRTdG9yZXNXaXRoU3RvY2tGb3JQcm9kdWN0Q29kZShwcm9kdWN0Q29kZSkpXG4gICAgKTtcbiAgfVxuXG4gIGNsZWFyU2VhcmNoUmVzdWx0cygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTdG9ja0xldmVsQWN0aW9ucy5DbGVhclN0b2NrRGF0YSgpKTtcbiAgfVxuXG4gIGdldEhpZGVPdXRPZlN0b2NrKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoSGlkZU91dE9mU3RvY2tTZWxlY3RvcnMuZ2V0SGlkZU91dE9mU3RvY2tTdGF0ZSlcbiAgICApO1xuICB9XG5cbiAgc2V0QnJvd3NlckxvY2F0aW9uKGxhdGl0dWRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIEJyb3dzZXJMb2NhdGlvbkFjdGlvbnMuQWRkQnJvd3NlckxvY2F0aW9uKHtcbiAgICAgICAgcGF5bG9hZDogeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICB0b2dnbGVIaWRlT3V0T2ZTdG9jaygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFRvZ2dsZUhpZGVPdXRPZlN0b2NrT3B0aW9uc0FjdGlvbigpKTtcbiAgfVxuXG4gIGxvYWRTdG9yZURldGFpbHMoc3RvcmVOYW1lOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmdldFN0b3JlRGV0YWlscyhzdG9yZU5hbWUpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcigoc3RvcmVEZXRhaWxzKSA9PiAhc3RvcmVEZXRhaWxzKSxcbiAgICAgICAgICB0YXAoKF9zdG9yZURldGFpbHMpID0+XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgICBQaWNrdXBMb2NhdGlvbkFjdGlvbnMuR2V0U3RvcmVEZXRhaWxzQnlJZCh7IHBheWxvYWQ6IHN0b3JlTmFtZSB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKClcbiAgICApO1xuICB9XG5cbiAgZ2V0U3RvcmVEZXRhaWxzKG5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8UG9pbnRPZlNlcnZpY2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFBpY2t1cExvY2F0aW9uc1NlbGVjdG9ycy5nZXRTdG9yZURldGFpbHNCeU5hbWUobmFtZSkpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==