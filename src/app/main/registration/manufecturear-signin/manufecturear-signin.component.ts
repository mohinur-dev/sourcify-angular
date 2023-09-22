import { ManufecturearService } from './../../../services/manufecturear.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManufecturearSignin } from './manufecturear-signin';


@Component({
  selector: 'app-manufecturear-signin',
  templateUrl: './manufecturear-signin.component.html',
  styleUrls: ['./manufecturear-signin.component.css']
})
export class ManufecturearSigninComponent {

  constructor(private router: Router, private manufecturearService: ManufecturearService) {
    let username = localStorage.getItem("username");
    if (username != null) {
      router.navigate(["manufecturear-main"]);
    }
  }

  manufecturearsignin: ManufecturearSignin = new ManufecturearSignin();

  manufecturearSignin() {
    let info: ManufecturearSignin = new ManufecturearSignin(this.manufecturearsignin.manuId, this.manufecturearsignin.manuName,
      this.manufecturearsignin.productType, this.manufecturearsignin.website, this.manufecturearsignin.email,
      this.manufecturearsignin.repName, this.manufecturearsignin.repDeg, this.manufecturearsignin.repEmail,
      this.manufecturearsignin.repPhone, this.manufecturearsignin.bank, this.manufecturearsignin.branch,
      this.manufecturearsignin.accName, this.manufecturearsignin.accType, this.manufecturearsignin.accNumber,
      this.manufecturearsignin.accRoutingNum, this.manufecturearsignin.coDivision, this.manufecturearsignin.coDistrict,
      this.manufecturearsignin.coUpozla, this.manufecturearsignin.coLocation, this.manufecturearsignin.facDivision,
      this.manufecturearsignin.facDictrict, this.manufecturearsignin.facUpozela, this.manufecturearsignin.facLocation,
      this.manufecturearsignin.username, this.manufecturearsignin.password, this.manufecturearsignin.status,
      this.manufecturearsignin.comments, this.manufecturearsignin.manuPicture)
    this.manufecturearService.signinManufecturear(info).subscribe(response => {
      console.log(response);
      if (response != null) {
        localStorage.setItem("manuId", response.manuId);
        localStorage.setItem("manuName", response.manuName);
        localStorage.setItem("productType", response.productType);
        localStorage.setItem("website", response.website);
        localStorage.setItem("email", response.email);
        localStorage.setItem("repName", response.repName);
        localStorage.setItem("repDeg", response.repDeg);
        localStorage.setItem("repEmail", response.repEmail);
        localStorage.setItem("repPhone", response.repPhone);
        localStorage.setItem("bank", response.bank);
        localStorage.setItem("branch", response.branch);
        localStorage.setItem("accName", response.accName);
        localStorage.setItem("accType", response.accType);
        localStorage.setItem("accNumber", response.accNumber);
        localStorage.setItem("accRoutingNum", response.accRoutingNum);
        localStorage.setItem("coDivision", response.coDivision);
        localStorage.setItem("coDistrict", response.coDistrict);
        localStorage.setItem("coUpozla", response.coUpozla);
        localStorage.setItem("coLocation", response.coLocation);
        localStorage.setItem("facDivision", response.facDivision);
        localStorage.setItem("facDictrict", response.facDictrict);
        localStorage.setItem("facUpozela", response.facUpozela);
        localStorage.setItem("facLocation", response.facLocation);
        localStorage.setItem("username", response.username);
        localStorage.setItem("password", response.password);
        localStorage.setItem("status", response.status);
        localStorage.setItem("comments", response.comments);
        localStorage.setItem("manuPicture", response.manuPicture);
        this.router.navigate(['manufecturear-main']);
      } else {
        alert("username and password does not match!");
      }
    })
  }
}
