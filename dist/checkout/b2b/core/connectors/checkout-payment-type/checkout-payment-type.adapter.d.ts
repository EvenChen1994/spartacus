import { PaymentType } from '@spartacus/cart/base/root';
import { Observable } from 'rxjs';
export declare abstract class CheckoutPaymentTypeAdapter {
    /**
     * Abstract method used to get available payment types
     */
    abstract getPaymentTypes(): Observable<PaymentType[]>;
    /**
     * Abstract method used to set payment type to cart
     *
     * @param userId
     * @param cartId
     * @param typeCode
     * @param purchaseOrderNumber: purchase order number
     */
    abstract setPaymentType(userId: string, cartId: string, typeCode: string, purchaseOrderNumber?: string): Observable<unknown>;
}
