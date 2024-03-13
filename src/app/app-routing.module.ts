import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {AddProductComponent} from "./add-product/add-product.component";

const routes: Routes = [
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  { path: 'products',  component: ProductsComponent },
  { path: 'products/add',  component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
