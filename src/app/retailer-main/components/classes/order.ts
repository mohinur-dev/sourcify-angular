import { Invoice } from "./invoice";

export class Order {
    oId?: any;
    oDate?: any;
    retId?: any;
    manuId?: any;
    oAmount?: any;
    discount?: any;
    vat?: any;
    netPayable?: any;
    delDevision?: any;
    delDistrict?: any;
    delUpozela?: any;
    delLocation?: any;
    delDate?: any;
    status?: any;
    subtotal?:any;
    orderItems?: Invoice[];

    constructor(oId?: any, oDate?: any, retId?: any, manuId?: any, oAmount?: any, discount?: any, vat?: any,
        netPayable?: any, delDevision?: any, delDistrict?: any, delUpozela?: any, delLocation?: any,
        delDate?: any, status?: any, subtotal?:any, orderItems?: Invoice[]) {
        this.oId = oId;
        this.oDate = oDate;
        this.retId = retId;
        this.manuId = manuId;
        this.oAmount = oAmount;
        this.discount = discount;
        this.vat = vat;
        this.netPayable = netPayable;
        this.delDevision = delDevision;
        this.delDistrict = delDistrict;
        this.delUpozela = delUpozela;
        this.delLocation = delLocation;
        this.delDate = delDate;
        this.status = status;
        this.subtotal = subtotal;
        this.orderItems = orderItems;
    }
}
