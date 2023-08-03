import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-retailer',
  templateUrl: './admin-retailer.component.html',
  styleUrls: ['./admin-retailer.component.css']
})
export class AdminRetailerComponent {
  constructor(private adminService: AdminService, private router:Router) {

  }
  allRetailerInfo: any[] = [];
  retailerInfo: any[] = [];
  selected: any = 'Active';

  ngOnInit() {
    this.showRetailer();
  }

  showRetailer() {
    this.adminService.showRetailer().subscribe(response => {
      this.allRetailerInfo = response;
      this.allRetailerInfo.forEach(r => {
        if (r.status == this.selected) {
          this.retailerInfo.push(r);
        }
      });
    });
  }

  onChange() {
    this.retailerInfo = [];
    this.allRetailerInfo.forEach(r => {
      if (r.status == this.selected) {
        this.retailerInfo.push(r);
      }
    });
  }

  updateRetailerPage(id:any) {
    this.router.navigate(['admin-main/retailer-update',id]);
  }
}
