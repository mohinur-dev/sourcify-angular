import { LocalizedString } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerService } from 'src/app/services/retailer.service';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-retailer-header',
  templateUrl: './retailer-header.component.html',
  styleUrls: ['./retailer-header.component.css']
})
export class RetailerHeaderComponent {
  username: any;
  retPicture = localStorage.getItem("retPicture");
  retName = localStorage.getItem("name");

  constructor(private router:Router, private retailerService:RetailerService) {
    this.username = localStorage.getItem("username");
    if(this.username == null) {
      router.navigate(["retailer-signin"]);
    }
  }
  
  retailerSignout() {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("businessType");
    localStorage.removeItem("delDivison");
    localStorage.removeItem("delDistrict");
    localStorage.removeItem("delUpozela");
    localStorage.removeItem("delLocation");
    localStorage.removeItem("ownerName");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    localStorage.removeItem("password");
    localStorage.removeItem("retPicture");
    this.router.navigate(["ratailer/retailer-signin"]);
  }


  cart: Cart[] = [];
  countCartItems: number = 0;

  ngOnInit() {
    let id = localStorage.getItem('id');
    this.retailerService.getCartListByRetId(id).subscribe(data => {
      this.cart = data;
      this.countCartItem();
    })
  }

  countCartItem() {
    this.countCartItems = 0;
    for (let c of this.cart) {
      this.countCartItems ++
    }
  }
}
