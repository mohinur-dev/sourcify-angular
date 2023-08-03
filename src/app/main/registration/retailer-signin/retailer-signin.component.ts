import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RetailerSignin } from './retailer-signin';
import { RetailerService } from 'src/app/services/retailer.service';

@Component({
  selector: 'app-retailer-signin',
  templateUrl: './retailer-signin.component.html',
  styleUrls: ['./retailer-signin.component.css']
})
export class RetailerSigninComponent {
  constructor(private router: Router, private retailerRouter: RetailerService) {
    let username = localStorage.getItem("username");

    if (username != null) {
      router.navigate(["retailer-main"]);
    }
  }

  retailersignin: RetailerSignin = new RetailerSignin();

  retailerSignin() {
    
    let info: RetailerSignin = new RetailerSignin(this.retailersignin.id, this.retailersignin.name, 
      this.retailersignin.businessType, this.retailersignin.delDivison, this.retailersignin.delDistrict, 
      this.retailersignin.delUpozela, this.retailersignin.delLocation, this.retailersignin.ownerName, 
      this.retailersignin.username, this.retailersignin.email, this.retailersignin.phone, this.retailersignin.password, 
      this.retailersignin.status, this.retailersignin.retPicture)
    this.retailerRouter.signinRetailer(info).subscribe(response => {
      console.log(response);
      if (response != null) {
        localStorage.setItem("id", response.id);
        localStorage.setItem("name", response.name);
        localStorage.setItem("businessType", response.businessType);
        localStorage.setItem("delDivison", response.delDivison);
        localStorage.setItem("delDistrict", response.delDistrict);
        localStorage.setItem("delUpozela", response.delUpozela);
        localStorage.setItem("delLocation", response.delLocation);
        localStorage.setItem("ownerName", response.ownerName);
        localStorage.setItem("username", response.username);
        localStorage.setItem("email", response.email);
        localStorage.setItem("phone", response.phone);
        localStorage.setItem("password", response.password);
        localStorage.setItem("status", response.status);
        localStorage.setItem("retPicture", response.retPicture);
        this.router.navigate(['retailer-main']);
      } else {
        alert("username and password does not match!");
      }
    })
  }
}
