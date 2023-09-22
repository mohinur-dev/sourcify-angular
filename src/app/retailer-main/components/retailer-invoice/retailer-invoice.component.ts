import { RetailerService } from 'src/app/services/retailer.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../classes/order';
import { AdminService } from 'src/app/services/admin.service';
import { Manufecturear } from 'src/app/admin-main/classes/manufecturear';
import { Retailer } from 'src/app/admin-main/classes/retailer';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { RevenueService } from 'src/app/services/revenue.service';
import { Revenue } from 'src/app/admin-main/classes/revenue';

@Component({
  selector: 'app-retailer-invoice',
  templateUrl: './retailer-invoice.component.html',
  styleUrls: ['./retailer-invoice.component.css']
})
export class RetailerInvoiceComponent {
  order: Order = new Order();
  manufecturear: Manufecturear = new Manufecturear();
  retailer: Retailer = new Retailer();
  revenue: Revenue = new Revenue();

  constructor(private retailerService: RetailerService,
    private route: ActivatedRoute,
    private adminService: AdminService,
    private router: Router,
    private revenueService: RevenueService) {

  }

  ngOnInit() {
    this.getOrderInfo();
  }



  getOrderInfo() {
    let id = this.route.snapshot.params['id'];
    this.retailerService.getOrderInfoByOrderId(id).subscribe(response => {
      this.order = response;

      this.getManufecturearInfo();
      this.getRetailerInfo();
    })
  }

  getManufecturearInfo() {
    this.adminService.getManufecturerInfoById(this.order.manuId).subscribe(data => {
      this.manufecturear = data;

    })
  }

  getRetailerInfo() {
    this.adminService.getretailerinfoById(this.order.retId).subscribe(data => {
      this.retailer = data;
    })
  }

  updateOrderInformation(id: any) {
    this.adminService.updateOrderInformation(this.order).subscribe();
    this.router.navigate(['retailer-main/retailer-order']);
    // if(this.order.status == "Completed") {
      this.placeRevenueTable();
    // }
  }

  placeRevenueTable() {
    this.revenue = new Revenue(null, this.order.oId, this.order.manuId, this.order.retId,
      this.order.oDate, this.order.delDate, this.order.subtotal, this.order.vat,
      this.order.discount, this.order.netPayable, this.order.netPayable * .05,
      this.order.netPayable - this.order.netPayable * .05, 'unpaid');

      if(this.order.status == 'Completed') {
        this.revenueService.addRevenue(this.revenue).subscribe();
      } 
      if (this.order.status != 'Completed') {
        this.revenueService.deleteRevenue(this.revenue).subscribe();
      }
  }

  generatePdf() {
    const doc = new jsPDF();
    autoTable(doc, {
      html: '#dataTable',
      theme: 'grid',
      styles: { halign: 'center' }
    });
    const pdfOutput = doc.output('blob');
    const url = URL.createObjectURL(pdfOutput);
    window.open(url, '_blank');
  }


}
