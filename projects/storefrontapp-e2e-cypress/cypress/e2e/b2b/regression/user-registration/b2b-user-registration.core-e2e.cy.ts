/*
 * SPDX-FileCopyrightText: 2022 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  fillOrganizationUserRegistrationForm,
  navigateToOrganizationUserRegisterPage,
  submitOrganizationUserRegistrationForm,
  verifyGlobalMessageAfterRegistration,
  verifyTabbingOrder,
} from '../../../../helpers/b2b/b2b-user-registration';
import { viewportContext } from '../../../../helpers/viewport-context';
import { clearAllStorage } from '../../../../support/utils/clear-all-storage';
import { getSampleUser } from './../../../../sample-data/checkout-flow';

context('B2B - User Registration', () => {
  viewportContext(['mobile', 'desktop'], () => {
    beforeEach(() => {
      clearAllStorage();
    });

    describe('Registration form', { testIsolation: false }, () => {
      before(() => {
        cy.clearAllLocalStorage();
        cy.window().then((win) => win.sessionStorage.clear());
        cy.visit('/');
      });

      it('should navigate to organization user registration page', () => {
        navigateToOrganizationUserRegisterPage();
      });

      it('should fill registration form and register user', () => {
        fillOrganizationUserRegistrationForm(
          getSampleUser(),
          'Please register my account'
        );
      });

      it('should verify tabbing order', () => {
        // Accessibility
        verifyTabbingOrder();
      });

      it('should submit the form filled with data', () => {
        submitOrganizationUserRegistrationForm();
      });

      it('should verify global message after successful registration', () => {
        const message =
          'Thank you for registering! A representative will contact you shortly and confirm your access information.';
        verifyGlobalMessageAfterRegistration(message);
      });
    });
  });
});