
import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface ChartDataSetBar {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-bar-horizontal',
  templateUrl: './rds-chart-bar-horizontal.component.html',
  styleUrls: ['./rds-chart-bar-horizontal.component.scss']
})
export class RdsChartBarHorizontalComponent implements OnInit {

  static count = 0;
  canvas: any;
  ctx: any;
  //chartId = 'horizontalChart' + RdsChartBarHorizontalComponent.count;
  @Input() chartId: string = 'horizontalChart0';
  @Input() chartWidth = 100;
  @Input() chartHeight = 350;
  @Input() chartLabels?: any
  @Input() chartDataSets?: ChartDataSetBar[] | any;
  @Input() chartOptions?: any;
  style: CSSStyleDeclaration | undefined;

  constructor() { }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);

  }

  ngOnChanges(): void {
    this.barChartBrowser();
  }

  ngAfterViewInit(): void {
    this.barChartBrowser();
  }



  barChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    this.canvas = document.getElementById(this.chartId);
    if (this.canvas !== null) {
      this.ctx = this.canvas.getContext('2d');

      //this.chartDataSets.forEach((element: any) => {
      //  element.backgroundColor.forEach((bg: any, index: number) => {
      //    if (bg && this.style) {
      //      element.backgroundColor[index] = (this.style.getPropertyValue('--chart-bar-horizontal-color' + (index + 1))) ? this.style.getPropertyValue('--chart-bar-horizontal-color' + (index + 1)) : bg
      //    }
      //  });
      //});
      this.chartDataSets.forEach((ele: any, index: number) => {
        if (this.style) {
          let color = this.style.getPropertyValue('--chart-bar-horizontal-color');
          const borderColor = this.style.getPropertyValue('--chart-bar-horizontal-border-color');
          if (color) {
            if (borderColor) {
              ele.borderColor = borderColor;

            }

            const gradient = this.ctx.createLinearGradient(0, 50, 0, 300);

            color = color.replace(/[\d\.]+\)$/g, '.76)');

            gradient.addColorStop(0.1, color);

            color = color.replace(/[\d\.]+\)$/g, '.08)');

            gradient.addColorStop(1, color);

            ele.backgroundColor = gradient;

          }
        }
      })
      const canvas = new Chart(this.ctx, {
        type: 'bar',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions
      });
      if (canvas !== null) {
        canvas.canvas.style.height = this.chartHeight + 'px';
        canvas.canvas.style.width = this.chartWidth + 'px';
      }
    }
  }

}
