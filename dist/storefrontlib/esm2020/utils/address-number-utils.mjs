/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Get strings for phone and mobile numbers
 */
export function getAddressNumbers(address, textPhone, textMobile) {
    if (address.cellphone && address.phone) {
        if (address.cellphone === address.phone) {
            return textMobile + ': ' + address.cellphone;
        }
        return `${textPhone}: ${address.phone}\n${textMobile}: ${address.cellphone}`;
    }
    if (address.cellphone) {
        return textMobile + ': ' + address.cellphone;
    }
    if (address.phone) {
        return textPhone + ': ' + address.phone;
    }
    return undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy1udW1iZXItdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3V0aWxzL2FkZHJlc3MtbnVtYmVyLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBSUg7O0dBRUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLE9BQWdCLEVBQ2hCLFNBQWlCLEVBQ2pCLFVBQWtCO0lBRWxCLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1FBQ3RDLElBQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ3ZDLE9BQU8sVUFBVSxHQUFHLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1NBQzlDO1FBQ0QsT0FBTyxHQUFHLFNBQVMsS0FBSyxPQUFPLENBQUMsS0FBSyxLQUFLLFVBQVUsS0FBSyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDOUU7SUFFRCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7UUFDckIsT0FBTyxVQUFVLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7S0FDOUM7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7UUFDakIsT0FBTyxTQUFTLEdBQUcsSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7S0FDekM7SUFFRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjIgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICogU1BEWC1GaWxlQ29weXJpZ2h0VGV4dDogMjAyMyBTQVAgU3BhcnRhY3VzIHRlYW0gPHNwYXJ0YWN1cy10ZWFtQHNhcC5jb20+XG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjBcbiAqL1xuXG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuLyoqXG4gKiBHZXQgc3RyaW5ncyBmb3IgcGhvbmUgYW5kIG1vYmlsZSBudW1iZXJzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZGRyZXNzTnVtYmVycyhcbiAgYWRkcmVzczogQWRkcmVzcyxcbiAgdGV4dFBob25lOiBzdHJpbmcsXG4gIHRleHRNb2JpbGU6IHN0cmluZ1xuKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgaWYgKGFkZHJlc3MuY2VsbHBob25lICYmIGFkZHJlc3MucGhvbmUpIHtcbiAgICBpZiAoYWRkcmVzcy5jZWxscGhvbmUgPT09IGFkZHJlc3MucGhvbmUpIHtcbiAgICAgIHJldHVybiB0ZXh0TW9iaWxlICsgJzogJyArIGFkZHJlc3MuY2VsbHBob25lO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGV4dFBob25lfTogJHthZGRyZXNzLnBob25lfVxcbiR7dGV4dE1vYmlsZX06ICR7YWRkcmVzcy5jZWxscGhvbmV9YDtcbiAgfVxuXG4gIGlmIChhZGRyZXNzLmNlbGxwaG9uZSkge1xuICAgIHJldHVybiB0ZXh0TW9iaWxlICsgJzogJyArIGFkZHJlc3MuY2VsbHBob25lO1xuICB9XG5cbiAgaWYgKGFkZHJlc3MucGhvbmUpIHtcbiAgICByZXR1cm4gdGV4dFBob25lICsgJzogJyArIGFkZHJlc3MucGhvbmU7XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxuIl19