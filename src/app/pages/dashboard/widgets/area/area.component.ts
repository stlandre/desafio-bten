import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  chartOptions!: {};



  Highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {

      title: {
          text: 'Today Trends'
      },

      subtitle: {
          text: '19 nov, 2021'
      },

      credits: {
        enabled: false
      },

      yAxis: {
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
      },

      series: [{
          name: 'Today',
          data: [20, 50, 10, 5, 40, 30, 40, 10]
      }, {
          name: 'Yesterday',
          data: [50, 20, 10, 40, 30, 50, 10, 5]
      }],

      responsive: {
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
      }

  };
/*       {
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Live Data'
        },
        accessibility: {
            announceNewData: {
                enabled: true,
                minAnnounceInterval: 15000,
                announcementFormatter: function (allSeries, newSeries, newPoint) {
                    if (newPoint) {
                        return 'New point added. Value: ' + newPoint.y;
                    }
                    return false;
                }
            }
        },
        data: {
            csvURL: urlInput.value,
            enablePolling: pollingCheckbox.checked === true,
            dataRefreshRate: parseInt(pollingInput.value, 10)
        }
      }; */
  }

}
