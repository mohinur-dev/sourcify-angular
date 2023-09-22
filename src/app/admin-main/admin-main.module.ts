import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMainRoutingModule } from './admin-main-routing.module';
import { AdminMainComponent } from './admin-main.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { AdminSideberComponent } from './components/admin-sideber/admin-sideber.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminManufecturerComponent } from './components/admin-manufecturer/admin-manufecturer.component';
import { AdminRetailerComponent } from './components/admin-retailer/admin-retailer.component';
import { AdminOrderComponent } from './components/admin-order/admin-order.component';
import { FormsModule } from '@angular/forms';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { ManufecturearUpdateComponent } from './components/manufecturear-update/manufecturear-update.component';
import { RetailerUpdateComponent } from './components/retailer-update/retailer-update.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { AdminOrderUpdateComponent } from './components/admin-order-update/admin-order-update.component';
import { RetailerRequestComponent } from './components/retailer-request/retailer-request.component';
import { RetailerRequestUpdateComponent } from './components/retailer-request-update/retailer-request-update.component';
import { RetailerReportComponent } from './components/retailer-report/retailer-report.component';
import { ManufecturearReportComponent } from './components/manufecturear-report/manufecturear-report.component';
import { TotalRevenueComponent } from './components/total-revenue/total-revenue.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { RetailerTotalComponent } from './components/retailer-total/retailer-total.component';

@NgModule({
  declarations: [
    AdminMainComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSideberComponent,
    AdminHomeComponent,
    AdminManufecturerComponent,
    AdminRetailerComponent,
    AdminOrderComponent,
    AdminProductComponent,
    ManufecturearUpdateComponent,
    RetailerUpdateComponent,
    ProductUpdateComponent,
    AdminOrderUpdateComponent,
    RetailerRequestComponent,
    RetailerRequestUpdateComponent,
    RetailerReportComponent,
    ManufecturearReportComponent,
    TotalRevenueComponent,
    RetailerTotalComponent,
    
    
  ],
  imports: [
    CommonModule,
    AdminMainRoutingModule,
    FormsModule,
    CanvasJSAngularChartsModule
  ]
})
export class AdminMainModule { }
