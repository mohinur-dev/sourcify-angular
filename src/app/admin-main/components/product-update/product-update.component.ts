import { AdminProduct } from './../../classes/admin-product';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {
  adminProduct:AdminProduct = new AdminProduct();

  constructor(private adminService: AdminService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.getProductInformation();
  }
  
  getProductInformation() {
    let id = this.route.snapshot.params['id'];
    this.adminService.getProductInfoById(id).subscribe((data) => {
        this.adminProduct.pId = data.pId;
        this.adminProduct.manuId = data.manuId;
        this.adminProduct.manuName = data.manuName;
        this.adminProduct.pName = data.pName;
        this.adminProduct.pGeneric = data.pGeneric;
        this.adminProduct.uPrice = data.uPrice;
        this.adminProduct.pStock = data.pStock;
        this.adminProduct.pPicture = data.pPicture;
        this.adminProduct.pDescription = data.pDescription;
        this.adminProduct.pStatus = data.pStatus; 
    })
  }
  updateProductInfo(id:any) {

  }
}
