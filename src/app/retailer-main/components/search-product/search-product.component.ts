import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ManufecturearService } from 'src/app/services/manufecturear.service';
import { RetailerService } from 'src/app/services/retailer.service';
import { ProductDetails } from '../classes/product-details';
import { Cart } from '../cart/cart';
import { Wishlist } from '../wishlist/wishlist';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  constructor(private router: Router, private manufecturearService: ManufecturearService,
    private retailerService: RetailerService, private route: ActivatedRoute, private toast: NgToastService) {
  }

  product: ProductDetails = new ProductDetails();
  cart: Cart = new Cart();
  wishlist: Wishlist = new Wishlist();
  products: any;
  retId: any = localStorage.getItem('id');
  retName?: any = localStorage.getItem('name');

  searchQuery: any;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['name']
      this.searchProduct();
    });
  }

  searchProduct() {
    this.retailerService.searchProductByName(this.searchQuery).subscribe(response => {
      this.products = response;
    })
  }


  add2cart(pdt: ProductDetails) {
    let cart: Cart = new Cart(null, pdt.pId, pdt.pName, pdt.manuId, pdt.manuName, 1, pdt.uPrice, pdt.uPrice, pdt.pPicture, this.retId);
    this.retailerService.add2cart(cart).subscribe(data => {
      if (data != null) {
        this.toast.success({ detail: "SUCCESS", summary: 'Successfully added', duration: 5000, position: 'topCenter' });
        this.retailerService.toUpdateCart();
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
