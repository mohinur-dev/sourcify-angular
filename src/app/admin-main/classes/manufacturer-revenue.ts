export class ManufacturerRevenue {
    manuId?: any;
    manuName?: any;
    email?: any;
    totalOrderAmount?: any;
    totalVAT?: any;
    totalDiscount?: any;
    totalRetPay?: any;
    totalPlatformCom?: any;
    totalManuEarning?: any;

    constructor(manuId?: any, manuName?: any, email?: any, totalOrderAmount?: any, totalVAT?: any,
        totalDiscount?: any, totalRetPay?: any, totalPlatformCom?: any, totalManuEarning?: any) {
        this.manuId = manuId;
        this.manuName = manuName;
        this.email = email;
        this.totalOrderAmount = totalOrderAmount;
        this.totalVAT = totalVAT;
        this.totalDiscount = totalDiscount;
        this.totalRetPay = totalRetPay;
        this.totalPlatformCom = totalPlatformCom;
        this.totalManuEarning = totalManuEarning;

    }
}
