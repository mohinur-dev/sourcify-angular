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
import { AdminOrderUpdateComponent } from './components/admin-order-update/admin-order-update.component';
import { RetailerRequestComponent } from './components/retailer-request/retailer-request.component';
import { RetailerRequestUpdateComponent } from './components/retailer-request-update/retailer-request-update.component';
import { RetailerReportComponent } from './components/retailer-report/retailer-report.component';
import { ManufecturearReportComponent } from './components/manufecturear-report/manufecturear-report.component';
import { ManufacturerComponent } from '../main/components/manufacturer/manufacturer.component';
import { TotalRevenueComponent } from './components/total-revenue/total-revenue.component';
import { RetailerTotalComponent } from './components/retailer-total/retailer-total.component';



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
    {path:'product-update/:id', component:ProductUpdateComponent},
    {path:'admin-order-update/:id', component:AdminOrderUpdateComponent},
    {path:'retailer-request', component:RetailerRequestComponent},
    {path:'request-update/:id', component:RetailerRequestUpdateComponent},
    {path:'retailer-report/:id', component:RetailerReportComponent},
    {path:'manufecturear-report/:id', component:ManufecturearReportComponent},
    {path:'manufacturer-revenue', component:TotalRevenueComponent},
    {path:'retailer-total-revenue', component:RetailerTotalComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminMainRoutingModule { }
