import { Injectable } from '@angular/core';
import { CART_MODIFICATION_NORMALIZER, } from '@spartacus/cart/base/root';
import { map } from 'rxjs/operators';
import { CONFIGURATION_TEXTFIELD_ADD_TO_CART_SERIALIZER, CONFIGURATION_TEXTFIELD_NORMALIZER, CONFIGURATION_TEXTFIELD_UPDATE_CART_ENTRY_SERIALIZER, } from '../core/connectors/converters';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@spartacus/core";
export class OccConfiguratorTextfieldAdapter {
    constructor(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    createConfiguration(productCode, owner) {
        return this.http
            .get(this.occEndpointsService.buildUrl('createTextfieldConfiguration', {
            urlParams: {
                productCode,
            },
        }))
            .pipe(this.converterService.pipeable(CONFIGURATION_TEXTFIELD_NORMALIZER), map((resultConfiguration) => {
            return {
                ...resultConfiguration,
                owner: owner,
            };
        }));
    }
    addToCart(parameters) {
        const url = this.occEndpointsService.buildUrl('addTextfieldConfigurationToCart', {
            urlParams: {
                userId: parameters.userId,
                cartId: parameters.cartId,
            },
        });
        const occAddToCartParameters = this.converterService.convert(parameters, CONFIGURATION_TEXTFIELD_ADD_TO_CART_SERIALIZER);
        return this.http
            .post(url, occAddToCartParameters)
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    }
    readConfigurationForCartEntry(parameters) {
        const url = this.occEndpointsService.buildUrl('readTextfieldConfigurationForCartEntry', {
            urlParams: {
                userId: parameters.userId,
                cartId: parameters.cartId,
                cartEntryNumber: parameters.cartEntryNumber,
            },
        });
        return this.http.get(url).pipe(this.converterService.pipeable(CONFIGURATION_TEXTFIELD_NORMALIZER), map((resultConfiguration) => {
            return {
                ...resultConfiguration,
                owner: {
                    ...parameters.owner,
                },
            };
        }));
    }
    readConfigurationForOrderEntry(parameters) {
        const url = this.occEndpointsService.buildUrl('readTextfieldConfigurationForOrderEntry', {
            urlParams: {
                userId: parameters.userId,
                orderId: parameters.orderId,
                orderEntryNumber: parameters.orderEntryNumber,
            },
        });
        return this.http.get(url).pipe(this.converterService.pipeable(CONFIGURATION_TEXTFIELD_NORMALIZER), map((resultConfiguration) => {
            return {
                ...resultConfiguration,
                owner: {
                    ...parameters.owner,
                },
            };
        }));
    }
    updateConfigurationForCartEntry(parameters) {
        const url = this.occEndpointsService.buildUrl('updateTextfieldConfigurationForCartEntry', {
            urlParams: {
                userId: parameters.userId,
                cartId: parameters.cartId,
                cartEntryNumber: parameters.cartEntryNumber,
            },
        });
        const occUpdateCartEntryParameters = this.converterService.convert(parameters, CONFIGURATION_TEXTFIELD_UPDATE_CART_ENTRY_SERIALIZER);
        return this.http
            .post(url, occUpdateCartEntryParameters)
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    }
}
OccConfiguratorTextfieldAdapter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: OccConfiguratorTextfieldAdapter, deps: [{ token: i1.HttpClient }, { token: i2.OccEndpointsService }, { token: i2.ConverterService }], target: i0.ɵɵFactoryTarget.Injectable });
OccConfiguratorTextfieldAdapter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: OccConfiguratorTextfieldAdapter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.9", ngImport: i0, type: OccConfiguratorTextfieldAdapter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: i2.OccEndpointsService }, { type: i2.ConverterService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZ3VyYXRvci10ZXh0ZmllbGQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2ZlYXR1cmUtbGlicy9wcm9kdWN0LWNvbmZpZ3VyYXRvci90ZXh0ZmllbGQvb2NjL29jYy1jb25maWd1cmF0b3ItdGV4dGZpZWxkLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsNEJBQTRCLEdBQzdCLE1BQU0sMkJBQTJCLENBQUM7QUFJbkMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFDTCw4Q0FBOEMsRUFDOUMsa0NBQWtDLEVBQ2xDLG9EQUFvRCxHQUNyRCxNQUFNLCtCQUErQixDQUFDOzs7O0FBS3ZDLE1BQU0sT0FBTywrQkFBK0I7SUFHMUMsWUFDWSxJQUFnQixFQUNoQixtQkFBd0MsRUFDeEMsZ0JBQWtDO1FBRmxDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzNDLENBQUM7SUFFSixtQkFBbUIsQ0FDakIsV0FBbUIsRUFDbkIsS0FBK0I7UUFFL0IsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLDhCQUE4QixFQUFFO1lBQ2hFLFNBQVMsRUFBRTtnQkFDVCxXQUFXO2FBQ1o7U0FDRixDQUFDLENBQ0g7YUFDQSxJQUFJLENBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxrQ0FBa0MsQ0FBQyxFQUNsRSxHQUFHLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFO1lBQzFCLE9BQU87Z0JBQ0wsR0FBRyxtQkFBbUI7Z0JBQ3RCLEtBQUssRUFBRSxLQUFL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R0FBRyxFQUFFLDRCQUE0QixDQUFDO2FBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs0SEFqSVUsK0JBQStCO2dJQUEvQiwrQkFBK0I7MkZBQS9CLCtCQUErQjtrQkFEM0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBTUERYLUZpbGVDb3B5cmlnaHRUZXh0OiAyMDIzIFNBUCBTcGFydGFjdXMgdGVhbSA8c3BhcnRhY3VzLXRlYW1Ac2FwLmNvbT5cbiAqXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuICovXG5cbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYXJ0TW9kaWZpY2F0aW9uLFxuICBDQVJUX01PRElGSUNBVElPTl9OT1JNQUxJWkVSLFxufSBmcm9tICdAc3BhcnRhY3VzL2NhcnQvYmFzZS9yb290JztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UsIE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uQ29uZmlndXJhdG9yIH0gZnJvbSAnQHNwYXJ0YWN1cy9wcm9kdWN0LWNvbmZpZ3VyYXRvci9jb21tb24nO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdG9yVGV4dGZpZWxkQWRhcHRlciB9IGZyb20gJy4uL2NvcmUvY29ubmVjdG9ycy9jb25maWd1cmF0b3ItdGV4dGZpZWxkLmFkYXB0ZXInO1xuaW1wb3J0IHtcbiAgQ09ORklHVVJBVElPTl9URVhURklFTERfQUREX1RPX0NBUlRfU0VSSUFMSVpFUixcbiAgQ09ORklHVVJBVElPTl9URVhURklFTERfTk9STUFMSVpFUixcbiAgQ09ORklHVVJBVElPTl9URVhURklFTERfVVBEQVRFX0NBUlRfRU5UUllfU0VSSUFMSVpFUixcbn0gZnJvbSAnLi4vY29yZS9jb25uZWN0b3JzL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ29uZmlndXJhdG9yVGV4dGZpZWxkIH0gZnJvbSAnLi4vY29yZS9tb2RlbC9jb25maWd1cmF0b3ItdGV4dGZpZWxkLm1vZGVsJztcbmltcG9ydCB7IE9jY0NvbmZpZ3VyYXRvclRleHRmaWVsZCB9IGZyb20gJy4vb2NjLWNvbmZpZ3VyYXRvci10ZXh0ZmllbGQubW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0NvbmZpZ3VyYXRvclRleHRmaWVsZEFkYXB0ZXJcbiAgaW1wbGVtZW50cyBDb25maWd1cmF0b3JUZXh0ZmllbGRBZGFwdGVyXG57XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBjcmVhdGVDb25maWd1cmF0aW9uKFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgb3duZXI6IENvbW1vbkNvbmZpZ3VyYXRvci5Pd25lclxuICApOiBPYnNlcnZhYmxlPENvbmZpZ3VyYXRvclRleHRmaWVsZC5Db25maWd1cmF0aW9uPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2NDb25maWd1cmF0b3JUZXh0ZmllbGQuQ29uZmlndXJhdGlvbj4oXG4gICAgICAgIHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5idWlsZFVybCgnY3JlYXRlVGV4dGZpZWxkQ29uZmlndXJhdGlvbicsIHtcbiAgICAgICAgICB1cmxQYXJhbXM6IHtcbiAgICAgICAgICAgIHByb2R1Y3RDb2RlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENPTkZJR1VSQVRJT05fVEVYVEZJRUxEX05PUk1BTElaRVIpLFxuICAgICAgICBtYXAoKHJlc3VsdENvbmZpZ3VyYXRpb24pID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ucmVzdWx0Q29uZmlndXJhdGlvbixcbiAgICAgICAgICAgIG93bmVyOiBvd25lcixcbiAgICAgICAgICB9O1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGFkZFRvQ2FydChcbiAgICBwYXJhbWV0ZXJzOiBDb25maWd1cmF0b3JUZXh0ZmllbGQuQWRkVG9DYXJ0UGFyYW1ldGVyc1xuICApOiBPYnNlcnZhYmxlPENhcnRNb2RpZmljYXRpb24+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuYnVpbGRVcmwoXG4gICAgICAnYWRkVGV4dGZpZWxkQ29uZmlndXJhdGlvblRvQ2FydCcsXG4gICAgICB7XG4gICAgICAgIHVybFBhcmFtczoge1xuICAgICAgICAgIHVzZXJJZDogcGFyYW1ldGVycy51c2VySWQsXG4gICAgICAgICAgY2FydElkOiBwYXJhbWV0ZXJzLmNhcnRJZCxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3Qgb2NjQWRkVG9DYXJ0UGFyYW1ldGVycyA9IHRoaXMuY29udmVydGVyU2VydmljZS5jb252ZXJ0KFxuICAgICAgcGFyYW1ldGVycyxcbiAgICAgIENPTkZJR1VSQVRJT05fVEVYVEZJRUxEX0FERF9UT19DQVJUX1NFUklBTElaRVJcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8Q2FydE1vZGlmaWNhdGlvbj4odXJsLCBvY2NBZGRUb0NhcnRQYXJhbWV0ZXJzKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENBUlRfTU9ESUZJQ0FUSU9OX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHJlYWRDb25maWd1cmF0aW9uRm9yQ2FydEVudHJ5KFxuICAgIHBhcmFtZXRlcnM6IENvbW1vbkNvbmZpZ3VyYXRvci5SZWFkQ29uZmlndXJhdGlvbkZyb21DYXJ0RW50cnlQYXJhbWV0ZXJzXG4gICk6IE9ic2VydmFibGU8Q29uZmlndXJhdG9yVGV4dGZpZWxkLkNvbmZpZ3VyYXRpb24+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuYnVpbGRVcmwoXG4gICAgICAncmVhZFRleHRmaWVsZENvbmZpZ3VyYXRpb25Gb3JDYXJ0RW50cnknLFxuICAgICAge1xuICAgICAgICB1cmxQYXJhbXM6IHtcbiAgICAgICAgICB1c2VySWQ6IHBhcmFtZXRlcnMudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogcGFyYW1ldGVycy5jYXJ0SWQsXG4gICAgICAgICAgY2FydEVudHJ5TnVtYmVyOiBwYXJhbWV0ZXJzLmNhcnRFbnRyeU51bWJlcixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8Q29uZmlndXJhdG9yVGV4dGZpZWxkLkNvbmZpZ3VyYXRpb24+KHVybCkucGlwZShcbiAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZShDT05GSUdVUkFUSU9OX1RFWFRGSUVMRF9OT1JNQUxJWkVSKSxcbiAgICAgIG1hcCgocmVzdWx0Q29uZmlndXJhdGlvbikgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnJlc3VsdENvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgb3duZXI6IHtcbiAgICAgICAgICAgIC4uLnBhcmFtZXRlcnMub3duZXIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICByZWFkQ29uZmlndXJhdGlvbkZvck9yZGVyRW50cnkoXG4gICAgcGFyYW1ldGVyczogQ29tbW9uQ29uZmlndXJhdG9yLlJlYWRDb25maWd1cmF0aW9uRnJvbU9yZGVyRW50cnlQYXJhbWV0ZXJzXG4gICk6IE9ic2VydmFibGU8Q29uZmlndXJhdG9yVGV4dGZpZWxkLkNvbmZpZ3VyYXRpb24+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuYnVpbGRVcmwoXG4gICAgICAncmVhZFRleHRmaWVsZENvbmZpZ3VyYXRpb25Gb3JPcmRlckVudHJ5JyxcbiAgICAgIHtcbiAgICAgICAgdXJsUGFyYW1zOiB7XG4gICAgICAgICAgdXNlcklkOiBwYXJhbWV0ZXJzLnVzZXJJZCxcbiAgICAgICAgICBvcmRlcklkOiBwYXJhbWV0ZXJzLm9yZGVySWQsXG4gICAgICAgICAgb3JkZXJFbnRyeU51bWJlcjogcGFyYW1ldGVycy5vcmRlckVudHJ5TnVtYmVyLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxDb25maWd1cmF0b3JUZXh0ZmllbGQuQ29uZmlndXJhdGlvbj4odXJsKS5waXBlKFxuICAgICAgdGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENPTkZJR1VSQVRJT05fVEVYVEZJRUxEX05PUk1BTElaRVIpLFxuICAgICAgbWFwKChyZXN1bHRDb25maWd1cmF0aW9uKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucmVzdWx0Q29uZmlndXJhdGlvbixcbiAgICAgICAgICBvd25lcjoge1xuICAgICAgICAgICAgLi4ucGFyYW1ldGVycy5vd25lcixcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICApO1xuICB9XG4gIHVwZGF0ZUNvbmZpZ3VyYXRpb25Gb3JDYXJ0RW50cnkoXG4gICAgcGFyYW1ldGVyczogQ29uZmlndXJhdG9yVGV4dGZpZWxkLlVwZGF0ZUNhcnRFbnRyeVBhcmFtZXRlcnNcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0TW9kaWZpY2F0aW9uPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmJ1aWxkVXJsKFxuICAgICAgJ3VwZGF0ZVRleHRmaWVsZENvbmZpZ3VyYXRpb25Gb3JDYXJ0RW50cnknLFxuICAgICAge1xuICAgICAgICB1cmxQYXJhbXM6IHtcbiAgICAgICAgICB1c2VySWQ6IHBhcmFtZXRlcnMudXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogcGFyYW1ldGVycy5jYXJ0SWQsXG4gICAgICAgICAgY2FydEVudHJ5TnVtYmVyOiBwYXJhbWV0ZXJzLmNhcnRFbnRyeU51bWJlcixcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICApO1xuXG4gICAgY29uc3Qgb2NjVXBkYXRlQ2FydEVudHJ5UGFyYW1ldGVycyA9IHRoaXMuY29udmVydGVyU2VydmljZS5jb252ZXJ0KFxuICAgICAgcGFyYW1ldGVycyxcbiAgICAgIENPTkZJR1VSQVRJT05fVEVYVEZJRUxEX1VQREFURV9DQVJUX0VOVFJZX1NFUklBTElaRVJcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8Q2FydE1vZGlmaWNhdGlvbj4odXJsLCBvY2NVcGRhdGVDYXJ0RW50cnlQYXJhbWV0ZXJzKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENBUlRfTU9ESUZJQ0FUSU9OX05PUk1BTElaRVIpKTtcbiAgfVxufVxuIl19