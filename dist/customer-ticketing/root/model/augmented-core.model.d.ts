import '@spartacus/storefront';
declare module '@spartacus/storefront' {
    const enum LAUNCH_CALLER {
        CUSTOMER_TICKETING_REOPEN = "CUSTOMER_TICKETING_REOPEN",
        CUSTOMER_TICKETING_CLOSE = "CUSTOMER_TICKETING_CLOSE",
        CUSTOMER_TICKETING_CREATE = "CUSTOMER_TICKETING_CREATE"
    }
}
