import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AdminSignin } from './admin-signin';
import { AdminInfo } from '../../Classes/admin-info';


@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent {
  constructor(private router: Router, private adminService: AdminService) {
    let username = localStorage.getItem("username");
    if (username != null) {
      router.navigate(["admin-main"]);
    }
  }

  adminsignin: AdminSignin = new AdminSignin();

  adminSignin() {
    let info: AdminSignin = new AdminSignin(this.adminsignin.username, this.adminsignin.password)
    this.adminService.signinAdmin(info).subscribe(response => {
      console.log(response);
      if (response != null) {
        localStorage.setItem("name", response.name);
        localStorage.setItem("role", response.role);
        localStorage.setItem("email", response.email);
        localStorage.setItem("username", response.username);
        localStorage.setItem("password", response.password);
        this.router.navigate(['admin-main']);
      } else {
        alert("username and password does not match!");
      }
    })
  }

  // adminInfo: AdminInfo = new AdminInfo()
  // getAdminInfo() {
  //   let info:AdminInfo = new AdminInfo(this.adminInfo.id, this.adminInfo.name, this.adminInfo.role, this.adminInfo.email, this.adminInfo.username, this.adminInfo.picture)
  //   this.adminService.getAdminInfo(info).subscribe(response => {
  //     localStorage.setItem("id", this.adminInfo.id);
  //     localStorage.setItem("name", this.adminInfo.name);
  //     localStorage.setItem("role", this.adminInfo.role);
  //     localStorage.setItem("email", this.adminInfo.email);
  //     localStorage.setItem("username", this.adminInfo.username);
  //     localStorage.setItem("picture", this.adminInfo.picture);
  //     console.log(response);
  //   })
  // }
}
