import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { SharedModule } from '../shared/shared.module';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
  imports: [NativeScriptCommonModule, ProductDetailRoutingModule, SharedModule],
  declarations: [ProductDetailComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProductDetailModule {}
