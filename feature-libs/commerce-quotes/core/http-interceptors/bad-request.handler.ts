import { HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Config,
  ErrorModel,
  GlobalMessageService,
  GlobalMessageType,
  HttpErrorHandler,
  HttpResponseStatus,
  Priority,
} from '@spartacus/core';

@Injectable({
  providedIn: 'root',
})
export class CommerceQuotesBadRequestHandler extends HttpErrorHandler {
  constructor(
    protected globalMessageService: GlobalMessageService,
    private config: Config
  ) {
    super(globalMessageService);
  }
  responseStatus = HttpResponseStatus.BAD_REQUEST;

  handleError(_request: HttpRequest<any>, response: HttpErrorResponse): void {
    this.getErrors(response).forEach(({ message }: ErrorModel) => {
      // Handle unknown conflict
      this.handleQuoteThresholdErrors(message);
    });
  }

  protected getErrors(response: HttpErrorResponse): ErrorModel[] {
    return (response.error?.errors || []).filter(
      (error) => error.type === 'QuoteUnderThresholdError'
    );
  }

  protected handleQuoteThresholdErrors(message: string) {
    const unmetTresholdMask = /does not meet the threshold\./;
    const result = message.match(unmetTresholdMask);

    if (result) {
      this.globalMessageService.add(
        {
          key: 'commerceQuotes.httpHandlers.threshold.underTresholdError',
          params: {
            minValue: this.config.commerceQuotes?.tresholds?.requestInitiation,
          },
        },
        GlobalMessageType.MSG_TYPE_ERROR
      );
    }
  }

  getPriority(): Priority {
    return Priority.NORMAL;
  }
}
