import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RetailerService } from 'src/app/services/retailer.service';
import { ProductDetails } from '../classes/product-details';
import { Cart } from '../cart/cart';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent {
  constructor(private router: Router, private retailerService: RetailerService,
    private route: ActivatedRoute, private toast: NgToastService) { }

  productDetails: ProductDetails = new ProductDetails();
  products: any;

  pId?: any;
  pName?: any;
  manuId?: any;
  manuName?: any;
  pQuantity?: any;
  uPrice?: any;
  price?: any;
  pPicture?: any;
  retId?: any;

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.retailerService.getProductInfoById4retailer(id).subscribe(data => {
      this.products = data;
      this.productDetails.pId = this.products.pId;
      this.productDetails.manuName = this.products.manuName;
      this.productDetails.manuId = this.products.manuId;
      this.productDetails.pName = this.products.pName;
      this.productDetails.pGeneric = this.products.pGeneric;
      this.productDetails.pStock = this.products.pStock;
      this.productDetails.uPrice = this.products.uPrice;
      this.productDetails.pPicture = this.products.pPicture;
      this.productDetails.pDescription = this.products.pDescription;
      this.productDetails.pStatus = this.products.pStatus;

      this.pId = this.products.pId;
      this.pName = this.products.pName;
      this.manuId = this.products.manuId;
      this.manuName = this.products.manuName;
      this.uPrice = this.products.uPrice;
      this.pPicture = this.products.pPicture;
      this.price = this.products.uPrice;
      this.pQuantity = 1;
      this.retId = localStorage.getItem('id');
      
    });
  }

  add2cart() {
    let cart: Cart = new Cart(null, this.pId, this.pName, this.manuId, this.manuName,this.pQuantity, this.uPrice, this.price, this.pPicture, this.retId);
    this.retailerService.add2cart(cart).subscribe(data => {
      if (data != null) {
        this.toast.success({detail:"SUCCESS", summary:'Successfully added', duration:5000, position:'topCenter'});
      } else {
        this.toast.error({detail:'ERROR', summary:'Failed to add', duration:5000, position:'topCenter',})
      }
    });
  }


}
