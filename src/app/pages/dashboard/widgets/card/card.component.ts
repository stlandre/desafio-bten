import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label?: string;
  @Input() total?: string;

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {

      title: {
          text: null
      },

      subtitle: {
          text: null
      },

      credits: {
        enabled: false
      },

/*       yAxis: {
          title: {
              text: 'Solved'
          }
      },

      xAxis: {
          accessibility: {
              rangeDescription: 'Range: 12 to 19'
          }
      },

      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      },

      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 12
          }
      }, */

/*       series: [{
          name: 'Today',
          data: [20, 50, 10, 5, 40, 30, 40, 10]
      }, {
          name: 'Yesterday',
          data: [50, 20, 10, 40, 30, 50, 10, 5]
      }], */

/*       responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      } */

    }
    //HC_exporting(this.Highcharts);
  }

}
