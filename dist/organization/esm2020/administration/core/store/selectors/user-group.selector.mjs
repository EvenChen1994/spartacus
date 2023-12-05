/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { createSelector } from '@ngrx/store';
import { StateUtils, } from '@spartacus/core';
import { USER_GROUP_FEATURE, } from '../organization-state';
import { getB2BUsersState } from './b2b-user.selector';
import { getOrganizationState } from './feature.selector';
import { getPermissionsState } from './permission.selector';
export const getUserGroupManagementState = createSelector(getOrganizationState, (state) => state[USER_GROUP_FEATURE]);
export const getUserGroupsState = createSelector(getUserGroupManagementState, (state) => state && state.entities);
export const getUserGroup = (userGroupId) => createSelector(getUserGroupsState, (state) => StateUtils.entityLoaderStateSelector(state, userGroupId));
export const getUserGroupValue = (userGroupId) => {
    return createSelector(getUserGroup(userGroupId), (userGroupState) => StateUtils.loaderValueSelector(userGroupState));
};
export const getUserGroupList = (params) => createSelector(getUserGroupManagementState, (state) => StateUtils.denormalizeSearch(state, params));
export const getAvailableOrgCustomers = (code, params) => createSelector(getUserGroupManagementState, getB2BUsersState, (state, customers) => StateUtils.denormalizeCustomB2BSearch(state.customers, customers, params, code));
export const getAvailableOrderApprovalPermissions = (code, params) => createSelector(getUserGroupManagementState, getPermissionsState, (state, permissions) => StateUtils.denormalizeCustomB2BSearch(state.permissions, permissions, params, code));
export const getUserGroupState = (code) => createSelector(getUserGroupsState, (state) => StateUtils.entityLoaderStateSelector(state, code));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1ncm91cC5zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29yZS9zdG9yZS9zZWxlY3RvcnMvdXNlci1ncm91cC5zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFDL0QsT0FBTyxFQUlMLFVBQVUsR0FDWCxNQUFNLGlCQUFpQixDQUFDO0FBR3pCLE9BQU8sRUFJTCxrQkFBa0IsR0FDbkIsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RCxNQUFNLENBQUMsTUFBTSwyQkFBMkIsR0FHcEMsY0FBYyxDQUNoQixvQkFBb0IsRUFDcEIsQ0FBQyxLQUF3QixFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FDeEQsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLDJCQUEyQixFQUMzQixDQUFDLEtBQTBCLEVBQUUsRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsUUFBUSxDQUN4RCxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHLENBQzFCLFdBQW1CLEVBQ3lELEVBQUUsQ0FDOUUsY0FBYyxDQUNaLGtCQUFrQixFQUNsQixDQUFDLEtBQThDLEVBQUUsRUFBRSxDQUNqRCxVQUFVLENBQUMseUJBQXlCLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUMzRCxDQUFDO0FBRUosTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FDL0IsV0FBbUIsRUFDaUMsRUFBRTtJQUN0RCxPQUFPLGNBQWMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUNsRSxVQUFVLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLENBQy9DLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUM5QixNQUFvQixFQUlwQixFQUFFLENBQ0YsY0FBYyxDQUFDLDJCQUEyQixFQUFFLENBQUMsS0FBMEIsRUFBRSxFQUFFLENBQ3pFLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBWSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQ3ZELENBQUM7QUFFSixNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBRyxDQUN0QyxJQUFZLEVBQ1osTUFBb0IsRUFJcEIsRUFBRSxDQUNGLGNBQWMsQ0FDWiwyQkFBMkIsRUFDM0IsZ0JBQWdCLEVBQ2hCLENBQ0UsS0FBMEIsRUFDMUIsU0FBZ0QsRUFDaEQsRUFBRSxDQUNGLFVBQVUsQ0FBQywwQkFBMEIsQ0FDbkMsS0FBSyxDQUFDLFNBQVMsRUFDZixTQUFTLEVBQ1QsTUFBTSxFQUNOLElBQUksQ0FDTCxDQUNKLENBQUM7QUFFSixNQUFNLENBQUMsTUFBTSxvQ0FBb0MsR0FBRyxDQUNsRCxJQUFZLEVBQ1osTUFBb0IsRUFJcEIsRUFBRSxDQUNGLGNBQWMsQ0FDWiwyQkFBMkIsRUFDM0IsbUJBQW1CLEVBQ25CLENBQ0UsS0FBMEIsRUFDMUIsV0FBcUQsRUFDckQsRUFBRSxDQUNGLFVBQVUsQ0FBQywwQkFBMEIsQ0FDbkMsS0FBSyxDQUFDLFdBQVcsRUFDakIsV0FBVyxFQUNYLE1BQU0sRUFDTixJQUFJLENBQ0wsQ0FDSixDQUFDO0FBRUosTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FDL0IsSUFBWSxFQUNnRSxFQUFFLENBQzlFLGNBQWMsQ0FDWixrQkFBa0IsRUFDbEIsQ0FBQyxLQUE4QyxFQUFFLEVBQUUsQ0FDakQsVUFBVSxDQUFDLHlCQUF5QixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FDcEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHtcbiAgQjJCVXNlcixcbiAgRW50aXRpZXNNb2RlbCxcbiAgU2VhcmNoQ29uZmlnLFxuICBTdGF0ZVV0aWxzLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUGVybWlzc2lvbiB9IGZyb20gJy4uLy4uL21vZGVsL3Blcm1pc3Npb24ubW9kZWwnO1xuaW1wb3J0IHsgVXNlckdyb3VwIH0gZnJvbSAnLi4vLi4vbW9kZWwvdXNlci1ncm91cC5tb2RlbCc7XG5pbXBvcnQge1xuICBPcmdhbml6YXRpb25TdGF0ZSxcbiAgU3RhdGVXaXRoT3JnYW5pemF0aW9uLFxuICBVc2VyR3JvdXBNYW5hZ2VtZW50LFxuICBVU0VSX0dST1VQX0ZFQVRVUkUsXG59IGZyb20gJy4uL29yZ2FuaXphdGlvbi1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRCMkJVc2Vyc1N0YXRlIH0gZnJvbSAnLi9iMmItdXNlci5zZWxlY3Rvcic7XG5pbXBvcnQgeyBnZXRPcmdhbml6YXRpb25TdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5pbXBvcnQgeyBnZXRQZXJtaXNzaW9uc1N0YXRlIH0gZnJvbSAnLi9wZXJtaXNzaW9uLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJHcm91cE1hbmFnZW1lbnRTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoT3JnYW5pemF0aW9uLFxuICBVc2VyR3JvdXBNYW5hZ2VtZW50XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE9yZ2FuaXphdGlvblN0YXRlLFxuICAoc3RhdGU6IE9yZ2FuaXphdGlvblN0YXRlKSA9PiBzdGF0ZVtVU0VSX0dST1VQX0ZFQVRVUkVdXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlckdyb3Vwc1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhPcmdhbml6YXRpb24sXG4gIFN0YXRlVXRpbHMuRW50aXR5TG9hZGVyU3RhdGU8VXNlckdyb3VwPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyR3JvdXBNYW5hZ2VtZW50U3RhdGUsXG4gIChzdGF0ZTogVXNlckdyb3VwTWFuYWdlbWVudCkgPT4gc3RhdGUgJiYgc3RhdGUuZW50aXRpZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyR3JvdXAgPSAoXG4gIHVzZXJHcm91cElkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoT3JnYW5pemF0aW9uLCBTdGF0ZVV0aWxzLkxvYWRlclN0YXRlPFVzZXJHcm91cD4+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFVzZXJHcm91cHNTdGF0ZSxcbiAgICAoc3RhdGU6IFN0YXRlVXRpbHMuRW50aXR5TG9hZGVyU3RhdGU8VXNlckdyb3VwPikgPT5cbiAgICAgIFN0YXRlVXRpbHMuZW50aXR5TG9hZGVyU3RhdGVTZWxlY3RvcihzdGF0ZSwgdXNlckdyb3VwSWQpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyR3JvdXBWYWx1ZSA9IChcbiAgdXNlckdyb3VwSWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhPcmdhbml6YXRpb24sIFVzZXJHcm91cD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoZ2V0VXNlckdyb3VwKHVzZXJHcm91cElkKSwgKHVzZXJHcm91cFN0YXRlKSA9PlxuICAgIFN0YXRlVXRpbHMubG9hZGVyVmFsdWVTZWxlY3Rvcih1c2VyR3JvdXBTdGF0ZSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyR3JvdXBMaXN0ID0gKFxuICBwYXJhbXM6IFNlYXJjaENvbmZpZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoT3JnYW5pemF0aW9uLFxuICBTdGF0ZVV0aWxzLkxvYWRlclN0YXRlPEVudGl0aWVzTW9kZWw8VXNlckdyb3VwPj5cbj4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoZ2V0VXNlckdyb3VwTWFuYWdlbWVudFN0YXRlLCAoc3RhdGU6IFVzZXJHcm91cE1hbmFnZW1lbnQpID0+XG4gICAgU3RhdGVVdGlscy5kZW5vcm1hbGl6ZVNlYXJjaDxVc2VyR3JvdXA+KHN0YXRlLCBwYXJhbXMpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRBdmFpbGFibGVPcmdDdXN0b21lcnMgPSAoXG4gIGNvZGU6IHN0cmluZyxcbiAgcGFyYW1zOiBTZWFyY2hDb25maWdcbik6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aE9yZ2FuaXphdGlvbixcbiAgU3RhdGVVdGlscy5Mb2FkZXJTdGF0ZTxFbnRpdGllc01vZGVsPEIyQlVzZXI+PlxuPiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRVc2VyR3JvdXBNYW5hZ2VtZW50U3RhdGUsXG4gICAgZ2V0QjJCVXNlcnNTdGF0ZSxcbiAgICAoXG4gICAgICBzdGF0ZTogVXNlckdyb3VwTWFuYWdlbWVudCxcbiAgICAgIGN1c3RvbWVyczogU3RhdGVVdGlscy5FbnRpdHlMb2FkZXJTdGF0ZTxCMkJVc2VyPlxuICAgICkgPT5cbiAgICAgIFN0YXRlVXRpbHMuZGVub3JtYWxpemVDdXN0b21CMkJTZWFyY2goXG4gICAgICAgIHN0YXRlLmN1c3RvbWVycyxcbiAgICAgICAgY3VzdG9tZXJzLFxuICAgICAgICBwYXJhbXMsXG4gICAgICAgIGNvZGVcbiAgICAgIClcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldEF2YWlsYWJsZU9yZGVyQXBwcm92YWxQZXJtaXNzaW9ucyA9IChcbiAgY29kZTogc3RyaW5nLFxuICBwYXJhbXM6IFNlYXJjaENvbmZpZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoT3JnYW5pemF0aW9uLFxuICBTdGF0ZVV0aWxzLkxvYWRlclN0YXRlPEVudGl0aWVzTW9kZWw8UGVybWlzc2lvbj4+XG4+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFVzZXJHcm91cE1hbmFnZW1lbnRTdGF0ZSxcbiAgICBnZXRQZXJtaXNzaW9uc1N0YXRlLFxuICAgIChcbiAgICAgIHN0YXRlOiBVc2VyR3JvdXBNYW5hZ2VtZW50LFxuICAgICAgcGVybWlzc2lvbnM6IFN0YXRlVXRpbHMuRW50aXR5TG9hZGVyU3RhdGU8UGVybWlzc2lvbj5cbiAgICApID0+XG4gICAgICBTdGF0ZVV0aWxzLmRlbm9ybWFsaXplQ3VzdG9tQjJCU2VhcmNoKFxuICAgICAgICBzdGF0ZS5wZXJtaXNzaW9ucyxcbiAgICAgICAgcGVybWlzc2lvbnMsXG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgY29kZVxuICAgICAgKVxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlckdyb3VwU3RhdGUgPSAoXG4gIGNvZGU6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhPcmdhbml6YXRpb24sIFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8VXNlckdyb3VwPj4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0VXNlckdyb3Vwc1N0YXRlLFxuICAgIChzdGF0ZTogU3RhdGVVdGlscy5FbnRpdHlMb2FkZXJTdGF0ZTxVc2VyR3JvdXA+KSA9PlxuICAgICAgU3RhdGVVdGlscy5lbnRpdHlMb2FkZXJTdGF0ZVNlbGVjdG9yKHN0YXRlLCBjb2RlKVxuICApO1xuIl19