/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 * SPDX-FileCopyrightText: 2024 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import {
  NotificationPreference,
  UserNotificationPreferenceService,
} from '@spartacus/core';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'cx-my-account-v2-notification-preference',
  templateUrl: './my-account-v2-notification-preference.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyAccountV2NotificationPreferenceComponent implements OnInit {
  protected notificationPreferenceService = inject(
    UserNotificationPreferenceService
  );
  preferences$: Observable<NotificationPreference[]>;
  isLoading$: Observable<boolean>;

  protected preferences: NotificationPreference[] = [];

  ngOnInit() {
    this.notificationPreferenceService.resetNotificationPreferences();
    this.preferences$ = this.notificationPreferenceService
      .getPreferences()
      .pipe(tap((preferences) => (this.preferences = preferences)));
    this.notificationPreferenceService.loadPreferences();

    this.isLoading$ = combineLatest([
      this.notificationPreferenceService.getPreferencesLoading(),
      this.notificationPreferenceService.getUpdatePreferencesResultLoading(),
    ]).pipe(
      map(([prefsLoading, updateLoading]) => prefsLoading || updateLoading)
    );
  }

  updatePreference(preference: NotificationPreference) {
    const updatedPreferences: NotificationPreference[] = [];
    this.preferences.forEach((p) => {
      if (p.channel === preference.channel) {
        updatedPreferences.push({
          ...p,
          enabled: !p.enabled,
        });
      } else {
        updatedPreferences.push(p);
      }
    });
    this.notificationPreferenceService.updatePreferences(updatedPreferences);
  }
}
