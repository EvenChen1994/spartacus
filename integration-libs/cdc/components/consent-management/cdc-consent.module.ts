/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { NgModule } from '@angular/core';
import { I18nModule, UserConsentAdapter } from '@spartacus/core';
import { CdcSiteConsentNormalizer } from './converters/cdc-site-consent.normalizer';
import { CDCSiteConsentAdapter } from './cdc-site-consent.adapter';
import {
  CDC_SITE_CONSENT_NORMALIZER,
  CDC_USER_PREFERENCE_SERIALIZER,
} from './converters/cdc-site-consent.converters';
import { CdcUserPreferenceSerializer } from './converters/cdc-user-preference.serializer';

import { CdcSiteConsentModule } from './outlet/cdc-site-conent.module';
import { CommonModule } from '@angular/common';
import { ConsentManagementService } from 'projects/storefrontlib/cms-components/myaccount/consent-management/components/consent-management.service';
import { CdcConsentManagementService } from './cdc-consent-management.service';

@NgModule({
  imports: [CommonModule, I18nModule, CdcSiteConsentModule],
  providers: [
    { provide: UserConsentAdapter, useClass: CDCSiteConsentAdapter },
    {
      provide: ConsentManagementService,
      useClass: CdcConsentManagementService,
    },
    {
      provide: CDC_SITE_CONSENT_NORMALIZER,
      useExisting: CdcSiteConsentNormalizer,
      multi: true,
    },
    {
      provide: CDC_USER_PREFERENCE_SERIALIZER,
      useExisting: CdcUserPreferenceSerializer,
      multi: true,
    },
  ],
})
export class CDCConsentModule {}
