/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { CxEvent } from '@spartacus/core';
export class GetTicketQueryResetEvent extends CxEvent {
}
GetTicketQueryResetEvent.type = 'GetTicketQueryResetEvent';
export class GetTicketQueryReloadEvent extends CxEvent {
}
GetTicketQueryReloadEvent.type = 'GetTicketQueryReloadEvent';
export class GetTicketsQueryResetEvents extends CxEvent {
}
GetTicketsQueryResetEvents.type = 'GetTicketsQueryResetEvents';
export class GetTicketsQueryReloadEvents extends CxEvent {
}
GetTicketsQueryReloadEvents.type = 'GetTicketsQueryReloadEvents';
export class NewMessageEvent extends CxEvent {
}
NewMessageEvent.type = 'NewMessageEvent';
export class TicketReopenedEvent extends CxEvent {
}
TicketReopenedEvent.type = 'TicketReopenedEvent';
export class TicketClosedEvent extends CxEvent {
}
TicketClosedEvent.type = 'TicketClosedEvent';
export class GetTicketCategoryQueryResetEvent extends CxEvent {
}
GetTicketCategoryQueryResetEvent.type = 'GetTicketCategoryQueryResetEvent';
export class GetTicketCategoryQueryReloadEvent extends CxEvent {
}
GetTicketCategoryQueryReloadEvent.type = 'GetTicketCategoryQueryReloadEvent';
export class GetTicketAssociatedObjectsQueryResetEvent extends CxEvent {
}
GetTicketAssociatedObjectsQueryResetEvent.type = 'GetTicketAssociatedObjectsQueryResetEvent';
export class GetTicketAssociatedObjectsQueryReloadEvent extends CxEvent {
}
GetTicketAssociatedObjectsQueryReloadEvent.type = 'GetTicketAssociatedObjectsQueryReloadEvent';
export class TicketCreatedEvent extends CxEvent {
}
TicketCreatedEvent.type = 'TicketCreatedEvent';
export class CreateEvent extends CxEvent {
}
CreateEvent.type = 'CreateEvent';
export class UploadAttachmentSuccessEvent extends CxEvent {
}
UploadAttachmentSuccessEvent.type = 'UploadAttachmentSuccessEvent';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItdGlja2V0aW5nLmV2ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9jdXN0b21lci10aWNrZXRpbmcvcm9vdC9ldmVudHMvY3VzdG9tZXItdGlja2V0aW5nLmV2ZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTFDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxPQUFPOztBQUNuQyw2QkFBSSxHQUFHLDBCQUEwQixDQUFDO0FBR3BELE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxPQUFPOztBQUNwQyw4QkFBSSxHQUFHLDJCQUEyQixDQUFDO0FBR3JELE1BQU0sT0FBTywwQkFBMkIsU0FBUSxPQUFPOztBQUNyQywrQkFBSSxHQUFHLDRCQUE0QixDQUFDO0FBR3RELE1BQU0sT0FBTywyQkFBNEIsU0FBUSxPQUFPOztBQUN0QyxnQ0FBSSxHQUFHLDZCQUE2QixDQUFDO0FBR3ZELE1BQU0sT0FBTyxlQUFnQixTQUFRLE9BQU87O0FBQzFCLG9CQUFJLEdBQUcsaUJBQWlCLENBQUM7QUFHM0MsTUFBTSxPQUFPLG1CQUFvQixTQUFRLE9BQU87O0FBQzlCLHdCQUFJLEdBQUcscUJBQXFCLENBQUM7QUFHL0MsTUFBTSxPQUFPLGlCQUFrQixTQUFRLE9BQU87O0FBQzVCLHNCQUFJLEdBQUcsbUJBQW1CLENBQUM7QUFHN0MsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLE9BQU87O0FBQzNDLHFDQUFJLEdBQUcsa0NBQWtDLENBQUM7QUFHNUQsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLE9BQU87O0FBQzVDLHNDQUFJLEdBQUcsbUNBQW1DLENBQUM7QUFHN0QsTUFBTSxPQUFPLHlDQUEwQyxTQUFRLE9BQU87O0FBQ3BELDhDQUFJLEdBQUcsMkNBQTJDLENBQUM7QUFHckUsTUFBTSxPQUFPLDBDQUEyQyxTQUFRLE9BQU87O0FBQ3JELCtDQUFJLEdBQUcsNENBQTRDLENBQUM7QUFFdEUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLE9BQU87O0FBQzdCLHVCQUFJLEdBQUcsb0JBQW9CLENBQUM7QUFFOUMsTUFBTSxPQUFPLFdBQVksU0FBUSxPQUFPOztBQUN0QixnQkFBSSxHQUFHLGFBQWEsQ0FBQztBQUd2QyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsT0FBTzs7QUFDdkMsaUNBQUksR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEN4RXZlbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgR2V0VGlja2V0UXVlcnlSZXNldEV2ZW50IGV4dGVuZHMgQ3hFdmVudCB7XG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ0dldFRpY2tldFF1ZXJ5UmVzZXRFdmVudCc7XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRUaWNrZXRRdWVyeVJlbG9hZEV2ZW50IGV4dGVuZHMgQ3hFdmVudCB7XG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ0dldFRpY2tldFF1ZXJ5UmVsb2FkRXZlbnQnO1xufVxuXG5leHBvcnQgY2xhc3MgR2V0VGlja2V0c1F1ZXJ5UmVzZXRFdmVudHMgZXh0ZW5kcyBDeEV2ZW50IHtcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnR2V0VGlja2V0c1F1ZXJ5UmVzZXRFdmVudHMnO1xufVxuXG5leHBvcnQgY2xhc3MgR2V0VGlja2V0c1F1ZXJ5UmVsb2FkRXZlbnRzIGV4dGVuZHMgQ3hFdmVudCB7XG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ0dldFRpY2tldHNRdWVyeVJlbG9hZEV2ZW50cyc7XG59XG5cbmV4cG9ydCBjbGFzcyBOZXdNZXNzYWdlRXZlbnQgZXh0ZW5kcyBDeEV2ZW50IHtcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnTmV3TWVzc2FnZUV2ZW50Jztcbn1cblxuZXhwb3J0IGNsYXNzIFRpY2tldFJlb3BlbmVkRXZlbnQgZXh0ZW5kcyBDeEV2ZW50IHtcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnVGlja2V0UmVvcGVuZWRFdmVudCc7XG59XG5cbmV4cG9ydCBjbGFzcyBUaWNrZXRDbG9zZWRFdmVudCBleHRlbmRzIEN4RXZlbnQge1xuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdUaWNrZXRDbG9zZWRFdmVudCc7XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRUaWNrZXRDYXRlZ29yeVF1ZXJ5UmVzZXRFdmVudCBleHRlbmRzIEN4RXZlbnQge1xuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdHZXRUaWNrZXRDYXRlZ29yeVF1ZXJ5UmVzZXRFdmVudCc7XG59XG5cbmV4cG9ydCBjbGFzcyBHZXRUaWNrZXRDYXRlZ29yeVF1ZXJ5UmVsb2FkRXZlbnQgZXh0ZW5kcyBDeEV2ZW50IHtcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnR2V0VGlja2V0Q2F0ZWdvcnlRdWVyeVJlbG9hZEV2ZW50Jztcbn1cblxuZXhwb3J0IGNsYXNzIEdldFRpY2tldEFzc29jaWF0ZWRPYmplY3RzUXVlcnlSZXNldEV2ZW50IGV4dGVuZHMgQ3hFdmVudCB7XG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ0dldFRpY2tldEFzc29jaWF0ZWRPYmplY3RzUXVlcnlSZXNldEV2ZW50Jztcbn1cblxuZXhwb3J0IGNsYXNzIEdldFRpY2tldEFzc29jaWF0ZWRPYmplY3RzUXVlcnlSZWxvYWRFdmVudCBleHRlbmRzIEN4RXZlbnQge1xuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdHZXRUaWNrZXRBc3NvY2lhdGVkT2JqZWN0c1F1ZXJ5UmVsb2FkRXZlbnQnO1xufVxuZXhwb3J0IGNsYXNzIFRpY2tldENyZWF0ZWRFdmVudCBleHRlbmRzIEN4RXZlbnQge1xuICBzdGF0aWMgcmVhZG9ubHkgdHlwZSA9ICdUaWNrZXRDcmVhdGVkRXZlbnQnO1xufVxuZXhwb3J0IGNsYXNzIENyZWF0ZUV2ZW50IGV4dGVuZHMgQ3hFdmVudCB7XG4gIHN0YXRpYyByZWFkb25seSB0eXBlID0gJ0NyZWF0ZUV2ZW50Jztcbn1cblxuZXhwb3J0IGNsYXNzIFVwbG9hZEF0dGFjaG1lbnRTdWNjZXNzRXZlbnQgZXh0ZW5kcyBDeEV2ZW50IHtcbiAgc3RhdGljIHJlYWRvbmx5IHR5cGUgPSAnVXBsb2FkQXR0YWNobWVudFN1Y2Nlc3NFdmVudCc7XG59XG4iXX0=