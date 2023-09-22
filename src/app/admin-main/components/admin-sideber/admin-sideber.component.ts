import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminInfo } from 'src/app/main/Classes/admin-info';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-sideber',
  templateUrl: './admin-sideber.component.html',
  styleUrls: ['./admin-sideber.component.css']
})
export class AdminSideberComponent {
  
  username: any;
  adminInfo: AdminInfo = new AdminInfo();

  constructor(private router: Router, private adminService: AdminService) {
    this.username = localStorage.getItem("username");
    if (this.username == null) {
      router.navigate(["admin-signin"]);
    }
  }

  ngOnInit() {
    this.getAdminsInformation();
  }

  getAdminsInformation() {
    let id:any = localStorage.getItem('id');
    this.adminService.getAdminInfoById(id).subscribe((data) => {
      this.adminInfo = data;
    });
  }

  adminSignout() {
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    this.router.navigate(["admin-signin"]);
  }
}
