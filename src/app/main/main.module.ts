import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainRoutingModule } from './main-routing.module';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { ManufacturerComponent } from './components/manufacturer/manufacturer.component';
import { RetailerComponent } from './components/retailer/retailer.component';
import { AdminComponent } from './components/admin/admin.component';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { RetailerSigninComponent } from './registration/retailer-signin/retailer-signin.component';
import { RetailerSignupComponent } from './registration/retailer-signup/retailer-signup.component';
import { ManufecturearSignupComponent } from './registration/manufecturear-signup/manufecturear-signup.component';
import { ManufecturearSigninComponent } from './registration/manufecturear-signin/manufecturear-signin.component';
import { AdminSigninComponent } from './registration/admin-signin/admin-signin.component';
import { NgToastModule } from 'ng-angular-popup';

@NgModule({
  declarations: [
    MainHeaderComponent,
    MainFooterComponent,
    ManufacturerComponent,
    RetailerComponent,
    AdminComponent,
    MainComponent,
    RetailerSigninComponent,
    RetailerSignupComponent,
    ManufecturearSignupComponent,
    ManufecturearSigninComponent,
    AdminSigninComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    FormsModule,
    NgToastModule
  ]
})
export class MainModule { }
