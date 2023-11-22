/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { NgModule } from '@angular/core';
import { CloseAccountModule } from './close-account/close-account.module';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
import { RegisterComponentModule } from './register/register.module';
import { ResetPasswordModule } from './reset-password/reset-password.module';
import { UpdateEmailModule } from './update-email/update-email.module';
import { UpdatePasswordModule } from './update-password/update-password.module';
import { UpdateProfileModule } from './update-profile/update-profile.module';
import { NewProfileModule } from './new-user-profile/new-profile.module';
import { NewEmailModule } from './new-email/new-email.module';
import { NewCombinedProfileModule } from './new-combined-user-profile/new-combined-profile.module';
import { MyAccountV2UserModule } from './my-account-v2/my-account-v2-user.module';

@NgModule({
  imports: [
    RegisterComponentModule,
    UpdateProfileModule,
    UpdateEmailModule,
    UpdatePasswordModule,
    ForgotPasswordModule,
    ResetPasswordModule,
    CloseAccountModule,
    NewProfileModule,
    NewEmailModule,
    MyAccountV2UserModule,
    NewCombinedProfileModule,
  ],
})
export class UserProfileComponentsModule {}
