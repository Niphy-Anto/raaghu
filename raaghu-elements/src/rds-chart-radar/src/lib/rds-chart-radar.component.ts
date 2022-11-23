import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface ChartDataSetMixed {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  type: string;
  order?: number;
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-mixed',
  templateUrl: './rds-chart-mixed.component.html',
  styleUrls: ['./rds-chart-mixed.component.scss']
})
export class RdsChartMixedComponent implements OnInit, OnChanges, AfterViewInit {

  static count = 0;
  canvas: any;
  ctx: any;

  // chartId = 'mixedchart' + RdsChartMixedComponent.count;
  @Input() chartId: string = 'mixedchart0';
  @Input() chartWidth: number = 400;
  @Input() chartHeight: number = 600;


  // @Input() chartStyle?: any;
  @Input() chartLabels?: any
  // @Input() canvasBackgroundColor?: any;
  @Input() chartDataSets?: ChartDataSetMixed[] | any;
  @Input() chartOptions?: any;
  style: CSSStyleDeclaration | undefined;

  constructor() {
    RdsChartMixedComponent.count++;
  }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.mixedChartBrowser();
  }

  ngAfterViewInit(): void {
    this.mixedChartBrowser();
  }

  mixedChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.ctx = this.canvas.getContext('2d');
      this.chartDataSets.forEach((element: any) => {
        element.backgroundColor.forEach((bg: any, index: number) => {
          if (this.style) {
            element.backgroundColor[index] = (this.style.getPropertyValue('--chart-mixed-color' + (index + 1))) ? this.style.getPropertyValue('--chart-mixed-color' + (index + 1)) : bg
          }
        });
      });
      const mixedChart = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if (mixedChart !== null) {
        mixedChart.canvas.style.height = this.chartHeight + 'px';
        mixedChart.canvas.style.width = this.chartWidth + 'px';
      }
    }
  }

}
