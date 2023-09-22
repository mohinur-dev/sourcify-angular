import { Component } from '@angular/core';
import { RevenueDto } from 'src/app/admin-main/classes/revenue-dto';
import { RevenueService } from 'src/app/services/revenue.service';

@Component({
  selector: 'app-business-reports',
  templateUrl: './business-reports.component.html',
  styleUrls: ['./business-reports.component.css']
})
export class BusinessReportsComponent {
  constructor(private revenueService: RevenueService) { }

  revenue:RevenueDto[] = [];

  totalOrderAmount: any;
  tatalVAT: any;
  totalDiscount: any;
  totalPlatformCommission: any;
  totalRetailerPay: any;
  totalManufacturerEarning: any;


  ngOnInit() {
    this.getRevenueListInDetails();
  }

  getRevenueListInDetails() {
    let id = localStorage.getItem('manuId');
    this.revenueService.showRevenueListInDetails(id).subscribe((data) => {
      console.log(data);
      this.revenue = data;
      this.calculationOfTotalOrderAmount();
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
