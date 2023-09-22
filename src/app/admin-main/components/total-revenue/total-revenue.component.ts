import { Component } from '@angular/core';
import { RevenueService } from 'src/app/services/revenue.service';
import { ManufacturerRevenue } from '../../classes/manufacturer-revenue';

@Component({
  selector: 'app-total-revenue',
  templateUrl: './total-revenue.component.html',
  styleUrls: ['./total-revenue.component.css']
})
export class TotalRevenueComponent {
  constructor(private revenueService:RevenueService) {}
  totalRevenue:ManufacturerRevenue[] = [];

  tOrderAmount:any;
  tVAT?:any;
  tDiscount?:any;
  tPlatformCommission?:any;
  tRetailerPay?:any;
  tManufacturerEarning?:any;
  

  ngOnInit() {
    this.getTotalRevenueByManufacturer();
    
  }

  getTotalRevenueByManufacturer() {
    this.revenueService.getRevenueByManufecturer().subscribe((data) => {
      this.totalRevenue = data;
      console.log(this.totalRevenue);
      this.calculationOfTotalOrderAmount();
    })
  }

  calculationOfTotalOrderAmount() {

    this.tOrderAmount = 0;
    this.tVAT = 0;
    this.tDiscount = 0;
    this.tPlatformCommission = 0;
    this.tRetailerPay = 0;
    this.tManufacturerEarning = 0;

    for (let rev of this.totalRevenue) {

      this.tOrderAmount += rev.totalOrderAmount;
      this.tVAT += rev.totalVAT;
      this.tDiscount += rev.totalDiscount;
      this.tPlatformCommission += rev.totalPlatformCom;
      this.tRetailerPay += rev.totalRetPay;
      this.tManufacturerEarning += rev.totalManuEarning;
    }
  }
}
