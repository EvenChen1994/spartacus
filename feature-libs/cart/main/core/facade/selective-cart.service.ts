import { Injectable } from '@angular/core';
import {
  Cart,
  CartType,
  OrderEntry,
  SelectiveCartFacade,
} from '@spartacus/cart/main/root';
import {
  BaseSiteService,
  OCC_USER_ID_ANONYMOUS,
  UserIdService,
  UserService,
} from '@spartacus/core';
import { combineLatest, Observable } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  shareReplay,
  switchMap,
  take,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import { MultiCartService } from './multi-cart.service';

@Injectable()
export class SelectiveCartService implements SelectiveCartFacade {
  protected selectiveCart$: Observable<Cart>;

  constructor(
    protected userService: UserService,
    protected multiCartService: MultiCartService,
    protected baseSiteService: BaseSiteService,
    protected userIdService: UserIdService
  ) {}

  /**
   * Initialize the stream when first call this function
   */
  getCart(): Observable<Cart> {
    if (!this.selectiveCart$) {
      this.selectiveCart$ = combineLatest([
        this.getSelectiveCartId(),
        this.userService.get(),
        this.userIdService.getUserId(),
        this.baseSiteService.getActive(),
      ]).pipe(
        distinctUntilChanged(),
        tap(([selectiveId, user, userId, activeBaseSite]) => {
          if (
            !Boolean(selectiveId) &&
            userId !== OCC_USER_ID_ANONYMOUS &&
            user?.customerId
          ) {
            this.multiCartService.loadCart({
              userId: userId,
              cartId: `selectivecart${activeBaseSite}${user.customerId}`,
            });
          }
        }),
        filter(([selectiveId]) => Boolean(selectiveId)),
        switchMap(([selectiveId]) =>
          this.multiCartService.getCart(selectiveId)
        ),
        shareReplay({ bufferSize: 1, refCount: true })
      );
    }
    return this.selectiveCart$;
  }

  getEntries(): Observable<OrderEntry[]> {
    return this.getSelectiveCartId().pipe(
      switchMap((selectiveId) => this.multiCartService.getEntries(selectiveId))
    );
  }

  isStable(): Observable<boolean> {
    return this.getSelectiveCartId().pipe(
      switchMap((selectiveId) => this.multiCartService.isStable(selectiveId))
    );
  }

  addEntry(productCode: string, quantity: number): void {
    this.getSelectiveIdWithUserId().subscribe(([selectiveId, userId]) => {
      this.multiCartService.addEntry(
        userId,
        selectiveId,
        productCode,
        quantity
      );
    });
  }

  removeEntry(entry: OrderEntry): void {
    this.getSelectiveIdWithUserId().subscribe(([selectiveId, userId]) => {
      this.multiCartService.removeEntry(
        userId,
        selectiveId,
        entry.entryNumber as number
      );
    });
  }

  updateEntry(entryNumber: number, quantity: number): void {
    this.getSelectiveIdWithUserId().subscribe(([selectiveId, userId]) => {
      this.multiCartService.updateEntry(
        userId,
        selectiveId,
        entryNumber,
        quantity
      );
    });
  }

  getEntry(productCode: string): Observable<OrderEntry | undefined> {
    return this.getSelectiveCartId().pipe(
      switchMap((selectiveId) =>
        this.multiCartService.getEntry(selectiveId, productCode)
      )
    );
  }

  protected getSelectiveCartId(): Observable<string> {
    return this.multiCartService.getCartIdByType(CartType.SELECTIVE);
  }

  private getSelectiveIdWithUserId(): Observable<string[]> {
    return this.getSelectiveCartId().pipe(
      distinctUntilChanged(),
      withLatestFrom(this.userIdService.getUserId()),
      take(1)
    );
  }
}
