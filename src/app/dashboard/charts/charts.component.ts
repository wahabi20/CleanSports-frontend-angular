import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartType, registerables } from 'chart.js';
import { UserService } from 'src/app/services/user/user.service';
Chart.register(...registerables);

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  @Input('my-id') myId = '';
  @Input('type')  type = 'bar';  // par defaut trouver la valeur bar
  state: any;
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.usersStatistic().subscribe(data  => {
  
      console.log("data values",Object.values(data));
       this.state = Object.values(data);
       
       console.log("data state>>>",Object.values(this.state));
  
  
      
       
     var myChart = new Chart(this.myId, {
  
       
      type:this.type as ChartType,
      data: {
          labels: ['nombre total utilisateurs','utilisateurs actifs','utilisateurs inactifs'],
          datasets: [{
              label: '# of Votes',
              data: this.state,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  
   
    })
  }

}
