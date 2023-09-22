import { Component } from '@angular/core';
import { Manufecturear } from '../../classes/manufecturear';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manufecturear-update',
  templateUrl: './manufecturear-update.component.html',
  styleUrls: ['./manufecturear-update.component.css']
})
export class ManufecturearUpdateComponent {
  manufecturear: Manufecturear = new Manufecturear();
  
  constructor(private adminService:AdminService, private route:ActivatedRoute, private router:Router){

  }

  ngOnInit(){
    this.getManufecturearInfo();
  }

  getManufecturearInfo() {
    let id = this.route.snapshot.params['id'];
    this.adminService.getManufecturerInfoById(id).subscribe((data) =>{
      this.manufecturear = data;
    })
  }

  updateManufecturearInformation(id:any) {
    this.adminService.updateManufecturearInformation(id).subscribe();
    this.router.navigate(['admin-main/admin-manufecturer']);
  }
}
