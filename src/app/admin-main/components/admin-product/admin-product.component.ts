import { RetailerService } from 'src/app/services/retailer.service';
import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent {
  constructor(private adminService:AdminService, private router:Router) {
  }
  ngOnInit() {
    this.showProduct();
    this.getManufecturearList();
  }

  allProduct: any [] = [];
  product:any[] = [];
  selected : any = '---All Manufacturer---';
  manufecturear: any ;

  getManufecturearList() {
    this.adminService.showManufecturear().subscribe((data)=>{
      this.manufecturear = data;
    })
  }

  showProduct() {
    this.adminService.showProduct().subscribe(response => {
      this.allProduct = response;
      this.allProduct.forEach(p=>{
        this.product.push(p)
      });
    })
  }

  onChange() {
    this.product = [];
    this.allProduct.forEach(p => {
      if (p.manuName == this.selected || this.selected == '---All Manufacturer---') {
        this.product.push(p)
      }
    });
  }

  updateProductPage(id: any) {
    this.router.navigate(['admin-main/product-update',id])
  }
}
