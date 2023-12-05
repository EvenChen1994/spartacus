import { OccEndpoint } from '@spartacus/core';
declare module '@spartacus/core' {
    interface OccEndpoints {
        /**
         * Get the list of invoices for an order
         *
         * @member {string} [pdfInvoicesListInvoices]
         */
        pdfInvoicesListInvoices?: string | OccEndpoint;
        /**
         * Get the invoice document as a PDF file
         *
         * @member {string} [pdfInvoicesDownloadInvoicePDF]
         */
        pdfInvoicesDownloadInvoicePDF?: string | OccEndpoint;
    }
}
