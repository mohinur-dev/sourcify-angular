import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManufecturearService } from 'src/app/services/manufecturear.service';

@Component({
  selector: 'app-manufecturer-order',
  templateUrl: './manufecturer-order.component.html',
  styleUrls: ['./manufecturer-order.component.css']
})
export class ManufecturerOrderComponent {
  orderList: any;
  constructor(private manufecturearService: ManufecturearService, private router:Router) {
  }
  ngOnInit(){
    this.getOrderList();
  }

  getOrderList() {
    let manuId = localStorage.getItem('manuId');
    this.manufecturearService.getOrderListByManuId(manuId).subscribe(response => {
      this.orderList = response;
    })
  }

  manuOrderUpdatePage(id: any) {
    this.router.navigate(['manufecturear-main/manu-order-update',id]);
  }

}
