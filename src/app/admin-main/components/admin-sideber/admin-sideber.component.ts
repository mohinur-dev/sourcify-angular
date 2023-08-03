import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sideber',
  templateUrl: './admin-sideber.component.html',
  styleUrls: ['./admin-sideber.component.css']
})
export class AdminSideberComponent {
  username: any;

  constructor(private router:Router) {
    this.username = localStorage.getItem("username");
    if(this.username == null) {
      router.navigate(["admin-signin"]);
    }
  }
  adminSignout() {
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    this.router.navigate(["admin-signin"]);
  }
}
