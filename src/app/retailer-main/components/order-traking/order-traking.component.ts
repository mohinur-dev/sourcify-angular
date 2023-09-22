import { Component } from '@angular/core';
import { RetailerService } from 'src/app/services/retailer.service';
import { Order } from '../classes/order';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-traking',
  templateUrl: './order-traking.component.html',
  styleUrls: ['./order-traking.component.css']
})
export class OrderTrakingComponent {
  order: Order = new Order();
  constructor(private retailerService: RetailerService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOrderInfoByOrderId();
  }

  getOrderInfoByOrderId() {
    let id = this.route.snapshot.params['id'];
    
    this.retailerService.getOrderInfoByOrderId(id).subscribe(response => {
      this.order = response;
    })
  }
}
