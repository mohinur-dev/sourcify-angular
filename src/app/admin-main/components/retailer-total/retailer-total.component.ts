import { Component } from '@angular/core';
import { RevenueService } from 'src/app/services/revenue.service';
import { RetailerRevenue } from '../../classes/retailer-revenue';

@Component({
  selector: 'app-retailer-total',
  templateUrl: './retailer-total.component.html',
  styleUrls: ['./retailer-total.component.css']
})
export class RetailerTotalComponent {
  constructor(private revenueService:RevenueService) {}
  totalRevenue:RetailerRevenue[] = [];

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
    this.revenueService.getTotalRevenueByRetailer().subscribe((data) => {
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
