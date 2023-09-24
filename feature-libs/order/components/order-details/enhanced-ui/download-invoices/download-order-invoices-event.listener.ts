import { Injectable, OnDestroy } from '@angular/core';
import { EventService } from '@spartacus/core';
import { LaunchDialogService, LAUNCH_CALLER } from '@spartacus/storefront';
import { DownloadOrderInvoicesEvent } from '../../../../root/events';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DownloadOrderInvoicesEventListener implements OnDestroy {
  protected subscription = new Subscription();
  constructor(
    protected eventService: EventService,
    protected launchDialogService: LaunchDialogService
  ) {
    this.onDownloadInvoices();
  }
  protected onDownloadInvoices() {
    this.subscription.add(
      this.eventService.get(DownloadOrderInvoicesEvent).subscribe((event) => {
        this.openDialog(event);
      })
    );
  }
  protected openDialog(event: DownloadOrderInvoicesEvent) {
    const dialog = this.launchDialogService.openDialog(
      LAUNCH_CALLER.DOWNLOAD_ORDER_INVOICES,
      undefined,
      undefined,
      event.order
    );
    if (dialog) {
      dialog.pipe(take(1)).subscribe();
    }
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
