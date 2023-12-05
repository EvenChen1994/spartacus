/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { UserActions } from '../actions/index';
export const initialState = {
    entities: [],
    country: null,
};
export function reducer(state = initialState, action) {
    switch (action.type) {
        case UserActions.LOAD_REGIONS_SUCCESS: {
            const entities = action.payload.entities;
            const country = action.payload.country;
            if (entities || country) {
                return {
                    ...state,
                    entities,
                    country,
                };
            }
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy9yZWdpb25zLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUdILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUcvQyxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQWlCO0lBQ3hDLFFBQVEsRUFBRSxFQUFFO0lBQ1osT0FBTyxFQUFFLElBQUk7Q0FDZCxDQUFDO0FBRUYsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBa0U7SUFFbEUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDckMsTUFBTSxRQUFRLEdBQWEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDbkQsTUFBTSxPQUFPLEdBQVcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDL0MsSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFO2dCQUN2QixPQUFPO29CQUNMLEdBQUcsS0FBSztvQkFDUixRQUFRO29CQUNSLE9BQU87aUJBQ1IsQ0FBQzthQUNIO1lBQ0QsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IFJlZ2lvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFJlZ2lvbnNTdGF0ZSB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBSZWdpb25zU3RhdGUgPSB7XG4gIGVudGl0aWVzOiBbXSxcbiAgY291bnRyeTogbnVsbCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBVc2VyQWN0aW9ucy5SZWdpb25zQWN0aW9uIHwgVXNlckFjdGlvbnMuQ2xlYXJVc2VyTWlzY3NEYXRhXG4pOiBSZWdpb25zU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVc2VyQWN0aW9ucy5MT0FEX1JFR0lPTlNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZW50aXRpZXM6IFJlZ2lvbltdID0gYWN0aW9uLnBheWxvYWQuZW50aXRpZXM7XG4gICAgICBjb25zdCBjb3VudHJ5OiBzdHJpbmcgPSBhY3Rpb24ucGF5bG9hZC5jb3VudHJ5O1xuICAgICAgaWYgKGVudGl0aWVzIHx8IGNvdW50cnkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBlbnRpdGllcyxcbiAgICAgICAgICBjb3VudHJ5LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=