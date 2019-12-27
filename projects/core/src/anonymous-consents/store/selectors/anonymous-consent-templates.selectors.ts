import { createSelector, MemoizedSelector } from '@ngrx/store';
import { ConsentTemplate } from '../../../model/consent.model';
import { StateLoaderSelectors } from '../../../state/utils/index';
import { LoaderState } from '../../../state/utils/loader/loader-state';
import { StateWithAnonymousConsents } from '../anonymous-consents-state';
import { getAnonymousConsentState } from './feature.selector';

export const getAnonymousConsentTemplatesState: MemoizedSelector<
  StateWithAnonymousConsents,
  LoaderState<ConsentTemplate[]>
> = createSelector(
  getAnonymousConsentState,
  state => state.templates
);

export const getAnonymousConsentTemplatesValue: MemoizedSelector<
  StateWithAnonymousConsents,
  ConsentTemplate[]
> = createSelector(
  getAnonymousConsentTemplatesState,
  StateLoaderSelectors.loaderValueSelector
);

export const getAnonymousConsentTemplatesLoading: MemoizedSelector<
  StateWithAnonymousConsents,
  boolean
> = createSelector(
  getAnonymousConsentTemplatesState,
  StateLoaderSelectors.loaderLoadingSelector
);

export const getAnonymousConsentTemplatesSuccess: MemoizedSelector<
  StateWithAnonymousConsents,
  boolean
> = createSelector(
  getAnonymousConsentTemplatesState,
  StateLoaderSelectors.loaderSuccessSelector
);

export const getAnonymousConsentTemplatesError: MemoizedSelector<
  StateWithAnonymousConsents,
  boolean
> = createSelector(
  getAnonymousConsentTemplatesState,
  StateLoaderSelectors.loaderErrorSelector
);

export const getAnonymousConsentTemplate = (
  templateCode: string
): MemoizedSelector<StateWithAnonymousConsents, ConsentTemplate> => {
  return createSelector(
    getAnonymousConsentTemplatesValue,
    templates => {
      return templates
        ? templates.find(template => template.id === templateCode)
        : null;
    }
  );
};
