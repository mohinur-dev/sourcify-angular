export class Wishlist {
    wId?: any;
    pId?: any;
    pName?: any;
    retId?: any;
    retName?: any;
    manuId?: any;
    manuName?: any;
    pQuantity?: any;
    uPrice?: any;
    price?: any;
    pPicture?: any;

    constructor(wId?: any, pId?: any, pName?: any, retId?: any, retName?: any, manuId?: any, manuName?: any,
        pQuantity?: any, uPrice?: any, price?: any, pPicture?: any) {
        this.wId = wId;
        this.pId = pId;
        this.pName = pName;
        this.retId = retId;
        this.retName = retName;
        this.manuId = manuId;
        this.manuName = manuName;
        this.pQuantity = pQuantity;
        this.uPrice = uPrice;
        this.price = price;
        this.pPicture = pPicture;

    }

}
