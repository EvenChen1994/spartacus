/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { StateUtils, } from '@spartacus/core';
import { BUDGET_ENTITIES, COST_CENTER_ASSIGNED_BUDGETS, COST_CENTER_ENTITIES, COST_CENTER_LIST, } from '../organization-state';
export const LOAD_COST_CENTER = '[CostCenter] Load CostCenter Data';
export const LOAD_COST_CENTER_FAIL = '[CostCenter] Load CostCenter Data Fail';
export const LOAD_COST_CENTER_SUCCESS = '[CostCenter] Load CostCenter Data Success';
export const LOAD_COST_CENTERS = '[CostCenter] Load CostCenters';
export const LOAD_COST_CENTERS_FAIL = '[CostCenter] Load CostCenters Fail';
export const LOAD_COST_CENTERS_SUCCESS = '[CostCenter] Load CostCenters Success';
export const CREATE_COST_CENTER = '[CostCenter] Create CostCenter';
export const CREATE_COST_CENTER_FAIL = '[CostCenter] Create CostCenter Fail';
export const CREATE_COST_CENTER_SUCCESS = '[CostCenter] Create CostCenter Success';
export const UPDATE_COST_CENTER = '[CostCenter] Update CostCenter';
export const UPDATE_COST_CENTER_FAIL = '[CostCenter] Update CostCenter Fail';
export const UPDATE_COST_CENTER_SUCCESS = '[CostCenter] Update CostCenter Success';
export const LOAD_ASSIGNED_BUDGETS = '[CostCenter] Load Budgets';
export const LOAD_ASSIGNED_BUDGETS_SUCCESS = '[CostCenter] Load Budgets success';
export const LOAD_ASSIGNED_BUDGETS_FAIL = '[CostCenter] Load Budgets fail';
export const ASSIGN_BUDGET = '[CostCenter] Assign Budget';
export const ASSIGN_BUDGET_SUCCESS = '[CostCenter] Assign Budget success';
export const ASSIGN_BUDGET_FAIL = '[CostCenter] Assign Budget fail';
export const UNASSIGN_BUDGET = '[CostCenter] Unassign Budget';
export const UNASSIGN_BUDGET_SUCCESS = '[CostCenter] Unassign Budget success';
export const UNASSIGN_BUDGET_FAIL = '[CostCenter] Unassign Budget fail';
export class LoadCostCenter extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(COST_CENTER_ENTITIES, payload.costCenterCode);
        this.payload = payload;
        this.type = LOAD_COST_CENTER;
    }
}
export class LoadCostCenterFail extends StateUtils.EntityFailAction {
    constructor(payload) {
        super(COST_CENTER_ENTITIES, payload.costCenterCode, payload.error);
        this.payload = payload;
        this.type = LOAD_COST_CENTER_FAIL;
    }
}
export class LoadCostCenterSuccess extends StateUtils.EntitySuccessAction {
    constructor(payload) {
        super(COST_CENTER_ENTITIES, Array.isArray(payload)
            ? payload.map((costCenter) => costCenter?.code ?? '')
            : payload?.code ?? '');
        this.payload = payload;
        this.type = LOAD_COST_CENTER_SUCCESS;
    }
}
export class LoadCostCenters extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(COST_CENTER_LIST, StateUtils.serializeSearchConfig(payload.params));
        this.payload = payload;
        this.type = LOAD_COST_CENTERS;
    }
}
export class LoadCostCentersFail extends StateUtils.EntityFailAction {
    constructor(payload) {
        super(COST_CENTER_LIST, StateUtils.serializeSearchConfig(payload.params), payload.error);
        this.payload = payload;
        this.type = LOAD_COST_CENTERS_FAIL;
    }
}
export class LoadCostCentersSuccess extends StateUtils.EntitySuccessAction {
    constructor(payload) {
        super(COST_CENTER_LIST, StateUtils.serializeSearchConfig(payload.params));
        this.payload = payload;
        this.type = LOAD_COST_CENTERS_SUCCESS;
    }
}
export class CreateCostCenter extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(COST_CENTER_ENTITIES, payload.costCenter.code ?? null);
        this.payload = payload;
        this.type = CREATE_COST_CENTER;
    }
}
export class CreateCostCenterFail extends StateUtils.EntityFailAction {
    constructor(payload) {
        super(COST_CENTER_ENTITIES, payload.costCenterCode, payload.error);
        this.payload = payload;
        this.type = CREATE_COST_CENTER_FAIL;
    }
}
export class CreateCostCenterSuccess extends StateUtils.EntitySuccessAction {
    constructor(payload) {
        super(COST_CENTER_ENTITIES, payload.code ?? null, payload);
        this.payload = payload;
        this.type = CREATE_COST_CENTER_SUCCESS;
    }
}
export class UpdateCostCenter extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(COST_CENTER_ENTITIES, payload.costCenter.code ?? '');
        this.payload = payload;
        this.type = UPDATE_COST_CENTER;
    }
}
export class UpdateCostCenterFail extends StateUtils.EntityFailAction {
    constructor(payload) {
        super(COST_CENTER_ENTITIES, payload.costCenterCode, payload.error);
        this.payload = payload;
        this.type = UPDATE_COST_CENTER_FAIL;
    }
}
export class UpdateCostCenterSuccess extends StateUtils.EntitySuccessAction {
    constructor(payload) {
        super(COST_CENTER_ENTITIES, payload.code ?? '', payload);
        this.payload = payload;
        this.type = UPDATE_COST_CENTER_SUCCESS;
    }
}
export class LoadAssignedBudgets extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(COST_CENTER_ASSIGNED_BUDGETS, StateUtils.serializeSearchConfig(payload.params, payload.costCenterCode));
        this.payload = payload;
        this.type = LOAD_ASSIGNED_BUDGETS;
    }
}
export class LoadAssignedBudgetsFail extends StateUtils.EntityFailAction {
    constructor(payload) {
        super(COST_CENTER_ASSIGNED_BUDGETS, StateUtils.serializeSearchConfig(payload.params, payload.costCenterCode), payload.error);
        this.payload = payload;
        this.type = LOAD_ASSIGNED_BUDGETS_FAIL;
    }
}
export class LoadAssignedBudgetsSuccess extends StateUtils.EntitySuccessAction {
    constructor(payload) {
        super(COST_CENTER_ASSIGNED_BUDGETS, StateUtils.serializeSearchConfig(payload.params, payload.costCenterCode));
        this.payload = payload;
        this.type = LOAD_ASSIGNED_BUDGETS_SUCCESS;
    }
}
export class AssignBudget extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.budgetCode);
        this.payload = payload;
        this.type = ASSIGN_BUDGET;
    }
}
export class AssignBudgetFail extends StateUtils.EntityFailAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.budgetCode, payload.error);
        this.payload = payload;
        this.type = ASSIGN_BUDGET_FAIL;
    }
}
export class AssignBudgetSuccess extends StateUtils.EntitySuccessAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.code, payload);
        this.payload = payload;
        this.type = ASSIGN_BUDGET_SUCCESS;
    }
}
export class UnassignBudget extends StateUtils.EntityLoadAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.budgetCode);
        this.payload = payload;
        this.type = UNASSIGN_BUDGET;
    }
}
export class UnassignBudgetFail extends StateUtils.EntityFailAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.budgetCode, payload.error);
        this.payload = payload;
        this.type = UNASSIGN_BUDGET_FAIL;
    }
}
export class UnassignBudgetSuccess extends StateUtils.EntitySuccessAction {
    constructor(payload) {
        super(BUDGET_ENTITIES, payload.code, payload);
        this.payload = payload;
        this.type = UNASSIGN_BUDGET_SUCCESS;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdC1jZW50ZXIuYWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL29yZ2FuaXphdGlvbi9hZG1pbmlzdHJhdGlvbi9jb3JlL3N0b3JlL2FjdGlvbnMvY29zdC1jZW50ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBSUwsVUFBVSxHQUNYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUNMLGVBQWUsRUFDZiw0QkFBNEIsRUFDNUIsb0JBQW9CLEVBQ3BCLGdCQUFnQixHQUNqQixNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLG1DQUFtQyxDQUFDO0FBQ3BFLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLHdDQUF3QyxDQUFDO0FBQzlFLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUNuQywyQ0FBMkMsQ0FBQztBQUU5QyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRywrQkFBK0IsQ0FBQztBQUNqRSxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyxvQ0FBb0MsQ0FBQztBQUMzRSxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FDcEMsdUNBQXVDLENBQUM7QUFFMUMsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsZ0NBQWdDLENBQUM7QUFDbkUsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcscUNBQXFDLENBQUM7QUFDN0UsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBQ3JDLHdDQUF3QyxDQUFDO0FBRTNDLE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUFHLGdDQUFnQyxDQUFDO0FBQ25FLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFHLHFDQUFxQyxDQUFDO0FBQzdFLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUNyQyx3Q0FBd0MsQ0FBQztBQUUzQyxNQUFNLENBQUMsTUFB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MkM7UUFDNUQsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUR6QyxZQUFPLEdBQVAsT0FBTyxDQUFvQztRQURyRCxTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFHckMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLFVBQVUsQ0FBQyxtQkFBbUI7SUFFdkUsWUFBbUIsT0FBNEM7UUFDN0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRDdCLFlBQU8sR0FBUCxPQUFPLENBQXFDO1FBRHRELFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUd4QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQge1xuICBDb3N0Q2VudGVyLFxuICBMaXN0TW9kZWwsXG4gIFNlYXJjaENvbmZpZyxcbiAgU3RhdGVVdGlscyxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7XG4gIEJVREdFVF9FTlRJVElFUyxcbiAgQ09TVF9DRU5URVJfQVNTSUdORURfQlVER0VUUyxcbiAgQ09TVF9DRU5URVJfRU5USVRJRVMsXG4gIENPU1RfQ0VOVEVSX0xJU1QsXG59IGZyb20gJy4uL29yZ2FuaXphdGlvbi1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NPU1RfQ0VOVEVSID0gJ1tDb3N0Q2VudGVyXSBMb2FkIENvc3RDZW50ZXIgRGF0YSc7XG5leHBvcnQgY29uc3QgTE9BRF9DT1NUX0NFTlRFUl9GQUlMID0gJ1tDb3N0Q2VudGVyXSBMb2FkIENvc3RDZW50ZXIgRGF0YSBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX0NPU1RfQ0VOVEVSX1NVQ0NFU1MgPVxuICAnW0Nvc3RDZW50ZXJdIExvYWQgQ29zdENlbnRlciBEYXRhIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9DT1NUX0NFTlRFUlMgPSAnW0Nvc3RDZW50ZXJdIExvYWQgQ29zdENlbnRlcnMnO1xuZXhwb3J0IGNvbnN0IExPQURfQ09TVF9DRU5URVJTX0ZBSUwgPSAnW0Nvc3RDZW50ZXJdIExvYWQgQ29zdENlbnRlcnMgRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DT1NUX0NFTlRFUlNfU1VDQ0VTUyA9XG4gICdbQ29zdENlbnRlcl0gTG9hZCBDb3N0Q2VudGVycyBTdWNjZXNzJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9DT1NUX0NFTlRFUiA9ICdbQ29zdENlbnRlcl0gQ3JlYXRlIENvc3RDZW50ZXInO1xuZXhwb3J0IGNvbnN0IENSRUFURV9DT1NUX0NFTlRFUl9GQUlMID0gJ1tDb3N0Q2VudGVyXSBDcmVhdGUgQ29zdENlbnRlciBGYWlsJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfQ09TVF9DRU5URVJfU1VDQ0VTUyA9XG4gICdbQ29zdENlbnRlcl0gQ3JlYXRlIENvc3RDZW50ZXIgU3VjY2Vzcyc7XG5cbmV4cG9ydCBjb25zdCBVUERBVEVfQ09TVF9DRU5URVIgPSAnW0Nvc3RDZW50ZXJdIFVwZGF0ZSBDb3N0Q2VudGVyJztcbmV4cG9ydCBjb25zdCBVUERBVEVfQ09TVF9DRU5URVJfRkFJTCA9ICdbQ29zdENlbnRlcl0gVXBkYXRlIENvc3RDZW50ZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgVVBEQVRFX0NPU1RfQ0VOVEVSX1NVQ0NFU1MgPVxuICAnW0Nvc3RDZW50ZXJdIFVwZGF0ZSBDb3N0Q2VudGVyIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9BU1NJR05FRF9CVURHRVRTID0gJ1tDb3N0Q2VudGVyXSBMb2FkIEJ1ZGdldHMnO1xuZXhwb3J0IGNvbnN0IExPQURfQVNTSUdORURfQlVER0VUU19TVUNDRVNTID1cbiAgJ1tDb3N0Q2VudGVyXSBMb2FkIEJ1ZGdldHMgc3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgTE9BRF9BU1NJR05FRF9CVURHRVRTX0ZBSUwgPSAnW0Nvc3RDZW50ZXJdIExvYWQgQnVkZ2V0cyBmYWlsJztcblxuZXhwb3J0IGNvbnN0IEFTU0lHTl9CVURHRVQgPSAnW0Nvc3RDZW50ZXJdIEFzc2lnbiBCdWRnZXQnO1xuZXhwb3J0IGNvbnN0IEFTU0lHTl9CVURHRVRfU1VDQ0VTUyA9ICdbQ29zdENlbnRlcl0gQXNzaWduIEJ1ZGdldCBzdWNjZXNzJztcbmV4cG9ydCBjb25zdCBBU1NJR05fQlVER0VUX0ZBSUwgPSAnW0Nvc3RDZW50ZXJdIEFzc2lnbiBCdWRnZXQgZmFpbCc7XG5cbmV4cG9ydCBjb25zdCBVTkFTU0lHTl9CVURHRVQgPSAnW0Nvc3RDZW50ZXJdIFVuYXNzaWduIEJ1ZGdldCc7XG5leHBvcnQgY29uc3QgVU5BU1NJR05fQlVER0VUX1NVQ0NFU1MgPSAnW0Nvc3RDZW50ZXJdIFVuYXNzaWduIEJ1ZGdldCBzdWNjZXNzJztcbmV4cG9ydCBjb25zdCBVTkFTU0lHTl9CVURHRVRfRkFJTCA9ICdbQ29zdENlbnRlcl0gVW5hc3NpZ24gQnVkZ2V0IGZhaWwnO1xuXG5leHBvcnQgY2xhc3MgTG9hZENvc3RDZW50ZXIgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DT1NUX0NFTlRFUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNvc3RDZW50ZXJDb2RlOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKENPU1RfQ0VOVEVSX0VOVElUSUVTLCBwYXlsb2FkLmNvc3RDZW50ZXJDb2RlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENvc3RDZW50ZXJGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ09TVF9DRU5URVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY29zdENlbnRlckNvZGU6IHN0cmluZzsgZXJyb3I6IGFueSB9KSB7XG4gICAgc3VwZXIoQ09TVF9DRU5URVJfRU5USVRJRVMsIHBheWxvYWQuY29zdENlbnRlckNvZGUsIHBheWxvYWQuZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ29zdENlbnRlclN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DT1NUX0NFTlRFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ29zdENlbnRlciB8IENvc3RDZW50ZXJbXSkge1xuICAgIHN1cGVyKFxuICAgICAgQ09TVF9DRU5URVJfRU5USVRJRVMsXG4gICAgICBBcnJheS5pc0FycmF5KHBheWxvYWQpXG4gICAgICAgID8gcGF5bG9hZC5tYXAoKGNvc3RDZW50ZXIpID0+IGNvc3RDZW50ZXI/LmNvZGUgPz8gJycpXG4gICAgICAgIDogcGF5bG9hZD8uY29kZSA/PyAnJ1xuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDb3N0Q2VudGVycyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NPU1RfQ0VOVEVSUztcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgcGFyYW1zOiBTZWFyY2hDb25maWc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihDT1NUX0NFTlRFUl9MSVNULCBTdGF0ZVV0aWxzLnNlcmlhbGl6ZVNlYXJjaENvbmZpZyhwYXlsb2FkLnBhcmFtcykpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ29zdENlbnRlcnNGYWlsIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ09TVF9DRU5URVJTX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHBhcmFtczogU2VhcmNoQ29uZmlnOyBlcnJvcjogYW55IH0pIHtcbiAgICBzdXBlcihcbiAgICAgIENPU1RfQ0VOVEVSX0xJU1QsXG4gICAgICBTdGF0ZVV0aWxzLnNlcmlhbGl6ZVNlYXJjaENvbmZpZyhwYXlsb2FkLnBhcmFtcyksXG4gICAgICBwYXlsb2FkLmVycm9yXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENvc3RDZW50ZXJzU3VjY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NPU1RfQ0VOVEVSU19TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgcGFnZTogTGlzdE1vZGVsO1xuICAgICAgcGFyYW1zOiBTZWFyY2hDb25maWc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihDT1NUX0NFTlRFUl9MSVNULCBTdGF0ZVV0aWxzLnNlcmlhbGl6ZVNlYXJjaENvbmZpZyhwYXlsb2FkLnBhcmFtcykpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVDb3N0Q2VudGVyIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlMb2FkQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IENSRUFURV9DT1NUX0NFTlRFUjtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgdXNlcklkOiBzdHJpbmc7IGNvc3RDZW50ZXI6IENvc3RDZW50ZXIgfSkge1xuICAgIHN1cGVyKENPU1RfQ0VOVEVSX0VOVElUSUVTLCBwYXlsb2FkLmNvc3RDZW50ZXIuY29kZSA/PyBudWxsKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29zdENlbnRlckZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX0NPU1RfQ0VOVEVSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNvc3RDZW50ZXJDb2RlOiBzdHJpbmc7IGVycm9yOiBhbnkgfSkge1xuICAgIHN1cGVyKENPU1RfQ0VOVEVSX0VOVElUSUVTLCBwYXlsb2FkLmNvc3RDZW50ZXJDb2RlLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ29zdENlbnRlclN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQ1JFQVRFX0NPU1RfQ0VOVEVSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb3N0Q2VudGVyKSB7XG4gICAgc3VwZXIoQ09TVF9DRU5URVJfRU5USVRJRVMsIHBheWxvYWQuY29kZSA/PyBudWxsLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlQ29zdENlbnRlciBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVUERBVEVfQ09TVF9DRU5URVI7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNvc3RDZW50ZXJDb2RlOiBzdHJpbmc7XG4gICAgICBjb3N0Q2VudGVyOiBDb3N0Q2VudGVyO1xuICAgIH1cbiAgKSB7XG4gICAgc3VwZXIoQ09TVF9DRU5URVJfRU5USVRJRVMsIHBheWxvYWQuY29zdENlbnRlci5jb2RlID8/ICcnKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlQ29zdENlbnRlckZhaWwgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUZhaWxBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX0NPU1RfQ0VOVEVSX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGNvc3RDZW50ZXJDb2RlOiBzdHJpbmc7IGVycm9yOiBhbnkgfSkge1xuICAgIHN1cGVyKENPU1RfQ0VOVEVSX0VOVElUSUVTLCBwYXlsb2FkLmNvc3RDZW50ZXJDb2RlLCBwYXlsb2FkLmVycm9yKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVXBkYXRlQ29zdENlbnRlclN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gVVBEQVRFX0NPU1RfQ0VOVEVSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBDb3N0Q2VudGVyKSB7XG4gICAgc3VwZXIoQ09TVF9DRU5URVJfRU5USVRJRVMsIHBheWxvYWQuY29kZSA/PyAnJywgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRBc3NpZ25lZEJ1ZGdldHMgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9BU1NJR05FRF9CVURHRVRTO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcGF5bG9hZDoge1xuICAgICAgdXNlcklkOiBzdHJpbmc7XG4gICAgICBjb3N0Q2VudGVyQ29kZTogc3RyaW5nO1xuICAgICAgcGFyYW1zOiBTZWFyY2hDb25maWc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihcbiAgICAgIENPU1RfQ0VOVEVSX0FTU0lHTkVEX0JVREdFVFMsXG4gICAgICBTdGF0ZVV0aWxzLnNlcmlhbGl6ZVNlYXJjaENvbmZpZyhwYXlsb2FkLnBhcmFtcywgcGF5bG9hZC5jb3N0Q2VudGVyQ29kZSlcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQXNzaWduZWRCdWRnZXRzRmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0FTU0lHTkVEX0JVREdFVFNfRkFJTDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIGNvc3RDZW50ZXJDb2RlOiBzdHJpbmc7XG4gICAgICBwYXJhbXM6IFNlYXJjaENvbmZpZztcbiAgICAgIGVycm9yOiBhbnk7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihcbiAgICAgIENPU1RfQ0VOVEVSX0FTU0lHTkVEX0JVREdFVFMsXG4gICAgICBTdGF0ZVV0aWxzLnNlcmlhbGl6ZVNlYXJjaENvbmZpZyhwYXlsb2FkLnBhcmFtcywgcGF5bG9hZC5jb3N0Q2VudGVyQ29kZSksXG4gICAgICBwYXlsb2FkLmVycm9yXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZEFzc2lnbmVkQnVkZ2V0c1N1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eVN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9BU1NJR05FRF9CVURHRVRTX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICBjb3N0Q2VudGVyQ29kZTogc3RyaW5nO1xuICAgICAgcGFnZTogTGlzdE1vZGVsO1xuICAgICAgcGFyYW1zOiBTZWFyY2hDb25maWc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihcbiAgICAgIENPU1RfQ0VOVEVSX0FTU0lHTkVEX0JVREdFVFMsXG4gICAgICBTdGF0ZVV0aWxzLnNlcmlhbGl6ZVNlYXJjaENvbmZpZyhwYXlsb2FkLnBhcmFtcywgcGF5bG9hZC5jb3N0Q2VudGVyQ29kZSlcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ25CdWRnZXQgZXh0ZW5kcyBTdGF0ZVV0aWxzLkVudGl0eUxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gQVNTSUdOX0JVREdFVDtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHBheWxvYWQ6IHtcbiAgICAgIHVzZXJJZDogc3RyaW5nO1xuICAgICAgY29zdENlbnRlckNvZGU6IHN0cmluZztcbiAgICAgIGJ1ZGdldENvZGU6IHN0cmluZztcbiAgICB9XG4gICkge1xuICAgIHN1cGVyKEJVREdFVF9FTlRJVElFUywgcGF5bG9hZC5idWRnZXRDb2RlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXNzaWduQnVkZ2V0RmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBBU1NJR05fQlVER0VUX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IGJ1ZGdldENvZGU6IHN0cmluZzsgZXJyb3I6IGFueSB9KSB7XG4gICAgc3VwZXIoQlVER0VUX0VOVElUSUVTLCBwYXlsb2FkLmJ1ZGdldENvZGUsIHBheWxvYWQuZXJyb3IpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ25CdWRnZXRTdWNjZXNzIGV4dGVuZHMgU3RhdGVVdGlscy5FbnRpdHlTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IEFTU0lHTl9CVURHRVRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY29kZTogc3RyaW5nOyBzZWxlY3RlZDogYm9vbGVhbiB9KSB7XG4gICAgc3VwZXIoQlVER0VUX0VOVElUSUVTLCBwYXlsb2FkLmNvZGUsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBVbmFzc2lnbkJ1ZGdldCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5TG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVTkFTU0lHTl9CVURHRVQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IHN0cmluZztcbiAgICAgIGNvc3RDZW50ZXJDb2RlOiBzdHJpbmc7XG4gICAgICBidWRnZXRDb2RlOiBzdHJpbmc7XG4gICAgfVxuICApIHtcbiAgICBzdXBlcihCVURHRVRfRU5USVRJRVMsIHBheWxvYWQuYnVkZ2V0Q29kZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVuYXNzaWduQnVkZ2V0RmFpbCBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5RmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVTkFTU0lHTl9CVURHRVRfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgYnVkZ2V0Q29kZTogc3RyaW5nOyBlcnJvcjogYW55IH0pIHtcbiAgICBzdXBlcihCVURHRVRfRU5USVRJRVMsIHBheWxvYWQuYnVkZ2V0Q29kZSwgcGF5bG9hZC5lcnJvcik7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVuYXNzaWduQnVkZ2V0U3VjY2VzcyBleHRlbmRzIFN0YXRlVXRpbHMuRW50aXR5U3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBVTkFTU0lHTl9CVURHRVRfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHsgY29kZTogc3RyaW5nOyBzZWxlY3RlZDogYm9vbGVhbiB9KSB7XG4gICAgc3VwZXIoQlVER0VUX0VOVElUSUVTLCBwYXlsb2FkLmNvZGUsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENvc3RDZW50ZXJBY3Rpb24gPVxuICB8IExvYWRDb3N0Q2VudGVyXG4gIHwgTG9hZENvc3RDZW50ZXJGYWlsXG4gIHwgTG9hZENvc3RDZW50ZXJTdWNjZXNzXG4gIHwgTG9hZENvc3RDZW50ZXJzXG4gIHwgTG9hZENvc3RDZW50ZXJzRmFpbFxuICB8IExvYWRDb3N0Q2VudGVyc1N1Y2Nlc3NcbiAgfCBDcmVhdGVDb3N0Q2VudGVyXG4gIHwgQ3JlYXRlQ29zdENlbnRlckZhaWxcbiAgfCBDcmVhdGVDb3N0Q2VudGVyU3VjY2Vzc1xuICB8IFVwZGF0ZUNvc3RDZW50ZXJcbiAgfCBVcGRhdGVDb3N0Q2VudGVyRmFpbFxuICB8IFVwZGF0ZUNvc3RDZW50ZXJTdWNjZXNzXG4gIHwgTG9hZEFzc2lnbmVkQnVkZ2V0c1xuICB8IExvYWRBc3NpZ25lZEJ1ZGdldHNTdWNjZXNzXG4gIHwgTG9hZEFzc2lnbmVkQnVkZ2V0c0ZhaWxcbiAgfCBBc3NpZ25CdWRnZXRcbiAgfCBBc3NpZ25CdWRnZXRGYWlsXG4gIHwgQXNzaWduQnVkZ2V0U3VjY2Vzc1xuICB8IFVuYXNzaWduQnVkZ2V0XG4gIHwgVW5hc3NpZ25CdWRnZXRGYWlsXG4gIHwgVW5hc3NpZ25CdWRnZXRTdWNjZXNzO1xuIl19