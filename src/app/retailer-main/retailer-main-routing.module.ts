import { WishlistComponent } from './components/wishlist/wishlist.component';
import { RetailerHomeComponent } from './components/retailer-home/retailer-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetailerMainComponent } from './retailer-main.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { RetailerOrderComponent } from './components/retailer-order/retailer-order.component';
import { RetailerInvoiceComponent } from './components/retailer-invoice/retailer-invoice.component';

const routes: Routes = [
  {path:'retailer-main', component:RetailerMainComponent, children:[
    {path:'', component:RetailerHomeComponent},
    {path:'retailer-home', component:RetailerHomeComponent},
    {path:'show-details/:id', component:ShowDetailsComponent},
    {path:'cart', component:CartComponent},
    {path:'check-out', component:CheckOutComponent},
    {path:'retailer-order', component:RetailerOrderComponent},
    {path:'retailer-invoice/:id', component:RetailerInvoiceComponent},
    {path:'wishlist', component:WishlistComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RetailerMainRoutingModule { }
