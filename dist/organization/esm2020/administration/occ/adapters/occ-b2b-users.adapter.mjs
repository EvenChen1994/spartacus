import { Injectable } from '@angular/core';
import { B2B_USERS_NORMALIZER, B2B_USER_NORMALIZER, PERMISSIONS_NORMALIZER, USER_GROUPS_NORMALIZER, B2B_USER_SERIALIZER, } from '@spartacus/organization/administration/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@spartacus/core";
export class OccB2BUserAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    load(userId, orgUnitCustomerId) {
        return this.http
            .get(this.getB2BUserEndpoint(userId, orgUnitCustomerId))
            .pipe(this.converter.pipeable(B2B_USER_NORMALIZER));
    }
    loadList(userId, params) {
        return this.http
            .get(this.getB2BUsersEndpoint(userId, params))
            .pipe(this.converter.pipeable(B2B_USERS_NORMALIZER));
    }
    create(userId, orgCustomer) {
        orgCustomer = this.converter.convert(orgCustomer, B2B_USER_SERIALIZER);
        return this.http
            .post(this.getB2BUsersEndpoint(userId), orgCustomer)
            .pipe(this.converter.pipeable(B2B_USER_NORMALIZER));
    }
    update(userId, orgCustomerId, orgCustomer) {
        orgCustomer = this.converter.convert(orgCustomer, B2B_USER_SERIALIZER);
        return this.http
            .patch(this.getB2BUserEndpoint(userId, orgCustomerId), orgCustomer)
            .pipe(this.converter.pipeable(B2B_USER_NORMALIZER));
    }
    loadApprovers(userId, orgCustomerId, params) {
        return this.http
            .get(this.getApproversEndpoint(userId, orgCustomerId, params))
            .pipe(this.converter.pipeable(B2B_USERS_NORMALIZER));
    }
    assignApprover(userId, orgCustomerId, approverId) {
        return this.http.post(this.getApproverEndpoint(userId, orgCustomerId, approverId), null);
    }
    unassignApprover(userId, orgCustomerId, approverId) {
        return this.http.delete(this.getApproverEndpoint(userId, orgCustomerId, approverId));
    }
    loadPermissions(userId, orgCustomerId, params) {
        return this.http
            .get(this.getPermissionsEndpoint(userId, orgCustomerId, params))
            .pipe(this.converter.pipeable(PERMISSIONS_NORMALIZER));
    }
    assignPermission(userId, orgCustomerId, permissionId) {
        return this.http.post(this.getPermissionEndpoint(userId, orgCustomerId, permissionId), null);
    }
    unassignPermission(userId, orgCustomerId, permissionId) {
        return this.http.delete(this.getPermissionEndpoint(userId, orgCustomerId, permissionId));
    }
    loadUserGroups(userId, orgCustomerId, params) {
        return this.http
            .get(this.getUserGroupsEndpoint(userId, orgCustomerId, params))
            .pipe(this.converter.pipeable(USER_GROUPS_NORMALIZER));
    }
    assignUserGroup(userId, orgCustomerId, userGroupId) {
        return this.http.post(this.getUserGroupEndpoint(userId, orgCustomerId, userGroupId), null);
    }
    unassignUserGroup(userId, orgCustomerId, userGroupId) {
        return this.http.delete(this.getUserGroupEndpoint(userId, orgCustomerId, userGroupId));
    }
    getB2BUserEndpoint(userId, orgCustomerId) {
        return this.occEndpoints.buildUrl('b2bUser', {
            urlParams: {
                userId,
                orgCustomerId,
            },
        });
    }
    getB2BUsersEndpoint(userId, params) {
        return this.occEndpoints.buildUrl('b2bUsers', {
            urlParams: { userId },
            queryParams: params,
        });
    }
    getApproverEndpoint(userId, orgCustomerId, approverId) {
        return this.occEndpoints.buildUrl('b2bUserApprover', {
            urlParams: {
                userId,
                orgCustomerId,
                approverId,
            },
        });
    }
    getApproversEndpoint(userId, orgCustomerId, params) {
        return this.occEndpoints.buildUrl('b2bUserApprovers', {
            urlParams: { userId, orgCustomerId },
            queryParams: params,
        });
    }
    getPermissionEndpoint(userId, orgCustomerId, premissionId) {
        return this.occEndpoints.buildUrl('b2bUserPermission', {
            urlParams: {
                userId,
                orgCustomerId,
                premissionId,
            },
        });
    }
    getPermissionsEndpoint(userId, orgCustomerId, params) {
        return this.occEndpoints.buildUrl('b2bUserPermissions', {
            urlParams: {
                userId,
                orgCustomerId,
            },
            queryParams: params,
        });
    }
    getUserGroupEndpoint(userId, orgCustomerId, userGroupId) {
        return this.occEndpoints.buildUrl('b2bUserUserGroup', {
            urlParams: {
                userId,
                orgCustomerId,
                userGroupId,
            },
        });
    }
    getUserGroupsEndpoint(userId, orgCustomerId, params) {
        return this.occEndpoints.buildUrl('b2bUserUserGroups', {
            urlParams: { userId, orgCustomerId },
            queryParams: params,
        });
    }
}
OccB2BUserAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: OccB2BUserAdapter, deps: [{ token: i1.HttpClient }, { token: i2.OccEndpointsService }, { token: i2.ConverterService }], target: i0.ɵɵFactoryTarget.Injectable });
OccB2BUserAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: OccB2BUserAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: OccB2BUserAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.OccEndpointsService }, { type: i2.ConverterService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWIyYi11c2Vycy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZ2FuaXphdGlvbi9hZG1pbmlzdHJhdGlvbi9vY2MvYWRhcHRlcnMvb2NjLWIyYi11c2Vycy5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTM0MsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsc0JBQXNCLEVBRXRCLHNCQUFzQixFQUN0QixtQkFBbUIsR0FDcEIsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQUlyRCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQztJQUVKLElBQUksQ0FBQyxNQUFjLEVBQUUsaUJBQXlCO1FBQzVDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQWMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2FBQ3BFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELFFBQVEsQ0FDTixNQUFjLEVBQ2QsTUFBcUI7UUFFckIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBc0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNsRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxN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Q0FBQztJQUNMLENBQUM7OzhHQTdPVSxpQkFBaUI7a0hBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEIyQlVzZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG4gIEVudGl0aWVzTW9kZWwsXG4gIE9jYyxcbiAgT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgU2VhcmNoQ29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHtcbiAgQjJCVXNlckFkYXB0ZXIsXG4gIEIyQl9VU0VSU19OT1JNQUxJWkVSLFxuICBCMkJfVVNFUl9OT1JNQUxJWkVSLFxuICBQRVJNSVNTSU9OU19OT1JNQUxJWkVSLFxuICBVc2VyR3JvdXAsXG4gIFVTRVJfR1JPVVBTX05PUk1BTElaRVIsXG4gIEIyQl9VU0VSX1NFUklBTElaRVIsXG59IGZyb20gJ0BzcGFydGFjdXMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQjJCVXNlckFkYXB0ZXIgaW1wbGVtZW50cyBCMkJVc2VyQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZCh1c2VySWQ6IHN0cmluZywgb3JnVW5pdEN1c3RvbWVySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QjJCVXNlcj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkIyQlVzZXI+KHRoaXMuZ2V0QjJCVXNlckVuZHBvaW50KHVzZXJJZCwgb3JnVW5pdEN1c3RvbWVySWQpKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQjJCX1VTRVJfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgbG9hZExpc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogU2VhcmNoQ29uZmlnXG4gICk6IE9ic2VydmFibGU8RW50aXRpZXNNb2RlbDxCMkJVc2VyPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLk9yZ1VuaXRVc2VyTGlzdD4odGhpcy5nZXRCMkJVc2Vyc0VuZHBvaW50KHVzZXJJZCwgcGFyYW1zKSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKEIyQl9VU0VSU19OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBjcmVhdGUodXNlcklkOiBzdHJpbmcsIG9yZ0N1c3RvbWVyOiBCMkJVc2VyKTogT2JzZXJ2YWJsZTxCMkJVc2VyPiB7XG4gICAgb3JnQ3VzdG9tZXIgPSB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KG9yZ0N1c3RvbWVyLCBCMkJfVVNFUl9TRVJJQUxJWkVSKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxPY2MuQjJCVXNlcj4odGhpcy5nZXRCMkJVc2Vyc0VuZHBvaW50KHVzZXJJZCksIG9yZ0N1c3RvbWVyKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQjJCX1VTRVJfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgdXBkYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZ0N1c3RvbWVySWQ6IHN0cmluZyxcbiAgICBvcmdDdXN0b21lcjogQjJCVXNlclxuICApOiBPYnNlcnZhYmxlPEIyQlVzZXI+IHtcbiAgICBvcmdDdXN0b21lciA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQoXG4gICAgICBvcmdDdXN0b21lcixcbiAgICAgIEIyQl9VU0VSX1NFUklBTElaRVJcbiAgICApIGFzIEIyQlVzZXI7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoPE9jYy5CMkJVc2VyPihcbiAgICAgICAgdGhpcy5nZXRCMkJVc2VyRW5kcG9pbnQodXNlcklkLCBvcmdDdXN0b21lcklkKSxcbiAgICAgICAgb3JnQ3VzdG9tZXJcbiAgICAgIClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKEIyQl9VU0VSX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIGxvYWRBcHByb3ZlcnMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb3JnQ3VzdG9tZXJJZDogc3RyaW5nLFxuICAgIHBhcmFtcz86IFNlYXJjaENvbmZpZ1xuICApOiBPYnNlcnZhYmxlPEVudGl0aWVzTW9kZWw8QjJCVXNlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5PcmdVbml0VXNlckxpc3Q+KFxuICAgICAgICB0aGlzLmdldEFwcHJvdmVyc0VuZHBvaW50KHVzZXJJZCwgb3JnQ3VzdG9tZXJJZCwgcGFyYW1zKVxuICAgICAgKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQjJCX1VTRVJTX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIGFzc2lnbkFwcHJvdmVyKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZ0N1c3RvbWVySWQ6IHN0cmluZyxcbiAgICBhcHByb3ZlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihcbiAgICAgIHRoaXMuZ2V0QXBwcm92ZXJFbmRwb2ludCh1c2VySWQsIG9yZ0N1c3RvbWVySWQsIGFwcHJvdmVySWQpLFxuICAgICAgbnVsbFxuICAgICk7XG4gIH1cblxuICB1bmFzc2lnbkFwcHJvdmVyKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZ0N1c3RvbWVySWQ6IHN0cmluZyxcbiAgICBhcHByb3ZlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KFxuICAgICAgdGhpcy5nZXRBcHByb3ZlckVuZHBvaW50KHVzZXJJZCwgb3JnQ3VzdG9tZXJJZCwgYXBwcm92ZXJJZClcbiAgICApO1xuICB9XG5cbiAgbG9hZFBlcm1pc3Npb25zKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZ0N1c3RvbWVySWQ6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBTZWFyY2hDb25maWdcbiAgKTogT2JzZXJ2YWJsZTxFbnRpdGllc01vZGVsPEIyQlVzZXI+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JnVW5pdFVzZXJMaXN0PihcbiAgICAgICAgdGhpcy5nZXRQZXJtaXNzaW9uc0VuZHBvaW50KHVzZXJJZCwgb3JnQ3VzdG9tZXJJZCwgcGFyYW1zKVxuICAgICAgKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUEVSTUlTU0lPTlNfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgYXNzaWduUGVybWlzc2lvbihcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmdDdXN0b21lcklkOiBzdHJpbmcsXG4gICAgcGVybWlzc2lvbklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihcbiAgICAgIHRoaXMuZ2V0UGVybWlzc2lvbkVuZHBvaW50KHVzZXJJZCwgb3JnQ3VzdG9tZXJJZCwgcGVybWlzc2lvbklkKSxcbiAgICAgIG51bGxcbiAgICApO1xuICB9XG5cbiAgdW5hc3NpZ25QZXJtaXNzaW9uKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZ0N1c3RvbWVySWQ6IHN0cmluZyxcbiAgICBwZXJtaXNzaW9uSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oXG4gICAgICB0aGlzLmdldFBlcm1pc3Npb25FbmRwb2ludCh1c2VySWQsIG9yZ0N1c3RvbWVySWQsIHBlcm1pc3Npb25JZClcbiAgICApO1xuICB9XG5cbiAgbG9hZFVzZXJHcm91cHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb3JnQ3VzdG9tZXJJZDogc3RyaW5nLFxuICAgIHBhcmFtcz86IFNlYXJjaENvbmZpZ1xuICApOiBPYnNlcnZhYmxlPEVudGl0aWVzTW9kZWw8VXNlckdyb3VwPj4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLk9yZ1VuaXRVc2VyTGlzdD4oXG4gICAgICAgIHRoaXMuZ2V0VXNlckdyb3Vwc0VuZHBvaW50KHVzZXJJZCwgb3JnQ3VzdG9tZXJJZCwgcGFyYW1zKVxuICAgICAgKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoVVNFUl9HUk9VUFNfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgYXNzaWduVXNlckdyb3VwKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZ0N1c3RvbWVySWQ6IHN0cmluZyxcbiAgICB1c2VyR3JvdXBJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4oXG4gICAgICB0aGlzLmdldFVzZXJHcm91cEVuZHBvaW50KHVzZXJJZCwgb3JnQ3VzdG9tZXJJZCwgdXNlckdyb3VwSWQpLFxuICAgICAgbnVsbFxuICAgICk7XG4gIH1cblxuICB1bmFzc2lnblVzZXJHcm91cChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmdDdXN0b21lcklkOiBzdHJpbmcsXG4gICAgdXNlckdyb3VwSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oXG4gICAgICB0aGlzLmdldFVzZXJHcm91cEVuZHBvaW50KHVzZXJJZCwgb3JnQ3VzdG9tZXJJZCwgdXNlckdyb3VwSWQpXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRCMkJVc2VyRW5kcG9pbnQodXNlcklkOiBzdHJpbmcsIG9yZ0N1c3RvbWVySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmJ1aWxkVXJsKCdiMmJVc2VyJywge1xuICAgICAgdXJsUGFyYW1zOiB7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgb3JnQ3VzdG9tZXJJZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QjJCVXNlcnNFbmRwb2ludCh1c2VySWQ6IHN0cmluZywgcGFyYW1zPzogU2VhcmNoQ29uZmlnKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuYnVpbGRVcmwoJ2IyYlVzZXJzJywge1xuICAgICAgdXJsUGFyYW1zOiB7IHVzZXJJZCB9LFxuICAgICAgcXVlcnlQYXJhbXM6IHBhcmFtcyxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRBcHByb3ZlckVuZHBvaW50KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZ0N1c3RvbWVySWQ6IHN0cmluZyxcbiAgICBhcHByb3ZlcklkOiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuYnVpbGRVcmwoJ2IyYlVzZXJBcHByb3ZlcicsIHtcbiAgICAgIHVybFBhcmFtczoge1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIG9yZ0N1c3RvbWVySWQsXG4gICAgICAgIGFwcHJvdmVySWQsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEFwcHJvdmVyc0VuZHBvaW50KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZ0N1c3RvbWVySWQ6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBTZWFyY2hDb25maWcgfCB7IG9yZ0N1c3RvbWVySWQ6IHN0cmluZyB9XG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmJ1aWxkVXJsKCdiMmJVc2VyQXBwcm92ZXJzJywge1xuICAgICAgdXJsUGFyYW1zOiB7IHVzZXJJZCwgb3JnQ3VzdG9tZXJJZCB9LFxuICAgICAgcXVlcnlQYXJhbXM6IHBhcmFtcyxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQZXJtaXNzaW9uRW5kcG9pbnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb3JnQ3VzdG9tZXJJZDogc3RyaW5nLFxuICAgIHByZW1pc3Npb25JZDogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmJ1aWxkVXJsKCdiMmJVc2VyUGVybWlzc2lvbicsIHtcbiAgICAgIHVybFBhcmFtczoge1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIG9yZ0N1c3RvbWVySWQsXG4gICAgICAgIHByZW1pc3Npb25JZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0UGVybWlzc2lvbnNFbmRwb2ludChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvcmdDdXN0b21lcklkOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogU2VhcmNoQ29uZmlnXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmJ1aWxkVXJsKCdiMmJVc2VyUGVybWlzc2lvbnMnLCB7XG4gICAgICB1cmxQYXJhbXM6IHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBvcmdDdXN0b21lcklkLFxuICAgICAgfSxcbiAgICAgIHF1ZXJ5UGFyYW1zOiBwYXJhbXMsXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0VXNlckdyb3VwRW5kcG9pbnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb3JnQ3VzdG9tZXJJZDogc3RyaW5nLFxuICAgIHVzZXJHcm91cElkOiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuYnVpbGRVcmwoJ2IyYlVzZXJVc2VyR3JvdXAnLCB7XG4gICAgICB1cmxQYXJhbXM6IHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBvcmdDdXN0b21lcklkLFxuICAgICAgICB1c2VyR3JvdXBJZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0VXNlckdyb3Vwc0VuZHBvaW50KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9yZ0N1c3RvbWVySWQ6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBTZWFyY2hDb25maWdcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuYnVpbGRVcmwoJ2IyYlVzZXJVc2VyR3JvdXBzJywge1xuICAgICAgdXJsUGFyYW1zOiB7IHVzZXJJZCwgb3JnQ3VzdG9tZXJJZCB9LFxuICAgICAgcXVlcnlQYXJhbXM6IHBhcmFtcyxcbiAgICB9KTtcbiAgfVxufVxuIl19