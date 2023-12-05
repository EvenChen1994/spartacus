/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { startWith, switchMap } from 'rxjs/operators';
import { ItemService } from '../../shared/item.service';
import { UnitItemService } from '../services/unit-item.service';
import * as i0 from "@angular/core";
import * as i1 from "../../shared/item.service";
import * as i2 from "@spartacus/organization/administration/core";
import * as i3 from "@angular/common";
import * as i4 from "../../shared/card/card.component";
import * as i5 from "@angular/router";
import * as i6 from "../../shared/detail/toggle-status-action/toggle-status.component";
import * as i7 from "../../shared/item-exists.directive";
import * as i8 from "@spartacus/storefront";
import * as i9 from "../../shared/detail/disable-info/disable-info.component";
import * as i10 from "@spartacus/core";
export class UnitDetailsComponent {
    constructor(itemService, orgUnitService) {
        this.itemService = itemService;
        this.orgUnitService = orgUnitService;
        this.model$ = this.itemService.key$.pipe(switchMap((code) => this.itemService.load(code)), startWith({}));
        this.isInEditMode$ = this.itemService.isInEditMode$;
        this.isUpdatingUnitAllowed = this.orgUnitService
            ? this.orgUnitService.isUpdatingUnitAllowed()
            : true;
    }
}
UnitDetailsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: UnitDetailsComponent, deps: [{ token: i1.ItemService }, { token: i2.OrgUnitService }], target: i0.ɵɵFactoryTarget.Component });
UnitDetailsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: UnitDetailsComponent, selector: "cx-org-unit-details", host: { classAttribute: "content-wrapper" }, providers: [
        {
            provide: ItemService,
            useExisting: UnitItemService,
        },
    ], ngImport: i0, template: "<cx-org-card\n  *ngIf=\"model$ | async as model\"\n  i18nRoot=\"orgUnit.details\"\n  [cxFocus]=\"{ refreshFocus: model }\"\n  [showHint]=\"true\"\n>\n  <a\n    actions\n    *ngIf=\"isUpdatingUnitAllowed\"\n    class=\"link edit\"\n    [class.disabled]=\"!model.active || (isInEditMode$ | async)\"\n    [routerLink]=\"{ cxRoute: 'orgUnitEdit', params: model } | cxUrl\"\n  >\n    {{ 'organization.edit' | cxTranslate }}\n  </a>\n\n  <cx-org-toggle-status\n    actions\n    key=\"uid\"\n    *ngIf=\"isUpdatingUnitAllowed\"\n    i18nRoot=\"orgUnit\"\n  ></cx-org-toggle-status>\n\n  <cx-org-disable-info\n    info\n    i18nRoot=\"orgUnit\"\n    [displayInfoConfig]=\"{ disabledDisable: true }\"\n  >\n  </cx-org-disable-info>\n\n  <section main class=\"details\" cxOrgItemExists>\n    <div class=\"property\">\n      <label>{{ 'orgUnit.name' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.name }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUnit.uid' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.uid }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUnit.active' | cxTranslate }}</label>\n      <span class=\"value\" [class.is-active]=\"model.active\">\n        {{\n          (model.active ? 'organization.enabled' : 'organization.disabled')\n            | cxTranslate\n        }}\n      </span>\n    </div>\n\n    <div class=\"property\" *ngIf=\"model.approvalProcess?.name\">\n      <label>{{ 'orgUnit.approvalProcess' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.approvalProcess?.name }}\n      </span>\n    </div>\n\n    <div class=\"property\" *ngIf=\"model.parentOrgUnit\">\n      <label>{{ 'orgUnit.parentUnit' | cxTranslate }}</label>\n      <a\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgUnitDetails',\n            params: model.parentOrgUnit\n          } | cxUrl\n        \"\n      >\n        {{ model.parentOrgUnit?.name }}\n      </a>\n    </div>\n  </section>\n\n  <section main class=\"link-list\">\n    <ng-container *ngIf=\"model.uid\">\n      <a\n        class=\"link\"\n        *ngIf=\"isUpdatingUnitAllowed\"\n        [routerLink]=\"{ cxRoute: 'orgUnitChildren', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.units' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitUserList', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.users' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitApprovers', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.approvers' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitAddressList', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.shippingAddresses' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitCostCenters', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.costCenters' | cxTranslate }}\n      </a>\n    </ng-container>\n  </section>\n</cx-org-card>\n", dependencies: [{ kind: "directive", type: i3.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i4.CardComponent, selector: "cx-org-card", inputs: ["i18nRoot", "previous", "subtitle", "showHint"] }, { kind: "directive", type: i5.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i5.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }, { kind: "component", type: i6.ToggleStatusComponent, selector: "cx-org-toggle-status", inputs: ["i18nRoot", "key", "disabled"] }, { kind: "directive", type: i7.ItemExistsDirective, selector: "[cxOrgItemExists]" }, { kind: "directive", type: i8.FocusDirective, selector: "[cxFocus]", inputs: ["cxFocus"] }, { kind: "component", type: i9.DisableInfoComponent, selector: "cx-org-disable-info", inputs: ["i18nRoot", "displayInfoConfig", "displayCustomInfo"] }, { kind: "pipe", type: i3.AsyncPipe, name: "async" }, { kind: "pipe", type: i10.UrlPipe, name: "cxUrl" }, { kind: "pipe", type: i10.TranslatePipe, name: "cxTranslate" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: UnitDetailsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-unit-details', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        {
                            provide: ItemService,
                            useExisting: UnitItemService,
                        },
                    ], host: { class: 'content-wrapper' }, template: "<cx-org-card\n  *ngIf=\"model$ | async as model\"\n  i18nRoot=\"orgUnit.details\"\n  [cxFocus]=\"{ refreshFocus: model }\"\n  [showHint]=\"true\"\n>\n  <a\n    actions\n    *ngIf=\"isUpdatingUnitAllowed\"\n    class=\"link edit\"\n    [class.disabled]=\"!model.active || (isInEditMode$ | async)\"\n    [routerLink]=\"{ cxRoute: 'orgUnitEdit', params: model } | cxUrl\"\n  >\n    {{ 'organization.edit' | cxTranslate }}\n  </a>\n\n  <cx-org-toggle-status\n    actions\n    key=\"uid\"\n    *ngIf=\"isUpdatingUnitAllowed\"\n    i18nRoot=\"orgUnit\"\n  ></cx-org-toggle-status>\n\n  <cx-org-disable-info\n    info\n    i18nRoot=\"orgUnit\"\n    [displayInfoConfig]=\"{ disabledDisable: true }\"\n  >\n  </cx-org-disable-info>\n\n  <section main class=\"details\" cxOrgItemExists>\n    <div class=\"property\">\n      <label>{{ 'orgUnit.name' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.name }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUnit.uid' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.uid }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgUnit.active' | cxTranslate }}</label>\n      <span class=\"value\" [class.is-active]=\"model.active\">\n        {{\n          (model.active ? 'organization.enabled' : 'organization.disabled')\n            | cxTranslate\n        }}\n      </span>\n    </div>\n\n    <div class=\"property\" *ngIf=\"model.approvalProcess?.name\">\n      <label>{{ 'orgUnit.approvalProcess' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.approvalProcess?.name }}\n      </span>\n    </div>\n\n    <div class=\"property\" *ngIf=\"model.parentOrgUnit\">\n      <label>{{ 'orgUnit.parentUnit' | cxTranslate }}</label>\n      <a\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgUnitDetails',\n            params: model.parentOrgUnit\n          } | cxUrl\n        \"\n      >\n        {{ model.parentOrgUnit?.name }}\n      </a>\n    </div>\n  </section>\n\n  <section main class=\"link-list\">\n    <ng-container *ngIf=\"model.uid\">\n      <a\n        class=\"link\"\n        *ngIf=\"isUpdatingUnitAllowed\"\n        [routerLink]=\"{ cxRoute: 'orgUnitChildren', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.units' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitUserList', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.users' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitApprovers', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.approvers' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitAddressList', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.shippingAddresses' | cxTranslate }}\n      </a>\n      <a\n        class=\"link\"\n        [routerLink]=\"{ cxRoute: 'orgUnitCostCenters', params: model } | cxUrl\"\n        routerLinkActive=\"is-current\"\n      >\n        {{ 'orgUnit.links.costCenters' | cxTranslate }}\n      </a>\n    </ng-container>\n  </section>\n</cx-org-card>\n" }]
        }], ctorParameters: function () { return [{ type: i1.ItemService }, { type: i2.OrgUnitService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy91bml0L2RldGFpbHMvdW5pdC1kZXRhaWxzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy91bml0L2RldGFpbHMvdW5pdC1kZXRhaWxzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5FLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FBY2hFLE1BQU0sT0FBTyxvQkFBb0I7SUFXL0IsWUFDWSxXQUFpQyxFQUNqQyxjQUErQjtRQUQvQixnQkFBVyxHQUFYLFdBQVcsQ0FBc0I7UUFDakMsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBWjNDLFdBQU0sR0FBd0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUN0RCxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ2hELFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FDZCxDQUFDO1FBQ0Ysa0JBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztRQUV0QywwQkFBcUIsR0FBRyxJQUFJLENBQUMsY0FBYztZQUNsRCxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsRUFBRTtZQUM3QyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBS04sQ0FBQzs7aUhBZE8sb0JBQW9CO3FHQUFwQixvQkFBb0IsMkZBUnBCO1FBQ1Q7WUFDRSxPQUFPLEVBQUUsV0FBVztZQUNwQixXQUFXLEVBQUUsZUFBZTtTQUM3QjtLQUNGLDBCQ3ZCSCw2MEdBdUhBOzJGRDdGYSxvQkFBb0I7a0JBWmhDLFNBQVM7K0JBQ0UscUJBQXFCLG1CQUVkLHVCQUF1QixDQUFDLE1BQU0sYUFDcEM7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLFdBQVc7NEJBQ3BCLFdBQVcsRUFBRSxlQUFlO3lCQUM3QjtxQkFDRixRQUNLLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFNQRFgtRmlsZUNvcHlyaWdodFRleHQ6IDIwMjMgU0FQIFNwYXJ0YWN1cyB0ZWFtIDxzcGFydGFjdXMtdGVhbUBzYXAuY29tPlxuICpcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBBcGFjaGUtMi4wXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQjJCVW5pdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPcmdVbml0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gJy4uLy4uL3NoYXJlZC9pdGVtLnNlcnZpY2UnO1xuaW1wb3J0IHsgVW5pdEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdW5pdC1pdGVtLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmctdW5pdC1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3VuaXQtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBJdGVtU2VydmljZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBVbml0SXRlbVNlcnZpY2UsXG4gICAgfSxcbiAgXSxcbiAgaG9zdDogeyBjbGFzczogJ2NvbnRlbnQtd3JhcHBlcicgfSxcbn0pXG5leHBvcnQgY2xhc3MgVW5pdERldGFpbHNDb21wb25lbnQge1xuICBtb2RlbCQ6IE9ic2VydmFibGU8QjJCVW5pdD4gPSB0aGlzLml0ZW1TZXJ2aWNlLmtleSQucGlwZShcbiAgICBzd2l0Y2hNYXAoKGNvZGUpID0+IHRoaXMuaXRlbVNlcnZpY2UubG9hZChjb2RlKSksXG4gICAgc3RhcnRXaXRoKHt9KVxuICApO1xuICBpc0luRWRpdE1vZGUkID0gdGhpcy5pdGVtU2VydmljZS5pc0luRWRpdE1vZGUkO1xuXG4gIHJlYWRvbmx5IGlzVXBkYXRpbmdVbml0QWxsb3dlZCA9IHRoaXMub3JnVW5pdFNlcnZpY2VcbiAgICA/IHRoaXMub3JnVW5pdFNlcnZpY2UuaXNVcGRhdGluZ1VuaXRBbGxvd2VkKClcbiAgICA6IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZTxCMkJVbml0PixcbiAgICBwcm90ZWN0ZWQgb3JnVW5pdFNlcnZpY2U/OiBPcmdVbml0U2VydmljZVxuICApIHt9XG59XG4iLCI8Y3gtb3JnLWNhcmRcbiAgKm5nSWY9XCJtb2RlbCQgfCBhc3luYyBhcyBtb2RlbFwiXG4gIGkxOG5Sb290PVwib3JnVW5pdC5kZXRhaWxzXCJcbiAgW2N4Rm9jdXNdPVwieyByZWZyZXNoRm9jdXM6IG1vZGVsIH1cIlxuICBbc2hvd0hpbnRdPVwidHJ1ZVwiXG4+XG4gIDxhXG4gICAgYWN0aW9uc1xuICAgICpuZ0lmPVwiaXNVcGRhdGluZ1VuaXRBbGxvd2VkXCJcbiAgICBjbGFzcz1cImxpbmsgZWRpdFwiXG4gICAgW2NsYXNzLmRpc2FibGVkXT1cIiFtb2RlbC5hY3RpdmUgfHwgKGlzSW5FZGl0TW9kZSQgfCBhc3luYylcIlxuICAgIFtyb3V0ZXJMaW5rXT1cInsgY3hSb3V0ZTogJ29yZ1VuaXRFZGl0JywgcGFyYW1zOiBtb2RlbCB9IHwgY3hVcmxcIlxuICA+XG4gICAge3sgJ29yZ2FuaXphdGlvbi5lZGl0JyB8IGN4VHJhbnNsYXRlIH19XG4gIDwvYT5cblxuICA8Y3gtb3JnLXRvZ2dsZS1zdGF0dXNcbiAgICBhY3Rpb25zXG4gICAga2V5PVwidWlkXCJcbiAgICAqbmdJZj1cImlzVXBkYXRpbmdVbml0QWxsb3dlZFwiXG4gICAgaTE4blJvb3Q9XCJvcmdVbml0XCJcbiAgPjwvY3gtb3JnLXRvZ2dsZS1zdGF0dXM+XG5cbiAgPGN4LW9yZy1kaXNhYmxlLWluZm9cbiAgICBpbmZvXG4gICAgaTE4blJvb3Q9XCJvcmdVbml0XCJcbiAgICBbZGlzcGxheUluZm9Db25maWddPVwieyBkaXNhYmxlZERpc2FibGU6IHRydWUgfVwiXG4gID5cbiAgPC9jeC1vcmctZGlzYWJsZS1pbmZvPlxuXG4gIDxzZWN0aW9uIG1haW4gY2xhc3M9XCJkZXRhaWxzXCIgY3hPcmdJdGVtRXhpc3RzPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiPlxuICAgICAgPGxhYmVsPnt7ICdvcmdVbml0Lm5hbWUnIHwgY3hUcmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICB7eyBtb2RlbC5uYW1lIH19XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHlcIj5cbiAgICAgIDxsYWJlbD57eyAnb3JnVW5pdC51aWQnIHwgY3hUcmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICB7eyBtb2RlbC51aWQgfX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiPlxuICAgICAgPGxhYmVsPnt7ICdvcmdVbml0LmFjdGl2ZScgfCBjeFRyYW5zbGF0ZSB9fTwvbGFiZWw+XG4gICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCIgW2NsYXNzLmlzLWFjdGl2ZV09XCJtb2RlbC5hY3RpdmVcIj5cbiAgICAgICAge3tcbiAgICAgICAgICAobW9kZWwuYWN0aXZlID8gJ29yZ2FuaXphdGlvbi5lbmFibGVkJyA6ICdvcmdhbml6YXRpb24uZGlzYWJsZWQnKVxuICAgICAgICAgICAgfCBjeFRyYW5zbGF0ZVxuICAgICAgICB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInByb3BlcnR5XCIgKm5nSWY9XCJtb2RlbC5hcHByb3ZhbFByb2Nlc3M/Lm5hbWVcIj5cbiAgICAgIDxsYWJlbD57eyAnb3JnVW5pdC5hcHByb3ZhbFByb2Nlc3MnIHwgY3hUcmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICB7eyBtb2RlbC5hcHByb3ZhbFByb2Nlc3M/Lm5hbWUgfX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiICpuZ0lmPVwibW9kZWwucGFyZW50T3JnVW5pdFwiPlxuICAgICAgPGxhYmVsPnt7ICdvcmdVbml0LnBhcmVudFVuaXQnIHwgY3hUcmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPGFcbiAgICAgICAgY2xhc3M9XCJ2YWx1ZVwiXG4gICAgICAgIFtyb3V0ZXJMaW5rXT1cIlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGN4Um91dGU6ICdvcmdVbml0RGV0YWlscycsXG4gICAgICAgICAgICBwYXJhbXM6IG1vZGVsLnBhcmVudE9yZ1VuaXRcbiAgICAgICAgICB9IHwgY3hVcmxcbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAge3sgbW9kZWwucGFyZW50T3JnVW5pdD8ubmFtZSB9fVxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L3NlY3Rpb24+XG5cbiAgPHNlY3Rpb24gbWFpbiBjbGFzcz1cImxpbmstbGlzdFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtb2RlbC51aWRcIj5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwibGlua1wiXG4gICAgICAgICpuZ0lmPVwiaXNVcGRhdGluZ1VuaXRBbGxvd2VkXCJcbiAgICAgICAgW3JvdXRlckxpbmtdPVwieyBjeFJvdXRlOiAnb3JnVW5pdENoaWxkcmVuJywgcGFyYW1zOiBtb2RlbCB9IHwgY3hVcmxcIlxuICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiaXMtY3VycmVudFwiXG4gICAgICA+XG4gICAgICAgIHt7ICdvcmdVbml0LmxpbmtzLnVuaXRzJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICA8L2E+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cImxpbmtcIlxuICAgICAgICBbcm91dGVyTGlua109XCJ7IGN4Um91dGU6ICdvcmdVbml0VXNlckxpc3QnLCBwYXJhbXM6IG1vZGVsIH0gfCBjeFVybFwiXG4gICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJpcy1jdXJyZW50XCJcbiAgICAgID5cbiAgICAgICAge3sgJ29yZ1VuaXQubGlua3MudXNlcnMnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgIDwvYT5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwibGlua1wiXG4gICAgICAgIFtyb3V0ZXJMaW5rXT1cInsgY3hSb3V0ZTogJ29yZ1VuaXRBcHByb3ZlcnMnLCBwYXJhbXM6IG1vZGVsIH0gfCBjeFVybFwiXG4gICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJpcy1jdXJyZW50XCJcbiAgICAgID5cbiAgICAgICAge3sgJ29yZ1VuaXQubGlua3MuYXBwcm92ZXJzJyB8IGN4VHJhbnNsYXRlIH19XG4gICAgICA8L2E+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cImxpbmtcIlxuICAgICAgICBbcm91dGVyTGlua109XCJ7IGN4Um91dGU6ICdvcmdVbml0QWRkcmVzc0xpc3QnLCBwYXJhbXM6IG1vZGVsIH0gfCBjeFVybFwiXG4gICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJpcy1jdXJyZW50XCJcbiAgICAgID5cbiAgICAgICAge3sgJ29yZ1VuaXQubGlua3Muc2hpcHBpbmdBZGRyZXNzZXMnIHwgY3hUcmFuc2xhdGUgfX1cbiAgICAgIDwvYT5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwibGlua1wiXG4gICAgICAgIFtyb3V0ZXJMaW5rXT1cInsgY3hSb3V0ZTogJ29yZ1VuaXRDb3N0Q2VudGVycycsIHBhcmFtczogbW9kZWwgfSB8IGN4VXJsXCJcbiAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImlzLWN1cnJlbnRcIlxuICAgICAgPlxuICAgICAgICB7eyAnb3JnVW5pdC5saW5rcy5jb3N0Q2VudGVycycgfCBjeFRyYW5zbGF0ZSB9fVxuICAgICAgPC9hPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3NlY3Rpb24+XG48L2N4LW9yZy1jYXJkPlxuIl19