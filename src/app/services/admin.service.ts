import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminSignin } from '../main/registration/admin-signin/admin-signin';
import { AdminInfo } from '../main/Classes/admin-info';
import { Manufecturear } from '../admin-main/classes/manufecturear';
import { Retailer } from '../admin-main/classes/retailer';
import { AdminProduct } from '../admin-main/classes/admin-product';
import { Order } from '../retailer-main/components/classes/order';
import { ProductRequest } from '../retailer-main/components/product-request/product-request';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseUrl = 'http://localhost:8080/';
  constructor(private client: HttpClient) { }

  //admins signin
  signinAdmin(info: AdminSignin): Observable<AdminSignin> {
    console.log(info);
    this.baseUrl = 'http://localhost:8080/';
    return this.client.post<AdminSignin>(`${this.baseUrl}admin-signin`, info);
  }

  //get admin information
  getAdminInfoById(id: number): Observable<AdminInfo> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<AdminInfo>(`${this.baseUrl}admin-info/${id}`)
  }

  //show retailer to admin
  showRetailer(): Observable<Retailer[]> {
    this.baseUrl = 'http://localhost:8080/retailer-list';
    return this.client.get<Retailer[]>(this.baseUrl);
  }

  //get retailer information by retailer id
  getretailerinfoById(id: number): Observable<Retailer> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<Retailer>(`${this.baseUrl}retailer-info/${id}`)
  }

   //update retailer information
   updateRetailerInformation(ret:Retailer) {
    this.baseUrl = 'http://localhost:8080/update-retailer';
    return this.client.post(this.baseUrl, ret);
  }

  //show manufecturer to admin
  showManufecturear(): Observable<Manufecturear[]> {
    this.baseUrl = 'http://localhost:8080/manufecturear-list';
    return this.client.get<Manufecturear[]>(this.baseUrl);
  }

  //get manufecturer information by manufecturer id
  getManufecturerInfoById(id: number): Observable<Manufecturear> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<Manufecturear>(`${this.baseUrl}manufecturear-info/${id}`)
  }
  
  //update manufecturear information
  updateManufecturearInformation(manu:Manufecturear) {
    this.baseUrl = 'http://localhost:8080/update-manufacturer';
    return this.client.post(this.baseUrl, manu);
  }
  
  //show order list
  getOrderList() {
    this.baseUrl = 'http://localhost:8080/order-list';
    return this.client.get(this.baseUrl);
  }

  //update order information
  updateOrderInformation(odr: Order) {
    this.baseUrl = 'http://localhost:8080/update-admin-order'
    return this.client.post(this.baseUrl, odr);
  }

  //show all products to admin
  showProduct(): Observable<AdminProduct[]> {
    this.baseUrl = 'http://localhost:8080/admin-product';
    return this.client.get<AdminProduct[]>(this.baseUrl);
  }

  //get product information by product id
  getProductInfoById(id: any): Observable<AdminProduct> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<AdminProduct>(`${this.baseUrl}product-info-admin/${id}`)
  }

//show all product request
  showAllProductRequest(): Observable<ProductRequest[]> {
    this.baseUrl = 'http://localhost:8080/productRequestList';
    return this.client.get<ProductRequest[]>(this.baseUrl);
  }

}
