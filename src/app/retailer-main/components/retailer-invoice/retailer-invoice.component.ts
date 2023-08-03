import { RetailerService } from 'src/app/services/retailer.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../classes/order';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-retailer-invoice',
  templateUrl: './retailer-invoice.component.html',
  styleUrls: ['./retailer-invoice.component.css']
})
export class RetailerInvoiceComponent {
  orderItemsInfo: any;
  manufecturerInfo: any;
  retailerInfo: any;

  oId: any;
  oDate: any;
  retId: any;
  manuId: any;

  oAmount: any;
  discount: any;
  vat: any;
  netPayable: any;
  subtotal: any;

  delDevision: any;
  delDistrict: any;
  delUpozela: any;
  delLocation: any;
  delDate: any;
  status: any;

  invNo: any;

  constructor(private retailerService: RetailerService, private route: ActivatedRoute, private adminService: AdminService) {
    this.getOrderInfo();
  }

  ngOnInit() {
    this.getOrderInfo();
  }

  getOrderInfo() {
    let id = this.route.snapshot.params['id'];
    this.retailerService.getOrderInfoByOrderId(id).subscribe(response => {
      this.orderItemsInfo = response;
      this.oId = response.oId;
      this.oDate = response.oDate;
      this.retId = response.retId;
      this.manuId = response.manuId;
      this.oAmount = response.oAmount;
      this.discount = response.discount;
      this.vat = response.vat;
      this.netPayable = response.netPayable;
      this.delDevision = response.delDevision;
      this.delDistrict = response.delDistrict;
      this.delUpozela = response.delUpozela;
      this.delLocation = response.delLocation;
      this.delDate = response.delDate;
      this.status = response.status;
      this.subtotal = response.subtotal;

      this.getManufecturearInfo();
      this.getRetailerInfo();
    })
  }

  getManufecturearInfo() {
    this.adminService.getManufecturerInfoById(this.manuId).subscribe(data => {
      this.manufecturerInfo = data;
      console.log(this.manufecturerInfo);

    })
  }

  getRetailerInfo() {
    this.adminService.getretailerinfoById(this.retId).subscribe(data => {
      this.retailerInfo = data;
      console.log(this.retailerInfo);
    })
  }
}
