/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { InjectionToken } from '@angular/core';
import { combineReducers, } from '@ngrx/store';
import { AuthActions, SiteContextActions, StateUtils, } from '@spartacus/core';
import { OrganizationActions } from '../actions';
import { ADDRESS_ENTITIES, ADDRESS_LIST, B2B_USER_APPROVERS, B2B_USER_ENTITIES, B2B_USER_FEATURE, B2B_USER_PERMISSIONS, B2B_USER_USER_GROUPS, BUDGET_ENTITIES, BUDGET_FEATURE, BUDGET_LIST, COST_CENTER_ASSIGNED_BUDGETS, COST_CENTER_ENTITIES, COST_CENTER_FEATURE, COST_CENTER_LIST, ORG_UNIT_APPROVAL_PROCESSES_ENTITIES, ORG_UNIT_ASSIGNED_USERS, ORG_UNIT_ENTITIES, ORG_UNIT_FEATURE, ORG_UNIT_NODE_LIST, ORG_UNIT_TREE_ENTITY, PERMISSION_ENTITIES, PERMISSION_FEATURE, PERMISSION_LIST, PERMISSION_TYPES_LIST, USER_GROUP_AVAILABLE_CUSTOMERS, USER_GROUP_ENTITIES, USER_GROUP_FEATURE, USER_GROUP_LIST, USER_GROUP_PERMISSIONS, USER_LIST, } from '../organization-state';
import { b2bUserApproverListReducer, b2bUserEntitiesReducer, b2bUserPermissionListReducer, b2bUserUserGroupListReducer, userListReducer, } from './b2b-user.reducer';
import { budgetsEntitiesReducer, budgetsListReducer } from './budget.reducer';
import { costCenterAssignedBudgetsListReducer, costCentersEntitiesReducer, costCentersListReducer, } from './cost-center.reducer';
import { orgUnitAddressListReducer, orgUnitEntitiesReducer, orgUnitUserListReducer, } from './org-unit.reducer';
import { permissionsEntitiesReducer, permissionsListReducer, } from './permission.reducer';
import { userGroupAvailableOrderApprovalPermissionsListReducer, userGroupAvailablOrgCustomersListReducer, userGroupEntitiesReducer, userGroupsListReducer, } from './user-group.reducer';
export function getReducers() {
    return {
        [BUDGET_FEATURE]: combineReducers({
            entities: StateUtils.entityLoaderReducer(BUDGET_ENTITIES, budgetsEntitiesReducer),
            list: StateUtils.entityLoaderReducer(BUDGET_LIST, budgetsListReducer),
        }),
        [PERMISSION_FEATURE]: combineReducers({
            entities: StateUtils.entityLoaderReducer(PERMISSION_ENTITIES, permissionsEntitiesReducer),
            list: StateUtils.entityLoaderReducer(PERMISSION_LIST, permissionsListReducer),
            permissionTypes: StateUtils.entityLoaderReducer(PERMISSION_TYPES_LIST),
        }),
        [ORG_UNIT_FEATURE]: combineReducers({
            entities: StateUtils.entityLoaderReducer(ORG_UNIT_ENTITIES, orgUnitEntitiesReducer),
            availableOrgUnitNodes: StateUtils.entityLoaderReducer(ORG_UNIT_NODE_LIST),
            tree: StateUtils.entityLoaderReducer(ORG_UNIT_TREE_ENTITY),
            approvalProcesses: StateUtils.entityLoaderReducer(ORG_UNIT_APPROVAL_PROCESSES_ENTITIES),
            users: StateUtils.entityLoaderReducer(ORG_UNIT_ASSIGNED_USERS, orgUnitUserListReducer),
            addressList: StateUtils.entityLoaderReducer(ADDRESS_LIST, orgUnitAddressListReducer),
            addressEntities: StateUtils.entityLoaderReducer(ADDRESS_ENTITIES),
        }),
        [USER_GROUP_FEATURE]: combineReducers({
            entities: StateUtils.entityLoaderReducer(USER_GROUP_ENTITIES, userGroupEntitiesReducer),
            list: StateUtils.entityLoaderReducer(USER_GROUP_LIST, userGroupsListReducer),
            permissions: StateUtils.entityLoaderReducer(USER_GROUP_PERMISSIONS, userGroupAvailableOrderApprovalPermissionsListReducer),
            customers: StateUtils.entityLoaderReducer(USER_GROUP_AVAILABLE_CUSTOMERS, userGroupAvailablOrgCustomersListReducer),
        }),
        [COST_CENTER_FEATURE]: combineReducers({
            entities: StateUtils.entityLoaderReducer(COST_CENTER_ENTITIES, costCentersEntitiesReducer),
            list: StateUtils.entityLoaderReducer(COST_CENTER_LIST, costCentersListReducer),
            budgets: StateUtils.entityLoaderReducer(COST_CENTER_ASSIGNED_BUDGETS, costCenterAssignedBudgetsListReducer),
        }),
        [B2B_USER_FEATURE]: combineReducers({
            entities: StateUtils.entityLoaderReducer(B2B_USER_ENTITIES, b2bUserEntitiesReducer),
            list: StateUtils.entityLoaderReducer(USER_LIST, userListReducer),
            approvers: StateUtils.entityLoaderReducer(B2B_USER_APPROVERS, b2bUserApproverListReducer),
            permissions: StateUtils.entityLoaderReducer(B2B_USER_PERMISSIONS, b2bUserPermissionListReducer),
            userGroups: StateUtils.entityLoaderReducer(B2B_USER_USER_GROUPS, b2bUserUserGroupListReducer),
        }),
    };
}
export const reducerToken = new InjectionToken('OrganizationReducers');
export const reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
export function clearOrganizationState(reducer) {
    return function (state, action) {
        if (action.type === OrganizationActions.CLEAR_ORGANIZATION_DATA) {
            state = undefined;
        }
        if (action.type === AuthActions.LOGOUT) {
            state = undefined;
        }
        if (action.type === SiteContextActions.LANGUAGE_CHANGE) {
            state = undefined;
        }
        return reducer(state, action);
    };
}
export const metaReducers = [clearOrganizationState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvcmUvc3RvcmUvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUlMLGVBQWUsR0FFaEIsTUFBTSxhQUFhLENBQUM7QUFDckIsT0FBTyxFQUVMLFdBQVcsRUFPWCxrQkFBa0IsRUFDbEIsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFLekIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ2pELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLGtCQUFrQixFQUNsQixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLG9CQUFvQixFQUNwQixvQkFBb0IsRUFDcEIsZUFBZSxFQUNmLGNBQWMsRUFDZCxXQUFXLEVBQ1gsNEJBQTRCLEVBQzVCLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBRWhCLG9DQUFvQyxFQUNwQyx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLHFCQUFxQixFQUNyQiw4QkFBOEIsRUFDOUIsbUJBQW1CLEVBQ25CLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysc0JBQXNCLEVBQ3RCLFNBQVMsR0FDVixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsc0JBQXNCLEVBQ3RCLDRCQUE0QixFQUM1QiwyQkFBMkIsRUFDM0IsZUFBZSxHQUNoQixNQUFNLG9CQUFvQixDQUFDO0FBQzVCLE9BQU8sRUFBRSxzQkFBc0Is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Q0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBBY3Rpb25SZWR1Y2VyLFxuICBBY3Rpb25SZWR1Y2VyTWFwLFxuICBjb21iaW5lUmVkdWNlcnMsXG4gIE1ldGFSZWR1Y2VyLFxufSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBBdXRoQWN0aW9ucyxcbiAgQjJCQXBwcm92YWxQcm9jZXNzLFxuICBCMkJVbml0LFxuICBCMkJVc2VyLFxuICBDb3N0Q2VudGVyLFxuICBMaXN0TW9kZWwsXG4gIE9yZGVyQXBwcm92YWxQZXJtaXNzaW9uVHlwZSxcbiAgU2l0ZUNvbnRleHRBY3Rpb25zLFxuICBTdGF0ZVV0aWxzLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQnVkZ2V0IH0gZnJvbSAnLi4vLi4vbW9kZWwvYnVkZ2V0Lm1vZGVsJztcbmltcG9ydCB7IFBlcm1pc3Npb24gfSBmcm9tICcuLi8uLi9tb2RlbC9wZXJtaXNzaW9uLm1vZGVsJztcbmltcG9ydCB7IEIyQlVuaXROb2RlIH0gZnJvbSAnLi4vLi4vbW9kZWwvdW5pdC1ub2RlLm1vZGVsJztcbmltcG9ydCB7IFVzZXJHcm91cCB9IGZyb20gJy4uLy4uL21vZGVsL3VzZXItZ3JvdXAubW9kZWwnO1xuaW1wb3J0IHsgT3JnYW5pemF0aW9uQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHtcbiAgQUREUkVTU19FTlRJVElFUyxcbiAgQUREUkVTU19MSVNULFxuICBCMkJfVVNFUl9BUFBST1ZFUlMsXG4gIEIyQl9VU0VSX0VOVElUSUVTLFxuICBCMkJfVVNFUl9GRUFUVVJFLFxuICBCMkJfVVNFUl9QRVJNSVNTSU9OUyxcbiAgQjJCX1VTRVJfVVNFUl9HUk9VUFMsXG4gIEJVREdFVF9FTlRJVElFUyxcbiAgQlVER0VUX0ZFQVRVUkUsXG4gIEJVREdFVF9MSVNULFxuICBDT1NUX0NFTlRFUl9BU1NJR05FRF9CVURHRVRTLFxuICBDT1NUX0NFTlRFUl9FTlRJVElFUyxcbiAgQ09TVF9DRU5URVJfRkVBVFVSRSxcbiAgQ09TVF9DRU5URVJfTElTVCxcbiAgT3JnYW5pemF0aW9uU3RhdGUsXG4gIE9SR19VTklUX0FQUFJPVkFMX1BST0NFU1NFU19FTlRJVElFUyxcbiAgT1JHX1VOSVRfQVNTSUdORURfVVNFUlMsXG4gIE9SR19VTklUX0VOVElUSUVTLFxuICBPUkdfVU5JVF9GRUFUVVJFLFxuICBPUkdfVU5JVF9OT0RFX0xJU1QsXG4gIE9SR19VTklUX1RSRUVfRU5USVRZLFxuICBQRVJNSVNTSU9OX0VOVElUSUVTLFxuICBQRVJNSVNTSU9OX0ZFQVRVUkUsXG4gIFBFUk1JU1NJT05fTElTVCxcbiAgUEVSTUlTU0lPTl9UWVBFU19MSVNULFxuICBVU0VSX0dST1VQX0FWQUlMQUJMRV9DVVNUT01FUlMsXG4gIFVTRVJfR1JPVVBfRU5USVRJRVMsXG4gIFVTRVJfR1JPVVBfRkVBVFVSRSxcbiAgVVNFUl9HUk9VUF9MSVNULFxuICBVU0VSX0dST1VQX1BFUk1JU1NJT05TLFxuICBVU0VSX0xJU1QsXG59IGZyb20gJy4uL29yZ2FuaXphdGlvbi1zdGF0ZSc7XG5pbXBvcnQge1xuICBiMmJVc2VyQXBwcm92ZXJMaXN0UmVkdWNlcixcbiAgYjJiVXNlckVudGl0aWVzUmVkdWNlcixcbiAgYjJiVXNlclBlcm1pc3Npb25MaXN0UmVkdWNlcixcbiAgYjJiVXNlclVzZXJHcm91cExpc3RSZWR1Y2VyLFxuICB1c2VyTGlzdFJlZHVjZXIsXG59IGZyb20gJy4vYjJiLXVzZXIucmVkdWNlcic7XG5pbXBvcnQgeyBidWRnZXRzRW50aXRpZXNSZWR1Y2VyLCBidWRnZXRzTGlzdFJlZHVjZXIgfSBmcm9tICcuL2J1ZGdldC5yZWR1Y2VyJztcbmltcG9ydCB7XG4gIGNvc3RDZW50ZXJBc3NpZ25lZEJ1ZGdldHNMaXN0UmVkdWNlcixcbiAgY29zdENlbnRlcnNFbnRpdGllc1JlZHVjZXIsXG4gIGNvc3RDZW50ZXJzTGlzdFJlZHVjZXIsXG59IGZyb20gJy4vY29zdC1jZW50ZXIucmVkdWNlcic7XG5pbXBvcnQge1xuICBvcmdVbml0QWRkcmVzc0xpc3RSZWR1Y2VyLFxuICBvcmdVbml0RW50aXRpZXNSZWR1Y2VyLFxuICBvcmdVbml0VXNlckxpc3RSZWR1Y2VyLFxufSBmcm9tICcuL29yZy11bml0LnJlZHVjZXInO1xuaW1wb3J0IHtcbiAgcGVybWlzc2lvbnNFbnRpdGllc1JlZHVjZXIsXG4gIHBlcm1pc3Npb25zTGlzdFJlZHVjZXIsXG59IGZyb20gJy4vcGVybWlzc2lvbi5yZWR1Y2VyJztcbmltcG9ydCB7XG4gIHVzZXJHcm91cEF2YWlsYWJsZU9yZGVyQXBwcm92YWxQZXJtaXNzaW9uc0xpc3RSZWR1Y2VyLFxuICB1c2VyR3JvdXBBdmFpbGFibE9yZ0N1c3RvbWVyc0xpc3RSZWR1Y2VyLFxuICB1c2VyR3JvdXBFbnRpdGllc1JlZHVjZXIsXG4gIHVzZXJHcm91cHNMaXN0UmVkdWNlcixcbn0gZnJvbSAnLi91c2VyLWdyb3VwLnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxPcmdhbml6YXRpb25TdGF0ZSwgYW55PiB7XG4gIHJldHVybiB7XG4gICAgW0JVREdFVF9GRUFUVVJFXTogY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIGVudGl0aWVzOiBTdGF0ZVV0aWxzLmVudGl0eUxvYWRlclJlZHVjZXI8QnVkZ2V0LCBhbnk+KFxuICAgICAgICBCVURHRVRfRU5USVRJRVMsXG4gICAgICAgIGJ1ZGdldHNFbnRpdGllc1JlZHVjZXJcbiAgICAgICksXG4gICAgICBsaXN0OiBTdGF0ZVV0aWxzLmVudGl0eUxvYWRlclJlZHVjZXI8TGlzdE1vZGVsLCBhbnk+KFxuICAgICAgICBCVURHRVRfTElTVCxcbiAgICAgICAgYnVkZ2V0c0xpc3RSZWR1Y2VyXG4gICAgICApLFxuICAgIH0pLFxuICAgIFtQRVJNSVNTSU9OX0ZFQVRVUkVdOiBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgZW50aXRpZXM6IFN0YXRlVXRpbHMuZW50aXR5TG9hZGVyUmVkdWNlcjxQZXJtaXNzaW9uLCBhbnk+KFxuICAgICAgICBQRVJNSVNTSU9OX0VOVElUSUVTLFxuICAgICAgICBwZXJtaXNzaW9uc0VudGl0aWVzUmVkdWNlclxuICAgICAgKSxcbiAgICAgIGxpc3Q6IFN0YXRlVXRpbHMuZW50aXR5TG9hZGVyUmVkdWNlcjxMaXN0TW9kZWwsIGFueT4oXG4gICAgICAgIFBFUk1JU1NJT05fTElTVCxcbiAgICAgICAgcGVybWlzc2lvbnNMaXN0UmVkdWNlclxuICAgICAgKSxcbiAgICAgIHBlcm1pc3Npb25UeXBlczogU3RhdGVVdGlscy5lbnRpdHlMb2FkZXJSZWR1Y2VyPFxuICAgICAgICBPcmRlckFwcHJvdmFsUGVybWlzc2lvblR5cGVbXVxuICAgICAgPihQRVJNSVNTSU9OX1RZUEVTX0xJU1QpLFxuICAgIH0pLFxuICAgIFtPUkdfVU5JVF9GRUFUVVJFXTogY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIGVudGl0aWVzOiBTdGF0ZVV0aWxzLmVudGl0eUxvYWRlclJlZHVjZXI8QjJCVW5pdCwgYW55PihcbiAgICAgICAgT1JHX1VOSVRfRU5USVRJRVMsXG4gICAgICAgIG9yZ1VuaXRFbnRpdGllc1JlZHVjZXJcbiAgICAgICksXG4gICAgICBhdmFpbGFibGVPcmdVbml0Tm9kZXM6XG4gICAgICAgIFN0YXRlVXRpbHMuZW50aXR5TG9hZGVyUmVkdWNlcjxCMkJVbml0Tm9kZVtdPihPUkdfVU5JVF9OT0RFX0xJU1QpLFxuICAgICAgdHJlZTogU3RhdGVVdGlscy5lbnRpdHlMb2FkZXJSZWR1Y2VyPEIyQlVuaXROb2RlPihPUkdfVU5JVF9UUkVFX0VOVElUWSksXG4gICAgICBhcHByb3ZhbFByb2Nlc3NlczogU3RhdGVVdGlscy5lbnRpdHlMb2FkZXJSZWR1Y2VyPEIyQkFwcHJvdmFsUHJvY2Vzc1tdPihcbiAgICAgICAgT1JHX1VOSVRfQVBQUk9WQUxfUFJPQ0VTU0VTX0VOVElUSUVTXG4gICAgICApLFxuICAgICAgdXNlcnM6IFN0YXRlVXRpbHMuZW50aXR5TG9hZGVyUmVkdWNlcjxMaXN0TW9kZWwsIGFueT4oXG4gICAgICAgIE9SR19VTklUX0FTU0lHTkVEX1VTRVJTLFxuICAgICAgICBvcmdVbml0VXNlckxpc3RSZWR1Y2VyXG4gICAgICApLFxuICAgICAgYWRkcmVzc0xpc3Q6IFN0YXRlVXRpbHMuZW50aXR5TG9hZGVyUmVkdWNlcjxMaXN0TW9kZWwsIGFueT4oXG4gICAgICAgIEFERFJFU1NfTElTVCxcbiAgICAgICAgb3JnVW5pdEFkZHJlc3NMaXN0UmVkdWNlclxuICAgICAgKSxcbiAgICAgIGFkZHJlc3NFbnRpdGllczogU3RhdGVVdGlscy5lbnRpdHlMb2FkZXJSZWR1Y2VyPEFkZHJlc3MsIGFueT4oXG4gICAgICAgIEFERFJFU1NfRU5USVRJRVNcbiAgICAgICksXG4gICAgfSksXG4gICAgW1VTRVJfR1JPVVBfRkVBVFVSRV06IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgICBlbnRpdGllczogU3RhdGVVdGlscy5lbnRpdHlMb2FkZXJSZWR1Y2VyPFVzZXJHcm91cCwgYW55PihcbiAgICAgICAgVVNFUl9HUk9VUF9FTlRJVElFUyxcbiAgICAgICAgdXNlckdyb3VwRW50aXRpZXNSZWR1Y2VyXG4gICAgICApLFxuICAgICAgbGlzdDogU3RhdGVVdGlscy5lbnRpdHlMb2FkZXJSZWR1Y2VyPExpc3RNb2RlbCwgYW55PihcbiAgICAgICAgVVNFUl9HUk9VUF9MSVNULFxuICAgICAgICB1c2VyR3JvdXBzTGlzdFJlZHVjZXJcbiAgICAgICksXG4gICAgICBwZXJtaXNzaW9uczogU3RhdGVVdGlscy5lbnRpdHlMb2FkZXJSZWR1Y2VyPExpc3RNb2RlbCwgYW55PihcbiAgICAgICAgVVNFUl9HUk9VUF9QRVJNSVNTSU9OUyxcbiAgICAgICAgdXNlckdyb3VwQXZhaWxhYmxlT3JkZXJBcHByb3ZhbFBlcm1pc3Npb25zTGlzdFJlZHVjZXJcbiAgICAgICksXG4gICAgICBjdXN0b21lcnM6IFN0YXRlVXRpbHMuZW50aXR5TG9hZGVyUmVkdWNlcjxMaXN0TW9kZWwsIGFueT4oXG4gICAgICAgIFVTRVJfR1JPVVBfQVZBSUxBQkxFX0NVU1RPTUVSUyxcbiAgICAgICAgdXNlckdyb3VwQXZhaWxhYmxPcmdDdXN0b21lcnNMaXN0UmVkdWNlclxuICAgICAgKSxcbiAgICB9KSxcbiAgICBbQ09TVF9DRU5URVJfRkVBVFVSRV06IGNvbWJpbmVSZWR1Y2Vycyh7XG4gICAgICBlbnRpdGllczogU3RhdGVVdGlscy5lbnRpdHlMb2FkZXJSZWR1Y2VyPENvc3RDZW50ZXIsIGFueT4oXG4gICAgICAgIENPU1RfQ0VOVEVSX0VOVElUSUVTLFxuICAgICAgICBjb3N0Q2VudGVyc0VudGl0aWVzUmVkdWNlclxuICAgICAgKSxcbiAgICAgIGxpc3Q6IFN0YXRlVXRpbHMuZW50aXR5TG9hZGVyUmVkdWNlcjxMaXN0TW9kZWwsIGFueT4oXG4gICAgICAgIENPU1RfQ0VOVEVSX0xJU1QsXG4gICAgICAgIGNvc3RDZW50ZXJzTGlzdFJlZHVjZXJcbiAgICAgICksXG4gICAgICBidWRnZXRzOiBTdGF0ZVV0aWxzLmVudGl0eUxvYWRlclJlZHVjZXI8TGlzdE1vZGVsLCBhbnk+KFxuICAgICAgICBDT1NUX0NFTlRFUl9BU1NJR05FRF9CVURHRVRTLFxuICAgICAgICBjb3N0Q2VudGVyQXNzaWduZWRCdWRnZXRzTGlzdFJlZHVjZXJcbiAgICAgICksXG4gICAgfSksXG4gICAgW0IyQl9VU0VSX0ZFQVRVUkVdOiBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgZW50aXRpZXM6IFN0YXRlVXRpbHMuZW50aXR5TG9hZGVyUmVkdWNlcjxCMkJVc2VyLCBhbnk+KFxuICAgICAgICBCMkJfVVNFUl9FTlRJVElFUyxcbiAgICAgICAgYjJiVXNlckVudGl0aWVzUmVkdWNlclxuICAgICAgKSxcbiAgICAgIGxpc3Q6IFN0YXRlVXRpbHMuZW50aXR5TG9hZGVyUmVkdWNlcjxMaXN0TW9kZWwsIGFueT4oXG4gICAgICAgIFVTRVJfTElTVCxcbiAgICAgICAgdXNlckxpc3RSZWR1Y2VyXG4gICAgICApLFxuICAgICAgYXBwcm92ZXJzOiBTdGF0ZVV0aWxzLmVudGl0eUxvYWRlclJlZHVjZXI8TGlzdE1vZGVsLCBhbnk+KFxuICAgICAgICBCMkJfVVNFUl9BUFBST1ZFUlMsXG4gICAgICAgIGIyYlVzZXJBcHByb3Zlckxpc3RSZWR1Y2VyXG4gICAgICApLFxuICAgICAgcGVybWlzc2lvbnM6IFN0YXRlVXRpbHMuZW50aXR5TG9hZGVyUmVkdWNlcjxMaXN0TW9kZWwsIGFueT4oXG4gICAgICAgIEIyQl9VU0VSX1BFUk1JU1NJT05TLFxuICAgICAgICBiMmJVc2VyUGVybWlzc2lvbkxpc3RSZWR1Y2VyXG4gICAgICApLFxuICAgICAgdXNlckdyb3VwczogU3RhdGVVdGlscy5lbnRpdHlMb2FkZXJSZWR1Y2VyPExpc3RNb2RlbCwgYW55PihcbiAgICAgICAgQjJCX1VTRVJfVVNFUl9HUk9VUFMsXG4gICAgICAgIGIyYlVzZXJVc2VyR3JvdXBMaXN0UmVkdWNlclxuICAgICAgKSxcbiAgICB9KSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxPcmdhbml6YXRpb25TdGF0ZT4+ID1cbiAgbmV3IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8T3JnYW5pemF0aW9uU3RhdGU+PihcbiAgICAnT3JnYW5pemF0aW9uUmVkdWNlcnMnXG4gICk7XG5cbmV4cG9ydCBjb25zdCByZWR1Y2VyUHJvdmlkZXI6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiByZWR1Y2VyVG9rZW4sXG4gIHVzZUZhY3Rvcnk6IGdldFJlZHVjZXJzLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyT3JnYW5pemF0aW9uU3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8T3JnYW5pemF0aW9uU3RhdGUsIEFjdGlvbj5cbik6IEFjdGlvblJlZHVjZXI8T3JnYW5pemF0aW9uU3RhdGUsIEFjdGlvbj4ge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IE9yZ2FuaXphdGlvbkFjdGlvbnMuQ0xFQVJfT1JHQU5JWkFUSU9OX0RBVEEpIHtcbiAgICAgIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IEF1dGhBY3Rpb25zLkxPR09VVCkge1xuICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRSkge1xuICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPGFueT5bXSA9IFtjbGVhck9yZ2FuaXphdGlvblN0YXRlXTtcbiJdfQ==