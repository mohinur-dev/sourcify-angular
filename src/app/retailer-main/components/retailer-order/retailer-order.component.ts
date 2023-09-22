import { Router } from '@angular/router';
import { RetailerService } from 'src/app/services/retailer.service';
import { Retailer } from './../../../admin-main/classes/retailer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-retailer-order',
  templateUrl: './retailer-order.component.html',
  styleUrls: ['./retailer-order.component.css']
})
export class RetailerOrderComponent {
  constructor(private router: Router, private retailerService: RetailerService) { }

  ngOnInit() {
    this.getOrderList();
  }

  orderList: any;
  getOrderList() {
    let retId = localStorage.getItem('id')
    this.retailerService.getOrderListByRetId(retId).subscribe(response => {
      this.orderList = response;
    })
  }

  viewInvoice(id: any) {
    this.router.navigate(['retailer-main/retailer-invoice', id]);
  }

  orderTrakingPage(id: any) {
    this.router.navigate(['retailer-main/order-traking', id])
  }
  printInvoice(){
    
  }

}


