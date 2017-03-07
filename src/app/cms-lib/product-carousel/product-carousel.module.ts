import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCarouselComponent } from './product-carousel.component';

import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule.forRoot(),
        FlexLayoutModule
    ],
    declarations: [ProductCarouselComponent],
    entryComponents: [ProductCarouselComponent],
    exports: [ProductCarouselComponent]
})
export class ProductCarouselModule { }
