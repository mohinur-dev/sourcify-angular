import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RetailerService } from 'src/app/services/retailer.service';
import { Cart } from './cart';
import { NgToastService } from 'ng-angular-popup';
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private router: Router, private retailerService: RetailerService, private route: ActivatedRoute, private toast: NgToastService) { }

  cart: Cart[] = [];
  cartTotal: number = 0;

  ngOnInit() {
    let id = localStorage.getItem('id');
    this.retailerService.getCartListByRetId(id).subscribe(data => {
      this.cart = data;
      this.calcCartTotal();
    })
  }

  quantityPlus(id: any) {
    this.cart[id].pQuantity++
    this.cart[id].price = this.cart[id].uPrice * this.cart[id].pQuantity;
    this.updateCart(this.cart[id]);
    this.calcCartTotal();
  }

  quantityMinus(id: any) {
    if (this.cart[id].pQuantity > 1) {
      this.cart[id].pQuantity--
    }
    this.cart[id].price = this.cart[id].uPrice * this.cart[id].pQuantity;
    this.updateCart(this.cart[id]);
    this.calcCartTotal();
  }

  calcCartTotal() {
    this.cartTotal = 0;
    for (let c of this.cart) {
      this.cartTotal += c.price;
    }
  }

  addMore() {
    this.router.navigate(['retailer-main/retailer-home']);
  }

  emptyCart() {
    this.retailerService.deleteAllCartItems(this.cart[0]).subscribe(data => {
      console.log("success", data);
      this.ngOnInit();
      
    })
  }

  removeCartItems(cart: Cart) {
    this.retailerService.deleteOneCartItems(cart).subscribe(data => {
      console.log("success", data);
      this.ngOnInit();
      this.retailerService.toUpdateCart();
    })
  }

  updateCart(cart: Cart) {
    this.retailerService.cartUpdate(cart).subscribe(data => {
      console.log("success", data);
    })
  }

}
