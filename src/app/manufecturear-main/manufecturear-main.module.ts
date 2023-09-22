import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManufecturearMainRoutingModule } from './manufecturear-main-routing.module';
import { ManufecturearMainComponent } from './manufecturear-main.component';
import { ManufecturearHeaderComponent } from './components/manufecturear-header/manufecturear-header.component';
import { ManufecturearFooterComponent } from './components/manufecturear-footer/manufecturear-footer.component';
import { ManufecturearSideberComponent } from './components/manufecturear-sideber/manufecturear-sideber.component';
import { ManufecturearHomeComponent } from './components/manufecturear-home/manufecturear-home.component';
import { RouterModule } from '@angular/router';
import { AddProductsComponent } from './components/products/add-products/add-products.component';
import { HomeProductsComponent } from './components/products/home-products/home-products.component';
import { UpdateProductsComponent } from './components/products/update-products/update-products.component';
import { FormsModule } from '@angular/forms';
import { ManufecturerOrderComponent } from './components/manufecturer-order/manufecturer-order.component';
import { ManuOrderUpdateComponent } from './components/manu-order-update/manu-order-update.component';
import { BusinessReportsComponent } from './components/business-reports/business-reports.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


@NgModule({
  declarations: [
    ManufecturearHeaderComponent,
    ManufecturearFooterComponent,
    ManufecturearSideberComponent,
    ManufecturearHomeComponent,
    ManufecturearMainComponent,
    AddProductsComponent,
    HomeProductsComponent,
    UpdateProductsComponent,
    ManufecturerOrderComponent,
    ManuOrderUpdateComponent,
    BusinessReportsComponent,

  
  ],
  imports: [
    CommonModule,
    ManufecturearMainRoutingModule,
    RouterModule, 
    FormsModule, 
    CanvasJSAngularChartsModule
  ]
})
export class ManufecturearMainModule { }
