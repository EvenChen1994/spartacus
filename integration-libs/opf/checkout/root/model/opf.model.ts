/*
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

export interface OpfRenderPaymentMethodEvent {
  isLoading: boolean;
  isError: boolean;
  renderType?: OpfPaymentMethodType | null;
  data?: string | null;
}

export enum OpfPaymentMethodType {
  DESTINATION = 'DESTINATION',
  DYNAMIC_SCRIPT = 'DYNAMIC_SCRIPT',
}