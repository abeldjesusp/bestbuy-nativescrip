import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('~/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('~/app/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'search',
    loadChildren: () => import('~/app/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: 'product-list/:id/:name',
    loadChildren: () => import('~/app/product-list/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'product-detail',
    loadChildren: () => import('~/app/product-detail/product-detail.module').then((m) => m.ProductDetailModule),
  },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
