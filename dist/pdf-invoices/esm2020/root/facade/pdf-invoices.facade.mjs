/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable } from '@angular/core';
import { facadeFactory } from '@spartacus/core';
import { PDF_INVOICES_FEATURE } from '../feature-name';
import * as i0 from "@angular/core";
export function pdfInvoicesFacadeFactory() {
    return facadeFactory({
        facade: PDFInvoicesFacade,
        feature: PDF_INVOICES_FEATURE,
        methods: ['getInvoicesForOrder', 'getInvoicePDF'],
    });
}
export class PDFInvoicesFacade {
}
PDFInvoicesFacade.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PDFInvoicesFacade, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PDFInvoicesFacade.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PDFInvoicesFacade, providedIn: 'root', useFactory: pdfInvoicesFacadeFactory });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: PDFInvoicesFacade, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useFactory: pdfInvoicesFacadeFactory,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWludm9pY2VzLmZhY2FkZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9wZGYtaW52b2ljZXMvcm9vdC9mYWNhZGUvcGRmLWludm9pY2VzLmZhY2FkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFaEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBTXZELE1BQU0sVUFBVSx3QkFBd0I7SUFDdEMsT0FBTyxhQUFhLENBQUM7UUFDbkIsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixFQUFFLGVBQWUsQ0FBQztLQUNsRCxDQUFDLENBQUM7QUFDTCxDQUFDO0FBTUQsTUFBTSxPQUFnQixpQkFBaUI7OzhHQUFqQixpQkFBaUI7a0hBQWpCLGlCQUFpQixjQUh6QixNQUFNLGNBQ04sd0JBQXdCOzJGQUVoQixpQkFBaUI7a0JBSnRDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07b0JBQ2xCLFVBQVUsRUFBRSx3QkFBd0I7aUJBQ3JDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFjYWRlRmFjdG9yeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQREZfSU5WT0lDRVNfRkVBVFVSRSB9IGZyb20gJy4uL2ZlYXR1cmUtbmFtZSc7XG5pbXBvcnQge1xuICBJbnZvaWNlUXVlcnlQYXJhbXMsXG4gIE9yZGVySW52b2ljZUxpc3QsXG59IGZyb20gJy4uL21vZGVsL3BkZi1pbnZvaWNlcy5tb2RlbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwZGZJbnZvaWNlc0ZhY2FkZUZhY3RvcnkoKSB7XG4gIHJldHVybiBmYWNhZGVGYWN0b3J5KHtcbiAgICBmYWNhZGU6IFBERkludm9pY2VzRmFjYWRlLFxuICAgIGZlYXR1cmU6IFBERl9JTlZPSUNFU19GRUFUVVJFLFxuICAgIG1ldGhvZHM6IFsnZ2V0SW52b2ljZXNGb3JPcmRlcicsICdnZXRJbnZvaWNlUERGJ10sXG4gIH0pO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgdXNlRmFjdG9yeTogcGRmSW52b2ljZXNGYWNhZGVGYWN0b3J5LFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQREZJbnZvaWNlc0ZhY2FkZSB7XG4gIC8qKlxuICAgKiBBYnN0cmFjdCBtZXRob2QgdXNlZCB0byBnZXQgdGhlIFBERiBpbnZvaWNlcyBmb3IgYW4gb3JkZXJcbiAgICogQHBhcmFtIHVzZXJJZCBMb2dnZWQgaW4gdXNlciBpZFxuICAgKiBAcGFyYW0gb3JkZXJJZCBJZiBwcm92aWRlZCwgaXQgd2lsbCBiZSB1c2VkLCBvdGhlcndpc2UgaXQgd2lsbCB1c2Ugb3JkZXJJZCBmcm9tIHJvdXRlciBzdGF0ZS5cbiAgICogQHBhcmFtIHF1ZXJ5UGFyYW1zIEFkZGl0aW9uYWwgcXVlcnkgcGFyYW1ldGVycyB1c2VkIGluIHRoZSBBUEkgcmVxdWVzdFxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0SW52b2ljZXNGb3JPcmRlcihcbiAgICBxdWVyeVBhcmFtczogSW52b2ljZVF1ZXJ5UGFyYW1zLFxuICAgIHVzZXJJZD86IHN0cmluZyxcbiAgICBvcmRlcklkPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T3JkZXJJbnZvaWNlTGlzdD47XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRvY3VtZW50IGJsb2IgZm9yIGdpdmVuIGludm9pY2VJZCwgb3JkZXJJZCBhbmQgZXh0ZXJuYWxTeXN0ZW1JZFxuICAgKiBAcGFyYW0gdXNlcklkIExvZ2dlZCBpbiB1c2VyIGlkXG4gICAqIEBwYXJhbSBvcmRlcklkIElmIHByb3ZpZGVkLCBpdCB3aWxsIGJlIHVzZWQsIG90aGVyd2lzZSBpdCB3aWxsIHVzZSBvcmRlcklkIGZyb20gcm91dGVyIHN0YXRlLlxuICAgKiBAcGFyYW0gaW52b2ljZUlkIFRoZSBpZCBvZiB0aGUgaW52b2ljZSB0byBiZSBkb3dubG9hZGVkXG4gICAqIEBwYXJhbSBleHRlcm5hbFN5c3RlbUlkIEV4dGVybmFsIHN5c3RlbSB0aGF0IHByb3ZpZGVzIHRoZSBpbnZvaWNlIFBERlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0SW52b2ljZVBERihcbiAgICBpbnZvaWNlSWQ6IHN0cmluZyxcbiAgICBleHRlcm5hbFN5c3RlbUlkPzogc3RyaW5nLFxuICAgIHVzZXJJZD86IHN0cmluZyxcbiAgICBvcmRlcklkPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8QmxvYj47XG59XG4iXX0=