import { RetailerService } from './../../../services/retailer.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-request-status',
  templateUrl: './product-request-status.component.html',
  styleUrls: ['./product-request-status.component.css']
})
export class ProductRequestStatusComponent {
  requestedProduct: any[] = [];
  constructor(private retailerService:RetailerService){}

  ngOnInit() {
    this.getRequestedProduct();
  }
  getRequestedProduct() {
    let retId = localStorage.getItem('id');
    this.retailerService.getRequestedProductByRetId(retId).subscribe((data) => {
      this.requestedProduct = data;
      console.log(this.requestedProduct);
      
    })
  }
}
