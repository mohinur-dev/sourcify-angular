import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { RetailerService } from 'src/app/services/retailer.service';
import { RevenueService } from 'src/app/services/revenue.service';
import { RetailerDto } from '../../classes/retailer-dto';

@Component({
  selector: 'app-retailer-report',
  templateUrl: './retailer-report.component.html',
  styleUrls: ['./retailer-report.component.css']
})
export class RetailerReportComponent {
  constructor(
    private route: ActivatedRoute,
    private revenueService: RevenueService,
    private adminService:AdminService
  ) { }

  revenue:RetailerDto[] = [];
  name:any;
  totalOrderAmount: any;
  tatalVAT: any;
  totalDiscount: any;
  totalPlatformCommission: any;
  totalRetailerPay: any;
  totalManufacturerEarning: any;


  ngOnInit() {
    this.getRevenueListInDetailsByRetailerId();
    this.getRetailerInfo() ;
  }

  getRevenueListInDetailsByRetailerId() {
    let id = this.route.snapshot.params['id'];
    this.revenueService.showRetailerRevenueListInDetails(id).subscribe((data) => {
      console.log(data);
      this.revenue = data;
      this.calculationOfTotalOrderAmount();
    })
  }

  getRetailerInfo() {
    let id = this.route.snapshot.params['id'];
    this.adminService.getretailerinfoById(id).subscribe((data) =>{
      this.name = data.name;
    })
  }

  calculationOfTotalOrderAmount() {

    this.totalOrderAmount = 0;
    this.tatalVAT = 0;
    this.totalDiscount = 0;
    this.totalPlatformCommission = 0;
    this.totalRetailerPay = 0;
    this.totalManufacturerEarning = 0;

    for (let rev of this.revenue) {

      this.totalOrderAmount += rev.orderAmount;
      this.tatalVAT += rev.vat;
      this.totalDiscount += rev.discount;
      this.totalPlatformCommission += rev.platformCom;
      this.totalRetailerPay += rev.retPay;
      this.totalManufacturerEarning += rev.manuEarning;
    }
  }

}
