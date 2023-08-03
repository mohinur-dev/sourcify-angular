import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMainComponent } from './admin-main.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminManufecturerComponent } from './components/admin-manufecturer/admin-manufecturer.component';
import { AdminRetailerComponent } from './components/admin-retailer/admin-retailer.component';
import { AdminOrderComponent } from './components/admin-order/admin-order.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { RetailerUpdateComponent } from './components/retailer-update/retailer-update.component';
import { ManufecturearUpdateComponent } from './components/manufecturear-update/manufecturear-update.component';


const routes: Routes = [
  {path:'admin-main', component:AdminMainComponent, children:[
    {path:'', component:AdminHomeComponent},
    {path:'admin-home', component:AdminHomeComponent},
    {path:'admin-manufecturer', component:AdminManufecturerComponent},
    {path:'admin-retailer', component:AdminRetailerComponent},
    {path:'admin-order', component:AdminOrderComponent},
    {path:'admin-product', component:AdminProductComponent},
    {path:'manufecturear-update/:id', component:ManufecturearUpdateComponent},
    {path:'retailer-update/:id', component:RetailerUpdateComponent},
    {path:'product-update/:id', component:ProductUpdateComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMainRoutingModule { }
