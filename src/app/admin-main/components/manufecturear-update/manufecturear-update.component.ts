import { Component } from '@angular/core';
import { Manufecturear } from '../../classes/manufecturear';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manufecturear-update',
  templateUrl: './manufecturear-update.component.html',
  styleUrls: ['./manufecturear-update.component.css']
})
export class ManufecturearUpdateComponent {
  manufecturear: Manufecturear = new Manufecturear();
  constructor(private adminService:AdminService, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.getManufecturearInfo();
  }

  getManufecturearInfo() {
    let id = this.route.snapshot.params['id'];
    this.adminService.getManufecturerInfoById(id).subscribe((data) =>{
      console.log(data);
      this.manufecturear.manuId = data.manuId;
        this.manufecturear.manuName = data.manuName;
        this.manufecturear.productType = data.productType;
        this.manufecturear.website = data.website;
        this.manufecturear.email = data.email;
        this.manufecturear.repName = data.repName;
        this.manufecturear.repDeg = data.repDeg;
        this.manufecturear.repEmail = data.repEmail;
        this.manufecturear.repPhone = data.repPhone;
        this.manufecturear.bank = data.bank;
        this.manufecturear.branch = data.branch;
        this.manufecturear.accName = data.accName;
        this.manufecturear.accType = data.accType;
        this.manufecturear.accNumber = data.accNumber;
        this.manufecturear.accRoutingNum = data.accRoutingNum;
        this.manufecturear.coDivision = data.coDivision;
        this.manufecturear.coDistrict = data.coDistrict;
        this.manufecturear.coUpozla = data.coUpozla;
        this.manufecturear.coLocation = data.coLocation;
        this.manufecturear.facDivision = data.facDivision;
        this.manufecturear.facDictrict = data.facDictrict;
        this.manufecturear.facUpozela = data.facUpozela;
        this.manufecturear.facLocation = data.facLocation;
        this.manufecturear.username = data.username;
        this.manufecturear.password = data.password;
        this.manufecturear.status = data.status;
        this.manufecturear.comments = data.comments;
        this.manufecturear.manuPicture = data.manuPicture;
      
    })
  }

  updateManufecturearInformation(id:any) {
    this.adminService.updateManufecturearInformation(id).subscribe();
  }
}
