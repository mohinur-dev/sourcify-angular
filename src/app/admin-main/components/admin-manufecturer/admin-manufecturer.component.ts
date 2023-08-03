import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Manufecturear } from '../../classes/manufecturear';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-manufecturer',
  templateUrl: './admin-manufecturer.component.html',
  styleUrls: ['./admin-manufecturer.component.css']
})
export class AdminManufecturerComponent {
  constructor(private adminService: AdminService, private router:Router) {

  }

  manufecturerInfo: any[] = [];
  allManufecturerInfo: any[] = [];
  selected: any = 'Active'

  ngOnInit() {
    this.showManufecturer();
  }

  showManufecturer() {
    this.adminService.showManufecturear().subscribe(response => {
      this.allManufecturerInfo = response;
      this.allManufecturerInfo.forEach(m => {
        if (m.status == this.selected) {
          this.manufecturerInfo.push(m)
        }
      });
    })
  }

  onChange() {
    this.manufecturerInfo = [];
    this.allManufecturerInfo.forEach(m => {
      if (m.status == this.selected) {
        this.manufecturerInfo.push(m)
      }
    });
  }
  updateManufecturearPage(id:any){
    this.router.navigate(['admin-main/manufecturear-update',id]);
  }
}
