export class Cart {
    cartId?:any;
	pId?:any;
	pName?:any;
	manuId?:any;
	manuName?:any;
	pQuantity?:any;
	uPrice?:any;
	price?:any;
	pPicture?:any;
	retId?:any;
    constructor(cartId?:any ,pId?:any, pName?:any, manuId?:any, manuName?:any, pQuantity?:any, uPrice?:any, price?:any, pPicture?:any, retId?:any) {
           this.cartId = cartId;
           this.pId = pId;
           this.pName = pName;
           this.manuId = manuId;
           this.manuName = manuName;
           this.pQuantity = pQuantity;
           this.uPrice = uPrice;
           this.price = price;
           this.pPicture = pPicture;
           this.retId = retId; 
    }
}
