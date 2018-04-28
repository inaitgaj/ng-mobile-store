import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeParentComponent} from '../../components/home-parent/home-parent.component';
import { CategoryParentComponent} from '../../components/category-parent/category-parent.component';
import { ProductListComponent} from '../../components/product-list/product-list.component';
import { ProductSearchComponent} from '../../components/product-search/product-search.component';
import { ProductDetailComponent} from '../../components/product-detail/product-detail.component';
import {CartParentComponent} from '../../components/cart-parent/cart-parent.component';
import {ProductCreateComponent} from '../../components/admin/product-create/product-create.component';

const routes: Routes = [
  { path : '' , redirectTo: 'home', pathMatch : 'full'},
  { path: 'home', component: HomeParentComponent },
  { path: 'category/:id', component: CategoryParentComponent },
  { path: 'products', component: ProductListComponent },
  {path: 'search', component: ProductSearchComponent},
  { path: 'products/:productId', component: ProductDetailComponent },
  { path: 'user', loadChildren: '../user/user.module#UserModule' },
    { path: 'cart', component: CartParentComponent },
    { path: 'admin/createproduct', component: ProductCreateComponent  },  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
