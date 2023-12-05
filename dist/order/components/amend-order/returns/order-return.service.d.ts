import { OrderEntry } from '@spartacus/cart/base/root';
import { GlobalMessageService, RoutingService } from '@spartacus/core';
import { OrderReturnRequestFacade } from '@spartacus/order/root';
import { Observable } from 'rxjs';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { AmendOrderType } from '../amend-order.model';
import { OrderAmendService } from '../amend-order.service';
import * as i0 from "@angular/core";
export declare class OrderReturnService extends OrderAmendService {
    protected orderDetailsService: OrderDetailsService;
    protected returnRequestService: OrderReturnRequestFacade;
    protected routing: RoutingService;
    protected globalMessageService: GlobalMessageService;
    amendType: AmendOrderType;
    constructor(orderDetailsService: OrderDetailsService, returnRequestService: OrderReturnRequestFacade, routing: RoutingService, globalMessageService: GlobalMessageService);
    getEntries(): Observable<OrderEntry[]>;
    save(): void;
    private afterSave;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrderReturnService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrderReturnService>;
}
