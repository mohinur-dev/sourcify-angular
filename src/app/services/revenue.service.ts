import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Revenue } from '../admin-main/classes/revenue';
import { Observable } from 'rxjs';
import { RevenueDto } from '../admin-main/classes/revenue-dto';
import { ManufacturerRevenue } from '../admin-main/classes/manufacturer-revenue';
import { RetailerDto } from '../admin-main/classes/retailer-dto';
import { RetailerRevenue } from '../admin-main/classes/retailer-revenue';

@Injectable({
  providedIn: 'root'
})
export class RevenueService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private client: HttpClient) { }

  //add revenue info
  addRevenue(info:Revenue) {
    this.baseUrl = 'http://localhost:8080/add-revenue-info';
    return this.client.post(this.baseUrl, info);
  }

  //delete revenue
  deleteRevenue(info: Revenue) {
    this.baseUrl = 'http://localhost:8080/delete-revenue';
    return this.client.post(this.baseUrl, info);
  }

  //show revenue by manufacturer id
  showRevenueListInDetails(id:any): Observable<RevenueDto[]> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<RevenueDto[]>(`${this.baseUrl}get-revenue-details/${id}`);
  }

  //get total revenue by manufacturer
  getRevenueByManufecturer():Observable<ManufacturerRevenue[]> {
    this.baseUrl = 'http://localhost:8080/get-revenue-manufacturer';
    return this.client.get<ManufacturerRevenue[]>(this.baseUrl);
  }

   //show revenue by retailer id
   showRetailerRevenueListInDetails(id:any): Observable<RetailerDto[]> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<RetailerDto[]>(`${this.baseUrl}get-retailer-revenue-details/${id}`);
  }

  // get total revenue by retailer
  getTotalRevenueByRetailer():Observable<RetailerRevenue[]> {
    this.baseUrl = 'http://localhost:8080/get-revenue-retailer';
    return this.client.get<RetailerRevenue[]>(this.baseUrl);
  }

}
