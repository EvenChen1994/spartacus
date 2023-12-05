/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { StateUtils } from '../../../state/utils/index';
import { USER_PAYMENT_METHODS } from '../user-state';
export const LOAD_USER_PAYMENT_METHODS = '[User] Load User Payment Methods';
export const LOAD_USER_PAYMENT_METHODS_FAIL = '[User] Load User Payment Methods Fail';
export const LOAD_USER_PAYMENT_METHODS_SUCCESS = '[User] Load User Payment Methods Success';
export const SET_DEFAULT_USER_PAYMENT_METHOD = '[User] Set Default User Payment Method';
export const SET_DEFAULT_USER_PAYMENT_METHOD_FAIL = '[User] Set Default User Payment Method Fail';
export const SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS = '[User] Set Default User Payment Method Success';
export const DELETE_USER_PAYMENT_METHOD = '[User] Delete User Payment Method';
export const DELETE_USER_PAYMENT_METHOD_FAIL = '[User] Delete User Payment Method Fail';
export const DELETE_USER_PAYMENT_METHOD_SUCCESS = '[User] Delete User  Payment Method Success';
export class LoadUserPaymentMethods extends StateUtils.LoaderLoadAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS;
    }
}
export class LoadUserPaymentMethodsFail extends StateUtils.LoaderFailAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS_FAIL;
    }
}
export class LoadUserPaymentMethodsSuccess extends StateUtils.LoaderSuccessAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = LOAD_USER_PAYMENT_METHODS_SUCCESS;
    }
}
export class SetDefaultUserPaymentMethod extends StateUtils.LoaderLoadAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD;
    }
}
export class SetDefaultUserPaymentMethodFail extends StateUtils.LoaderFailAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD_FAIL;
    }
}
export class SetDefaultUserPaymentMethodSuccess extends StateUtils.LoaderSuccessAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = SET_DEFAULT_USER_PAYMENT_METHOD_SUCCESS;
    }
}
export class DeleteUserPaymentMethod extends StateUtils.LoaderLoadAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD;
    }
}
export class DeleteUserPaymentMethodFail extends StateUtils.LoaderFailAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS, payload);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD_FAIL;
    }
}
export class DeleteUserPaymentMethodSuccess extends StateUtils.LoaderSuccessAction {
    constructor(payload) {
        super(USER_PAYMENT_METHODS);
        this.payload = payload;
        this.type = DELETE_USER_PAYMENT_METHOD_SUCCESS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3VzZXIvc3RvcmUvYWN0aW9ucy9wYXltZW50LW1ldGhvZHMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFHSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE1BQU0sQ0FBQyxNQUFNLHlCQUF5QixHQUFHLGtDQUFrQyxDQUFDO0FBQzVFLE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUN6Qyx1Q0FBdUMsQ0FBQztBQUMxQyxNQUFNLENBQUMsTUFBTSxpQ0FBaUMsR0FDNUMsMENBQTBDLENBQUM7QUFFN0MsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQzFDLHdDQUF3QyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxNQUFNLG9DQUFvQyxHQUMvQyw2Q0FBNkMsQ0FBQztBQUNoRCxNQUFNLENBQUMsTUFBTSx1Q0FBdUMsR0FDbEQsZ0RBQWdELENBQUM7QUFFbkQsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQUcsbUNBQW1DLENBQUM7QUFDOUUsTUFBTSxDQUFDLE1BQU0sK0JBQStCLEdBQzFDLHdDQUF3QyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxNQUFNLGtDQUFrQyxHQUM3Qyw0Q0FBNEMsQ0FBQztBQUUvQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsVUFBVSxDQUFDLGdCQUFnQjtJQUVyRSxZQUFtQixPQUFlO1FBQ2hDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRFgsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUR6QixTQUFJLEdBQUcseUJBQXlCLENBQUM7SUFHMUMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLDBCQUEyQixTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFekUsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEcEIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsOEJBQThCLENBQUM7SUFHL0MsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLDZCQUE4QixTQUFRLFVBQVUsQ0FBQyxtQkFBbUI7SUFFL0UsWUFBbUIsT0FBeUI7UUFDMUMsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQURuQyxTQUFJLEdBQUcsaUNBQWlDLENBQUM7SUFHbEQsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLDJCQUE0QixTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFMUUsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQURYLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLCtCQUErQixDQUFDO0lBR2hELENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxVQUFVLENBQUMsZ0JBQWdCO0lBRTlFLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRHBCLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLG9DQUFvQyxDQUFDO0lBR3JELENBQUM7Q0FDRjtBQUVELE1BQU0sT0FBTyxrQ0FBbUMsU0FBUSxVQUFVLENBQUMsbUJBQW1CO0lBRXBGLFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFEWCxZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx1Q0FBdUMsQ0FBQztJQUd4RCxDQUFDO0NBQ0Y7QUFFRCxNQUFNLE9BQU8sdUJBQXdCLFNBQVEsVUFBVSxDQUFDLGdCQUFnQjtJQUV0RSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRFgsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsMEJBQTBCLENBQUM7SUFHM0MsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLDJCQUE0QixTQUFRLFVBQVUsQ0FBQyxnQkFBZ0I7SUFFMUUsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEcEIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsK0JBQStCLENBQUM7SUFHaEQsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLDhCQUErQixTQUFRLFVBQVUsQ0FBQyxtQkFBbUI7SUFFaEYsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQURYLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGtDQUFrQyxDQUFDO0lBR25ELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcGF5bWVudC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgVVNFUl9QQVlNRU5UX01FVEhPRFMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFMgPSAnW1VzZXJdIExvYWQgVXNlciBQYXltZW50IE1ldGhvZHMnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFNfRkFJTCA9XG4gICdbVXNlcl0gTG9hZCBVc2VyIFBheW1lbnQgTWV0aG9kcyBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfUEFZTUVOVF9NRVRIT0RTX1NVQ0NFU1MgPVxuICAnW1VzZXJdIExvYWQgVXNlciBQYXltZW50IE1ldGhvZHMgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBTRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EID1cbiAgJ1tVc2VyXSBTZXQgRGVmYXVsdCBVc2VyIFBheW1lbnQgTWV0aG9kJztcbmV4cG9ydCBjb25zdCBTRVRfREVGQVVMVF9VU0VSX1BBWU1FTlRfTUVUSE9EX0ZBSUwgPVxuICAnW1VzZXJdIFNldCBEZWZhdWx0IFVzZXIgUGF5bWVudCBNZXRob2QgRmFpbCc7XG5leHBvcnQgY29uc3QgU0VUX0RFRkFVTFRfVVNFUl9QQVlNRU5UX01FVEhPRF9TVUNDRVNTID1cbiAgJ1tVc2VyXSBTZXQgRGVmYXVsdCBVc2VyIFBheW1lbnQgTWV0aG9kIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0QgPSAnW1VzZXJdIERlbGV0ZSBVc2VyIFBheW1lbnQgTWV0aG9kJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRF9GQUlMID1cbiAgJ1tVc2VyXSBEZWxldGUgVXNlciBQYXltZW50IE1ldGhvZCBGYWlsJztcbmV4cG9ydCBjb25zdCBERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRF9TVUNDRVNTID1cbiAgJ1tVc2VyXSBEZWxldGUgVXNlciAgUGF5bWVudCBNZXRob2QgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlclBheW1lbnRNZXRob2RzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFM7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyUGF5bWVudE1ldGhvZHNGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfVVNFUl9QQVlNRU5UX01FVEhPRFNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJQYXltZW50TWV0aG9kc1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX1BBWU1FTlRfTUVUSE9EU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogUGF5bWVudERldGFpbHNbXSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZEZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gU0VUX0RFRkFVTFRfVVNFUl9QQVlNRU5UX01FVEhPRF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9QQVlNRU5UX01FVEhPRFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5Mb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGVsZXRlVXNlclBheW1lbnRNZXRob2QgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0Q7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihVU0VSX1BBWU1FTlRfTUVUSE9EUyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERlbGV0ZVVzZXJQYXltZW50TWV0aG9kRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBERUxFVEVfVVNFUl9QQVlNRU5UX01FVEhPRF9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoVVNFUl9QQVlNRU5UX01FVEhPRFMsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVVc2VyUGF5bWVudE1ldGhvZFN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkxvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gREVMRVRFX1VTRVJfUEFZTUVOVF9NRVRIT0RfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKFVTRVJfUEFZTUVOVF9NRVRIT0RTKTtcbiAgfVxufVxuXG4vLyBhY3Rpb24gdHlwZXNcbmV4cG9ydCB0eXBlIFVzZXJQYXltZW50TWV0aG9kc0FjdGlvbiA9XG4gIHwgTG9hZFVzZXJQYXltZW50TWV0aG9kc1xuICB8IExvYWRVc2VyUGF5bWVudE1ldGhvZHNGYWlsXG4gIHwgTG9hZFVzZXJQYXltZW50TWV0aG9kc1N1Y2Nlc3NcbiAgfCBTZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RcbiAgfCBTZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RGYWlsXG4gIHwgU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kU3VjY2Vzc1xuICB8IERlbGV0ZVVzZXJQYXltZW50TWV0aG9kXG4gIHwgRGVsZXRlVXNlclBheW1lbnRNZXRob2RGYWlsXG4gIHwgRGVsZXRlVXNlclBheW1lbnRNZXRob2RTdWNjZXNzO1xuIl19