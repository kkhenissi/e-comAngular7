import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { NewProductComponent } from './new-product/new-product.component';
import { HomeComponent } from './home/home.component';
import { GoodDealComponent } from './good-deal/good-deal.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
   { path: 'list', component: ProduitsComponent },
   { path: 'new-product', component: NewProductComponent},
   { path: 'gooddeals', component: GoodDealComponent },
   { path: 'items/:id', component: ItemsComponent },
   { path: '', redirectTo: '/items/1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
