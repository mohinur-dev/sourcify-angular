export class Invoice {
    iNo?: any;
    oId?: any;
    manuId?: any;
    pId?: any;
    pName?: any;
    uPrice?: any;
    pQuantity?: any;
    price?: any;

    constructor(iNo?: any, oId?: any, manuId?: any, pId?: any, pName?: any, uPrice?: any, pQuantity?: any, 
        price?: any) {
        this.iNo = iNo;
        this.oId = oId;
        this.manuId = manuId;
        this.pId = pId;
        this.pName = pName;
        this.uPrice = uPrice;
        this.pQuantity = pQuantity;
        this.price = price;
    }
}
