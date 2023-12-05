/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/product-configurator/common";
import * as i2 from "../config/configurator-core.config";
//Not provided in root, as this would break lazy loading
export class RulebasedConfiguratorConnector {
    constructor(adapters, configUtilsService, config) {
        this.adapters = adapters;
        this.configUtilsService = configUtilsService;
        this.config = config;
    }
    createConfiguration(owner, configIdTemplate, forceReset = false) {
        return this.getAdapter(owner.configuratorType).createConfiguration(owner, configIdTemplate, forceReset);
    }
    readConfiguration(configId, groupId, configurationOwner) {
        return this.getAdapter(configurationOwner.configuratorType).readConfiguration(configId, groupId, configurationOwner);
    }
    updateConfiguration(configuration) {
        return this.getAdapter(configuration.owner.configuratorType).updateConfiguration(configuration);
    }
    addToCart(parameters) {
        return this.getAdapter(parameters.owner.configuratorType).addToCart(parameters);
    }
    readConfigurationForCartEntry(parameters) {
        return this.getAdapter(parameters.owner.configuratorType).readConfigurationForCartEntry(parameters);
    }
    updateConfigurationForCartEntry(parameters) {
        return this.getAdapter(parameters.configuration.owner.configuratorType).updateConfigurationForCartEntry(parameters);
    }
    readConfigurationForOrderEntry(parameters) {
        return this.getAdapter(parameters.owner.configuratorType).readConfigurationForOrderEntry(parameters);
    }
    readPriceSummary(configuration) {
        return this.getAdapter(configuration.owner.configuratorType).readPriceSummary(configuration);
    }
    getConfigurationOverview(configuration) {
        return this.getAdapter(configuration.owner.configuratorType).getConfigurationOverview(configuration.configId);
    }
    updateConfigurationOverview(configuration) {
        const overview = configuration.overview;
        return overview
            ? this.getAdapter(configuration.owner.configuratorType).updateConfigurationOverview(overview)
            : this.getAdapter(configuration.owner.configuratorType).getConfigurationOverview(configuration.configId);
    }
    searchVariants(configuration) {
        return this.getAdapter(configuration.owner.configuratorType).searchVariants(configuration.configId);
    }
    getAdapter(configuratorType) {
        const adapterResult = this.adapters.find((adapter) => this.isAdapterMatching(adapter, configuratorType));
        if (adapterResult) {
            return adapterResult;
        }
        else {
            throw new Error('No adapter found for configurator type: ' + configuratorType);
        }
    }
    isAdapterMatching(adapter, configuratorType) {
        let matching = adapter.getConfiguratorType() === configuratorType;
        if (matching && "CLOUDCPQCONFIGURATOR" /* ConfiguratorType.CPQ */ === configuratorType) {
            const isCpqOverOccRequested = this.config?.productConfigurator?.cpqOverOcc ?? false;
            const isCpqOverOccSupported = !!adapter.supportsCpqOverOcc && adapter.supportsCpqOverOcc();
            matching = isCpqOverOccRequested === isCpqOverOccSupported;
        }
        return matching;
    }
}
RulebasedConfiguratorConnector.CONFIGURATOR_ADAPTER_LIST = new InjectionToken('ConfiguratorAdapterList');
RulebasedConfiguratorConnector.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: RulebasedConfiguratorConnector, deps: [{ token: RulebasedConfiguratorConnector.CONFIGURATOR_ADAPTER_LIST }, { token: i1.CommonConfiguratorUtilsService }, { token: i2.ConfiguratorCoreConfig, optional: true }], target: i0.ɵɵFactoryTarget.Injectable });
RulebasedConfiguratorConnector.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: RulebasedConfiguratorConnector });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: RulebasedConfiguratorConnector, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [RulebasedConfiguratorConnector.CONFIGURATOR_ADAPTER_LIST]
                }] }, { type: i1.CommonConfiguratorUtilsService }, { type: i2.ConfiguratorCoreConfig, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnVsZWJhc2VkLWNvbmZpZ3VyYXRvci5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9mZWF0dXJlLWxpYnMvcHJvZHVjdC1jb25maWd1cmF0b3IvcnVsZWJhc2VkL2NvcmUvY29ubmVjdG9ycy9ydWxlYmFzZWQtY29uZmlndXJhdG9yLmNvbm5lY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVk3RSx3REFBd0Q7QUFFeEQsTUFBTSxPQUFPLDhCQUE4QjtJQXFCekMsWUFFWSxRQUF3QyxFQUN4QyxrQkFBa0QsRUFDdEMsTUFBK0I7UUFGM0MsYUFBUSxHQUFSLFFBQVEsQ0FBZ0M7UUFDeEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFnQztRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUF5QjtJQUNwRCxDQUFDO0lBRUosbUJBQW1CLENBQ2pCLEtBQStCLEVBQy9CLGdCQUF5QixFQUN6QixhQUFzQixLQUFLO1FBRTNCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxtQkFBbUIsQ0FDaEUsS0FBSyxFQUNMLGdCQUFnQixFQUNoQixVQUFVLENBQ1gsQ0FBQztJQUNKLENBQUM7SUFFRCxpQkFBaUIsQ0FDZixRQUFnQixFQUNoQixPQUFlLEVBQ2Ysa0JBQTRDO1FBRTVDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FDcEIsa0JBQWtCLENBQUMsZ0JBQWdCLENBQ3BDLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxtQkFBbUIsQ0FDakIsYUFBeUM7UUFFekMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUNwQixhQUFhLENBQUMsS0FBSyxD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QUFxQixHQUN6QixDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQy9ELFFBQVEsR0FBRyxxQkFBcUIsS0FBSyxxQkFBcUIsQ0FBQztTQUM1RDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7O0FBekpNLHdEQUF5QixHQUFHLElBQUksY0FBYyxDQUVuRCx5QkFBeUIsQ0FBQyxDQUFDOzJIQUhsQiw4QkFBOEIsa0JBc0IvQiw4QkFBOEIsQ0FBQyx5QkFBeUI7K0hBdEJ2RCw4QkFBOEI7MkZBQTlCLDhCQUE4QjtrQkFEMUMsVUFBVTs7MEJBdUJOLE1BQU07MkJBQUMsOEJBQThCLENBQUMseUJBQXlCOzswQkFHL0QsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0TW9kaWZpY2F0aW9uIH0gZnJvbSAnQHNwYXJ0YWN1cy9jYXJ0L2Jhc2Uvcm9vdCc7XG5pbXBvcnQge1xuICBDb21tb25Db25maWd1cmF0b3IsXG4gIENvbW1vbkNvbmZpZ3VyYXRvclV0aWxzU2VydmljZSxcbiAgQ29uZmlndXJhdG9yVHlwZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9wcm9kdWN0LWNvbmZpZ3VyYXRvci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdG9yQ29yZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWd1cmF0b3ItY29yZS5jb25maWcnO1xuaW1wb3J0IHsgQ29uZmlndXJhdG9yIH0gZnJvbSAnLi4vbW9kZWwvY29uZmlndXJhdG9yLm1vZGVsJztcbmltcG9ydCB7IFJ1bGViYXNlZENvbmZpZ3VyYXRvckFkYXB0ZXIgfSBmcm9tICcuL3J1bGViYXNlZC1jb25maWd1cmF0b3IuYWRhcHRlcic7XG5cbi8vTm90IHByb3ZpZGVkIGluIHJvb3QsIGFzIHRoaXMgd291bGQgYnJlYWsgbGF6eSBsb2FkaW5nXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUnVsZWJhc2VkQ29uZmlndXJhdG9yQ29ubmVjdG9yIHtcbiAgc3RhdGljIENPTkZJR1VSQVRPUl9BREFQVEVSX0xJU1QgPSBuZXcgSW5qZWN0aW9uVG9rZW48XG4gICAgUnVsZWJhc2VkQ29uZmlndXJhdG9yQWRhcHRlcltdXG4gID4oJ0NvbmZpZ3VyYXRvckFkYXB0ZXJMaXN0Jyk7XG5cbiAgLy8gVE9ETyhDWFNQQS0zMzkyKTogbWFrZSBjb25maWcgYSByZXF1aXJlZCBkZXBlbmRlbmN5XG4gIGNvbnN0cnVjdG9yKFxuICAgIGFkYXB0ZXJzOiBSdWxlYmFzZWRDb25maWd1cmF0b3JBZGFwdGVyW10sXG4gICAgY29uZmlnVXRpbHNTZXJ2aWNlOiBDb21tb25Db25maWd1cmF0b3JVdGlsc1NlcnZpY2UsXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC91bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBjb25maWc6IENvbmZpZ3VyYXRvckNvcmVDb25maWdcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgNi4zXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBhZGFwdGVyczogUnVsZWJhc2VkQ29uZmlndXJhdG9yQWRhcHRlcltdLFxuICAgIGNvbmZpZ1V0aWxzU2VydmljZTogQ29tbW9uQ29uZmlndXJhdG9yVXRpbHNTZXJ2aWNlXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChSdWxlYmFzZWRDb25maWd1cmF0b3JDb25uZWN0b3IuQ09ORklHVVJBVE9SX0FEQVBURVJfTElTVClcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcnM6IFJ1bGViYXNlZENvbmZpZ3VyYXRvckFkYXB0ZXJbXSxcbiAgICBwcm90ZWN0ZWQgY29uZmlnVXRpbHNTZXJ2aWNlOiBDb21tb25Db25maWd1cmF0b3JVdGlsc1NlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGNvbmZpZz86IENvbmZpZ3VyYXRvckNvcmVDb25maWdcbiAgKSB7fVxuXG4gIGNyZWF0ZUNvbmZpZ3VyYXRpb24oXG4gICAgb3duZXI6IENvbW1vbkNvbmZpZ3VyYXRvci5Pd25lcixcbiAgICBjb25maWdJZFRlbXBsYXRlPzogc3RyaW5nLFxuICAgIGZvcmNlUmVzZXQ6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBPYnNlcnZhYmxlPENvbmZpZ3VyYXRvci5Db25maWd1cmF0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWRhcHRlcihvd25lci5jb25maWd1cmF0b3JUeXBlKS5jcmVhdGVDb25maWd1cmF0aW9uKFxuICAgICAgb3duZXIsXG4gICAgICBjb25maWdJZFRlbXBsYXRlLFxuICAgICAgZm9yY2VSZXNldFxuICAgICk7XG4gIH1cblxuICByZWFkQ29uZmlndXJhdGlvbihcbiAgICBjb25maWdJZDogc3RyaW5nLFxuICAgIGdyb3VwSWQ6IHN0cmluZyxcbiAgICBjb25maWd1cmF0aW9uT3duZXI6IENvbW1vbkNvbmZpZ3VyYXRvci5Pd25lclxuICApOiBPYnNlcnZhYmxlPENvbmZpZ3VyYXRvci5Db25maWd1cmF0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWRhcHRlcihcbiAgICAgIGNvbmZpZ3VyYXRpb25Pd25lci5jb25maWd1cmF0b3JUeXBlXG4gICAgKS5yZWFkQ29uZmlndXJhdGlvbihjb25maWdJZCwgZ3JvdXBJZCwgY29uZmlndXJhdGlvbk93bmVyKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbmZpZ3VyYXRpb24oXG4gICAgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdG9yLkNvbmZpZ3VyYXRpb25cbiAgKTogT2JzZXJ2YWJsZTxDb25maWd1cmF0b3IuQ29uZmlndXJhdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLmdldEFkYXB0ZXIoXG4gICAgICBjb25maWd1cmF0aW9uLm93bmVyLmNvbmZpZ3VyYXRvclR5cGVcbiAgICApLnVwZGF0ZUNvbmZpZ3VyYXRpb24oY29uZmlndXJhdGlvbik7XG4gIH1cblxuICBhZGRUb0NhcnQoXG4gICAgcGFyYW1ldGVyczogQ29uZmlndXJhdG9yLkFkZFRvQ2FydFBhcmFtZXRlcnNcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0TW9kaWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWRhcHRlcihwYXJhbWV0ZXJzLm93bmVyLmNvbmZpZ3VyYXRvclR5cGUpLmFkZFRvQ2FydChcbiAgICAgIHBhcmFtZXRlcnNcbiAgICApO1xuICB9XG5cbiAgcmVhZENvbmZpZ3VyYXRpb25Gb3JDYXJ0RW50cnkoXG4gICAgcGFyYW1ldGVyczogQ29tbW9uQ29uZmlndXJhdG9yLlJlYWRDb25maWd1cmF0aW9uRnJvbUNhcnRFbnRyeVBhcmFtZXRlcnNcbiAgKTogT2JzZXJ2YWJsZTxDb25maWd1cmF0b3IuQ29uZmlndXJhdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLmdldEFkYXB0ZXIoXG4gICAgICBwYXJhbWV0ZXJzLm93bmVyLmNvbmZpZ3VyYXRvclR5cGVcbiAgICApLnJlYWRDb25maWd1cmF0aW9uRm9yQ2FydEVudHJ5KHBhcmFtZXRlcnMpO1xuICB9XG5cbiAgdXBkYXRlQ29uZmlndXJhdGlvbkZvckNhcnRFbnRyeShcbiAgICBwYXJhbWV0ZXJzOiBDb25maWd1cmF0b3IuVXBkYXRlQ29uZmlndXJhdGlvbkZvckNhcnRFbnRyeVBhcmFtZXRlcnNcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0TW9kaWZpY2F0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWRhcHRlcihcbiAgICAgIHBhcmFtZXRlcnMuY29uZmlndXJhdGlvbi5vd25lci5jb25maWd1cmF0b3JUeXBlXG4gICAgKS51cGRhdGVDb25maWd1cmF0aW9uRm9yQ2FydEVudHJ5KHBhcmFtZXRlcnMpO1xuICB9XG5cbiAgcmVhZENvbmZpZ3VyYXRpb25Gb3JPcmRlckVudHJ5KFxuICAgIHBhcmFtZXRlcnM6IENvbW1vbkNvbmZpZ3VyYXRvci5SZWFkQ29uZmlndXJhdGlvbkZyb21PcmRlckVudHJ5UGFyYW1ldGVyc1xuICApOiBPYnNlcnZhYmxlPENvbmZpZ3VyYXRvci5Db25maWd1cmF0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWRhcHRlcihcbiAgICAgIHBhcmFtZXRlcnMub3duZXIuY29uZmlndXJhdG9yVHlwZVxuICAgICkucmVhZENvbmZpZ3VyYXRpb25Gb3JPcmRlckVudHJ5KHBhcmFtZXRlcnMpO1xuICB9XG5cbiAgcmVhZFByaWNlU3VtbWFyeShcbiAgICBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0b3IuQ29uZmlndXJhdGlvblxuICApOiBPYnNlcnZhYmxlPENvbmZpZ3VyYXRvci5Db25maWd1cmF0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWRhcHRlcihcbiAgICAgIGNvbmZpZ3VyYXRpb24ub3duZXIuY29uZmlndXJhdG9yVHlwZVxuICAgICkucmVhZFByaWNlU3VtbWFyeShjb25maWd1cmF0aW9uKTtcbiAgfVxuXG4gIGdldENvbmZpZ3VyYXRpb25PdmVydmlldyhcbiAgICBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0b3IuQ29uZmlndXJhdGlvblxuICApOiBPYnNlcnZhYmxlPENvbmZpZ3VyYXRvci5PdmVydmlldz4ge1xuICAgIHJldHVybiB0aGlzLmdldEFkYXB0ZXIoXG4gICAgICBjb25maWd1cmF0aW9uLm93bmVyLmNvbmZpZ3VyYXRvclR5cGVcbiAgICApLmdldENvbmZpZ3VyYXRpb25PdmVydmlldyhjb25maWd1cmF0aW9uLmNvbmZpZ0lkKTtcbiAgfVxuXG4gIHVwZGF0ZUNvbmZpZ3VyYXRpb25PdmVydmlldyhcbiAgICBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0b3IuQ29uZmlndXJhdGlvblxuICApOiBPYnNlcnZhYmxlPENvbmZpZ3VyYXRvci5PdmVydmlldz4ge1xuICAgIGNvbnN0IG92ZXJ2aWV3ID0gY29uZmlndXJhdGlvbi5vdmVydmlldztcblxuICAgIHJldHVybiBvdmVydmlld1xuICAgICAgPyB0aGlzLmdldEFkYXB0ZXIoXG4gICAgICAgICAgY29uZmlndXJhdGlvbi5vd25lci5jb25maWd1cmF0b3JUeXBlXG4gICAgICAgICkudXBkYXRlQ29uZmlndXJhdGlvbk92ZXJ2aWV3KG92ZXJ2aWV3KVxuICAgICAgOiB0aGlzLmdldEFkYXB0ZXIoXG4gICAgICAgICAgY29uZmlndXJhdGlvbi5vd25lci5jb25maWd1cmF0b3JUeXBlXG4gICAgICAgICkuZ2V0Q29uZmlndXJhdGlvbk92ZXJ2aWV3KGNvbmZpZ3VyYXRpb24uY29uZmlnSWQpO1xuICB9XG5cbiAgc2VhcmNoVmFyaWFudHMoXG4gICAgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdG9yLkNvbmZpZ3VyYXRpb25cbiAgKTogT2JzZXJ2YWJsZTxDb25maWd1cmF0b3IuVmFyaWFudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWRhcHRlcihjb25maWd1cmF0aW9uLm93bmVyLmNvbmZpZ3VyYXRvclR5cGUpLnNlYXJjaFZhcmlhbnRzKFxuICAgICAgY29uZmlndXJhdGlvbi5jb25maWdJZFxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0QWRhcHRlcihjb25maWd1cmF0b3JUeXBlOiBzdHJpbmcpOiBSdWxlYmFzZWRDb25maWd1cmF0b3JBZGFwdGVyIHtcbiAgICBjb25zdCBhZGFwdGVyUmVzdWx0ID0gdGhpcy5hZGFwdGVycy5maW5kKChhZGFwdGVyKSA9PlxuICAgICAgdGhpcy5pc0FkYXB0ZXJNYXRjaGluZyhhZGFwdGVyLCBjb25maWd1cmF0b3JUeXBlKVxuICAgICk7XG4gICAgaWYgKGFkYXB0ZXJSZXN1bHQpIHtcbiAgICAgIHJldHVybiBhZGFwdGVyUmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdObyBhZGFwdGVyIGZvdW5kIGZvciBjb25maWd1cmF0b3IgdHlwZTogJyArIGNvbmZpZ3VyYXRvclR5cGVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGlzQWRhcHRlck1hdGNoaW5nKFxuICAgIGFkYXB0ZXI6IFJ1bGViYXNlZENvbmZpZ3VyYXRvckFkYXB0ZXIsXG4gICAgY29uZmlndXJhdG9yVHlwZTogc3RyaW5nXG4gICk6IGJvb2xlYW4ge1xuICAgIGxldCBtYXRjaGluZyA9IGFkYXB0ZXIuZ2V0Q29uZmlndXJhdG9yVHlwZSgpID09PSBjb25maWd1cmF0b3JUeXBlO1xuICAgIGlmIChtYXRjaGluZyAmJiBDb25maWd1cmF0b3JUeXBlLkNQUSA9PT0gY29uZmlndXJhdG9yVHlwZSkge1xuICAgICAgY29uc3QgaXNDcHFPdmVyT2NjUmVxdWVzdGVkID1cbiAgICAgICAgdGhpcy5jb25maWc/LnByb2R1Y3RDb25maWd1cmF0b3I/LmNwcU92ZXJPY2MgPz8gZmFsc2U7XG4gICAgICBjb25zdCBpc0NwcU92ZXJPY2NTdXBwb3J0ZWQgPVxuICAgICAgICAhIWFkYXB0ZXIuc3VwcG9ydHNDcHFPdmVyT2NjICYmIGFkYXB0ZXIuc3VwcG9ydHNDcHFPdmVyT2NjKCk7XG4gICAgICBtYXRjaGluZyA9IGlzQ3BxT3Zlck9jY1JlcXVlc3RlZCA9PT0gaXNDcHFPdmVyT2NjU3VwcG9ydGVkO1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hpbmc7XG4gIH1cbn1cbiJdfQ==