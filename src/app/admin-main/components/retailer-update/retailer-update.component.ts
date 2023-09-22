import { Retailer } from './../../classes/retailer';
import { AdminService } from 'src/app/services/admin.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-retailer-update',
  templateUrl: './retailer-update.component.html',
  styleUrls: ['./retailer-update.component.css']
})
export class RetailerUpdateComponent {
  retailer:Retailer = new Retailer();
  constructor(private adminService:AdminService, private route:ActivatedRoute, private router:Router) {
  }
  ngOnInit() {
    this.getRetailerInformation();
  }

  getRetailerInformation() {
    let id = this.route.snapshot.params['id'];
    this.adminService.getretailerinfoById(id).subscribe((data) => {
          this.retailer = data;
      // this.retailer.id = data.id;    
      // this.retailer.name = data.name;
      // this.retailer.catagory = data.catagory;
      // this.retailer.businessType =data.businessType;
      // this.retailer.tradeLisence = data.tradeLisence;
      // this.retailer.strDevision = data.strDevision;
      // this.retailer.strDistrict = data.strDistrict;
      // this.retailer.strUpozela = data.strUpozela;
      // this.retailer.strLocation = data.strLocation;
      // this.retailer.delDivison = data.delDivison;
      // this.retailer.delDistrict = data.delDistrict;
      // this.retailer.delUpozela = data.delUpozela;
      // this.retailer.delLocation = data.delLocation;
      // this.retailer.ownerName = data.ownerName;
      // this.retailer.username = data.username;
      // this.retailer.email = data.email;
      // this.retailer.phone = data.phone;
      // this.retailer.password = data.password;
      // this.retailer.comment = data.comment;
      // this.retailer.status = data.status;
      // this.retailer.retPicture = data.retPicture;
      
    })
  }

  updateRetailer(id:any) {
    this.adminService.updateRetailerInformation(id).subscribe();
    this.router.navigate(['admin-main/admin-retailer']);
  }
}
