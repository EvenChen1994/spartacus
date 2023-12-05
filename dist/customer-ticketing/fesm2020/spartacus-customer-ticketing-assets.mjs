/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
const customerTicketing = {
    customerTicketing: {
        mainLogoLabel: 'SAP',
        mainTitle: 'Customer Ticketing',
        ticketId: 'ID',
        createdOn: 'Created On',
        changedOn: 'Changed On',
        status: 'Status',
        message: 'Message',
        cancel: 'Cancel',
        submit: 'Submit',
        uploadFile: 'Upload File',
        fileSizeLimit: 'File size limit: {{count}} MB',
        maximumAttachment: 'Maximum of one attachment per message',
        errorMessage: 'Something went wrong.',
        charactersLeft: 'characters left: {{count}}',
        customerService: 'Customer Service',
    },
    customerTicketingList: {
        subject: 'Subject',
        ticketCategory: 'Category',
        sortSubtitle: 'Sort by',
        sortOrders: 'Sort orders',
        noTickets: `You don't have any request`,
        requestTitle: 'All Requests',
        mobile: {
            ticketIdFull: 'Ticket ID',
        },
    },
    createCustomerTicket: {
        createNewTicket: 'Add',
        addNewRequest: 'Add New Request',
        addRequest: 'Add Request',
        subject: 'Subject',
        category: 'Category',
        associateTo: 'Associate To',
        ticketCreated: 'Request created.',
        optionallySelectAssociatedObject: 'Select Option',
        selectCategory: 'Select Category',
    },
    customerTicketingDetails: {
        requestReopened: 'Request Reopened.',
        requestClosed: 'Request closed, you may reopen if needed.',
        reopenRequest: 'Reopen Request',
        closeRequest: 'Close Request',
        ticketNotFound: 'Ticket not found.',
    },
};

/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
const myAccountV2CustomerTicketing = {
    myAccountV2CustomerTicketing: {
        heading: 'Customer Service',
        showMore: 'Show More',
        changedOn: 'Changed On: {{value}}',
        ticketId: 'ID: {{value}}',
        subjectLabel: 'Subject',
        idLabel: 'Customer Service Id',
    },
};

/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
const en = {
    customerTicketing,
    myAccountV2CustomerTicketing,
};

/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
const customerTicketingTranslations = {
    en,
};
const customerTicketingTranslationChunksConfig = {
    customerTicketing: [
        'customerTicketing',
        'customerTicketingList',
        'createCustomerTicket',
        'customerTicketingDetails',
    ],
    myAccountV2CustomerTicketing: ['myAccountV2CustomerTicketing'],
};

/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Generated bundle index. Do not edit.
 */

export { customerTicketingTranslationChunksConfig, customerTicketingTranslations };
//# sourceMappingURL=spartacus-customer-ticketing-assets.mjs.map
