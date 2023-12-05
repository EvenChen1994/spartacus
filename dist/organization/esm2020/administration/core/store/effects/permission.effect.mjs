import { Injectable, inject } from '@angular/core';
import { createEffect, ofType } from '@ngrx/effects';
import { LoggerService, StateUtils, normalizeHttpError, } from '@spartacus/core';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { OrganizationActions, PermissionActions } from '../actions';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/effects";
import * as i2 from "../../connectors/permission/permission.connector";
export class PermissionEffects {
    constructor(actions$, permissionConnector) {
        this.actions$ = actions$;
        this.permissionConnector = permissionConnector;
        this.logger = inject(LoggerService);
        this.loadPermission$ = createEffect(() => this.actions$.pipe(ofType(PermissionActions.LOAD_PERMISSION), map((action) => action.payload), switchMap(({ userId, permissionCode }) => {
            return this.permissionConnector.get(userId, permissionCode).pipe(map((permission) => {
                return new PermissionActions.LoadPermissionSuccess([permission]);
            }), catchError((error) => of(new PermissionActions.LoadPermissionFail({
                permissionCode,
                error: normalizeHttpError(error, this.logger),
            }))));
        })));
        this.loadPermissions$ = createEffect(() => this.actions$.pipe(ofType(PermissionActions.LOAD_PERMISSIONS), map((action) => action.payload), switchMap((payload) => this.permissionConnector.getList(payload.userId, payload.params).pipe(switchMap((permissions) => {
            const { values, page } = StateUtils.normalizeListPage(permissions, 'code');
            return [
                new PermissionActions.LoadPermissionSuccess(values),
                new PermissionActions.LoadPermissionsSuccess({
                    page,
                    params: payload.params,
                }),
            ];
        }), catchError((error) => of(new PermissionActions.LoadPermissionsFail({
            params: payload.params,
            error: normalizeHttpError(error, this.logger),
        })))))));
        this.createPermission$ = createEffect(() => this.actions$.pipe(ofType(PermissionActions.CREATE_PERMISSION), map((action) => action.payload), switchMap((payload) => this.permissionConnector
            .create(payload.userId, payload.permission)
            .pipe(switchMap((data) => [
            new PermissionActions.CreatePermissionSuccess(data),
            new OrganizationActions.OrganizationClearData(),
        ]), catchError((error) => from([
            new PermissionActions.CreatePermissionFail({
                permissionCode: payload.permission.code ?? '',
                error: normalizeHttpError(error, this.logger),
            }),
            new OrganizationActions.OrganizationClearData(),
        ]))))));
        this.updatePermission$ = createEffect(() => this.actions$.pipe(ofType(PermissionActions.UPDATE_PERMISSION), map((action) => action.payload), switchMap((payload) => this.permissionConnector
            .update(payload.userId, payload.permissionCode, payload.permission)
            .pipe(switchMap((data) => [
            new PermissionActions.UpdatePermissionSuccess(data),
            new OrganizationActions.OrganizationClearData(),
        ]), catchError((error) => from([
            new PermissionActions.UpdatePermissionFail({
                permissionCode: payload.permission.code ?? '',
                error: normalizeHttpError(error, this.logger),
            }),
            new OrganizationActions.OrganizationClearData(),
        ]))))));
        this.loadPermissionTypes$ = createEffect(() => this.actions$.pipe(ofType(PermissionActions.LOAD_PERMISSION_TYPES), switchMap(() => this.permissionConnector.getTypes().pipe(map((permissionTypeList) => new PermissionActions.LoadPermissionTypesSuccess(permissionTypeList)), catchError((error) => of(new PermissionActions.LoadPermissionTypesFail({
            error: normalizeHttpError(error, this.logger),
        })))))));
    }
}
PermissionEffects.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PermissionEffects, deps: [{ token: i1.Actions }, { token: i2.PermissionConnector }], target: i0.ɵɵFactoryTarget.Injectable });
PermissionEffects.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PermissionEffects });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PermissionEffects, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Actions }, { type: i2.PermissionConnector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbi5lZmZlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvcmUvc3RvcmUvZWZmZWN0cy9wZXJtaXNzaW9uLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQVcsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBRUwsYUFBYSxFQUViLFVBQVUsRUFDVixrQkFBa0IsR0FDbkIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUc1RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7QUFHcEUsTUFBTSxPQUFPLGlCQUFpQjtJQXNKNUIsWUFDVSxRQUFpQixFQUNqQixtQkFBd0M7UUFEeEMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBdkp4QyxXQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXpDLG9CQUFlLEdBR1gsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxFQUN6QyxHQUFHLENBQUMsQ0FBQyxNQUF3QyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2pFLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxFQUFFLEVBQUU7WUFDdkMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQzlELEdBQUcsQ0FBQyxDQUFDLFVBQXNCLEVBQUUsRUFBRTtnQkFDN0IsT0FBTyxJQUFJLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuRSxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUUsQ0FDdEMsRUFBRSxDQUNBLElBQUksaUJBQWlCLENBQUMsa0JBQWtCLENBQUM7Z0JBQ3ZDLGNBQWM7Z0JBQ2QsS0FBSyxFQUFFLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzlDLENBQUMsQ0FDSCxDQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQ0YsQ0FBQztRQUVGLHFCQUFnQixHQUlaLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUMxQyxHQUFHLENBQUMsQ0FBQyxNQUF5QyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2xFLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQ3BCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUNuRSxTQUFTLENBQUMsQ0FBQyxXQUFzQyxFQUFFLEVBQUU7WUFDbkQsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQ25ELFdBQVcsRUFDWCxNQUFNLENBQ1AsQ0FBQztZQUNGLE9BQU87Z0JBQ0wsSUFBSSxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUM7Z0JBQ25ELElBQUksaUJBQWlCLENBQUMsc0JBQXNCLENBQUM7b0JBQzNDLElBQUk7b0JBQ0osTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO2lCQUN2QixDQUFDO2FBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxDQUFDLEtBQXdCLEVBQUUsRUFBRSxDQUN0QyxFQUFFLENBQ0EsSUFBSSxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQztZQUN4QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU07WUFDdEIsS0FBSyxFQUFFLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlDLENBQUMsQ0FDSCxDQUNGLENBQ0YsQ0FDRixDQUNGLENBQ0YsQ0FBQztRQUVGLHNCQUFpQixHQUliLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUMzQyxHQUFHLENBQUMsQ0FBQyxNQUEwQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ25FLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQ3BCLElBQUksQ0FBQyxtQkFBbUI7YUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQzthQUMxQyxJQUFJLENBQ0gsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUNsQixJQUFJLGlCQUFpQixDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQztZQUNuRCxJQUFJLG1CQUFtQixDQUFDLHFCQUFxQixFQUFFO1NBQ2hELENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUUsQ0FDdEMsSUFBSSxDQUFDO1lBQ0gsSUFBSSxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDekMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQzdDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUM5QyxDQUFDO1lBQ0YsSUFBSSxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRTtTQUNoRCxDQUFDLENBQ0gsQ0FDRixDQUNKLENBQ0YsQ0FDRixDQUFDO1FBRUYsc0JBQWlCLEdBSWIsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLEVBQzNDLEdBQUcsQ0FBQyxDQUFDLE1BQTBDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDbkUsU0FBUyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FDcEIsSUFBSSxDQUFDLG1CQUFtQjthQUNyQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUM7YUFDbEUsSUFBSSxDQUNILFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7WUFDbEIsSUFBSSxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUM7WUFDbkQsSUFBSSxtQkFBbUIsQ0FBQyxxQkFBcUIsRUFBRTtTQUNoRCxDQUFDLEVBQ0YsVUFBVSxDQUFDLENBQUMsS0FBd0IsRUFBRSxFQUFFLENBQ3RDLElBQUksQ0FBQztZQUNILElBQUksaUJBQWlCLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3pDLGNBQWMsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUM3QyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDOUMsQ0FBQztZQUNGLElBQUksbUJBQW1CLENBQUMscUJBQXFCLEVBQUU7U0FDaEQsQ0FBQyxDQUNILENBQ0YsQ0FDSixDQUNGLENBQ0YsQ0FBQztRQUVGLHlCQUFvQixHQUdoQixZQUFZLENBQUMsR0FBRyxFQUFFLENBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsRUFDL0MsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUNiLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQ3RDLEdBQUcsQ0FDRCxDQUFDLGtCQUFpRCxFQUFFLEVBQUUsQ0FDcEQsSUFBSSxpQkFBaUIsQ0FBQywwQkFBMEIsQ0FDOUMsa0JBQWtCLENBQ25CLENBQ0osRUFDRCxVQUFVLENBQUMsQ0FBQyxLQUF3QixFQUFFLEVBQUUsQ0FDdEMsRUFBRSxDQUNBLElBQUksaUJBQWlCLENBQUMsdUJBQXVCLENBQUM7WUFDNUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzlDLENBQUMsQ0FDSCxDQUNGLENBQ0YsQ0FDRixDQUNGLENBQ0YsQ0FBQztJQUtDLENBQUM7OzhHQXpKTyxpQkFBaUI7a0hBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgSHR0cEVycm9yUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQge1xuICBFbnRpdGllc01vZGVsLFxuICBMb2dnZXJTZXJ2aWNlLFxuICBPcmRlckFwcHJvdmFsUGVybWlzc2lvblR5cGUsXG4gIFN0YXRlVXRpbHMsXG4gIG5vcm1hbGl6ZUh0dHBFcnJvcixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb20sIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBlcm1pc3Npb25Db25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3Blcm1pc3Npb24vcGVybWlzc2lvbi5jb25uZWN0b3InO1xuaW1wb3J0IHsgUGVybWlzc2lvbiB9IGZyb20gJy4uLy4uL21vZGVsL3Blcm1pc3Npb24ubW9kZWwnO1xuaW1wb3J0IHsgT3JnYW5pemF0aW9uQWN0aW9ucywgUGVybWlzc2lvbkFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25FZmZlY3RzIHtcbiAgcHJvdGVjdGVkIGxvZ2dlciA9IGluamVjdChMb2dnZXJTZXJ2aWNlKTtcblxuICBsb2FkUGVybWlzc2lvbiQ6IE9ic2VydmFibGU8XG4gICAgfCBQZXJtaXNzaW9uQWN0aW9ucy5Mb2FkUGVybWlzc2lvblN1Y2Nlc3NcbiAgICB8IFBlcm1pc3Npb25BY3Rpb25zLkxvYWRQZXJtaXNzaW9uRmFpbFxuICA+ID0gY3JlYXRlRWZmZWN0KCgpID0+XG4gICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgb2ZUeXBlKFBlcm1pc3Npb25BY3Rpb25zLkxPQURfUEVSTUlTU0lPTiksXG4gICAgICBtYXAoKGFjdGlvbjogUGVybWlzc2lvbkFjdGlvbnMuTG9hZFBlcm1pc3Npb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICAgIHN3aXRjaE1hcCgoeyB1c2VySWQsIHBlcm1pc3Npb25Db2RlIH0pID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbkNvbm5lY3Rvci5nZXQodXNlcklkLCBwZXJtaXNzaW9uQ29kZSkucGlwZShcbiAgICAgICAgICBtYXAoKHBlcm1pc3Npb246IFBlcm1pc3Npb24pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUGVybWlzc2lvbkFjdGlvbnMuTG9hZFBlcm1pc3Npb25TdWNjZXNzKFtwZXJtaXNzaW9uXSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBQZXJtaXNzaW9uQWN0aW9ucy5Mb2FkUGVybWlzc2lvbkZhaWwoe1xuICAgICAgICAgICAgICAgIHBlcm1pc3Npb25Db2RlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBub3JtYWxpemVIdHRwRXJyb3IoZXJyb3IsIHRoaXMubG9nZ2VyKSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgIClcbiAgKTtcblxuICBsb2FkUGVybWlzc2lvbnMkOiBPYnNlcnZhYmxlPFxuICAgIHwgUGVybWlzc2lvbkFjdGlvbnMuTG9hZFBlcm1pc3Npb25zU3VjY2Vzc1xuICAgIHwgUGVybWlzc2lvbkFjdGlvbnMuTG9hZFBlcm1pc3Npb25TdWNjZXNzXG4gICAgfCBQZXJtaXNzaW9uQWN0aW9ucy5Mb2FkUGVybWlzc2lvbnNGYWlsXG4gID4gPSBjcmVhdGVFZmZlY3QoKCkgPT5cbiAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICBvZlR5cGUoUGVybWlzc2lvbkFjdGlvbnMuTE9BRF9QRVJNSVNTSU9OUyksXG4gICAgICBtYXAoKGFjdGlvbjogUGVybWlzc2lvbkFjdGlvbnMuTG9hZFBlcm1pc3Npb25zKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgICBzd2l0Y2hNYXAoKHBheWxvYWQpID0+XG4gICAgICAgIHRoaXMucGVybWlzc2lvbkNvbm5lY3Rvci5nZXRMaXN0KHBheWxvYWQudXNlcklkLCBwYXlsb2FkLnBhcmFtcykucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKHBlcm1pc3Npb25zOiBFbnRpdGllc01vZGVsPFBlcm1pc3Npb24+KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlcywgcGFnZSB9ID0gU3RhdGVVdGlscy5ub3JtYWxpemVMaXN0UGFnZShcbiAgICAgICAgICAgICAgcGVybWlzc2lvbnMsXG4gICAgICAgICAgICAgICdjb2RlJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBQZXJtaXNzaW9uQWN0aW9ucy5Mb2FkUGVybWlzc2lvblN1Y2Nlc3ModmFsdWVzKSxcbiAgICAgICAgICAgICAgbmV3IFBlcm1pc3Npb25BY3Rpb25zLkxvYWRQZXJtaXNzaW9uc1N1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgIHBhZ2UsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBwYXlsb2FkLnBhcmFtcyxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgUGVybWlzc2lvbkFjdGlvbnMuTG9hZFBlcm1pc3Npb25zRmFpbCh7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiBwYXlsb2FkLnBhcmFtcyxcbiAgICAgICAgICAgICAgICBlcnJvcjogbm9ybWFsaXplSHR0cEVycm9yKGVycm9yLCB0aGlzLmxvZ2dlciksXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNyZWF0ZVBlcm1pc3Npb24kOiBPYnNlcnZhYmxlPFxuICAgIHwgUGVybWlzc2lvbkFjdGlvbnMuQ3JlYXRlUGVybWlzc2lvblN1Y2Nlc3NcbiAgICB8IFBlcm1pc3Npb25BY3Rpb25zLkNyZWF0ZVBlcm1pc3Npb25GYWlsXG4gICAgfCBPcmdhbml6YXRpb25BY3Rpb25zLk9yZ2FuaXphdGlvbkNsZWFyRGF0YVxuICA+ID0gY3JlYXRlRWZmZWN0KCgpID0+XG4gICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgb2ZUeXBlKFBlcm1pc3Npb25BY3Rpb25zLkNSRUFURV9QRVJNSVNTSU9OKSxcbiAgICAgIG1hcCgoYWN0aW9uOiBQZXJtaXNzaW9uQWN0aW9ucy5DcmVhdGVQZXJtaXNzaW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgICBzd2l0Y2hNYXAoKHBheWxvYWQpID0+XG4gICAgICAgIHRoaXMucGVybWlzc2lvbkNvbm5lY3RvclxuICAgICAgICAgIC5jcmVhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQucGVybWlzc2lvbilcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcCgoZGF0YSkgPT4gW1xuICAgICAgICAgICAgICBuZXcgUGVybWlzc2lvbkFjdGlvbnMuQ3JlYXRlUGVybWlzc2lvblN1Y2Nlc3MoZGF0YSksXG4gICAgICAgICAgICAgIG5ldyBPcmdhbml6YXRpb25BY3Rpb25zLk9yZ2FuaXphdGlvbkNsZWFyRGF0YSgpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+XG4gICAgICAgICAgICAgIGZyb20oW1xuICAgICAgICAgICAgICAgIG5ldyBQZXJtaXNzaW9uQWN0aW9ucy5DcmVhdGVQZXJtaXNzaW9uRmFpbCh7XG4gICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uQ29kZTogcGF5bG9hZC5wZXJtaXNzaW9uLmNvZGUgPz8gJycsXG4gICAgICAgICAgICAgICAgICBlcnJvcjogbm9ybWFsaXplSHR0cEVycm9yKGVycm9yLCB0aGlzLmxvZ2dlciksXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgbmV3IE9yZ2FuaXphdGlvbkFjdGlvbnMuT3JnYW5pemF0aW9uQ2xlYXJEYXRhKCksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICB1cGRhdGVQZXJtaXNzaW9uJDogT2JzZXJ2YWJsZTxcbiAgICB8IFBlcm1pc3Npb25BY3Rpb25zLlVwZGF0ZVBlcm1pc3Npb25TdWNjZXNzXG4gICAgfCBQZXJtaXNzaW9uQWN0aW9ucy5VcGRhdGVQZXJtaXNzaW9uRmFpbFxuICAgIHwgT3JnYW5pemF0aW9uQWN0aW9ucy5Pcmdhbml6YXRpb25DbGVhckRhdGFcbiAgPiA9IGNyZWF0ZUVmZmVjdCgoKSA9PlxuICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgIG9mVHlwZShQZXJtaXNzaW9uQWN0aW9ucy5VUERBVEVfUEVSTUlTU0lPTiksXG4gICAgICBtYXAoKGFjdGlvbjogUGVybWlzc2lvbkFjdGlvbnMuVXBkYXRlUGVybWlzc2lvbikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgICAgc3dpdGNoTWFwKChwYXlsb2FkKSA9PlxuICAgICAgICB0aGlzLnBlcm1pc3Npb25Db25uZWN0b3JcbiAgICAgICAgICAudXBkYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLnBlcm1pc3Npb25Db2RlLCBwYXlsb2FkLnBlcm1pc3Npb24pXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAoKGRhdGEpID0+IFtcbiAgICAgICAgICAgICAgbmV3IFBlcm1pc3Npb25BY3Rpb25zLlVwZGF0ZVBlcm1pc3Npb25TdWNjZXNzKGRhdGEpLFxuICAgICAgICAgICAgICBuZXcgT3JnYW5pemF0aW9uQWN0aW9ucy5Pcmdhbml6YXRpb25DbGVhckRhdGEoKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PlxuICAgICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgICBuZXcgUGVybWlzc2lvbkFjdGlvbnMuVXBkYXRlUGVybWlzc2lvbkZhaWwoe1xuICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbkNvZGU6IHBheWxvYWQucGVybWlzc2lvbi5jb2RlID8/ICcnLFxuICAgICAgICAgICAgICAgICAgZXJyb3I6IG5vcm1hbGl6ZUh0dHBFcnJvcihlcnJvciwgdGhpcy5sb2dnZXIpLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIG5ldyBPcmdhbml6YXRpb25BY3Rpb25zLk9yZ2FuaXphdGlvbkNsZWFyRGF0YSgpLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgbG9hZFBlcm1pc3Npb25UeXBlcyQ6IE9ic2VydmFibGU8XG4gICAgfCBQZXJtaXNzaW9uQWN0aW9ucy5Mb2FkUGVybWlzc2lvblR5cGVzU3VjY2Vzc1xuICAgIHwgUGVybWlzc2lvbkFjdGlvbnMuTG9hZFBlcm1pc3Npb25UeXBlc0ZhaWxcbiAgPiA9IGNyZWF0ZUVmZmVjdCgoKSA9PlxuICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgIG9mVHlwZShQZXJtaXNzaW9uQWN0aW9ucy5MT0FEX1BFUk1JU1NJT05fVFlQRVMpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+XG4gICAgICAgIHRoaXMucGVybWlzc2lvbkNvbm5lY3Rvci5nZXRUeXBlcygpLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKHBlcm1pc3Npb25UeXBlTGlzdDogT3JkZXJBcHByb3ZhbFBlcm1pc3Npb25UeXBlW10pID0+XG4gICAgICAgICAgICAgIG5ldyBQZXJtaXNzaW9uQWN0aW9ucy5Mb2FkUGVybWlzc2lvblR5cGVzU3VjY2VzcyhcbiAgICAgICAgICAgICAgICBwZXJtaXNzaW9uVHlwZUxpc3RcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBQZXJtaXNzaW9uQWN0aW9ucy5Mb2FkUGVybWlzc2lvblR5cGVzRmFpbCh7XG4gICAgICAgICAgICAgICAgZXJyb3I6IG5vcm1hbGl6ZUh0dHBFcnJvcihlcnJvciwgdGhpcy5sb2dnZXIpLFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcGVybWlzc2lvbkNvbm5lY3RvcjogUGVybWlzc2lvbkNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=