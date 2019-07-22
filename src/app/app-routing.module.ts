import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { NewProductComponent } from './new-product/new-product.component';
import { HomeComponent } from './home/home.component';
import { GoodDealComponent } from './good-deal/good-deal.component';
import { ItemsComponent } from './items/items.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  // { path: '', component: ProductsComponent },
  // { path: 'products', component: ProduitsComponent },
  { path: 'home', component: HomeComponent },
   { path: 'shopping-cart', component: ShoppingCartComponent },
   { path: 'dashboard', component: DashboardComponent },
  // { path: 'check-out', component: CheckOutComponent },
  // { path: 'order-success', component: OrderSuccessComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'admin/products', component: AdminProductsComponent },
  // { path: 'admin/orders', component: AdminOrdersComponent }

    { path: 'items', component: ItemsComponent },
    // { path: '', redirectTo: 'items', pathMatch: 'full'},


    { path: 'list', component: ProduitsComponent },
    { path: 'new-product', component: NewProductComponent},
    { path: 'gooddeals', component: GoodDealComponent },
    // { path: 'categories/', component: GoodDealComponent },
    { path: 'items/:p1/:p2', component: ItemsComponent },
     { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
