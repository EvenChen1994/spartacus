import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import {
  STATUS,
  CUSTOM_CLASS,
  TicketDetails,
  DATE_FORMAT,
} from '@spartacus/customer-ticketing/root';
import { Card } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CustomerTicketingDetailsService } from '../customer-ticketing-details.service';

@Component({
  selector: 'cx-customer-ticketing-details',
  templateUrl: './customer-ticketing-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerTicketingDetailsComponent {
  dateFormat = DATE_FORMAT;
  ticketDetails$: Observable<TicketDetails | undefined> =
    this.customerTicketingDetailsService.ticketDetails$;

  constructor(
    protected translation: TranslationService,
    protected customerTicketingDetailsService: CustomerTicketingDetailsService
  ) {}

  prepareCardContent(
    entity: string,
    titleTranslation: string,
    id?: string
  ): Observable<Card> {
    return this.translation.translate(titleTranslation).pipe(
      filter(() => Boolean(entity)),
      map((textTitle) => ({
        title: textTitle,
        text: [entity],
        customClass: this.getStatusClass(id?.toUpperCase()),
      }))
    );
  }

  getStatusClass(id?: string): string {
    return id === STATUS.OPEN || id === STATUS.INPROCESS
      ? CUSTOM_CLASS.OPEN
      : id === STATUS.CLOSE
      ? CUSTOM_CLASS.CLOSE
      : '';
  }
}
