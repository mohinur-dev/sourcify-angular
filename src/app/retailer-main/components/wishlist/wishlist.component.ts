import { Component } from '@angular/core';
import { RetailerService } from 'src/app/services/retailer.service';
import { Wishlist } from './wishlist';
import { Cart } from '../cart/cart';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  wishlist: Wishlist = new Wishlist();
  wishList: any[] = [];

  constructor(private retailerService: RetailerService, private toast: NgToastService, 
    private router: Router) { 

  }

  ngOnInit() {
    this.getWishList();
  }

  getWishList() {
    let retId = localStorage.getItem('id');
    this.retailerService.getWishlistByRetId(retId).subscribe(response => {
      this.wishList = response;
    })
  }

  add2cart(wi: Wishlist) {
    let cart: Cart = new Cart(null, wi.pId, wi.pName, wi.manuId, wi.manuName, 1, wi.uPrice, wi.uPrice, wi.pPicture, wi.retId);
    this.retailerService.add2cart(cart).subscribe(data => {
      if (data != null) {
        this.toast.success({ detail: "SUCCESS", summary: 'Successfully added', duration: 5000, position: 'topCenter' });
      } else {
        this.toast.error({ detail: 'ERROR', summary: 'Failed to add', duration: 5000, position: 'topCenter', })
      }
    });
  }

  deleteFromWishlist(wList: Wishlist) {
    if (confirm("Do you want to delete this product from wishlist ?")) {
      this.retailerService.deleteFromWishlistByProductId(wList).subscribe((data) => {
        console.log('success', data);
        this.ngOnInit();
      })
    }
  }

  // deleteFromWishlist(wList: Wishlist) {
  //   if (confirm("Do you want to delete this product from wishlist ?")) {
  //     this.retailerService.deleteFromWishlistByWishlistId(wList).subscribe((data) => {
  //       console.log('success', data);
  //       this.ngOnInit();
  //     })
  //   }
  // }

  showDetailsPage(id: any) {
    this.router.navigate(['retailer-main/show-details', id]);
  }

}
