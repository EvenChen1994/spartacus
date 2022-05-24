import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18nModule, provideDefaultConfig } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { ConfiguratorAttributeCompositionConfig } from '../../composition/configurator-attribute-composition.config';
import { ConfiguratorAttributeFooterComponent } from './configurator-attribute-footer.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    I18nModule,
    IconModule,
  ],
  providers: [
    provideDefaultConfig(<ConfiguratorAttributeCompositionConfig>{
      productConfigurator: {
        attributeComponentAssignment: {
          Footer: ConfiguratorAttributeFooterComponent,
        },
      },
    }),
  ],
  declarations: [ConfiguratorAttributeFooterComponent],
  exports: [ConfiguratorAttributeFooterComponent],
})
export class ConfiguratorAttributeFooterModule {}
