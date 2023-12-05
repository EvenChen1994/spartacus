/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Injectable } from '@angular/core';
import { Config } from '../../../config/config-tokens';
import * as i0 from "@angular/core";
export class AuthConfig {
}
AuthConfig.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AuthConfig, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
AuthConfig.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AuthConfig, providedIn: 'root', useExisting: Config });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: AuthConfig, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                    useExisting: Config,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9hdXRoL3VzZXItYXV0aC9jb25maWcvYXV0aC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLCtCQUErQixDQUFDOztBQTJCdkQsTUFBTSxPQUFnQixVQUFVOzt1R0FBVixVQUFVOzJHQUFWLFVBQVUsY0FIbEIsTUFBTSxlQUNMLE1BQU07MkZBRUMsVUFBVTtrQkFKL0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtvQkFDbEIsV0FBVyxFQUFFLE1BQU07aUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aENvbmZpZyBhcyBMaWJDb25maWcgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWctdG9rZW5zJztcblxuLy8gc2lsZXRSZWZyZXNoVGltZW91dCAtIG9taXR0ZWQgYXMgaXQgaXMgZGVwcmVjYXRlZCBvZiB0eXBvXG4vLyBjbGllbnRJZCAtIHdlIG5lZWQgaXQgZm9yIGNsaWVudCBjcmVkZW50aWFscyBmbG93XG4vLyBkdW1teUNsaWVudFNlY3JldCAtIHdlIG5lZWQgaXQgZm9yIGNsaWVudCBjcmVkZW50aWFscyBmbG93XG4vLyBsb2dpblVybCAtIHNpbWlsYXJseSBsaWtlIHRoZSByZXN0IG9mIGVuZHBvaW50cyB3ZSB3YW50IHRvIGhhdmUgZnVsbCBjb250cm9sIG92ZXIgdGhhdFxuLy8gbG9nb3V0VXJsIC0gc2ltaWxhcmx5IGxpa2UgdGhlIHJlc3Qgb2YgZW5kcG9pbnRzIHdlIHdhbnQgdG8gaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciB0aGF0XG4vLyB0b2tlbkVuZHBvaW50IC0gc2ltaWxhcmx5IGxpa2UgdGhlIHJlc3Qgb2YgZW5kcG9pbnRzIHdlIHdhbnQgdG8gaGF2ZSBmdWxsIGNvbnRyb2wgb3ZlciB0aGF0XG4vLyByZXZvY2F0aW9uRW5kcG9pbnQgLSBzaW1pbGFybHkgbGlrZSB0aGUgcmVzdCBvZiBlbmRwb2ludHMgd2Ugd2FudCB0byBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoYXRcbi8vIHVzZXJpbmZvRW5kcG9pbnQgLSBzaW1pbGFybHkgbGlrZSB0aGUgcmVzdCBvZiBlbmRwb2ludHMgd2Ugd2FudCB0byBoYXZlIGZ1bGwgY29udHJvbCBvdmVyIHRoYXRcbi8vXG5leHBvcnQgdHlwZSBBdXRoTGliQ29uZmlnID0gT21pdDxcbiAgTGliQ29uZmlnLFxuICB8ICdjbGllbnRJZCdcbiAgfCAnZHVtbXlDbGllbnRTZWNyZXQnXG4gIHwgJ3NpbGV0UmVmcmVzaFRpbWVvdXQnXG4gIHwgJ2xvZ2luVXJsJ1xuICB8ICdsb2dvdXRVcmwnXG4gIHwgJ3Rva2VuRW5kcG9pbnQnXG4gIHwgJ3Jldm9jYXRpb25FbmRwb2ludCdcbiAgfCAndXNlcmluZm9FbmRwb2ludCdcbj47XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICB1c2VFeGlzdGluZzogQ29uZmlnLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBdXRoQ29uZmlnIHtcbiAgYXV0aGVudGljYXRpb24/OiB7XG4gICAgLyoqXG4gICAgICogT0F1dGggY2xpZW50IGlkLlxuICAgICAqL1xuICAgIGNsaWVudF9pZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBTZWNyZXQgZm9yIGNsaWVudCByZXF1aXJlZCBieSBIeWJyaXMgT0F1dGguXG4gICAgICovXG4gICAgY2xpZW50X3NlY3JldD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBCYXNlIHVybCBmb3IgYXV0aCBzZXJ2ZXIgKGZvciBsb2dpbiwgdG9rZW4sIHJldm9rZSBlbmRwb2ludHMpLlxuICAgICAqL1xuICAgIGJhc2VVcmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogRW5kcG9pbnQgZm9yIGdldHRpbmcgdG9rZW4uXG4gICAgICovXG4gICAgdG9rZW5FbmRwb2ludD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBFbmRwb2ludCB1cmwgZm9yIHJldm9raW5nIHRva2Vucy5cbiAgICAgKi9cbiAgICByZXZva2VFbmRwb2ludD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBVcmwgZm9yIGxvZ2luIHJlZGlyZWN0IGZvciBJbXBsaWNpdCBhbmQgQXV0aG9yaXphdGlvbiBDb2RlIEZsb3cuXG4gICAgICovXG4gICAgbG9naW5Vcmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUmVkaXJlY3QgdXJsIGFmdGVyIGxvZ291dC5cbiAgICAgKi9cbiAgICBsb2dvdXRVcmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogVXNlcmluZm8gZW5kcG9pbnQuXG4gICAgICovXG4gICAgdXNlcmluZm9FbmRwb2ludD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBDb25maWcgZm9yIGFuZ3VsYXItb2F1dGgtb2lkYyBsaWJyYXJ5LlxuICAgICAqL1xuICAgIE9BdXRoTGliQ29uZmlnPzogQXV0aExpYkNvbmZpZztcbiAgfTtcbn1cblxuZGVjbGFyZSBtb2R1bGUgJy4uLy4uLy4uL2NvbmZpZy9jb25maWctdG9rZW5zJyB7XG4gIGludGVyZmFjZSBDb25maWcgZXh0ZW5kcyBBdXRoQ29uZmlnIHt9XG59XG4iXX0=