import { Injectable } from '@angular/core';
import { Converter, ConsentTemplate, LanguageService } from '@spartacus/core';
import {
  CdcSiteConsentTemplate,
  siteConsentDetailTemplate,
} from 'integration-libs/cdc/core';
import { CdcSiteConsentService } from './cdc-site-consent.service';

@Injectable({ providedIn: 'root' })
export class CdcSiteConsentNormalizer
  implements Converter<CdcSiteConsentTemplate, ConsentTemplate[]>
{
  constructor(
    protected languageService: LanguageService,
    protected cdcSiteConsentService: CdcSiteConsentService
  ) {}

  convert(
    source: CdcSiteConsentTemplate,
    target: ConsentTemplate[]
  ): ConsentTemplate[] {
    if (target === undefined) {
      target = { ...(source as any) } as ConsentTemplate[];
    }
    if (source.siteConsentDetails) {
      target = this.convertConsentEntries(source.siteConsentDetails);
    }
    return target;
  }

  private convertConsentEntries(
    site: siteConsentDetailTemplate[]
  ): ConsentTemplate[] {
    var consents: ConsentTemplate[] = [];
    var siteLanguage = this.cdcSiteConsentService.getActiveLanguage();
    for (var key in site) {
      if (Object.hasOwn(site, key)) {
        if (site[key].isActive === true) {
          var legalStatements = site[key].legalStatements;
          for (var lang in legalStatements) {
            if (Object.hasOwn(legalStatements, lang)) {
              if (lang === siteLanguage) {
                consents.push({
                  id: key,
                  description: legalStatements[lang]?.purpose,
                  version: legalStatements[lang].currentDocVersion,
                  currentConsent: {
                    code: '',
                    consentGivenDate: undefined,
                    consentWithdrawnDate: undefined,
                  },
                });
              }
            }
          }
        }
      }
    }
    return consents;
  }
}
