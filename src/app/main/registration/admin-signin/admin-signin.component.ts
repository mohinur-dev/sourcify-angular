import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { AdminSignin } from './admin-signin';

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
    let info: AdminSignin = new AdminSignin(null, this.adminsignin.username, this.adminsignin.password)
    this.adminService.signinAdmin(info).subscribe(response => {
      if (response != null) {
        localStorage.setItem("username", response.username);
        localStorage.setItem("id", response.id);
        this.router.navigate(['admin-main']);
      } else {
        alert("username and password does not match!");
      }
    })
  }
}
