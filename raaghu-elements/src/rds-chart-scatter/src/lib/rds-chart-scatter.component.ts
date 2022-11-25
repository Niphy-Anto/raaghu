import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface chartDataSetscatter {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-scatter',
  templateUrl: './rds-chart-scatter.component.html',
  styleUrls: ['./rds-chart-scatter.component.scss']
})
export class RdsChartScatterComponent implements OnInit, AfterViewInit {

  static count = 0;
  canvas: any;
  ctx: any;
  //chartId = 'scatterChart' + RdsChartScatterComponent.count;
  @Input() chartId:string='scatterChart0';
  @Input() chartWidth = 400;
  @Input() chartHeight = 400;

  // @Input() chartStyle?: any;
  @Input() chartLabels?: any
  // @Input() canvasBackgroundColor?: any;
  @Input() chartDataSets?: chartDataSetscatter[] | any;
  @Input() chartOptions?: any;
  style: CSSStyleDeclaration | undefined;

  constructor() { }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);
  }
  ngOnChanges(): void {
    this.scatterChartBrowser();
  }

  ngAfterViewInit(): void {
    this.scatterChartBrowser();
  }

  scatterChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.chartDataSets.forEach((element: any) => {
        element.backgroundColor.forEach((bg: any, index: number) => {
          if (this.style) {
            element.backgroundColor[index] = (this.style.getPropertyValue('--chart-scatter-color' + (index + 1))) ? this.style.getPropertyValue('--chart-scatter-color' + (index + 1)) : bg
          }
        });
      });  
    this.ctx = this.canvas.getContext('2d');
      const scatterChart = new Chart(this.ctx, {
        type: 'scatter',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if(scatterChart !== null){
        scatterChart.canvas.style.height = this.chartHeight+'px'; 
        scatterChart.canvas.style.width = this.chartWidth+'px';
      } 
    }
  }

}
