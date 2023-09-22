import { Component } from '@angular/core';

@Component({
  selector: 'app-manufecturear-header',
  templateUrl: './manufecturear-header.component.html',
  styleUrls: ['./manufecturear-header.component.css']
})
export class ManufecturearHeaderComponent {
  manuPicture: any = localStorage.getItem('manuPicture');

  onOnInit() {
    console.log(this.manuPicture);

  }
}
