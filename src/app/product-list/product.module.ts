import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';

import { SharedModule } from '../shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [NativeScriptCommonModule, ProductRoutingModule, SharedModule],
  declarations: [ProductListComponent ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ProductModule {}
