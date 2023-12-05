/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { startWith, switchMap } from 'rxjs/operators';
/**
 *
 * Withdraw from the source observable when notifier emits a value
 *
 * Withdraw will result in resubscribing to the source observable
 * Operator is useful to kill ongoing emission transformation on notifier emission
 *
 * @param notifier
 */
export function withdrawOn(notifier) {
    return (source) => notifier.pipe(startWith(undefined), switchMap(() => source));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXctb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91dGlsL3J4anMvd2l0aGRyYXctb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUdILE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLFVBQVUsVUFBVSxDQUN4QixRQUF5QjtJQUV6QixPQUFPLENBQUMsTUFBcUIsRUFBRSxFQUFFLENBQy9CLFFBQVEsQ0FBQyxJQUFJLENBQ1gsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUNwQixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQ3hCLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICpcbiAqIFdpdGhkcmF3IGZyb20gdGhlIHNvdXJjZSBvYnNlcnZhYmxlIHdoZW4gbm90aWZpZXIgZW1pdHMgYSB2YWx1ZVxuICpcbiAqIFdpdGhkcmF3IHdpbGwgcmVzdWx0IGluIHJlc3Vic2NyaWJpbmcgdG8gdGhlIHNvdXJjZSBvYnNlcnZhYmxlXG4gKiBPcGVyYXRvciBpcyB1c2VmdWwgdG8ga2lsbCBvbmdvaW5nIGVtaXNzaW9uIHRyYW5zZm9ybWF0aW9uIG9uIG5vdGlmaWVyIGVtaXNzaW9uXG4gKlxuICogQHBhcmFtIG5vdGlmaWVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3aXRoZHJhd09uPFQ+KFxuICBub3RpZmllcjogT2JzZXJ2YWJsZTxhbnk+XG4pOiBPcGVyYXRvckZ1bmN0aW9uPFQsIFQ+IHtcbiAgcmV0dXJuIChzb3VyY2U6IE9ic2VydmFibGU8VD4pID0+XG4gICAgbm90aWZpZXIucGlwZShcbiAgICAgIHN0YXJ0V2l0aCh1bmRlZmluZWQpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHNvdXJjZSlcbiAgICApO1xufVxuIl19