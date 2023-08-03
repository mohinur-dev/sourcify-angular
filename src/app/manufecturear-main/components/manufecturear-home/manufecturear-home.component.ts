import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ManufecturearService } from 'src/app/services/manufecturear.service';
import { Product } from '../products/classes/product';

@Component({
  selector: 'app-manufecturear-home',
  templateUrl: './manufecturear-home.component.html',
  styleUrls: ['./manufecturear-home.component.css']
})
export class ManufecturearHomeComponent {

  constructor(private router: Router, private manufecturearService: ManufecturearService, private route: ActivatedRoute) {
    this.showProduct();
  }
  product: Product = new Product();
  products: any;

  ngOnInit() {
    this.showProduct();
  }

  showProduct() {
    let id = localStorage.getItem('manuId');
    this.manufecturearService.getProductListByManuId(id).subscribe(response => {
      this.products = response;
      

    })
  }

  removeProduct(id: any) {
    if (confirm("Delete this product?")) {
      this.manufecturearService.deleteProduct(this.products).subscribe(data => {
        this.showProduct();
      });
    }
  }

  updatePage(id: any) {
    this.router.navigate(["manufecturear-main/update-product", id]);
  }

}
