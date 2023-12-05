import { MemoizedSelector } from '@ngrx/store';
import { CostCenter, EntitiesModel, SearchConfig, StateUtils } from '@spartacus/core';
import { Budget } from '../../model/budget.model';
import { CostCenterManagement, StateWithOrganization } from '../organization-state';
export declare const getCostCenterManagementState: MemoizedSelector<StateWithOrganization, CostCenterManagement>;
export declare const getCostCentersState: MemoizedSelector<StateWithOrganization, StateUtils.EntityLoaderState<CostCenter>>;
export declare const getCostCenter: (costCenterCode: string) => MemoizedSelector<StateWithOrganization, StateUtils.LoaderState<CostCenter>>;
export declare const getCostCenterValue: (costCenterCode: string) => MemoizedSelector<StateWithOrganization, Budget>;
export declare const getCostCenterList: (params: SearchConfig) => MemoizedSelector<StateWithOrganization, StateUtils.LoaderState<EntitiesModel<CostCenter>>>;
export declare const getAssignedBudgets: (code: string, params: SearchConfig) => MemoizedSelector<StateWithOrganization, StateUtils.LoaderState<EntitiesModel<Budget>>>;
export declare const getCostCenterState: (code: string) => MemoizedSelector<StateWithOrganization, StateUtils.LoaderState<CostCenter>>;
