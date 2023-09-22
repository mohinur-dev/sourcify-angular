export class ProductRequest {
    prId?: any;
	prName?: any; 
	prGeneric?: any; 
	prManuId?: any;
	prManuName?: any;
    prManuEmail?: any;
	prRetId?: any;
	prRetName?: any;
    prRetEmail?: any;
	prQuantity?: any; 
	prPicture?: any;
	prStatus?: any;

    constructor(prId?: any, prName?: any, prGeneric?: any, prManuId?: any, prManuName?: any, prManuEmail?: any,
         prRetId?: any, prRetName?: any, prRetEmail?: any, prQuantity?: any, prPicture?: any, prStatus?: any) {
        this.prId = prId;
        this.prName = prName; 
        this.prGeneric = prGeneric; 
        this.prManuId = prManuId;
        this.prManuName = prManuName;
        this.prManuEmail = prManuEmail;
        this.prRetId = prRetId;
        this.prRetName = prRetName;
        this.prRetEmail = prRetEmail;
        this.prQuantity = prQuantity; 
        this.prPicture = prPicture;
        this.prStatus = prStatus;
    }
}
