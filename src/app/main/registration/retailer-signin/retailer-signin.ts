export class RetailerSignin {
    id?:any;
    name?:any;
    businessType?:any;
    delDivison?:any;
    delDistrict?:any;
    delUpozela?:any;
    delLocation?:any;
    ownerName?:any;
    username?:any;
    email?:any;
    phone?:any;
    password?:any;
    status?:any;
    retPicture?:any;
    
    constructor(id?:any, name?:any, businessType?:any, delDivison?:any, delDistrict?:any, delUpozela?:any, 
        delLocation?:any, ownerName?:any, username?:any, email?:any, phone?:any, password?:any, status?:any, retPicture?:any) {

        this.id = id;
        this.name = name;
        this.businessType = businessType;
        this.delDivison = delDivison;
        this.delDistrict = delDistrict;
        this.delUpozela = delUpozela;
        this.delLocation = delLocation;
        this.ownerName = ownerName;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.password = password;
        this.status = status;
        this.retPicture = retPicture;
    }
}
