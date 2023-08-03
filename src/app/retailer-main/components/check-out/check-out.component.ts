import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RetailerService } from 'src/app/services/retailer.service';
import { Cart } from '../cart/cart';
import { Order } from '../classes/order';
import { Invoice } from '../classes/invoice';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
  constructor(private router: Router, private retailerService: RetailerService, private route: ActivatedRoute) {

  }

  cart: Cart[] = [];
  shopName: any = localStorage.getItem('name');
  ownerName: any = localStorage.getItem('ownerName');
  delDivision: any = localStorage.getItem('delDivison');
  delDistrict: any = localStorage.getItem('delDistrict');
  delUpozela: any = localStorage.getItem('delUpozela');
  delLocation: any = localStorage.getItem('delLocation');
  phoneNumber: any = localStorage.getItem('phone');
  emailAddress: any = localStorage.getItem('email');

  subTotal: number = 0;
  discount: number = 0;
  total: number = 0;
  vat: number = 0;
  customersPayable: number = 0;
  status: any = 'Pending';
 



  ngOnInit() {
    let id = localStorage.getItem('id');
    this.retailerService.getCartListByRetId(id).subscribe(data => {
      this.cart = data;
      this.calcCartTotal();
      this.discountCalculation();
      this.totalCalculation();
      this.vatCalculation();
      this.customersPayableCalculation();
    })
  }

  calcCartTotal() {
    this.subTotal = 0;
    for (let c of this.cart) {
      this.subTotal += c.price;
    }
  }


  discountCalculation() {
    this.discount =
      this.subTotal < 1000 ? this.subTotal * 0.10 :
        this.subTotal <= 2000 ? this.subTotal * 0.12 :
          this.subTotal <= 3000 ? this.subTotal * 0.13 :
            this.subTotal <= 5000 ? this.subTotal * 0.14 :
              this.subTotal <= 10000 ? this.subTotal * 0.15 :
                this.subTotal * 0.18;
  }


  totalCalculation() {
    this.total = this.subTotal - this.discount;
  }

  vatCalculation() {
    this.vat = this.subTotal * .15;
  }

  customersPayableCalculation() {
    this.customersPayable = this.subTotal- this.discount + this.vat;
  }




  conformOrder() {
    let delDate = new Date();
    delDate.setDate(delDate.getDate() + 3);
    let order: Order = new Order();
    order.oDate = new Date().toISOString();
    order.retId = localStorage.getItem("id");
    order.manuId = this.cart[0].manuId;
    order.oAmount = this.total;
    order.discount = this.discount;
    order.vat = this.vat;
    order.netPayable = this.customersPayable;
    order.delDevision = this.delDivision;
    order.delDistrict = this.delDistrict;
    order.delUpozela = this.delUpozela;
    order.delLocation = this.delLocation;
    order.delDate = delDate;
    order.status = this.status;
    order.subtotal = this.subTotal;

    let inv: Invoice[] = [];
    for (let crt of this.cart) {
      let invoice: Invoice = new Invoice();
      invoice.manuId = crt.manuId;
      invoice.pId = crt.pId;
      invoice.pName = crt.pName;
      invoice.pQuantity = crt.pQuantity;
      invoice.uPrice = crt.uPrice;
      invoice.price = crt.price;
      inv.push(invoice);
    }
    order.orderItems = inv;
    this.retailerService.orderPlace(order).subscribe(data => {
      console.log(data);
    })
  }














}
