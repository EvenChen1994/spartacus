/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { DIALOG_TYPE, LayoutConfig } from '@spartacus/storefront';
import { ConfiguratorConflictSolverDialogComponent } from './configurator-conflict-solver-dialog.component';

export const defaultConflictSolverLayoutConfig: LayoutConfig = {
  launch: {
    CONFLICT_SOLVER: {
      inlineRoot: true,
      component: ConfiguratorConflictSolverDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG,
    },
  },
};
