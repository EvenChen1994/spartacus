/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable, inject } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { LoggerService, normalizeHttpError } from '@spartacus/core';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AsmActions } from '../actions/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "../../connectors/asm.connector";
export class CustomerEffects {
    constructor(actions$, asmConnector) {
        this.actions$ = actions$;
        this.asmConnector = asmConnector;
        this.logger = inject(LoggerService);
        this.customerSearch$ = createEffect(() => this.actions$.pipe(ofType(AsmActions.CUSTOMER_SEARCH), map((action) => action.payload), switchMap((options) => this.asmConnector.customerSearch(options).pipe(map((customerSearchResults) => {
            return new AsmActions.CustomerSearchSuccess(customerSearchResults);
        }), catchError((error) => of(new AsmActions.CustomerSearchFail(normalizeHttpError(error, this.logger))))))));
        this.customerListCustomersSearch$ = createEffect(() => this.actions$.pipe(ofType(AsmActions.CUSTOMER_LIST_CUSTOMERS_SEARCH), map((action) => action.payload), switchMap((options) => this.asmConnector.customerSearch(options).pipe(map((customerListCustomersSearchResults) => {
            return new AsmActions.CustomerListCustomersSearchSuccess(customerListCustomersSearchResults);
        }), catchError((error) => of(new AsmActions.CustomerListCustomersSearchFail(normalizeHttpError(error, this.logger))))))));
    }
}
CustomerEffects.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CustomerEffects, deps: [{ token: i1.Actions }, { token: i2.AsmConnector }], target: i0.ɵɵFactoryTarget.Injectable });
CustomerEffects.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CustomerEffects });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: CustomerEffects, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Actions }, { type: i2.AsmConnector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL2FzbS9jb3JlL3N0b3JlL2VmZmVjdHMvY3VzdG9tZXIuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQVcsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFHOUMsTUFBTSxPQUFPLGVBQWU7SUFnRDFCLFlBQW9CLFFBQWlCLEVBQVUsWUFBMEI7UUFBckQsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBL0MvRCxXQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXpDLG9CQUFlLEdBQTBDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FDekUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQ2xDLEdBQUcsQ0FBQyxDQUFDLE1BQWlDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDMUQsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsQ0FBQyxxQkFBeUMsRUFBRSxFQUFFO1lBQ2hELE9BQU8sSUFBSSxVQUFVLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNyRSxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNuQixFQUFFLENBQ0EsSUFBSSxVQUFVLENBQUMsa0JBQWtCLENBQy9CLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQ3ZDLENBQ0YsQ0FDRixDQUNGLENBQ0YsQ0FDRixDQUNGLENBQUM7UUFFRixpQ0FBNEIsR0FDMUIsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxFQUNqRCxHQUFHLENBQUMsQ0FBQyxNQUE4QyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ3ZFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDNUMsR0FBRyxDQUFDLENBQUMsa0NBQXNELEVBQUUsRUFBRTtZQUM3RCxPQUFPLElBQUksVUFBVSxDQUFDLGtDQUFrQyxDQUN0RCxrQ0FBa0MsQ0FDbkMsQ0FBQztRQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ25CLEVBQUUsQ0FDQSxJQUFJLFVBQVUsQ0FBQywrQkFBK0IsQ0FDNUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDdkMsQ0FDRixDQUNGLENBQ0YsQ0FDRixDQUNGLENBQ0YsQ0FBQztJQUV3RSxDQUFDOzs0R0FoRGxFLGVBQWU7Z0hBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBjcmVhdGVFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZWFyY2hQYWdlIH0gZnJvbSAnQHNwYXJ0YWN1cy9hc20vcm9vdCc7XG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlLCBub3JtYWxpemVIdHRwRXJyb3IgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXNtQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hc20uY29ubmVjdG9yJztcbmltcG9ydCB7IEFzbUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRWZmZWN0cyB7XG4gIHByb3RlY3RlZCBsb2dnZXIgPSBpbmplY3QoTG9nZ2VyU2VydmljZSk7XG5cbiAgY3VzdG9tZXJTZWFyY2gkOiBPYnNlcnZhYmxlPEFzbUFjdGlvbnMuQ3VzdG9tZXJBY3Rpb24+ID0gY3JlYXRlRWZmZWN0KCgpID0+XG4gICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgb2ZUeXBlKEFzbUFjdGlvbnMuQ1VTVE9NRVJfU0VBUkNIKSxcbiAgICAgIG1hcCgoYWN0aW9uOiBBc21BY3Rpb25zLkN1c3RvbWVyU2VhcmNoKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgICBzd2l0Y2hNYXAoKG9wdGlvbnMpID0+XG4gICAgICAgIHRoaXMuYXNtQ29ubmVjdG9yLmN1c3RvbWVyU2VhcmNoKG9wdGlvbnMpLnBpcGUoXG4gICAgICAgICAgbWFwKChjdXN0b21lclNlYXJjaFJlc3VsdHM6IEN1c3RvbWVyU2VhcmNoUGFnZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBBc21BY3Rpb25zLkN1c3RvbWVyU2VhcmNoU3VjY2VzcyhjdXN0b21lclNlYXJjaFJlc3VsdHMpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBBc21BY3Rpb25zLkN1c3RvbWVyU2VhcmNoRmFpbChcbiAgICAgICAgICAgICAgICBub3JtYWxpemVIdHRwRXJyb3IoZXJyb3IsIHRoaXMubG9nZ2VyKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGN1c3RvbWVyTGlzdEN1c3RvbWVyc1NlYXJjaCQ6IE9ic2VydmFibGU8QXNtQWN0aW9ucy5DdXN0b21lckFjdGlvbj4gPVxuICAgIGNyZWF0ZUVmZmVjdCgoKSA9PlxuICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGUoQXNtQWN0aW9ucy5DVVNUT01FUl9MSVNUX0NVU1RPTUVSU19TRUFSQ0gpLFxuICAgICAgICBtYXAoKGFjdGlvbjogQXNtQWN0aW9ucy5DdXN0b21lckxpc3RDdXN0b21lcnNTZWFyY2gpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgICAgc3dpdGNoTWFwKChvcHRpb25zKSA9PlxuICAgICAgICAgIHRoaXMuYXNtQ29ubmVjdG9yLmN1c3RvbWVyU2VhcmNoKG9wdGlvbnMpLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGN1c3RvbWVyTGlzdEN1c3RvbWVyc1NlYXJjaFJlc3VsdHM6IEN1c3RvbWVyU2VhcmNoUGFnZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IEFzbUFjdGlvbnMuQ3VzdG9tZXJMaXN0Q3VzdG9tZXJzU2VhcmNoU3VjY2VzcyhcbiAgICAgICAgICAgICAgICBjdXN0b21lckxpc3RDdXN0b21lcnNTZWFyY2hSZXN1bHRzXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICBuZXcgQXNtQWN0aW9ucy5DdXN0b21lckxpc3RDdXN0b21lcnNTZWFyY2hGYWlsKFxuICAgICAgICAgICAgICAgICAgbm9ybWFsaXplSHR0cEVycm9yKGVycm9yLCB0aGlzLmxvZ2dlcilcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgYXNtQ29ubmVjdG9yOiBBc21Db25uZWN0b3IpIHt9XG59XG4iXX0=