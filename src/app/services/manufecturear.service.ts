import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ManufecturearSignin } from '../main/registration/manufecturear-signin/manufecturear-signin';
import { Observable } from 'rxjs';
import { ManufecturearSignup } from '../main/registration/manufecturear-signup/manufecturear-signup';
import { Product } from '../manufecturear-main/components/products/classes/product';
import { Order } from '../retailer-main/components/classes/order';

@Injectable({
  providedIn: 'root'
})
export class ManufecturearService {
  private baseUrl = 'http://localhost:8080/';
  constructor(private client: HttpClient) { }

  //manufecturear sign in
  signinManufecturear(info: ManufecturearSignin): Observable<ManufecturearSignin> {
    console.log(info);
    this.baseUrl = 'http://localhost:8080/';
    return this.client.post<ManufecturearSignin>(`${this.baseUrl}manufecturear-signin`, info);
  }

  //manufecturer sign up
  SignupManufecturear(info:ManufecturearSignup) {
    this.baseUrl = 'http://localhost:8080/manufecturear-signup'
    return this.client.post(this.baseUrl, info);
  }

  //add product 
  addProduct(info:Product) {
    this.baseUrl = 'http://localhost:8080/add-product'
    return this.client.post(this.baseUrl, info)
  }

  //get product information by product information
  getProductInfoById(id: number): Observable<Product> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<Product>(`${this.baseUrl}product/${id}`)
  }

  ngOnInit() {
    this.baseUrl = 'http://localhost:8080/show-product';
  }

  //show product
  showProducts() {
    this.baseUrl = 'http://localhost:8080/show-product';
    return this.client.get(this.baseUrl);
  }

  //delete product
  deleteProduct(product: Product) {
    this.baseUrl = 'http://localhost:8080/delete-product';
    return this.client.post(this.baseUrl, product);
  }

  //update product information
  updateProduct(product: Product) {
    this.baseUrl = 'http://localhost:8080/update-product';
    return this.client.post(this.baseUrl, product);
  }

  //get product list by manufecturer id
  getProductListByManuId(id: any): Observable<Product> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<Product>(`${this.baseUrl}get-product/${id}`)
  }

  //get order list by manufecturer id 
  getOrderListByManuId(id: any) :Observable<Order> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<Order>(`${this.baseUrl}manufecturer-orderlist/${id}`);
  }
}
 