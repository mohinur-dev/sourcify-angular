export class RetailerDto {
    revId?:any; orderId?:any; retId?:any; manuId?:any; orderDate?:any; delivaryDate?:any;
	orderAmount?:any; vat?:any; discount?:any; retPay?:any; platformCom?:any; manuEarning?:any;
	status?:any; manuName?:any; repName?:any; retPhone?:any; retEmail?:any;

    constructor(revId?:any, orderId?:any, retId?:any, manuId?:any, orderDate?:any, delivaryDate?:any,
        orderAmount?:any, vat?:any, discount?:any, retPay?:any, platformCom?:any, manuEarning?:any,
        status?:any, manuName?:any, repName?:any, retPhone?:any, retEmail?:any,){
        this.revId = revId;
		this.orderId = orderId;
		this.retId = retId;
		this.manuId = manuId;
		this.orderDate = orderDate;
		this.delivaryDate = delivaryDate;
		this.orderAmount = orderAmount;
		this.vat = vat;
		this.discount = discount;
		this.retPay = retPay;
		this.platformCom = platformCom;
		this.manuEarning = manuEarning;
		this.status = status;
		this.manuName = manuName;
		this.repName = repName;
		this.retPhone = retPhone;
		this.retEmail = retEmail;
        }
}