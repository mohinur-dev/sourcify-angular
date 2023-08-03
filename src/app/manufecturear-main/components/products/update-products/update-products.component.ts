import { Component } from '@angular/core';
import { Product } from '../classes/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ManufecturearService } from 'src/app/services/manufecturear.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent {

  constructor(private router:Router, private manufecturearService: ManufecturearService, private route:ActivatedRoute ) {

  }

  product: Product = new Product();
  products:any;

  ngOnInit(){
    let id = this.route.snapshot.params['id'];
    this.manufecturearService.getProductInfoById(id).subscribe(data=> {
      this.products = data;
      this.product.pId = this.products.pId; ; 
      this.product.manuId = this.products.manuId;; 
      this.product.pName = this.products.pName; ; 
      this.product.pGeneric = this.products.pGeneric; 
      this.product.pStock = this.products.pStock; 
      this.product.uPrice = this.products.uPrice; 
      this.product.pPicture = this.products.pPicture;
      this.product.pDescription = this.products.pDescription;
      this.product.pStatus = this.products.pStatus;
    });
  }

  productUpdate(){
    this.products = new Product(this.product.pId, this.product.manuId, this.product.pName, this.product.pGeneric, this.product.pStock, this.product.uPrice, this.product.pPicture, this.product.pDescription, this.product.pStatus);
    this.manufecturearService.updateProduct(this.products).subscribe(data => {
      console.log("success", data),
      this.router.navigate(['manufecturear-main'])
    })
  }
}

