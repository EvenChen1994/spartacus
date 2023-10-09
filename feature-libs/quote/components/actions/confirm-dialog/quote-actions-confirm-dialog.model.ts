/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quote } from '@spartacus/quote/root';

export interface ConfirmationContext {
  quote: Quote;
  title: string;
  confirmNote: string;
  warningNote?: string;
  validity?: string;
  successMessage?: string;
}