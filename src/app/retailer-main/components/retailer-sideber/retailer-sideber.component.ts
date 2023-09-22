import { Component } from '@angular/core';

@Component({
  selector: 'app-retailer-sideber',
  templateUrl: './retailer-sideber.component.html',
  styleUrls: ['./retailer-sideber.component.css']
})
export class RetailerSideberComponent {
  retPicture = localStorage.getItem("retPicture");
  
  constructor() {
  }

  ngOnInit() {
  this.retPicture;
  }
}
