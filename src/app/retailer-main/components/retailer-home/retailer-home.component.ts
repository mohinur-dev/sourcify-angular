import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManufecturearService } from 'src/app/services/manufecturear.service';
import { RetailerService } from 'src/app/services/retailer.service';
import { ProductDetails } from '../classes/product-details';
import { Cart } from '../cart/cart';
import { Wishlist } from '../wishlist/wishlist';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-retailer-home',
  templateUrl: './retailer-home.component.html',
  styleUrls: ['./retailer-home.component.css']
})
export class RetailerHomeComponent {
  constructor(private router: Router, private manufecturearService: ManufecturearService,
    private retailerService: RetailerService, private route: ActivatedRoute, private toast: NgToastService) {
  }

  product: ProductDetails = new ProductDetails();
  cart: Cart = new Cart();
  wishlist: Wishlist = new Wishlist();
  products: any;
  retId: any = localStorage.getItem('id');
  retName?: any = localStorage.getItem('name');

  ngOnInit() {
    this.productShow2retailer();
  }

  productShow2retailer() {
    this.retailerService.showProducts2retailer().subscribe(response => {
      this.products = response;
    })
  }


  add2cart(pdt: ProductDetails) {
    let cart: Cart = new Cart(null, pdt.pId, pdt.pName, pdt.manuId, pdt.manuName, 1, pdt.uPrice, pdt.uPrice, pdt.pPicture, this.retId);
    this.retailerService.add2cart(cart).subscribe(data => {
      if (data != null) {
        this.toast.success({ detail: "SUCCESS", summary: 'Successfully added', duration: 5000, position: 'topCenter' });
      } else {
        this.toast.error({ detail: 'ERROR', summary: 'Failed to add', duration: 5000, position: 'topCenter', })
      }
    });
  }

  add2Wishlist(pdt: ProductDetails) {
    let wishlist: Wishlist = new Wishlist(null, pdt.pId, pdt.pName, this.retId, this.retName, pdt.manuId, pdt.manuName, 1, pdt.uPrice, pdt.uPrice, pdt.pPicture);
    this.retailerService.add2Wishlist(wishlist).subscribe(data => {
      if (data != null) {
        this.toast.success({ detail: "SUCCESS", summary: 'Successfully added', duration: 5000, position: 'topCenter' });
      } else {
        this.toast.error({ detail: 'ERROR', summary: 'Failed to add', duration: 5000, position: 'topCenter', })
      }
    });
  }

  showDetailsPage(id: any) {
    this.router.navigate(['retailer-main/show-details', id])
  }


}
