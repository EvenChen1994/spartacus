import { Injectable } from '@angular/core';
import { B2B_USERS_NORMALIZER, PERMISSIONS_NORMALIZER, USER_GROUPS_NORMALIZER, USER_GROUP_NORMALIZER, USER_GROUP_SERIALIZER, } from '@spartacus/organization/administration/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@spartacus/core";
export class OccUserGroupAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    load(userId, userGroupId) {
        return this.http
            .get(this.getUserGroupEndpoint(userId, userGroupId))
            .pipe(this.converter.pipeable(USER_GROUP_NORMALIZER));
    }
    loadList(userId, params) {
        return this.http
            .get(this.getUserGroupsEndpoint(userId, params))
            .pipe(this.converter.pipeable(USER_GROUPS_NORMALIZER));
    }
    loadAvailableOrderApprovalPermissions(userId, userGroupId, params) {
        return this.http
            .get(this.getPermissionsEndpoint(userId, userGroupId, params))
            .pipe(this.converter.pipeable(PERMISSIONS_NORMALIZER));
    }
    loadAvailableOrgCustomers(userId, userGroupId, params) {
        return this.http
            .get(this.getAvailableCustomersEndpoint(userId, userGroupId, params))
            .pipe(this.converter.pipeable(B2B_USERS_NORMALIZER));
    }
    create(userId, userGroup) {
        userGroup = this.converter.convert(userGroup, USER_GROUP_SERIALIZER);
        return this.http
            .post(this.getUserGroupsEndpoint(userId), userGroup)
            .pipe(this.converter.pipeable(USER_GROUP_NORMALIZER));
    }
    delete(userId, userGroupId) {
        return this.http
            .delete(this.getUserGroupEndpoint(userId, userGroupId))
            .pipe(this.converter.pipeable(USER_GROUP_NORMALIZER));
    }
    update(userId, userGroupId, userGroup) {
        userGroup = this.converter.convert(userGroup, USER_GROUP_SERIALIZER);
        return this.http
            .patch(this.getUserGroupEndpoint(userId, userGroupId), userGroup)
            .pipe(this.converter.pipeable(USER_GROUP_NORMALIZER));
    }
    assignMember(userId, userGroupId, orgCustomerId) {
        return this.http.post(this.getMembersEndpoint(userId, userGroupId, {
            orgCustomerId,
        }), null);
    }
    assignOrderApprovalPermission(userId, userGroupId, orderApprovalPermissionCode) {
        return this.http.post(this.getOrderApprovalPermissionsEndpoint(userId, userGroupId, {
            orderApprovalPermissionCode,
        }), null);
    }
    unassignMember(userId, userGroupId, orgCustomerId) {
        return this.http.delete(this.getMemberEndpoint(userId, userGroupId, orgCustomerId));
    }
    unassignAllMembers(userId, userGroupId) {
        return this.http.delete(this.getMembersEndpoint(userId, userGroupId));
    }
    unassignOrderApprovalPermission(userId, userGroupId, orderApprovalPermissionCode) {
        return this.http.delete(this.getOrderApprovalPermissionEndpoint(userId, userGroupId, orderApprovalPermissionCode));
    }
    getUserGroupEndpoint(userId, userGroupId) {
        return this.occEndpoints.buildUrl('userGroup', {
            urlParams: {
                userId,
                userGroupId,
            },
        });
    }
    getUserGroupsEndpoint(userId, params) {
        return this.occEndpoints.buildUrl('userGroups', {
            urlParams: { userId },
            queryParams: params,
        });
    }
    getAvailableCustomersEndpoint(userId, userGroupId, params) {
        return this.occEndpoints.buildUrl('userGroupAvailableOrgCustomers', {
            urlParams: { userId, userGroupId },
            queryParams: params,
        });
    }
    getPermissionsEndpoint(userId, userGroupId, params) {
        return this.occEndpoints.buildUrl('userGroupAvailableOrderApprovalPermissions', { urlParams: { userId, userGroupId }, queryParams: params });
    }
    getMemberEndpoint(userId, userGroupId, orgCustomerId) {
        return this.occEndpoints.buildUrl('userGroupMember', {
            urlParams: {
                userId,
                userGroupId,
                orgCustomerId,
            },
        });
    }
    getMembersEndpoint(userId, userGroupId, params) {
        return this.occEndpoints.buildUrl('userGroupMembers', {
            urlParams: { userId, userGroupId },
            queryParams: params,
        });
    }
    getOrderApprovalPermissionsEndpoint(userId, userGroupId, params) {
        return this.occEndpoints.buildUrl('userGroupOrderApprovalPermissions', {
            urlParams: { userId, userGroupId },
            queryParams: params,
        });
    }
    getOrderApprovalPermissionEndpoint(userId, userGroupId, orderApprovalPermissionCode) {
        return this.occEndpoints.buildUrl('userGroupOrderApprovalPermission', {
            urlParams: {
                userId,
                userGroupId,
                orderApprovalPermissionCode,
            },
        });
    }
}
OccUserGroupAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: OccUserGroupAdapter, deps: [{ token: i1.HttpClient }, { token: i2.OccEndpointsService }, { token: i2.ConverterService }], target: i0.ɵɵFactoryTarget.Injectable });
OccUserGroupAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: OccUserGroupAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: OccUserGroupAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.OccEndpointsService }, { type: i2.ConverterService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItZ3JvdXAuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vb2NjL2FkYXB0ZXJzL29jYy11c2VyLWdyb3VwLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVMzQyxPQUFPLEVBQ0wsb0JBQW9CLEVBRXBCLHNCQUFzQixFQUd0QixzQkFBc0IsRUFDdEIscUJBQXFCLEVBQ3JCLHFCQUFxQixHQUN0QixNQUFNLDZDQUE2QyxDQUFDOzs7O0FBSXJELE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDO0lBRUosSUFBSSxDQUFDLE1BQWMsRUFBRSxXQUFtQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUF1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3pFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELFFBQVEsQ0FDTixNQUFjLEVBQ2QsTUFBcUI7UUFFckIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBMkIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCxx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Q0FBQztJQUNKLENBQUM7SUFFUyxpQkFBaUIsQ0FDekIsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLGFBQXFCO1FBRXJCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUU7WUFDbkQsU0FBUyxFQUFFO2dCQUNULE1BQU07Z0JBQ04sV0FBVztnQkFDWCxhQUFhO2FBQ2Q7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsa0JBQWtCLENBQzFCLE1BQWMsRUFDZCxXQUFtQixFQUNuQixNQUFpRDtRQUVqRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO1lBQ3BELFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7WUFDbEMsV0FBVyxFQUFFLE1BQU07U0FDcEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVTLG1DQUFtQyxDQUMzQyxNQUFjLEVBQ2QsV0FBbUIsRUFDbkIsTUFBK0Q7UUFFL0QsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxtQ0FBbUMsRUFBRTtZQUNyRSxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFO1lBQ2xDLFdBQVcsRUFBRSxNQUFNO1NBQ3BCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFUyxrQ0FBa0MsQ0FDMUMsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLDJCQUFtQztRQUVuQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGtDQUFrQyxFQUFFO1lBQ3BFLFNBQVMsRUFBRTtnQkFDVCxNQUFNO2dCQUNOLFdBQVc7Z0JBQ1gsMkJBQTJCO2FBQzVCO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0hBMU5VLG1CQUFtQjtvSEFBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQjJCVXNlcixcbiAgQ29udmVydGVyU2VydmljZSxcbiAgRW50aXRpZXNNb2RlbCxcbiAgT2NjLFxuICBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICBTZWFyY2hDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQge1xuICBCMkJfVVNFUlNfTk9STUFMSVpFUixcbiAgUGVybWlzc2lvbixcbiAgUEVSTUlTU0lPTlNfTk9STUFMSVpFUixcbiAgVXNlckdyb3VwLFxuICBVc2VyR3JvdXBBZGFwdGVyLFxuICBVU0VSX0dST1VQU19OT1JNQUxJWkVSLFxuICBVU0VSX0dST1VQX05PUk1BTElaRVIsXG4gIFVTRVJfR1JPVVBfU0VSSUFMSVpFUixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NVc2VyR3JvdXBBZGFwdGVyIGltcGxlbWVudHMgVXNlckdyb3VwQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZCh1c2VySWQ6IHN0cmluZywgdXNlckdyb3VwSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlckdyb3VwPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JnVW5pdFVzZXJHcm91cD4odGhpcy5nZXRVc2VyR3JvdXBFbmRwb2ludCh1c2VySWQsIHVzZXJHcm91cElkKSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFVTRVJfR1JPVVBfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgbG9hZExpc3QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogU2VhcmNoQ29uZmlnXG4gICk6IE9ic2VydmFibGU8RW50aXRpZXNNb2RlbDxVc2VyR3JvdXA+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JnVW5pdFVzZXJHcm91cExpc3Q+KHRoaXMuZ2V0VXNlckdyb3Vwc0VuZHBvaW50KHVzZXJJZCwgcGFyYW1zKSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFVTRVJfR1JPVVBTX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIGxvYWRBdmFpbGFibGVPcmRlckFwcHJvdmFsUGVybWlzc2lvbnMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgdXNlckdyb3VwSWQ6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBTZWFyY2hDb25maWdcbiAgKTogT2JzZXJ2YWJsZTxFbnRpdGllc01vZGVsPFBlcm1pc3Npb24+PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuT3JnVW5pdFVzZXJHcm91cExpc3Q+KFxuICAgICAgICB0aGlzLmdldFBlcm1pc3Npb25zRW5kcG9pbnQodXNlcklkLCB1c2VyR3JvdXBJZCwgcGFyYW1zKVxuICAgICAgKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUEVSTUlTU0lPTlNfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgbG9hZEF2YWlsYWJsZU9yZ0N1c3RvbWVycyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICB1c2VyR3JvdXBJZDogc3RyaW5nLFxuICAgIHBhcmFtcz86IFNlYXJjaENvbmZpZ1xuICApOiBPYnNlcnZhYmxlPEVudGl0aWVzTW9kZWw8QjJCVXNlcj4+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5PcmdVbml0VXNlckdyb3VwTGlzdD4oXG4gICAgICAgIHRoaXMuZ2V0QXZhaWxhYmxlQ3VzdG9tZXJzRW5kcG9pbnQodXNlcklkLCB1c2VyR3JvdXBJZCwgcGFyYW1zKVxuICAgICAgKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQjJCX1VTRVJTX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIGNyZWF0ZSh1c2VySWQ6IHN0cmluZywgdXNlckdyb3VwOiBVc2VyR3JvdXApOiBPYnNlcnZhYmxlPFVzZXJHcm91cD4ge1xuICAgIHVzZXJHcm91cCA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQodXNlckdyb3VwLCBVU0VSX0dST1VQX1NFUklBTElaRVIpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PE9jYy5PcmdVbml0VXNlckdyb3VwPih0aGlzLmdldFVzZXJHcm91cHNFbmRwb2ludCh1c2VySWQpLCB1c2VyR3JvdXApXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShVU0VSX0dST1VQX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIGRlbGV0ZSh1c2VySWQ6IHN0cmluZywgdXNlckdyb3VwSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlckdyb3VwPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZTxPY2MuT3JnVW5pdFVzZXJHcm91cD4oXG4gICAgICAgIHRoaXMuZ2V0VXNlckdyb3VwRW5kcG9pbnQodXNlcklkLCB1c2VyR3JvdXBJZClcbiAgICAgIClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFVTRVJfR1JPVVBfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgdXBkYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHVzZXJHcm91cElkOiBzdHJpbmcsXG4gICAgdXNlckdyb3VwOiBVc2VyR3JvdXBcbiAgKTogT2JzZXJ2YWJsZTxVc2VyR3JvdXA+IHtcbiAgICB1c2VyR3JvdXAgPSB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHVzZXJHcm91cCwgVVNFUl9HUk9VUF9TRVJJQUxJWkVSKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2g8T2NjLk9yZ1VuaXRVc2VyR3JvdXA+KFxuICAgICAgICB0aGlzLmdldFVzZXJHcm91cEVuZHBvaW50KHVzZXJJZCwgdXNlckdyb3VwSWQpLFxuICAgICAgICB1c2VyR3JvdXBcbiAgICAgIClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFVTRVJfR1JPVVBfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgYXNzaWduTWVtYmVyKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHVzZXJHcm91cElkOiBzdHJpbmcsXG4gICAgb3JnQ3VzdG9tZXJJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4oXG4gICAgICB0aGlzLmdldE1lbWJlcnNFbmRwb2ludCh1c2VySWQsIHVzZXJHcm91cElkLCB7XG4gICAgICAgIG9yZ0N1c3RvbWVySWQsXG4gICAgICB9KSxcbiAgICAgIG51bGxcbiAgICApO1xuICB9XG5cbiAgYXNzaWduT3JkZXJBcHByb3ZhbFBlcm1pc3Npb24oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgdXNlckdyb3VwSWQ6IHN0cmluZyxcbiAgICBvcmRlckFwcHJvdmFsUGVybWlzc2lvbkNvZGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KFxuICAgICAgdGhpcy5nZXRPcmRlckFwcHJvdmFsUGVybWlzc2lvbnNFbmRwb2ludCh1c2VySWQsIHVzZXJHcm91cElkLCB7XG4gICAgICAgIG9yZGVyQXBwcm92YWxQZXJtaXNzaW9uQ29kZSxcbiAgICAgIH0pLFxuICAgICAgbnVsbFxuICAgICk7XG4gIH1cblxuICB1bmFzc2lnbk1lbWJlcihcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICB1c2VyR3JvdXBJZDogc3RyaW5nLFxuICAgIG9yZ0N1c3RvbWVySWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPGFueT4oXG4gICAgICB0aGlzLmdldE1lbWJlckVuZHBvaW50KHVzZXJJZCwgdXNlckdyb3VwSWQsIG9yZ0N1c3RvbWVySWQpXG4gICAgKTtcbiAgfVxuXG4gIHVuYXNzaWduQWxsTWVtYmVycyh1c2VySWQ6IHN0cmluZywgdXNlckdyb3VwSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGU8YW55Pih0aGlzLmdldE1lbWJlcnNFbmRwb2ludCh1c2VySWQsIHVzZXJHcm91cElkKSk7XG4gIH1cblxuICB1bmFzc2lnbk9yZGVyQXBwcm92YWxQZXJtaXNzaW9uKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHVzZXJHcm91cElkOiBzdHJpbmcsXG4gICAgb3JkZXJBcHByb3ZhbFBlcm1pc3Npb25Db2RlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxhbnk+KFxuICAgICAgdGhpcy5nZXRPcmRlckFwcHJvdmFsUGVybWlzc2lvbkVuZHBvaW50KFxuICAgICAgICB1c2VySWQsXG4gICAgICAgIHVzZXJHcm91cElkLFxuICAgICAgICBvcmRlckFwcHJvdmFsUGVybWlzc2lvbkNvZGVcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFVzZXJHcm91cEVuZHBvaW50KHVzZXJJZDogc3RyaW5nLCB1c2VyR3JvdXBJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuYnVpbGRVcmwoJ3VzZXJHcm91cCcsIHtcbiAgICAgIHVybFBhcmFtczoge1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIHVzZXJHcm91cElkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRVc2VyR3JvdXBzRW5kcG9pbnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogU2VhcmNoQ29uZmlnXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmJ1aWxkVXJsKCd1c2VyR3JvdXBzJywge1xuICAgICAgdXJsUGFyYW1zOiB7IHVzZXJJZCB9LFxuICAgICAgcXVlcnlQYXJhbXM6IHBhcmFtcyxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRBdmFpbGFibGVDdXN0b21lcnNFbmRwb2ludChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICB1c2VyR3JvdXBJZDogc3RyaW5nLFxuICAgIHBhcmFtcz86IFNlYXJjaENvbmZpZyB8IHsgb3JnQ3VzdG9tZXJJZDogc3RyaW5nIH1cbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuYnVpbGRVcmwoJ3VzZXJHcm91cEF2YWlsYWJsZU9yZ0N1c3RvbWVycycsIHtcbiAgICAgIHVybFBhcmFtczogeyB1c2VySWQsIHVzZXJHcm91cElkIH0sXG4gICAgICBxdWVyeVBhcmFtczogcGFyYW1zLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFBlcm1pc3Npb25zRW5kcG9pbnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgdXNlckdyb3VwSWQ6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBTZWFyY2hDb25maWcgfCB7IG9yZ0N1c3RvbWVySWQ6IHN0cmluZyB9XG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmJ1aWxkVXJsKFxuICAgICAgJ3VzZXJHcm91cEF2YWlsYWJsZU9yZGVyQXBwcm92YWxQZXJtaXNzaW9ucycsXG4gICAgICB7IHVybFBhcmFtczogeyB1c2VySWQsIHVzZXJHcm91cElkIH0sIHF1ZXJ5UGFyYW1zOiBwYXJhbXMgfVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0TWVtYmVyRW5kcG9pbnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgdXNlckdyb3VwSWQ6IHN0cmluZyxcbiAgICBvcmdDdXN0b21lcklkOiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuYnVpbGRVcmwoJ3VzZXJHcm91cE1lbWJlcicsIHtcbiAgICAgIHVybFBhcmFtczoge1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIHVzZXJHcm91cElkLFxuICAgICAgICBvcmdDdXN0b21lcklkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRNZW1iZXJzRW5kcG9pbnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgdXNlckdyb3VwSWQ6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBTZWFyY2hDb25maWcgfCB7IG9yZ0N1c3RvbWVySWQ6IHN0cmluZyB9XG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmJ1aWxkVXJsKCd1c2VyR3JvdXBNZW1iZXJzJywge1xuICAgICAgdXJsUGFyYW1zOiB7IHVzZXJJZCwgdXNlckdyb3VwSWQgfSxcbiAgICAgIHF1ZXJ5UGFyYW1zOiBwYXJhbXMsXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0T3JkZXJBcHByb3ZhbFBlcm1pc3Npb25zRW5kcG9pbnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgdXNlckdyb3VwSWQ6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBTZWFyY2hDb25maWcgfCB7IG9yZGVyQXBwcm92YWxQZXJtaXNzaW9uQ29kZTogc3RyaW5nIH1cbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuYnVpbGRVcmwoJ3VzZXJHcm91cE9yZGVyQXBwcm92YWxQZXJtaXNzaW9ucycsIHtcbiAgICAgIHVybFBhcmFtczogeyB1c2VySWQsIHVzZXJHcm91cElkIH0sXG4gICAgICBxdWVyeVBhcmFtczogcGFyYW1zLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldE9yZGVyQXBwcm92YWxQZXJtaXNzaW9uRW5kcG9pbnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgdXNlckdyb3VwSWQ6IHN0cmluZyxcbiAgICBvcmRlckFwcHJvdmFsUGVybWlzc2lvbkNvZGU6IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5idWlsZFVybCgndXNlckdyb3VwT3JkZXJBcHByb3ZhbFBlcm1pc3Npb24nLCB7XG4gICAgICB1cmxQYXJhbXM6IHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICB1c2VyR3JvdXBJZCxcbiAgICAgICAgb3JkZXJBcHByb3ZhbFBlcm1pc3Npb25Db2RlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuIl19