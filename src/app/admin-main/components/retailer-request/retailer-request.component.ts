import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-retailer-request',
  templateUrl: './retailer-request.component.html',
  styleUrls: ['./retailer-request.component.css']
})
export class RetailerRequestComponent {
  allProductRequest: any [] = [];
  constructor(private adminService: AdminService, private router: Router){}

  ngOnInit() {
    this.getAllProductRequest();
  }

  getAllProductRequest() {
    this.adminService.showAllProductRequest().subscribe((data) => {
      this.allProductRequest = data;
      console.log(this.allProductRequest);
      
    })
  }

  updateRequestPage(id:any) {
    this.router.navigate(['admin-main/request-update',id]);
  }
}
