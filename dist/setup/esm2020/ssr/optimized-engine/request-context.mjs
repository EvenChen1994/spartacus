/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { randomUUID } from 'crypto';
import { parseTraceparent } from '../logger/loggers/w3c-trace-context/parse-traceparent';
/**
 * Returns the request context from the request object.
 * @param request - the request object
 * @returns the context of the request
 */
export const getRequestContext = (request) => {
    return request.res?.locals?.cx?.request;
};
/**
 * Prepares and updates a request with the context object, which is used to enrich the logs.
 * It contains the random request's UUID, time of receiving the context and the W3C Trace Context (if available).
 * The trace context is parsed from the `traceparent` header, which is specified in
 * the "W3C TraceContext" document. See https://www.w3.org/TR/trace-context/#traceparent-header
 * for more details.
 * @param request - the request object
 * @param logger - the ExpressServerLogger object. It is used to log the error if occurred during parsing traceparent header
 * @returns the context of the request and error if occurred during parsing traceparent header
 */
export const preprocessRequestForLogger = (request, logger) => {
    const requestContext = {
        ...createInitialRequestContext(),
        traceContext: getTraceContext(request, logger),
    };
    setRequestContext(request, requestContext);
};
/**
 * Updates the request object with the request context.
 * @param request - the request object
 * @param context - the context of the request
 */
const setRequestContext = (request, context) => {
    if (request.res) {
        request.res.locals = {
            ...request.res.locals,
            cx: {
                ...request.res.locals.cx,
                request: context,
            },
        };
    }
};
/**
 * Creates the initial request context to the request object.
 * @param request - the request object
 * @returns object with a randomly generated UUID and the current time
 */
const createInitialRequestContext = () => {
    const requestContext = {
        uuid: randomUUID(),
        timeReceived: new Date().toISOString(),
    };
    return requestContext;
};
/**
 * Parses the `traceparent` header and returns an object with the W3C TraceContext.
 * In case when the `traceparent` header is absent or invalid, `undefined` value is returned.
 * @param request - the request object
 * @param logger - the logger object
 *
 */
const getTraceContext = (request, logger) => {
    try {
        return parseTraceparent(request.get('traceparent')) ?? undefined;
    }
    catch (e) {
        const error = e instanceof Error
            ? e
            : new Error('Unexpected error during parsing traceparent header');
        logger.error(error.message, { request });
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1jb250ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29yZS1saWJzL3NldHVwL3Nzci9vcHRpbWl6ZWQtZW5naW5lL3JlcXVlc3QtY29udGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUdwQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQWF6Rjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxPQUFnQixFQUFrQixFQUFFO0lBQ3BFLE9BQU8sT0FBTyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQztBQUMxQyxDQUFDLENBQUM7QUFFRjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSwwQkFBMEIsR0FBRyxDQUN4QyxPQUFnQixFQUNoQixNQUEyQixFQUMzQixFQUFFO0lBQ0YsTUFBTSxjQUFjLEdBQW1CO1FBQ3JDLEdBQUcsMkJBQTJCLEVBQUU7UUFDaEMsWUFBWSxFQUFFLGVBQWUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDO0tBQy9DLENBQUM7SUFDRixpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDO0FBRUY7Ozs7R0FJRztBQUNILE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxPQUFnQixFQUFFLE9BQXVCLEVBQUUsRUFBRTtJQUN0RSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRztZQUNuQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTTtZQUNyQixFQUFFLEVBQUU7Z0JBQ0YsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN4QixPQUFPLEVBQUUsT0FBTzthQUNqQjtTQUNGLENBQUM7S0FDSDtBQUNILENBQUMsQ0FBQztBQUVGOzs7O0dBSUc7QUFDSCxNQUFNLDJCQUEyQixHQUFHLEdBQW1CLEVBQUU7SUFDdkQsTUFBTSxjQUFjLEdBQW1CO1FBQ3JDLElBQUksRUFBRSxVQUFVLEVBQUU7UUFDbEIsWUFBWSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO0tBQ3ZDLENBQUM7SUFDRixPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFDSCxNQUFNLGVBQWUsR0FBRyxDQUN0QixPQUFnQixFQUNoQixNQUEyQixFQUNFLEVBQUU7SUFDL0IsSUFBSTtRQUNGLE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLFNBQVMsQ0FBQztLQUNsRTtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsTUFBTSxLQUFLLEdBQ1QsQ0FBQyxZQUFZLEtBQUs7WUFDaEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztRQUN0RSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQzFDO0FBQ0gsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgcmFuZG9tVVVJRCB9IGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgeyBSZXF1ZXN0IH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBFeHByZXNzU2VydmVyTG9nZ2VyIH0gZnJvbSAnLi4vbG9nZ2VyJztcbmltcG9ydCB7IHBhcnNlVHJhY2VwYXJlbnQgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2Vycy93M2MtdHJhY2UtY29udGV4dC9wYXJzZS10cmFjZXBhcmVudCc7XG5pbXBvcnQgeyBXM2NUcmFjZUNvbnRleHQgfSBmcm9tICcuLi9sb2dnZXIvbG9nZ2Vycy93M2MtdHJhY2UtY29udGV4dC93M2MtdHJhY2UtY29udGV4dC5tb2RlbCc7XG5cbi8qKlxuICogUmVxdWVzdENvbnRleHQgaXMgdXNlZCBmb3IgbG9nIG1lc3NhZ2UgaW4gc2VydmVyIHNpZGUgcmVuZGVyaW5nLlxuICogSXQgY29udGFpbnMgcmVxdWVzdCdzIFVVSUQsIHRpbWUgb2YgcmVjZWl2aW5nIHRoZSByZXF1ZXN0IGFuZCB0aGUgVzNDIFRyYWNlIENvbnRleHQgaWYgYHRyYWNlcGFyZW50YCBoZWFkZXIgaXMgYXZhaWxhYmxlIGFuZCB2YWxpZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0Q29udGV4dCB7XG4gIHV1aWQ6IHN0cmluZztcbiAgdGltZVJlY2VpdmVkOiBzdHJpbmc7XG4gIHRyYWNlQ29udGV4dD86IFczY1RyYWNlQ29udGV4dDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByZXF1ZXN0IGNvbnRleHQgZnJvbSB0aGUgcmVxdWVzdCBvYmplY3QuXG4gKiBAcGFyYW0gcmVxdWVzdCAtIHRoZSByZXF1ZXN0IG9iamVjdFxuICogQHJldHVybnMgdGhlIGNvbnRleHQgb2YgdGhlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGNvbnN0IGdldFJlcXVlc3RDb250ZXh0ID0gKHJlcXVlc3Q6IFJlcXVlc3QpOiBSZXF1ZXN0Q29udGV4dCA9PiB7XG4gIHJldHVybiByZXF1ZXN0LnJlcz8ubG9jYWxzPy5jeD8ucmVxdWVzdDtcbn07XG5cbi8qKlxuICogUHJlcGFyZXMgYW5kIHVwZGF0ZXMgYSByZXF1ZXN0IHdpdGggdGhlIGNvbnRleHQgb2JqZWN0LCB3aGljaCBpcyB1c2VkIHRvIGVucmljaCB0aGUgbG9ncy5cbiAqIEl0IGNvbnRhaW5zIHRoZSByYW5kb20gcmVxdWVzdCdzIFVVSUQsIHRpbWUgb2YgcmVjZWl2aW5nIHRoZSBjb250ZXh0IGFuZCB0aGUgVzNDIFRyYWNlIENvbnRleHQgKGlmIGF2YWlsYWJsZSkuXG4gKiBUaGUgdHJhY2UgY29udGV4dCBpcyBwYXJzZWQgZnJvbSB0aGUgYHRyYWNlcGFyZW50YCBoZWFkZXIsIHdoaWNoIGlzIHNwZWNpZmllZCBpblxuICogdGhlIFwiVzNDIFRyYWNlQ29udGV4dFwiIGRvY3VtZW50LiBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL3RyYWNlLWNvbnRleHQvI3RyYWNlcGFyZW50LWhlYWRlclxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSByZXF1ZXN0IC0gdGhlIHJlcXVlc3Qgb2JqZWN0XG4gKiBAcGFyYW0gbG9nZ2VyIC0gdGhlIEV4cHJlc3NTZXJ2ZXJMb2dnZXIgb2JqZWN0LiBJdCBpcyB1c2VkIHRvIGxvZyB0aGUgZXJyb3IgaWYgb2NjdXJyZWQgZHVyaW5nIHBhcnNpbmcgdHJhY2VwYXJlbnQgaGVhZGVyXG4gKiBAcmV0dXJucyB0aGUgY29udGV4dCBvZiB0aGUgcmVxdWVzdCBhbmQgZXJyb3IgaWYgb2NjdXJyZWQgZHVyaW5nIHBhcnNpbmcgdHJhY2VwYXJlbnQgaGVhZGVyXG4gKi9cbmV4cG9ydCBjb25zdCBwcmVwcm9jZXNzUmVxdWVzdEZvckxvZ2dlciA9IChcbiAgcmVxdWVzdDogUmVxdWVzdCxcbiAgbG9nZ2VyOiBFeHByZXNzU2VydmVyTG9nZ2VyXG4pID0+IHtcbiAgY29uc3QgcmVxdWVzdENvbnRleHQ6IFJlcXVlc3RDb250ZXh0ID0ge1xuICAgIC4uLmNyZWF0ZUluaXRpYWxSZXF1ZXN0Q29udGV4dCgpLFxuICAgIHRyYWNlQ29udGV4dDogZ2V0VHJhY2VDb250ZXh0KHJlcXVlc3QsIGxvZ2dlciksXG4gIH07XG4gIHNldFJlcXVlc3RDb250ZXh0KHJlcXVlc3QsIHJlcXVlc3RDb250ZXh0KTtcbn07XG5cbi8qKlxuICogVXBkYXRlcyB0aGUgcmVxdWVzdCBvYmplY3Qgd2l0aCB0aGUgcmVxdWVzdCBjb250ZXh0LlxuICogQHBhcmFtIHJlcXVlc3QgLSB0aGUgcmVxdWVzdCBvYmplY3RcbiAqIEBwYXJhbSBjb250ZXh0IC0gdGhlIGNvbnRleHQgb2YgdGhlIHJlcXVlc3RcbiAqL1xuY29uc3Qgc2V0UmVxdWVzdENvbnRleHQgPSAocmVxdWVzdDogUmVxdWVzdCwgY29udGV4dDogUmVxdWVzdENvbnRleHQpID0+IHtcbiAgaWYgKHJlcXVlc3QucmVzKSB7XG4gICAgcmVxdWVzdC5yZXMubG9jYWxzID0ge1xuICAgICAgLi4ucmVxdWVzdC5yZXMubG9jYWxzLFxuICAgICAgY3g6IHtcbiAgICAgICAgLi4ucmVxdWVzdC5yZXMubG9jYWxzLmN4LFxuICAgICAgICByZXF1ZXN0OiBjb250ZXh0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGluaXRpYWwgcmVxdWVzdCBjb250ZXh0IHRvIHRoZSByZXF1ZXN0IG9iamVjdC5cbiAqIEBwYXJhbSByZXF1ZXN0IC0gdGhlIHJlcXVlc3Qgb2JqZWN0XG4gKiBAcmV0dXJucyBvYmplY3Qgd2l0aCBhIHJhbmRvbWx5IGdlbmVyYXRlZCBVVUlEIGFuZCB0aGUgY3VycmVudCB0aW1lXG4gKi9cbmNvbnN0IGNyZWF0ZUluaXRpYWxSZXF1ZXN0Q29udGV4dCA9ICgpOiBSZXF1ZXN0Q29udGV4dCA9PiB7XG4gIGNvbnN0IHJlcXVlc3RDb250ZXh0OiBSZXF1ZXN0Q29udGV4dCA9IHtcbiAgICB1dWlkOiByYW5kb21VVUlEKCksXG4gICAgdGltZVJlY2VpdmVkOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gIH07XG4gIHJldHVybiByZXF1ZXN0Q29udGV4dDtcbn07XG5cbi8qKlxuICogUGFyc2VzIHRoZSBgdHJhY2VwYXJlbnRgIGhlYWRlciBhbmQgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aGUgVzNDIFRyYWNlQ29udGV4dC5cbiAqIEluIGNhc2Ugd2hlbiB0aGUgYHRyYWNlcGFyZW50YCBoZWFkZXIgaXMgYWJzZW50IG9yIGludmFsaWQsIGB1bmRlZmluZWRgIHZhbHVlIGlzIHJldHVybmVkLlxuICogQHBhcmFtIHJlcXVlc3QgLSB0aGUgcmVxdWVzdCBvYmplY3RcbiAqIEBwYXJhbSBsb2dnZXIgLSB0aGUgbG9nZ2VyIG9iamVjdFxuICpcbiAqL1xuY29uc3QgZ2V0VHJhY2VDb250ZXh0ID0gKFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICBsb2dnZXI6IEV4cHJlc3NTZXJ2ZXJMb2dnZXJcbik6IFczY1RyYWNlQ29udGV4dCB8IHVuZGVmaW5lZCA9PiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHBhcnNlVHJhY2VwYXJlbnQocmVxdWVzdC5nZXQoJ3RyYWNlcGFyZW50JykpID8/IHVuZGVmaW5lZDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnN0IGVycm9yID1cbiAgICAgIGUgaW5zdGFuY2VvZiBFcnJvclxuICAgICAgICA/IGVcbiAgICAgICAgOiBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3IgZHVyaW5nIHBhcnNpbmcgdHJhY2VwYXJlbnQgaGVhZGVyJyk7XG4gICAgbG9nZ2VyLmVycm9yKGVycm9yLm1lc3NhZ2UsIHsgcmVxdWVzdCB9KTtcbiAgfVxufTtcblxuZGVjbGFyZSBtb2R1bGUgJ2V4cHJlc3MnIHtcbiAgZXhwb3J0IGludGVyZmFjZSBMb2NhbHMge1xuICAgIGN4OiB7XG4gICAgICByZXF1ZXN0OiBSZXF1ZXN0Q29udGV4dDtcbiAgICB9O1xuICB9XG59XG4iXX0=