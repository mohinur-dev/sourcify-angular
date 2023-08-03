export class AdminProduct {
    pId?: any;
    manuId?: any;
    manuName?: any;
    pName?: any;
    pGeneric?: any;
    uPrice?: any;
    pStock?: any;
    pPicture?: any;
    pDescription?: any;
    pStatus?: any;

    constructor(pId?: any, manuId?: any, manuName?: any, pName?: any, pGeneric?: any, uPrice?: any, pStock?: any,
        pPicture?: any, pDescription?: any, pStatus?: any) {
            
        this.pId = pId;
        this.manuId = manuId;
        this.manuName = manuName;
        this.pName = pName;
        this.pGeneric = pGeneric;
        this.uPrice = uPrice;
        this.pStock = pStock;
        this.pPicture = pPicture;
        this.pDescription = pDescription;
        this.pStatus = pStatus;

    }
}
