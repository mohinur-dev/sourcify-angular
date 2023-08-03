export class AdminSignin {
    name?: any;
    role?:any;
    email?:any;
    username?: any;
    password?: any;

    // 
    constructor(username?:any, password?:any, name?:any, role?:any, email?:any) {
        this.name = name;
        this.role = role;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}
