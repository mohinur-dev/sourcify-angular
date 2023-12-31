import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManufecturearMainComponent } from './manufecturear-main.component';
import { ManufecturearHomeComponent } from './components/manufecturear-home/manufecturear-home.component';
import { AddProductsComponent } from './components/products/add-products/add-products.component';
import { UpdateProductsComponent } from './components/products/update-products/update-products.component';
import { ManufecturerOrderComponent } from './components/manufecturer-order/manufecturer-order.component';
import { HomeProductsComponent } from './components/products/home-products/home-products.component';
import { ManuOrderUpdateComponent } from './components/manu-order-update/manu-order-update.component';
import { BusinessReportsComponent } from './components/business-reports/business-reports.component';


const routes: Routes = [
  {path:'manufecturear-main', component:ManufecturearMainComponent, children:[
    {path:'', component:ManufecturearHomeComponent},
    {path:'manufecturear-home', component:ManufecturearHomeComponent},
    {path:'add-product', component:AddProductsComponent},
    {path:'update-product/:id', component:UpdateProductsComponent},
    {path:'manufecturer-order', component:ManufecturerOrderComponent},
    {path:'manufecturer-product', component:HomeProductsComponent},
    {path:'manu-order-update/:id', component:ManuOrderUpdateComponent},
    {path:'business-reports', component:BusinessReportsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManufecturearMainRoutingModule { }
