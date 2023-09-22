import { Order } from './../../../retailer-main/components/classes/order';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent {
  constructor(private adminService: AdminService, private router: Router) {
    
  }

  ngOnInit() {
    this.getOrderList();
  }

  orderList:any;
  getOrderList() {
    this.adminService.getOrderList().subscribe(data => {
      this.orderList = data;
    })
  }

  adminOrderUpdatePage(id:any) {
    this.router.navigate(['admin-main/admin-order-update',id])
  }

}
