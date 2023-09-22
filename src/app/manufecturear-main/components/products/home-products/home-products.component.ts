import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../classes/product';
import { ManufecturearService } from 'src/app/services/manufecturear.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent {
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
