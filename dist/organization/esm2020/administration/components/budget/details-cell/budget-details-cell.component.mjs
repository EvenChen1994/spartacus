/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CellComponent } from '../../shared';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/storefront";
import * as i2 from "@angular/router";
import * as i3 from "@spartacus/core";
export class BudgetDetailsCellComponent extends CellComponent {
}
BudgetDetailsCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: BudgetDetailsCellComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
BudgetDetailsCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.9", type: BudgetDetailsCellComponent, selector: "cx-org-budget-details-cell", usesInheritance: true, ngImport: i0, template: "<ng-template #details>\n  <div class=\"popover-details\">\n    <div class=\"property\">\n      <label>{{ 'orgBudget.name' | cxTranslate }}</label>\n      <a\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgBudgetDetails',\n            params: model\n          } | cxUrl\n        \"\n      >\n        {{ model.name }}\n      </a>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgBudget.code' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.code }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgBudget.startDate' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.startDate | cxDate }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgBudget.endDate' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.endDate | cxDate }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgBudget.active' | cxTranslate }}</label>\n      <span class=\"value\" [class.is-active]=\"model.active\">\n        {{\n          (model.active ? 'organization.enabled' : 'organization.disabled')\n            | cxTranslate\n        }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgBudget.amount' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.budget }} {{ model.currency?.isocode }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgBudget.unit' | cxTranslate }}</label>\n      <a\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgUnitDetails',\n            params: model.orgUnit\n          } | cxUrl\n        \"\n      >\n        {{ model.orgUnit?.name }}\n      </a>\n    </div>\n  </div>\n</ng-template>\n\n<button\n  class=\"button text\"\n  [cxPopover]=\"details\"\n  [cxPopoverOptions]=\"{\n    placement: 'auto',\n    class: 'my-company-popover',\n    appendToBody: true,\n    displayCloseButton: true\n  }\"\n>\n  {{ model.name }}\n</button>\n", dependencies: [{ kind: "directive", type: i1.PopoverDirective, selector: "[cxPopover]", inputs: ["cxPopover", "cxPopoverOptions"], outputs: ["openPopover", "closePopover"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "pipe", type: i3.TranslatePipe, name: "cxTranslate" }, { kind: "pipe", type: i3.CxDatePipe, name: "cxDate" }, { kind: "pipe", type: i3.UrlPipe, name: "cxUrl" }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: BudgetDetailsCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'cx-org-budget-details-cell', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template #details>\n  <div class=\"popover-details\">\n    <div class=\"property\">\n      <label>{{ 'orgBudget.name' | cxTranslate }}</label>\n      <a\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgBudgetDetails',\n            params: model\n          } | cxUrl\n        \"\n      >\n        {{ model.name }}\n      </a>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgBudget.code' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.code }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgBudget.startDate' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.startDate | cxDate }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgBudget.endDate' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.endDate | cxDate }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgBudget.active' | cxTranslate }}</label>\n      <span class=\"value\" [class.is-active]=\"model.active\">\n        {{\n          (model.active ? 'organization.enabled' : 'organization.disabled')\n            | cxTranslate\n        }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgBudget.amount' | cxTranslate }}</label>\n      <span class=\"value\">\n        {{ model.budget }} {{ model.currency?.isocode }}\n      </span>\n    </div>\n\n    <div class=\"property\">\n      <label>{{ 'orgBudget.unit' | cxTranslate }}</label>\n      <a\n        class=\"value\"\n        [routerLink]=\"\n          {\n            cxRoute: 'orgUnitDetails',\n            params: model.orgUnit\n          } | cxUrl\n        \"\n      >\n        {{ model.orgUnit?.name }}\n      </a>\n    </div>\n  </div>\n</ng-template>\n\n<button\n  class=\"button text\"\n  [cxPopover]=\"details\"\n  [cxPopoverOptions]=\"{\n    placement: 'auto',\n    class: 'my-company-popover',\n    appendToBody: true,\n    displayCloseButton: true\n  }\"\n>\n  {{ model.name }}\n</button>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVkZ2V0LWRldGFpbHMtY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvb3JnYW5pemF0aW9uL2FkbWluaXN0cmF0aW9uL2NvbXBvbmVudHMvYnVkZ2V0L2RldGFpbHMtY2VsbC9idWRnZXQtZGV0YWlscy1jZWxsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9vcmdhbml6YXRpb24vYWRtaW5pc3RyYXRpb24vY29tcG9uZW50cy9idWRnZXQvZGV0YWlscy1jZWxsL2J1ZGdldC1kZXRhaWxzLWNlbGwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7Ozs7QUFPN0MsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGFBQWE7O3VIQUFoRCwwQkFBMEI7MkdBQTFCLDBCQUEwQix5RkNkdkMsc2hFQW9GQTsyRkR0RWEsMEJBQTBCO2tCQUx0QyxTQUFTOytCQUNFLDRCQUE0QixtQkFFckIsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENlbGxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9zaGFyZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmctYnVkZ2V0LWRldGFpbHMtY2VsbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9idWRnZXQtZGV0YWlscy1jZWxsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJ1ZGdldERldGFpbHNDZWxsQ29tcG9uZW50IGV4dGVuZHMgQ2VsbENvbXBvbmVudCB7fVxuIiwiPG5nLXRlbXBsYXRlICNkZXRhaWxzPlxuICA8ZGl2IGNsYXNzPVwicG9wb3Zlci1kZXRhaWxzXCI+XG4gICAgPGRpdiBjbGFzcz1cInByb3BlcnR5XCI+XG4gICAgICA8bGFiZWw+e3sgJ29yZ0J1ZGdldC5uYW1lJyB8IGN4VHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzPVwidmFsdWVcIlxuICAgICAgICBbcm91dGVyTGlua109XCJcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjeFJvdXRlOiAnb3JnQnVkZ2V0RGV0YWlscycsXG4gICAgICAgICAgICBwYXJhbXM6IG1vZGVsXG4gICAgICAgICAgfSB8IGN4VXJsXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIHt7IG1vZGVsLm5hbWUgfX1cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiPlxuICAgICAgPGxhYmVsPnt7ICdvcmdCdWRnZXQuY29kZScgfCBjeFRyYW5zbGF0ZSB9fTwvbGFiZWw+XG4gICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+XG4gICAgICAgIHt7IG1vZGVsLmNvZGUgfX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiPlxuICAgICAgPGxhYmVsPnt7ICdvcmdCdWRnZXQuc3RhcnREYXRlJyB8IGN4VHJhbnNsYXRlIH19PC9sYWJlbD5cbiAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAge3sgbW9kZWwuc3RhcnREYXRlIHwgY3hEYXRlIH19XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHlcIj5cbiAgICAgIDxsYWJlbD57eyAnb3JnQnVkZ2V0LmVuZERhdGUnIHwgY3hUcmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICB7eyBtb2RlbC5lbmREYXRlIHwgY3hEYXRlIH19XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHJvcGVydHlcIj5cbiAgICAgIDxsYWJlbD57eyAnb3JnQnVkZ2V0LmFjdGl2ZScgfCBjeFRyYW5zbGF0ZSB9fTwvbGFiZWw+XG4gICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCIgW2NsYXNzLmlzLWFjdGl2ZV09XCJtb2RlbC5hY3RpdmVcIj5cbiAgICAgICAge3tcbiAgICAgICAgICAobW9kZWwuYWN0aXZlID8gJ29yZ2FuaXphdGlvbi5lbmFibGVkJyA6ICdvcmdhbml6YXRpb24uZGlzYWJsZWQnKVxuICAgICAgICAgICAgfCBjeFRyYW5zbGF0ZVxuICAgICAgICB9fVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInByb3BlcnR5XCI+XG4gICAgICA8bGFiZWw+e3sgJ29yZ0J1ZGdldC5hbW91bnQnIHwgY3hUcmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ2YWx1ZVwiPlxuICAgICAgICB7eyBtb2RlbC5idWRnZXQgfX0ge3sgbW9kZWwuY3VycmVuY3k/Lmlzb2NvZGUgfX1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwcm9wZXJ0eVwiPlxuICAgICAgPGxhYmVsPnt7ICdvcmdCdWRnZXQudW5pdCcgfCBjeFRyYW5zbGF0ZSB9fTwvbGFiZWw+XG4gICAgICA8YVxuICAgICAgICBjbGFzcz1cInZhbHVlXCJcbiAgICAgICAgW3JvdXRlckxpbmtdPVwiXG4gICAgICAgICAge1xuICAgICAgICAgICAgY3hSb3V0ZTogJ29yZ1VuaXREZXRhaWxzJyxcbiAgICAgICAgICAgIHBhcmFtczogbW9kZWwub3JnVW5pdFxuICAgICAgICAgIH0gfCBjeFVybFxuICAgICAgICBcIlxuICAgICAgPlxuICAgICAgICB7eyBtb2RlbC5vcmdVbml0Py5uYW1lIH19XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPGJ1dHRvblxuICBjbGFzcz1cImJ1dHRvbiB0ZXh0XCJcbiAgW2N4UG9wb3Zlcl09XCJkZXRhaWxzXCJcbiAgW2N4UG9wb3Zlck9wdGlvbnNdPVwie1xuICAgIHBsYWNlbWVudDogJ2F1dG8nLFxuICAgIGNsYXNzOiAnbXktY29tcGFueS1wb3BvdmVyJyxcbiAgICBhcHBlbmRUb0JvZHk6IHRydWUsXG4gICAgZGlzcGxheUNsb3NlQnV0dG9uOiB0cnVlXG4gIH1cIlxuPlxuICB7eyBtb2RlbC5uYW1lIH19XG48L2J1dHRvbj5cbiJdfQ==