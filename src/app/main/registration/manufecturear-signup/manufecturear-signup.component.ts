import { Component } from '@angular/core';
import { ManufecturearSignup } from './manufecturear-signup';
import { Router } from '@angular/router';
import { ManufecturearService } from 'src/app/services/manufecturear.service';

@Component({
  selector: 'app-manufecturear-signup',
  templateUrl: './manufecturear-signup.component.html',
  styleUrls: ['./manufecturear-signup.component.css']
})
export class ManufecturearSignupComponent {
constructor(private router:Router, private manuSignupService:ManufecturearService){}

manuSignup:ManufecturearSignup = new ManufecturearSignup();



manufecturearSignup() {  
  this.manuSignup.status = "Pending"
  // this.manuSignup = new ManufecturearSignup(this.manuSignup.accName, this.manuSignup.productType, this.manuSignup.website, this.manuSignup.email, this.manuSignup.repName, this.manuSignup.repDeg, this.manuSignup.repEmail, this.manuSignup.repPhone, this.manuSignup.bank, this.manuSignup.branch, this.manuSignup.accName, this.manuSignup.accType, this.manuSignup.accNumber, this.manuSignup.accRoutingNum, this.manuSignup.coDivision, this.manuSignup.coDistrict, this.manuSignup.coUpozla, this.manuSignup.coLocation, this.manuSignup.facDivision, this.manuSignup.facDictrict, this.manuSignup.facUpozela, this.manuSignup.facLocation, this.manuSignup.username, this.manuSignup.password, 'Pending', this.manuSignup.comments);
  this.manuSignupService.SignupManufecturear(this.manuSignup).subscribe(data => {
    console.log("success", data),
      this.router.navigate(['manufacturer/manufecturear-signin'])
  });
}
}
