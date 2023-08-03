import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manufecturear-sideber',
  templateUrl: './manufecturear-sideber.component.html',
  styleUrls: ['./manufecturear-sideber.component.css']
})
export class ManufecturearSideberComponent {
  username: any;

  constructor(private router:Router) {
    this.username = localStorage.getItem("username");
    if(this.username == null) {
      router.navigate(["manufacturer/manufecturear-signin"]);
    }
  }
  manufecturearSignout() {
    localStorage.removeItem("manuId");
    localStorage.removeItem("manuName");
    localStorage.removeItem("productType");
    localStorage.removeItem("website");
    localStorage.removeItem("email");
    localStorage.removeItem("repName");
    localStorage.removeItem("repDeg");
    localStorage.removeItem("repEmail");
    localStorage.removeItem("repPhone");
    localStorage.removeItem("bank");
    localStorage.removeItem("branch");
    localStorage.removeItem("accName");
    localStorage.removeItem("accType");
    localStorage.removeItem("accNumber");
    localStorage.removeItem("accRoutingNum");
    localStorage.removeItem("coDivision");
    localStorage.removeItem("coDistrict");
    localStorage.removeItem("coUpozla");
    localStorage.removeItem("coLocation");
    localStorage.removeItem("facDivision");
    localStorage.removeItem("facDictrict");
    localStorage.removeItem("facUpozela");
    localStorage.removeItem("facLocation");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("status");
    localStorage.removeItem("comments");
    localStorage.removeItem("manuPicture");
    this.router.navigate(["manufacturer/manufecturear-signin"]);
  }
}
