/*
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { OccEndpoint } from '@spartacus/core';
declare module '@spartacus/core' {
  interface OccEndpoints {
    readTextfieldConfigurationForOrderEntry?: string | OccEndpoint;
  }
}
