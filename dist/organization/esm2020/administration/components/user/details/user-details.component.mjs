/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { startWith, switchMap } from 'rxjs/operators';
import { ItemService } from '../../shared/item.service';
import { UserItemService } from '../services/user-item.service';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/item.service";
import * as i2 from "@spartacus/organization/administration/core";
import * as i3 from "@angular/common";
import * as i4 from "../../shared/card/card.component";
import * as i5 from "@angular/router";
import * as i6 from "../../shared/detail/toggle-status-action/toggle-status.component";
import * as i7 from "../../shared/item-exists.directive";
import * as i8 from "../../shared/detail/disable-info/disable-info.component";
import * as i9 from "@spartacus/storefront";
import * as i10 from "@spartacus/core";
export class UserDetailsComponent {
    constructor(itemService, b2bUserService) {
        this.itemService = itemService;
        this.b2bUserService = b2bUserService;
        this.model$ = this.itemService.key$.pipe(switchMap((code) => this.itemService.load(code)), startWith({}));
        this.isInEditMode$ = this.itemService.isInEditMode$;
        this.isUpdatingUserAllowed = this.b2bUserService.isUpdatingUserAllowed();
        this.availableRoles = this.b2bUserService
            .getAllRoles()
            .map((role) => role.toString());
        this.availableRights = this.b2bUserService
            .getAllRights()
            .map((right) => right.toString());
    }
    hasRight(model) {
        return (model.roles ?? []).some((role) => this.availableRights.includes(role));
    }
}
UserDetailsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: UserDetailsComponent, deps: [{ token: i1.ItemService }, { token: i2.B2BUserService }], target: i0.ɵɵFactoryTarget.Component });
UserDetailsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: UserDetailsComponent, selector: "cx-org-user-details", host: { classAttribute: "content-wrapper" }, providers: [
        {
            provide: ItemService,
            useExisting: UserItemService,
        },
    ], ngImport: i0, template: "<cx-org-card\n  *ngIf=\"model$ | async as model\"\n  i18nRoot=\"orgUser.details\"\n  [cxFocus]=\"{ refreshFocus: model }\"\n>\n  <a\n    actions\n    *ngIf=\"isUpdatingUserAllowed\"\n    class=\"link edit\"\n    [class.disabled]=\"!model.active || (isInEditMode$ | async)\"\n    [routerLink]=\"{ cxRoute: 'orgUserEdit', params: model } | cxUrl\"\n  >\n    {{ 'organization.edit' | cxTranslate }}\n  </a>\n\n  <cx-org-toggle-status\n    actions\n    *ngIf=\"isUpdatingUserAllowed\"\n    key=\"customerId\"\n    i18nRoot=\"orgUser\"\n  ></cx-org-toggle-status>\n\n  <cx-org-disable-info info i18nRoot=\"orgUser\"> </cx-org-disable-info>\n\n  <section main class=\"details\" cxOrgItemExists>\n    <div class=\"property\">\n      <label>{{ 'orgUser.name' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.name }}\n      </span>\n    </div>\n\n    <div class=\"property full-width\">\n      <label>{{ 'orgUser.uid' | cxTranslate }}</label>\n      <span class=\"value\">\n        <ng-container *cxFeatureLevel=\"'6.7'\">\n          {{ model.displayUid }}\n        </ng-container>\n        <ng-container *cxFeatureLevel=\"'!6.7'\">\n          {{ model.uid }}\n        </ng-container>\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUser.roles' | cxTranslate }}</label>\n      <ul class=\"value\">\n        <ng-container *ngFor=\"let role of model.roles\">\n          <li\n            *ngIf=\"availableRoles.includes(role)\"\n            [innerText]=\"'organization.userRoles.' + role | cxTranslate\"\n          ></li>\n        </ng-container>\n        <li *ngIf=\"model.roles?.length === 0\">-</li>\n      </ul>\n    </div>\n\n    <ng-container *ngIf=\"hasRight(model)\">\n      <div class=\"property\">\n        <label>{{ 'orgUser.rights' | cxTranslate }}</label>\n        <ul class=\"value\">\n          <ng-container *ngFor=\"let role of model.roles\">\n            <li\n              *ngIf=\"availableRights.includes(role)\"\n              [innerText]=\"'organization.userRights.' + role | cxTranslate\"\n            ></li>\n          </ng-container>\n          <li *ngIf=\"model.roles?.length === 0\">-</li>\n        </ul>\n      </div>\n    </ng-container>\n\n    <div class=\"property\">\n      <label>{{ 'orgUser.orgUnit' | cxTranslate }}</label>\n      <a\n        *ngIf=\"isUpdatingUserAllowed; else showOrgUnitValueWithoutNavigation\"\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgUnitDetails',\n            params: model.orgUnit\n          } | cxUrl\n        \"\n      >\n        {{ model.orgUnit?.name }}\n      </a>\n      <ng-template #showOrgUnitValueWithoutNavigation>\n        <div class=\"orgUnit\">{{ model.orgUnit?.name }}</div>\n      </ng-template>\n    </div>\n    <div class=\"property full-width\">\n      <a\n        *ngIf=\"model.customerId && isUpdatingUserAllowed\"\n        class=\"link\"\n        [class.disabled]=\"!model.active\"\n        [routerLink]=\"\n          { cxRoute: 'orgUserChangePassword', params: model } | cxUrl\n        \"\n      >\n        {{ 'orgUser.links.password' | cxTranslate }}\n      </a>\n    </div>\n  </section>\n\n  <section main class=\"link-list\">\n    <ng-container *ngIf=\"model.customerId\">\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUserApprovers', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUser.links.approvers' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUserUserGroups', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUser.links.userGroup' | cxTranslate }}\n      </a>\n\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUserPermissions', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUser.links.permission' | cxTranslate }}\n      </a>\n    </ng-container>\n  </section>\n</cx-org-card>\n", dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.CardComponent, selector: "cx-org-card", inputs: ["i18nRoot", "previous", "subtitle", "showHint"] }, { kind: "directive", type: i5.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i5.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "component", type: i6.ToggleStatusComponent, selector: "cx-org-toggle-status", inputs: ["i18nRoot", "key", "disabled"] }, { kind: "directive", type: i7.ItemExistsDirective, selector: "[cxOrgItemExists]" }, { kind: "component", type: i8.DisableInfoComponent, selector: "cx-org-disable-info", inputs: ["i18nRoot", "displayInfoConfig", "displayCustomInfo"] }, { kind: "directive", type: i9.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "directive", type: i10.FeatureLevelDirective, selector: "[cxFeatureLevel]", inputs: ["cxFeatureLevel"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i10.UrlPipe, name: "cxUrl" }, { kind: "pipe", type: i10.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: UserDetailsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-user-details', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: ItemService,
                            useExisting: UserItemService,
                        },
                    ], host: { class: 'content-wrapper' }, template: "<cx-org-card\n  *ngIf=\"model$ | async as model\"\n  i18nRoot=\"orgUser.details\"\n  [cxFocus]=\"{ refreshFocus: model }\"\n>\n  <a\n    actions\n    *ngIf=\"isUpdatingUserAllowed\"\n    class=\"link edit\"\n    [class.disabled]=\"!model.active || (isInEditMode$ | async)\"\n    [routerLink]=\"{ cxRoute: 'orgUserEdit', params: model } | cxUrl\"\n  >\n    {{ 'organization.edit' | cxTranslate }}\n  </a>\n\n  <cx-org-toggle-status\n    actions\n    *ngIf=\"isUpdatingUserAllowed\"\n    key=\"customerId\"\n    i18nRoot=\"orgUser\"\n  ></cx-org-toggle-status>\n\n  <cx-org-disable-info info i18nRoot=\"orgUser\"> </cx-org-disable-info>\n\n  <section main class=\"details\" cxOrgItemExists>\n    <div class=\"property\">\n      <label>{{ 'orgUser.name' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.name }}\n      </span>\n    </div>\n\n    <div class=\"property full-width\">\n      <label>{{ 'orgUser.uid' | cxTranslate }}</label>\n      <span class=\"value\">\n        <ng-container *cxFeatureLevel=\"'6.7'\">\n          {{ model.displayUid }}\n        </ng-container>\n        <ng-container *cxFeatureLevel=\"'!6.7'\">\n          {{ model.uid }}\n        </ng-container>\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUser.roles' | cxTranslate }}</label>\n      <ul class=\"value\">\n        <ng-container *ngFor=\"let role of model.roles\">\n          <li\n            *ngIf=\"availableRoles.includes(role)\"\n            [innerText]=\"'organization.userRoles.' + role | cxTranslate\"\n          ></li>\n        </ng-container>\n        <li *ngIf=\"model.roles?.length === 0\">-</li>\n      </ul>\n    </div>\n\n    <ng-container *ngIf=\"hasRight(model)\">\n      <div class=\"property\">\n        <label>{{ 'orgUser.rights' | cxTranslate }}</label>\n        <ul class=\"value\">\n          <ng-container *ngFor=\"let role of model.roles\">\n            <li\n              *ngIf=\"availableRights.includes(role)\"\n              [innerText]=\"'organization.userRights.' + role | cxTranslate\"\n            ></li>\n          </ng-container>\n          <li *ngIf=\"model.roles?.length === 0\">-</li>\n        </ul>\n      </div>\n    </ng-container>\n\n    <div class=\"property\">\n      <label>{{ 'orgUser.orgUnit' | cxTranslate }}</label>\n      <a\n        *ngIf=\"isUpdatingUserAllowed; else showOrgUnitValueWithoutNavigation\"\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgUnitDetails',\n            params: model.orgUnit\n          } | cxUrl\n        \"\n      >\n        {{ model.orgUnit?.name }}\n      </a>\n      <ng-template #showOrgUnitValueWithoutNavigation>\n        <div class=\"orgUnit\">{{ model.orgUnit?.name }}</div>\n      </ng-template>\n    </div>\n    <div class=\"property full-width\">\n      <a\n        *ngIf=\"model.customerId && isUpdatingUserAllowed\"\n        class=\"link\"\n        [class.disabled]=\"!model.active\"\n        [routerLink]=\"\n          { cxRoute: 'orgUserChangePassword', params: model } | cxUrl\n        \"\n      >\n        {{ 'orgUser.links.password' | cxTranslate }}\n      </a>\n    </div>\n  </section>\n\n  <section main class=\"link-list\">\n    <ng-container *ngIf=\"model.customerId\">\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUserApprovers', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUser.links.approvers' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUserUserGroups', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUser.links.userGroup' | cxTranslate }}\n      </a>\n\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUserPermissions', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUser.links.permission' | cxTranslate }}\n      </a>\n    </ng-container>\n  </section>\n</cx-org-card>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ItemService }, { type: i2.B2BUserService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy91c2VyL2RldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy91c2VyL2RldGFpbHMvdXNlci1kZXRhaWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FBZWhFLE1BQU0sT0FBTyxvQkFBb0I7SUFpQi9CLFlBQ1ksV0FBaUMsRUFDakMsY0FBOEI7UUFEOUIsZ0JBQVcsR0FBWCxXQUFXLENBQXNCO1FBQ2pDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWpCMUMsV0FBTSxHQUF3QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ3RELFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFDaEQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUNkLENBQUM7UUFDRixrQkFBYSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO1FBRS9DLDBCQUFxQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUVwRSxtQkFBYyxHQUFhLElBQUksQ0FBQyxjQUFjO2FBQzNDLFdBQVcsRUFBRTthQUNiLEdBQUcsQ0FBQyxDQUFDLElBQWlCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLG9CQUFlLEdBQWEsSUFBSSxDQUFDLGNBQWM7YUFDNUMsWUFBWSxFQUFFO2FBQ2QsR0FBRyxDQUFDLENBQUMsS0FBbUIsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFLL0MsQ0FBQztJQUVKLFFBQVEsQ0FBQyxLQUFjO1FBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFLENBQy9DLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUNwQyxDQUFDO0lBQ0osQ0FBQzs7aUhBMUJVLG9CQUFvQjtxR0FBcEIsb0JBQW9CLDJGQVJwQjtRQUNUO1lBQ0UsT0FBTyxFQUFFLFdBQVc7WUFDcEIsV0FBVyxFQUFFLGVBQWU7U0FDN0I7S0FDRiwwQkN2QkgsdTZIQW1JQTsyRkR6R2Esb0JBQW9CO2tCQVpoQyxTQUFTOytCQUNFLHFCQUFxQixtQkFFZCx1QkFBdUIsQ0FBQyxNQUFNLGFBQ3BDO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxXQUFXOzRCQUNwQixXQUFXLEVBQUUsZUFBZTt5QkFDN0I7cUJBQ0YsUUFDSyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEIyQlVzZXIsIEIyQlVzZXJSb2xlLCBCMkJVc2VyUmlnaHQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2l0ZW0uc2VydmljZSc7XG5pbXBvcnQgeyBVc2VySXRlbVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLWl0ZW0uc2VydmljZSc7XG5pbXBvcnQgeyBCMkJVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmctdXNlci1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VzZXItZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBJdGVtU2VydmljZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBVc2VySXRlbVNlcnZpY2UsXG4gICAgfSxcbiAgXSxcbiAgaG9zdDogeyBjbGFzczogJ2NvbnRlbnQtd3JhcHBlcicgfSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckRldGFpbHNDb21wb25lbnQge1xuICB1c2VyR3VhcmRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgbW9kZWwkOiBPYnNlcnZhYmxlPEIyQlVzZXI+ID0gdGhpcy5pdGVtU2VydmljZS5rZXkkLnBpcGUoXG4gICAgc3dpdGNoTWFwKChjb2RlKSA9PiB0aGlzLml0ZW1TZXJ2aWNlLmxvYWQoY29kZSkpLFxuICAgIHN0YXJ0V2l0aCh7fSlcbiAgKTtcbiAgaXNJbkVkaXRNb2RlJCA9IHRoaXMuaXRlbVNlcnZpY2UuaXNJbkVkaXRNb2RlJDtcblxuICBpc1VwZGF0aW5nVXNlckFsbG93ZWQgPSB0aGlzLmIyYlVzZXJTZXJ2aWNlLmlzVXBkYXRpbmdVc2VyQWxsb3dlZCgpO1xuXG4gIGF2YWlsYWJsZVJvbGVzOiBzdHJpbmdbXSA9IHRoaXMuYjJiVXNlclNlcnZpY2VcbiAgICAuZ2V0QWxsUm9sZXMoKVxuICAgIC5tYXAoKHJvbGU6IEIyQlVzZXJSb2xlKSA9PiByb2xlLnRvU3RyaW5nKCkpO1xuICBhdmFpbGFibGVSaWdodHM6IHN0cmluZ1tdID0gdGhpcy5iMmJVc2VyU2VydmljZVxuICAgIC5nZXRBbGxSaWdodHMoKVxuICAgIC5tYXAoKHJpZ2h0OiBCMkJVc2VyUmlnaHQpID0+IHJpZ2h0LnRvU3RyaW5nKCkpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBpdGVtU2VydmljZTogSXRlbVNlcnZpY2U8QjJCVXNlcj4sXG4gICAgcHJvdGVjdGVkIGIyYlVzZXJTZXJ2aWNlOiBCMkJVc2VyU2VydmljZVxuICApIHt9XG5cbiAgaGFzUmlnaHQobW9kZWw6IEIyQlVzZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKG1vZGVsLnJvbGVzID8/IFtdKS5zb21lKChyb2xlOiBzdHJpbmcpID0+XG4gICAgICB0aGlzLmF2YWlsYWJsZVJpZ2h0cy5pbmNsdWRlcyhyb2xlKVxuICAgICk7XG4gIH1cbn1cbiIsIjxjeC1vcmctY2FyZFxuICAqbmdJZj1cIm1vZGVsJCB8IGFzeW5jIGFzIG1vZGVsXCJcbiAgaTE4blJvb3Q9XCJvcmdVc2VyLmRldGFpbHNcIlxuICBbY3hGb2N1c109XCJ7IHJlZnJlc2hGb2N1czogbW9kZWwgfVwiXG4+XG4gIDxhXG4gICAgYWN0aW9uc1xuICAgICpuZ0lmPVwiaXNVcGRhdGluZ1VzZXJBbGxvd2VkXCJcbiAgICBjbGFzcz1cImxpbmsgZWRpdFwiXG4gICAgW2NsYXNzLmRpc2FibGVkXT1cIiFtb2RlbC5hY3RpdmUgfHwgKGlzSW5FZGl0TW9kZSQgfCBhc3luYylcIlxuICAgIFtyb3V0ZXJMaW5rXT1cInsgY3hSb3V0ZTogJ29yZ1VzZXJFZGl0JywgcGFyYW1zOiBtb2RlbCB9IHwgY3hVcmxcIlxuICA+XG4gICAge3sgJ29yZ2FuaXphdGlvbi5lZGl0JyB8IGN4VHJhbnNsYXRlIH19XG4gIDwvYT5cblxuICA8Y3gtb3JnLXRvZ2dsZS1zdGF0dXNcbiAgICBhY3Rpb25zXG4gICAgKm5nSWY9XCJpc1VwZGF0aW5nVXNlckFsbG93ZWRcIlxuICAgIGtleT1cImN1c3RvbWVySWRcIlxuICAgIGkxOG5Sb290PVwib3JnVXNlclwiXG4gID48L2N4LW9yZy10b2dnbGUtc3RhdHVzPlxuXG4gIDxjeC1vcmctZGlzYWJsZS1pbmZvIGluZm8gaTE4blJvb3Q9XCJvcmdVc2VyXCI+IDwvY3gtb3JnLWRpc2FibGUtaW5mbz5cblxuICA8c2VjdGlvbiBtYWluIGNsYXNzPVwiZGV0YWlsc1wiIGN4T3JnSXRlbUV4aXN0cz5cbiAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHlcIj5cbiAgICAgIDxsYWJlbD57eyAnb3JnVXNlci5uYW1lJyB8IGN4VHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAge3sgbW9kZWwubmFtZSB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInByb3BlcnR5IGZ1bGwtd2lkdGhcIj5cbiAgICAgIDxsYWJlbD57eyAnb3JnVXNlci51aWQnIHwgY3hUcmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpjeEZlYXR1cmVMZXZlbD1cIic2LjcnXCI+XG4gICAgICAgICAge3sgbW9kZWwuZGlzcGxheVVpZCB9fVxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqY3hGZWF0dXJlTGV2ZWw9XCInITYuNydcIj5cbiAgICAgICAgICB7eyBtb2RlbC51aWQgfX1cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHlcIj5cbiAgICAgIDxsYWJlbD57eyAnb3JnVXNlci5yb2xlcycgfCBjeFRyYW5zbGF0ZSB9fTwvbGFiZWw+XG4gICAgICA8dWwgY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCByb2xlIG9mIG1vZGVsLnJvbGVzXCI+XG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICAqbmdJZj1cImF2YWlsYWJsZVJvbGVzLmluY2x1ZGVzKHJvbGUpXCJcbiAgICAgICAgICAgIFtpbm5lclRleHRdPVwiJ29yZ2FuaXphdGlvbi51c2VyUm9sZXMuJyArIHJvbGUgfCBjeFRyYW5zbGF0ZVwiXG4gICAgICAgICAgPjwvbGk+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bGkgKm5nSWY9XCJtb2RlbC5yb2xlcz8ubGVuZ3RoID09PSAwXCI+LTwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhhc1JpZ2h0KG1vZGVsKVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInByb3BlcnR5XCI+XG4gICAgICAgIDxsYWJlbD57eyAnb3JnVXNlci5yaWdodHMnIHwgY3hUcmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgICA8dWwgY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHJvbGUgb2YgbW9kZWwucm9sZXNcIj5cbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAqbmdJZj1cImF2YWlsYWJsZVJpZ2h0cy5pbmNsdWRlcyhyb2xlKVwiXG4gICAgICAgICAgICAgIFtpbm5lclRleHRdPVwiJ29yZ2FuaXphdGlvbi51c2VyUmlnaHRzLicgKyByb2xlIHwgY3hUcmFuc2xhdGVcIlxuICAgICAgICAgICAgPjwvbGk+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPGxpICpuZ0lmPVwibW9kZWwucm9sZXM/Lmxlbmd0aCA9PT0gMFwiPi08L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHlcIj5cbiAgICAgIDxsYWJlbD57eyAnb3JnVXNlci5vcmdVbml0JyB8IGN4VHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgICAgIDxhXG4gICAgICAgICpuZ0lmPVwiaXNVcGRhdGluZ1VzZXJBbGxvd2VkOyBlbHNlIHNob3dPcmdVbml0VmFsdWVXaXRob3V0TmF2aWdhdGlvblwiXG4gICAgICAgIGNsYXNzPVwidmFsdWVcIlxuICAgICAgICBbcm91dGVyTGlua109XCJcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjeFJvdXRlOiAnb3JnVW5pdERldGFpbHMnLFxuICAgICAgICAgICAgcGFyYW1zOiBtb2RlbC5vcmdVbml0XG4gICAgICAgICAgfSB8IGN4VXJsXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIHt7IG1vZGVsLm9yZ1VuaXQ/Lm5hbWUgfX1cbiAgICAgIDwvYT5cbiAgICAgIDxuZy10ZW1wbGF0ZSAjc2hvd09yZ1VuaXRWYWx1ZVdpdGhvdXROYXZpZ2F0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3JnVW5pdFwiPnt7IG1vZGVsLm9yZ1VuaXQ/Lm5hbWUgfX08L2Rpdj5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInByb3BlcnR5IGZ1bGwtd2lkdGhcIj5cbiAgICAgIDxhXG4gICAgICAgICpuZ0lmPVwibW9kZWwuY3VzdG9tZXJJZCAmJiBpc1VwZGF0aW5nVXNlckFsbG93ZWRcIlxuICAgICAgICBjbGFzcz1cImxpbmtcIlxuICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiIW1vZGVsLmFjdGl2ZVwiXG4gICAgICAgIFtyb3V0ZXJMaW5rXT1cIlxuICAgICAgICAgIHsgY3hSb3V0ZTogJ29yZ1VzZXJDaGFuZ2VQYXNzd29yZCcsIHBhcmFtczogbW9kZWwgfSB8IGN4VXJsXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIHt7ICdvcmdVc2VyLmxpbmtzLnBhc3N3b3JkJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvc2VjdGlvbj5cblxuICA8c2VjdGlvbiBtYWluIGNsYXNzPVwibGluay1saXN0XCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm1vZGVsLmN1c3RvbWVySWRcIj5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwibGlua1wiXG4gICAgICAgIFtyb3V0ZXJMaW5rXT1cInsgY3hSb3V0ZTogJ29yZ1VzZXJBcHByb3ZlcnMnLCBwYXJhbXM6IG1vZGVsIH0gfCBjeFVybFwiXG4gICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJpcy1jdXJyZW50XCJcbiAgICAgID5cbiAgICAgICAge3sgJ29yZ1VzZXIubGlua3MuYXBwcm92ZXJzJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICA8L2E+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cImxpbmtcIlxuICAgICAgICBbcm91dGVyTGlua109XCJ7IGN4Um91dGU6ICdvcmdVc2VyVXNlckdyb3VwcycsIHBhcmFtczogbW9kZWwgfSB8IGN4VXJsXCJcbiAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImlzLWN1cnJlbnRcIlxuICAgICAgPlxuICAgICAgICB7eyAnb3JnVXNlci5saW5rcy51c2VyR3JvdXAnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgIDwvYT5cblxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgW3JvdXRlckxpbmtdPVwieyBjeFJvdXRlOiAnb3JnVXNlclBlcm1pc3Npb25zJywgcGFyYW1zOiBtb2RlbCB9IHwgY3hVcmxcIlxuICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiaXMtY3VycmVudFwiXG4gICAgICA+XG4gICAgICAgIHt7ICdvcmdVc2VyLmxpbmtzLnBlcm1pc3Npb24nIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgIDwvYT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9zZWN0aW9uPlxuPC9jeC1vcmctY2FyZD5cbiJdfQ==