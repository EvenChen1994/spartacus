/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { createReducer, on } from '@ngrx/store';
import { PickupLocationActions } from '../../actions';
export const intendedPickupLocationsInitialState = {};
export const intendedPickupLocationsReducer = createReducer(intendedPickupLocationsInitialState, on(PickupLocationActions.AddLocation, (state, { payload }) => ({
    ...state,
    [payload.productCode]: payload.location,
})), on(PickupLocationActions.RemoveLocation, (state, { payload }) => ({
    ...state,
    [payload]: { pickupOption: 'delivery' },
})), on(PickupLocationActions.SetPickupOption, (state, { payload }) => ({
    ...state,
    [payload.productCode]: {
        ...state[payload.productCode],
        pickupOption: payload.pickupOption,
    },
})));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja3VwLWxvY2F0aW9ucy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vZmVhdHVyZS1saWJzL3BpY2t1cC1pbi1zdG9yZS9jb3JlL3N0b3JlL3JlZHVjZXJzL3BpY2t1cC1sb2NhdGlvbnMvcGlja3VwLWxvY2F0aW9ucy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsYUFBYSxFQUFFLEVBQUUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNoRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEQsTUFBTSxDQUFDLE1BQU0sbUNBQW1DLEdBQzlDLEVBQUUsQ0FBQztBQUVMLE1BQU0sQ0FBQyxNQUFNLDhCQUE4QixHQUFHLGFBQWEsQ0FDekQsbUNBQW1DLEVBQ25DLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM3RCxHQUFHLEtBQUs7SUFDUixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxPQUFPLENBQUMsUUFBUTtDQUN4QyxDQUFDLENBQUMsRUFDSCxFQUFFLENBQUMscUJBQXFCLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDaEUsR0FBRyxLQUFLO0lBQ1IsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUU7Q0FDeEMsQ0FBQyxDQUFDLEVBQ0gsRUFBRSxDQUFDLHFCQUFxQixDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLEdBQUcsS0FBSztJQUNSLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1FBQ3JCLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUM7UUFDN0IsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZO0tBQ25DO0NBQ0YsQ0FBQyxDQUFDLENBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IGNyZWF0ZVJlZHVjZXIsIG9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUGlja3VwTG9jYXRpb25BY3Rpb25zIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBQaWNrdXBMb2NhdGlvbnNTdGF0ZSB9IGZyb20gJy4uLy4uL3BpY2t1cC1sb2NhdGlvbi1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbnRlbmRlZFBpY2t1cExvY2F0aW9uc0luaXRpYWxTdGF0ZTogUGlja3VwTG9jYXRpb25zU3RhdGVbJ2ludGVuZGVkUGlja3VwTG9jYXRpb25zJ10gPVxuICB7fTtcblxuZXhwb3J0IGNvbnN0IGludGVuZGVkUGlja3VwTG9jYXRpb25zUmVkdWNlciA9IGNyZWF0ZVJlZHVjZXIoXG4gIGludGVuZGVkUGlja3VwTG9jYXRpb25zSW5pdGlhbFN0YXRlLFxuICBvbihQaWNrdXBMb2NhdGlvbkFjdGlvbnMuQWRkTG9jYXRpb24sIChzdGF0ZSwgeyBwYXlsb2FkIH0pID0+ICh7XG4gICAgLi4uc3RhdGUsXG4gICAgW3BheWxvYWQucHJvZHVjdENvZGVdOiBwYXlsb2FkLmxvY2F0aW9uLFxuICB9KSksXG4gIG9uKFBpY2t1cExvY2F0aW9uQWN0aW9ucy5SZW1vdmVMb2NhdGlvbiwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gKHtcbiAgICAuLi5zdGF0ZSxcbiAgICBbcGF5bG9hZF06IHsgcGlja3VwT3B0aW9uOiAnZGVsaXZlcnknIH0sXG4gIH0pKSxcbiAgb24oUGlja3VwTG9jYXRpb25BY3Rpb25zLlNldFBpY2t1cE9wdGlvbiwgKHN0YXRlLCB7IHBheWxvYWQgfSkgPT4gKHtcbiAgICAuLi5zdGF0ZSxcbiAgICBbcGF5bG9hZC5wcm9kdWN0Q29kZV06IHtcbiAgICAgIC4uLnN0YXRlW3BheWxvYWQucHJvZHVjdENvZGVdLFxuICAgICAgcGlja3VwT3B0aW9uOiBwYXlsb2FkLnBpY2t1cE9wdGlvbixcbiAgICB9LFxuICB9KSlcbik7XG4iXX0=