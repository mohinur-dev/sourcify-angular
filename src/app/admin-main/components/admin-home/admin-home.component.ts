import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  chartOptions = {
    title: {
      text: "Basic Column Chart in Angular"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Apple", y: 10 },
        { label: "Orange", y: 15 },
        { label: "Banana", y: 25 },
        { label: "Mango", y: 30 },
        { label: "Grape", y: 28 }
      ]
    }]
  };














  // createDoughnutChart(canvasId: string, labels: string[], data: string[]) {
  //   new Chart(canvasId, {
  //     type: 'doughnut',
  //     data: {
  //       labels: labels,
  //       datasets: [{
  //         data: data,
  //         borderWidth: [1, 1, 1, 1]
  //       }]
  //     },
  //     options: {
  //       maintainAspectRatio: false,
  //       cutout: 82,
  //       plugins: {
  //         legend: {
  //           display: false,
  //         }
  //       }
  //     }
  //   });
  // }

  // createLineChart(canvasId: string, labels: string[], data: string[]) {
  //   new Chart(canvasId, {
  //     type: 'line',
  //     data: {
  //       labels: labels,
  //       datasets: [{
  //         label: 'Revenue',
  //         data: data,
  //         fill: {
  //           target: 'origin',
  //           above: 'rgb(21 202 32 / 15%)',   // Area will be red above the origin
  //           //below: 'rgb(21 202 32 / 100%)'   // And blue below the origin
  //         },
  //         tension: 0.4,
  //         borderWidth: 3
  //       }]
  //     },
  //     options: {
  //       maintainAspectRatio: false,
  //       plugins: {
  //         legend: {
  //           display: false,
  //         }
  //       },
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });
  // }

}
