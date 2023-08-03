export class ProductDetails {
    pId?: any;
    manuId?: any;
    pName?: any;
    pGeneric?: any;
    uPrice?: any;
    pStock?: any;
    pPicture?: any;
    pDescription?: any;
    pStatus?: any;
    manuName?: any;

    constructor(pId?: any, manuId?: any, pName?: any, pGeneric?: any, uPrice?: any, pStock?: any, pPicture?: any, pDescription?: any, pStutas?: any, manuName?: any) {
        this.pId = pId;
        this.manuId = manuId;
        this.pName = pName;
        this.pGeneric = pGeneric;
        this.uPrice = uPrice;
        this.pStock = pStock;
        this.pPicture = pPicture;
        this.pDescription = pDescription;
        this.pStatus = pStutas;
        this.manuName = manuName;
    }
}
