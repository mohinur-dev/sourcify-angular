import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RetailerSignin } from '../main/registration/retailer-signin/retailer-signin';
import { Observable, Subject } from 'rxjs';
import { RetailerSignup } from '../main/registration/retailer-signup/retailer-signup';
import { ProductDetails } from '../retailer-main/components/classes/product-details';
import { Cart } from '../retailer-main/components/cart/cart';
import { Order } from '../retailer-main/components/classes/order';
import { Wishlist } from '../retailer-main/components/wishlist/wishlist';
import { Product } from '../manufecturear-main/components/products/classes/product';
import { ProductRequest } from '../retailer-main/components/product-request/product-request';

@Injectable({
  providedIn: 'root'
})
export class RetailerService {
  private baseUrl = 'http://localhost:8080/';
  constructor(private client: HttpClient) { }

  //sign in retailer
  signinRetailer(info: RetailerSignin): Observable<RetailerSignin> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.post<RetailerSignin>(`${this.baseUrl}retailer-signin`, info);
  }

  //sign up retailer
  signupRetailer(info: RetailerSignup) {
    this.baseUrl = 'http://localhost:8080/retailer-signup'
    return this.client.post(this.baseUrl, info);
  }

  //show product to retailer
  showProducts2retailer() {
    this.baseUrl = 'http://localhost:8080/show-product2retailer';
    return this.client.get(this.baseUrl);
  }

  //get product information by id
  getProductInfoById4retailer(id: number): Observable<ProductDetails> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<ProductDetails>(`${this.baseUrl}product4retailer/${id}`)
  }

  //add to cart
  add2cart(info: Cart) {
    this.baseUrl = 'http://localhost:8080/add2cart'
    return this.client.post(this.baseUrl, info);
  }

  //update cart 
  private parentMethodeCallSource = new Subject<any>();
  parentMethodeCalled$ = this.parentMethodeCallSource.asObservable();
  toUpdateCart() {
    this.parentMethodeCallSource.next('');
  }

  //get cart list by retailer id
  getCartListByRetId(id: any): Observable<Cart[]> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<Cart[]>(`${this.baseUrl}get-cart-data/${id}`)
  }

  // empty cart
  deleteAllCartItems(cart: Cart) {
    this.baseUrl = 'http://localhost:8080/delete-allCartItems';
    return this.client.post(this.baseUrl, cart);
  }

  //delete product from cart
  deleteOneCartItems(cart: Cart) {
    this.baseUrl = 'http://localhost:8080/delete-oneCartItems';
    return this.client.post(this.baseUrl, cart);
  }

  //update cart
  cartUpdate(cart: Cart) {
    this.baseUrl = 'http://localhost:8080/update-cart';
    return this.client.post(this.baseUrl, cart);
  }

  //place order
  orderPlace(info: Order) {
    this.baseUrl = 'http://localhost:8080/place-order'
    return this.client.post(this.baseUrl, info);
  }

  //get order list
  getOrderListByRetId(id: any): Observable<Order[]> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<Order[]>(`${this.baseUrl}order-list/${id}`)
  }

  //get order information by id
  getOrderInfoByOrderId(id: number): Observable<Order> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<Order>(`${this.baseUrl}order-info/${id}`)
  }

  //add to wishlist
  add2Wishlist(info: Wishlist) {
    this.baseUrl = 'http://localhost:8080/add2wishlist'
    return this.client.post(this.baseUrl, info);
  }

  //get wish list by retailer id
  getWishlistByRetId(id: any): Observable<Wishlist[]> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<Wishlist[]>(`${this.baseUrl}show-wishlist/${id}`)
  }

  //delete product from wish list
  deleteFromWishlistByProductId(wList: Wishlist) {
    this.baseUrl = 'http://localhost:8080/delete-wishlist-product-id';
    return this.client.post(this.baseUrl, wList);
  }

  //delete product from wish list by w id
  deleteFromWishlistByWishlistId(wList: Wishlist) {
    this.baseUrl = 'http://localhost:8080/delete-wishlist-id';
    return this.client.post(this.baseUrl, wList);
  }

  //delete product from wish list
  deleteFromWishlistByRetailerId(wList: Wishlist) {
    this.baseUrl = 'http://localhost:8080/delete-wishlist-retailer-id';
    return this.client.post(this.baseUrl, wList);
  }

  //search product information by name
  searchProductByName(name: any): Observable<Product[]> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<Product[]>(`${this.baseUrl}search-product/${name}`)
  }

  updateQuantity(id: any, qty: any, plus: boolean) {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get(`${this.baseUrl}update-quantity`, {
      params: {
        productId: id,
        qty,
        plus
      }
    })
  }

  //get related product
  getRelatedProduct(name: any): Observable<Product[]> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<Product[]>(`${this.baseUrl}get-related-product/${name}`)
  }

  //add product request
  add2ProductRequest(info: ProductRequest) {
    this.baseUrl = 'http://localhost:8080/add-product-request'
    return this.client.post(this.baseUrl, info);
  }

   //get requested product by retailer id
   getRequestedProductByRetId(id: any): Observable<ProductRequest[]> {
    this.baseUrl = 'http://localhost:8080/';
    return this.client.get<ProductRequest[]>(`${this.baseUrl}get-requested-product-list/${id}`)
  }
}
