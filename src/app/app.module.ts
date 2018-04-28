import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavParentComponent } from './components/nav-parent/nav-parent.component';
import { MegaMenuModule } from 'primeng/megamenu';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { HomeParentComponent } from './components/home-parent/home-parent.component';
import { CategoryParentComponent } from './components/category-parent/category-parent.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { DataService } from './services/data.service';
import { NavServiceService } from './services/nav-service.service';
import { CartService } from './services/cart.service';
import { ProductListChildComponent } from './components/product-list-child/product-list-child.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { UserModule } from './modules/user/user.module';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NavChildComponent } from './components/nav-parent/nav-child/nav-child.component';
import { CartParentComponent } from './components/cart-parent/cart-parent.component';
import { EntryComponent } from './components/cart-parent/entry/entry.component';
import { MultiplyPipe } from './pipes/multiply.pipe';
import { ProductCreateComponent } from './components/admin/product-create/product-create.component';



@NgModule({
  declarations: [
    AppComponent,
    NavParentComponent,
    HomeParentComponent,
    CategoryParentComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductListChildComponent,
    ProductSearchComponent,
    NavChildComponent,
    CartParentComponent,
    EntryComponent,
    MultiplyPipe,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MegaMenuModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule,
  ],
  providers: [DataService, NavServiceService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
