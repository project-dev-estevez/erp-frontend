import { Component } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss'
})
export class PieChartComponent {
  PieChartData = {
    labels: ['Asignados', 'Reparación', 'Almacén'],
    datasets: [
      {
        /* label: 'PieChart',
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
        borderWidth: 1,
        hoverBackgroundColor: '#FF6384',
        hoverBorderColor: '#FF6384',
        data: [65, 59, 80, 81, 56, 55, 40] */
        data: [100, 10, 50],
        backgroundColor: [
          '#87E386',
          '#D6DED5',
          '#7EE3F7'
        ],
        hoverOffset: 4
      },
      /* {
        label: 'My Second dataset',
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        borderWidth: 1,
        hoverBackgroundColor: '#36A2EB',
        hoverBorderColor: '#36A2EB',
        data: [28, 48, 40, 19, 86, 27, 90]
      } */
    ]
  };

  PieChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
}
