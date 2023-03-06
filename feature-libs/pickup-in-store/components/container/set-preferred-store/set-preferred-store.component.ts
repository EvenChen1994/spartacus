/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Component, Input, OnInit, Optional } from '@angular/core';

import {
  PointOfServiceNames,
  PreferredStoreFacade,
} from '@spartacus/pickup-in-store/root';
import { ICON_TYPE, OutletContextData } from '@spartacus/storefront';

@Component({
  selector: 'cx-set-preferred-store',
  templateUrl: './set-preferred-store.component.html',
})
export class SetPreferredStoreComponent implements OnInit {
  readonly ICON_TYPE = ICON_TYPE;
  @Input() pointOfServiceName: PointOfServiceNames;

  public storeSelected$ = this.preferredStoreFacade.getPreferredStore$();

  constructor(
    protected preferredStoreFacade: PreferredStoreFacade,
    @Optional() protected outlet: OutletContextData<PointOfServiceNames>
  ) {}

  ngOnInit() {
    this.outlet?.context$.subscribe(
      (pointOfServiceNames) => (this.pointOfServiceName = pointOfServiceNames)
    );
  }

  setAsPreferred(): boolean {
    this.preferredStoreFacade.setPreferredStore(this.pointOfServiceName);
    return false;
  }
}