import { Component } from '@angular/core';
import { RetailerSignup } from './retailer-signup';
import { Router } from '@angular/router';
import { RetailerService } from 'src/app/services/retailer.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-retailer-signup',
  templateUrl: './retailer-signup.component.html',
  styleUrls: ['./retailer-signup.component.css']
})
export class RetailerSignupComponent {

  constructor(private router: Router, private retailerService: RetailerService, private toast: NgToastService ) { }

  retaiSignup: RetailerSignup = new RetailerSignup();

  retailerSignup() {
    this.retaiSignup = new RetailerSignup(this.retaiSignup.name, this.retaiSignup.catagory, this.retaiSignup.businessType, this.retaiSignup.tradeLisence, this.retaiSignup.strDevision, this.retaiSignup.strDistrict, this.retaiSignup.strUpozela, this.retaiSignup.strLocation, this.retaiSignup.delDivison, this.retaiSignup.delDistrict, this.retaiSignup.delUpozela, this.retaiSignup.delLocation, this.retaiSignup.ownerName, this.retaiSignup.username, this.retaiSignup.email, this.retaiSignup.phone, this.retaiSignup.password, this.retaiSignup.comment, 'Pending');
    this.retailerService.signupRetailer(this.retaiSignup).subscribe(data => {
    if (data != null) {
      this.toast.success({detail:"SUCCESS",summary:'Your Success Message',duration:5000, position:'topCenter'});
      this.router.navigate(['ratailer/retailer-signin']);
    }else{
      this.toast.error({detail:"ERROR",summary:'Your Error Message',sticky:true, position:'topCenter'});
    }
    
    })
  }
}
