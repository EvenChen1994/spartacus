/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { OrderActions } from '..';
export const initialStateOfOrderById = undefined;
export function reducer(state = initialStateOfOrderById, action) {
    switch (action.type) {
        case OrderActions.LOAD_ORDER_BY_ID_SUCCESS: {
            return action.payload ? action.payload : initialStateOfOrderById;
        }
        case OrderActions.LOAD_ORDER_BY_ID_FAIL: {
            return initialStateOfOrderById;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItYnktaWQucmVkdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmRlci9jb3JlL3N0b3JlL3JlZHVjZXJzL29yZGVyLWJ5LWlkLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUdILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFFbEMsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQXNCLFNBQVMsQ0FBQztBQUVwRSxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsdUJBQXVCLEVBQy9CLE1BQW9DO0lBRXBDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUM7U0FDbEU7UUFDRCxLQUFLLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sdUJBQXVCLENBQUM7U0FDaEM7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IE9yZGVyIH0gZnJvbSAnQHNwYXJ0YWN1cy9vcmRlci9yb290JztcbmltcG9ydCB7IE9yZGVyQWN0aW9ucyB9IGZyb20gJy4uJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZU9mT3JkZXJCeUlkOiBPcmRlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlT2ZPcmRlckJ5SWQsXG4gIGFjdGlvbjogT3JkZXJBY3Rpb25zLk9yZGVyQnlJZEFjdGlvblxuKTogT3JkZXIgfCB1bmRlZmluZWQge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBPcmRlckFjdGlvbnMuTE9BRF9PUkRFUl9CWV9JRF9TVUNDRVNTOiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQgPyBhY3Rpb24ucGF5bG9hZCA6IGluaXRpYWxTdGF0ZU9mT3JkZXJCeUlkO1xuICAgIH1cbiAgICBjYXNlIE9yZGVyQWN0aW9ucy5MT0FEX09SREVSX0JZX0lEX0ZBSUw6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGVPZk9yZGVyQnlJZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19