import { Order } from './../../../retailer-main/components/classes/order';
import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent {
  constructor(private adminService: AdminService) {
    
  }

  ngOnInit() {
    this.getOrderList();
  }

  orderList:any;
  getOrderList() {
    this.adminService.getOrderList().subscribe(data => {
      this.orderList = data;
      console.log(this.orderList);
      
    })
  }

}
