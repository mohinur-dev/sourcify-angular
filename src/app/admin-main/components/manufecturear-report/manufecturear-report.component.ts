import { AdminService } from './../../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { RevenueService } from 'src/app/services/revenue.service';
import { RevenueDto } from '../../classes/revenue-dto';

@Component({
  selector: 'app-manufecturear-report',
  templateUrl: './manufecturear-report.component.html',
  styleUrls: ['./manufecturear-report.component.css']
})
export class ManufecturearReportComponent {
  constructor(
    private route: ActivatedRoute,
    private revenueService: RevenueService,
    private adminService:AdminService
  ) { }

  revenue:RevenueDto[] = [];
  manuName:any;
  totalOrderAmount: any;
  tatalVAT: any;
  totalDiscount: any;
  totalPlatformCommission: any;
  totalRetailerPay: any;
  totalManufacturerEarning: any;


  ngOnInit() {
    this.getRevenueListInDetails();
    this.getManufecturerInfo();
  }

  getRevenueListInDetails() {
    let id = this.route.snapshot.params['id'];
    this.revenueService.showRevenueListInDetails(id).subscribe((data) => {
      console.log(data);
      this.revenue = data;
      this.calculationOfTotalOrderAmount();
    })
  }

  getManufecturerInfo() {
    let id = this.route.snapshot.params['id'];
    this.adminService.getManufecturerInfoById(id).subscribe((data) =>{
      this.manuName = data.manuName;
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
