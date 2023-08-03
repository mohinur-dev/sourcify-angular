import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailerMainRoutingModule } from './retailer-main-routing.module';
import { RetailerHeaderComponent } from './components/retailer-header/retailer-header.component';
import { RetailerFooterComponent } from './components/retailer-footer/retailer-footer.component';
import { RetailerSideberComponent } from './components/retailer-sideber/retailer-sideber.component';
import { RetailerHomeComponent } from './components/retailer-home/retailer-home.component';
import { RetailerMainComponent } from './retailer-main.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { NgToastModule } from 'ng-angular-popup';
import { FormsModule } from '@angular/forms';
import { RetailerOrderComponent } from './components/retailer-order/retailer-order.component';
import { RetailerInvoiceComponent } from './components/retailer-invoice/retailer-invoice.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


@NgModule({
  declarations: [
    RetailerHeaderComponent,
    RetailerFooterComponent,
    RetailerSideberComponent,
    RetailerHomeComponent,
    RetailerMainComponent,
    ShowDetailsComponent,
    CartComponent,
    CheckOutComponent,
    RetailerOrderComponent,
    RetailerInvoiceComponent,
    WishlistComponent
  ],
  imports: [
    CommonModule,
    RetailerMainRoutingModule,
    NgToastModule,
    FormsModule
  ]
})
export class RetailerMainModule { }
