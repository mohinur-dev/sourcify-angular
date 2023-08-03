import { ManufecturearService } from 'src/app/services/manufecturear.service';
import { Component } from '@angular/core';
import { Product } from '../classes/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent {
  constructor(private router: Router, private manufecturearService: ManufecturearService) { 
    
  }
  product: Product = new Product()
  
  productAdd() {
    this.manufecturearService.addProduct(this.product).subscribe(data => {
      this.router.navigate(['manufecturear-main'])
    })
  }
}
