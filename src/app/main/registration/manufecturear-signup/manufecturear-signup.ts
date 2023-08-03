export class ManufecturearSignup {
    name?: any;
    productType?: any;
    website?: any;
    email?: any;

    repName?: any;
    repDeg?: any;
    repEmail?: any;
    repPhone?: any;

    bank?: any;
    branch?: any;
    accName?: any;
    accType?: any;
    accNumber?: any;
    accRoutingNum?: any;

    coDivision?: any;
    coDistrict?: any;
    coUpozla?: any;
    coLocation?: any;

    facDivision?: any;
    facDictrict?: any;
    facUpozela?: any;
    facLocation?: any;

    username?: any;
    password?: any;
    status?: any;
    comments?: any;

    constructor(name?: any, productType?: any, website?: any, email?: any, repName?: any, repDeg?: any, repEmail?: any,
        repPhone?: any, bank?: any, branch?: any, accName?: any, accType?: any, accNumber?: any, accRoutingNum?: any,
        coDivision?: any, coDistrict?: any, coUpozla?: any, coLocation?: any, facDivision?: any, facDictrict?: any,
        facUpozela?: any, facLocation?: any, username?: any, password?: any, status?: any, comments?: any) {
        this.name = name;
        this.productType = productType;
        this.website = website;
        this.email = email;

        this.repName = repName;
        this.repDeg = repDeg;
        this.repEmail = repEmail;
        this.repPhone = repPhone;

        this.bank = bank;
        this.branch = branch;
        this.accName = accName;
        this.accType = accType;
        this.accNumber = accNumber;
        this.accRoutingNum = accRoutingNum;

        this.coDivision = coDivision;
        this.coDistrict = coDistrict;
        this.coUpozla = coUpozla;
        this.coLocation = coLocation;

        this.facDivision = facDivision;
        this.facDictrict = facDictrict;
        this.facUpozela = facUpozela;
        this.facLocation = facLocation;

        this.username = username;
        this.password = password;
        this.status = status;
        this.comments = comments;
    }
}
