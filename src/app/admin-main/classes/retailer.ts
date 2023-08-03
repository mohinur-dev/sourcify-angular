export class Retailer {
    id?:any;
    name?: any;
    catagory?: any;
    businessType?: any;
    tradeLisence?: any;
    stDevision?: any;
    strDistrict?: any;
    strUpozela?: any;
    strLocation?: any;
    delDivison?: any;
    delDistrict?: any;
    delUpozela?: any;
    delLocation?: any;
    ownerName?: any;
    username?: any;
    email?: any;
    phone?: any;
    password?: any;
    comment?: any;
    status?: any;
    retPicture?: any;

    constructor(id?:any, name?: any, catagory?: any, businessType?: any, tradeLisence?: any, stDevision?: any,
        strDistrict?: any, strUpozela?: any, strLocation?: any, delDivison?: any, delDistrict?: any,
        delUpozela?: any, delLocation?: any, ownerName?: any, username?: any, email?: any, phone?: any,
        password?: any, comment?: any, status?: any, retPicture?: any) {
        this.id = id;    
        this.name = name;
        this.catagory = catagory;
        this.businessType = businessType;
        this.tradeLisence = tradeLisence;
        this.stDevision = stDevision;
        this.strDistrict = strDistrict;
        this.strUpozela = strUpozela;
        this.strLocation = strLocation;
        this.delDivison = delDivison;
        this.delDistrict = delDistrict;
        this.delUpozela = delUpozela;
        this.delLocation = delLocation;
        this.ownerName = ownerName;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.comment = comment;
        this.status = status;
        this.retPicture = retPicture;

    }
}

