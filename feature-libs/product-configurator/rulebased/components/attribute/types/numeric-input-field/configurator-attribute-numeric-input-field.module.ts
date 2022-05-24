import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { I18nModule, provideDefaultConfig } from '@spartacus/core';
import { IconModule, KeyboardFocusModule } from '@spartacus/storefront';
import { ConfiguratorAttributeCompositionConfig } from '../../../composition/configurator-attribute-composition.config';
import { ConfiguratorAttributeNumericInputFieldComponent } from './configurator-attribute-numeric-input-field.component';

@NgModule({
  imports: [
    KeyboardFocusModule,
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
          AttributeType_numeric:
            ConfiguratorAttributeNumericInputFieldComponent,
        },
      },
    }),
  ],
  declarations: [ConfiguratorAttributeNumericInputFieldComponent],
  exports: [ConfiguratorAttributeNumericInputFieldComponent],
})
export class ConfiguratorAttributeNumericInputFieldModule {}
