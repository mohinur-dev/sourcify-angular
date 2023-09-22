export class RevenueDto {
    revId?: any; orderId?: any; manuId?: any; retId?: any; orderDate?: any; delivaryDate?: any;
    orderAmount?: any; vat?: any; discount?: any; retPay?: any; platformCom?: any; manuEarning?: any;
    status?: any; retName?: any; ownerName?: any; retPhone?: any; retEmail?: any;

    constructor(revId?: any, orderId?: any, manuId?: any, retId?: any, orderDate?: any, delivaryDate?: any,
        orderAmount?: any, vat?: any, discount?: any, retPay?: any, platformCom?: any, manuEarning?: any,
        status?: any, retName?: any, ownerName?: any, retPhone?: any, retEmail?: any) {
        this.revId = revId;
        this.orderId = orderId;
        this.manuId = manuId;
        this.retId = retId;
        this.orderDate = orderDate;
        this.delivaryDate = delivaryDate;
        this.orderAmount = orderAmount;
        this.vat = vat;
        this.discount = discount;
        this.retPay = retPay;
        this.platformCom = platformCom;
        this.manuEarning = manuEarning;
        this.status = status;
        this.retName = retName;
        this.ownerName = ownerName;
        this.retPhone = retPhone;
        this.retEmail = retEmail;
    }
}
