import { Component } from '@angular/core';
import { ProductRequest } from './product-request';
import { RetailerService } from 'src/app/services/retailer.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-request',
  templateUrl: './product-request.component.html',
  styleUrls: ['./product-request.component.css']
})
export class ProductRequestComponent {
  pr: ProductRequest = new ProductRequest();


  constructor(private retailerService:RetailerService, private toast:NgToastService, private router: Router) {}

  add2ProductRequest() {
    this.pr.prRetId = localStorage.getItem('id');
    this.pr.prRetName = localStorage.getItem('name');
    this.pr.prRetEmail = localStorage.getItem('email');
    this.pr.prStatus = 'Panding';
    this.retailerService.add2ProductRequest(this.pr).subscribe(data => {
      if (data != null) {
        this.toast.success({ detail: "SUCCESS", summary: 'Your product request submitted', duration: 5000, position: 'topCenter' });
        this.router.navigate(['retailer-main/get-requested-product-list'])
      } else {
        this.toast.error({ detail: 'ERROR', summary: 'Sorry! failed to submit', duration: 5000, position: 'topCenter', })
      }
    })
  }
}
