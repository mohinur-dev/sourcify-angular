import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Retailer } from 'src/app/admin-main/classes/retailer';
import { Order } from 'src/app/retailer-main/components/classes/order';
import { AdminService } from 'src/app/services/admin.service';
import { ManufecturearService } from 'src/app/services/manufecturear.service';
import { RetailerService } from 'src/app/services/retailer.service';
import { Invoice } from 'src/app/retailer-main/components/classes/invoice';

@Component({
  selector: 'app-manu-order-update',
  templateUrl: './manu-order-update.component.html',
  styleUrls: ['./manu-order-update.component.css']
})
export class ManuOrderUpdateComponent {
  order: Order = new Order();
  retailer: Retailer = new Retailer();
  
  constructor(private route: ActivatedRoute, private retailerService: RetailerService, 
    private adminService:AdminService, private router:Router, private manufecturerService: ManufecturearService) {
  }

  ngOnInit() {
    this.getOrderInformationById();
  }

  getOrderInformationById() {
    let id = this.route.snapshot.params['id'];
    this.retailerService.getOrderInfoByOrderId(id).subscribe((data) => {
      this.order = data;
      this.getRetailerInformation();
    })
  }

  getRetailerInformation() {
    this.adminService.getretailerinfoById(this.order.retId).subscribe((data) => {
        this.retailer = data;
    })
  }

  updateOrderInformationById(id:any) {
    let orr: Invoice[] = this.order.orderItems || [];
    if(this.order.status == 'Conformed') {
      for(let a of orr) {
        this.retailerService.updateQuantity(a.pId, a.pQuantity, false).subscribe(res => {
        })
      }
    }
    if(this.order.status == 'Cancel') {
      for(let a of orr) {
        this.retailerService.updateQuantity(a.pId, a.pQuantity, true).subscribe(res => {
        })
      }
    }
    this.adminService.updateOrderInformation(this.order).subscribe();
    this.router.navigate(['manufecturear-main/manufecturer-order'])
  }

}
