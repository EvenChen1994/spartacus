import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArgsModule } from '@spartacus/asm/core';
import { I18nModule } from '@spartacus/core';
import { AsmCustomerTableComponent } from './asm-customer-table.component';

@NgModule({
  imports: [CommonModule, I18nModule, ArgsModule],
  declarations: [AsmCustomerTableComponent],
  exports: [AsmCustomerTableComponent],
})
export class AsmCustomerTableModule {}
