import { AdminProduct } from './../../classes/admin-product';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { ManufecturearService } from 'src/app/services/manufecturear.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
  adminProduct:AdminProduct = new AdminProduct();

  constructor(private adminService: AdminService, private route:ActivatedRoute, private router:Router, private manufecturearService:ManufecturearService) {
  }

  ngOnInit() {
    this.getProductInformation();
  }
  
  getProductInformation() {
    let id = this.route.snapshot.params['id'];
    this.adminService.getProductInfoById(id).subscribe((data) => {
      this.adminProduct = data;
    })
  }
  updateProductInfo(id:any) {
    this.manufecturearService.updateProduct(id).subscribe();
    this.router.navigate(['admin-main/admin-product']);
  }
}
