import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { SharedModule } from '../shared/shared.module'
import { CartRoutingModule } from './cart-routing.module'
import { CartComponent } from './cart.component'

@NgModule({
  imports: [NativeScriptCommonModule, CartRoutingModule, SharedModule],
  declarations: [CartComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class CartModule {}
