import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularDefultComponent } from './angular-defult/angular-defult.component';
import { MainModule } from './main/main.module';
import { RouterModule } from '@angular/router';
import { AdminMainModule } from './admin-main/admin-main.module';
import { RetailerMainModule } from './retailer-main/retailer-main.module';
import { ManufecturearMainModule } from './manufecturear-main/manufecturear-main.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AngularDefultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    RouterModule,
    AdminMainModule,
    RetailerMainModule,
    ManufecturearMainModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
