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
    
    
  ],
  imports: [
    CommonModule,
    AdminMainRoutingModule,
    FormsModule
  ]
})
export class AdminMainModule { }
