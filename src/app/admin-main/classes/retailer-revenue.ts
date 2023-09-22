export class RetailerRevenue {
    retId?:any;
	retName?:any; 
    retEmail?:any;
	totalOrderAmount?:any; 
    totalVAT?:any; 
    totalDiscount?:any; 
    totalRetPay?:any; 
    totalPlatformCom?:any; 
    totalManuEarning?:any;

    constructor( retId?:any,
        retName?:any, 
        retEmail?:any,
        totalOrderAmount?:any, 
        totalVAT?:any, 
        totalDiscount?:any, 
        totalRetPay?:any, 
        totalPlatformCom?:any, 
        totalManuEarning?:any) {

            this.retId = retId;
            this.retName = retName;
            this.retEmail = retEmail;
            this.totalOrderAmount = totalOrderAmount;
            this.totalVAT = totalVAT;
            this.totalDiscount = totalDiscount;
            this.totalRetPay = totalRetPay;
            this.totalPlatformCom = totalPlatformCom;
            this.totalManuEarning = totalManuEarning;
    }
}
