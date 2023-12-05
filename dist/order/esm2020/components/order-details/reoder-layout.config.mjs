/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { DIALOG_TYPE } from '@spartacus/storefront';
import { ReorderDialogComponent } from './order-detail-reorder/reorder-dialog/reorder-dialog.component';
export const defaultReorderLayoutConfig = {
    launch: {
        REORDER: {
            inline: true,
            component: ReorderDialogComponent,
            dialogType: DIALOG_TYPE.DIALOG,
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVvZGVyLWxheW91dC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JkZXIvY29tcG9uZW50cy9vcmRlci1kZXRhaWxzL3Jlb2Rlci1sYXlvdXQuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsV0FBVyxFQUFnQixNQUFNLHVCQUF1QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBRXhHLE1BQU0sQ0FBQyxNQUFNLDBCQUEwQixHQUFpQjtJQUN0RCxNQUFNLEVBQUU7UUFDTixPQUFPLEVBQUU7WUFDUCxNQUFNLEVBQUUsSUFBSTtZQUNaLFNBQVMsRUFBRSxzQkFBc0I7WUFDakMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxNQUFNO1NBQy9CO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgRElBTE9HX1RZUEUsIExheW91dENvbmZpZyB9IGZyb20gJ0BzcGFydGFjdXMvc3RvcmVmcm9udCc7XG5pbXBvcnQgeyBSZW9yZGVyRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1kZXRhaWwtcmVvcmRlci9yZW9yZGVyLWRpYWxvZy9yZW9yZGVyLWRpYWxvZy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdFJlb3JkZXJMYXlvdXRDb25maWc6IExheW91dENvbmZpZyA9IHtcbiAgbGF1bmNoOiB7XG4gICAgUkVPUkRFUjoge1xuICAgICAgaW5saW5lOiB0cnVlLFxuICAgICAgY29tcG9uZW50OiBSZW9yZGVyRGlhbG9nQ29tcG9uZW50LFxuICAgICAgZGlhbG9nVHlwZTogRElBTE9HX1RZUEUuRElBTE9HLFxuICAgIH0sXG4gIH0sXG59O1xuIl19