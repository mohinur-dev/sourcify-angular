import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/retailer-main/components/classes/invoice';
import { Order } from 'src/app/retailer-main/components/classes/order';
import { RetailerService } from 'src/app/services/retailer.service';
import { Retailer } from '../../classes/retailer';
import { Manufecturear } from '../../classes/manufecturear';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-order-update',
  templateUrl: './admin-order-update.component.html',
  styleUrls: ['./admin-order-update.component.css']
})
export class AdminOrderUpdateComponent {
  order: Order = new Order();
  retailer: Retailer = new Retailer();
  manufecturear: Manufecturear = new Manufecturear();

  constructor(private route: ActivatedRoute, private retailerService: RetailerService,
    private adminService: AdminService, private router:Router) {
  }

  ngOnInit() {
    this.getOrderInformationById();
  }

  getOrderInformationById() {
    let id = this.route.snapshot.params['id'];
    this.retailerService.getOrderInfoByOrderId(id).subscribe((data) => {
      this.order = data;

      this.getRetailerInformation();
      this.getManufecturearInformation();
    })
  }

  getRetailerInformation() {
    this.adminService.getretailerinfoById(this.order.retId).subscribe((data) => {
      this.retailer = data;
    })
  }

  getManufecturearInformation() {
    this.adminService.getManufecturerInfoById(this.order.manuId).subscribe((data) => {
      this.manufecturear = data;
    })
  }

  updateOrderInformationById(id: any) {
    this.adminService.updateOrderInformation(this.order).subscribe();
    this.router.navigate(['admin-main/admin-order']);
  }
}
