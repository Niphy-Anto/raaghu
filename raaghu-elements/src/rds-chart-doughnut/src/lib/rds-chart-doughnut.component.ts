import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

export interface ChartDataSetDoughnut {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}
let that: any;

@Component({
  selector: 'rds-chart-doughnut',
  templateUrl: './rds-chart-doughnut.component.html',
  styleUrls: ['./rds-chart-doughnut.component.scss']
})
export class RdsChartDoughnutComponent implements OnInit {

  static count = 0;
  canvas: any;
  ctx: any;
  //chartId = 'doughnutChart' + RdsChartDoughnutComponent.count;
  @Input() chartId: string = 'doughnutChart0';
  @Input() chartWidth = 400;
  @Input() chartHeight = 400;
  @Input() chartLabels?: any
  // @Input() canvasBackgroundColor?: any;
  @Input() chartDataSets?: ChartDataSetDoughnut[] | any;
  @Input() chartOptions?: any;
  @Input() titleText = '';
  @Input() subTitleText = '';
  style: CSSStyleDeclaration | undefined;

  constructor() {
    RdsChartDoughnutComponent.count++;
    that = this;
  }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartBrowser();
  }

  ngAfterViewInit(): void {
    this.doughnutChartBrowser();
  }

  doughnutChartBrowser(): void {
    let chartStatus = Chart.getChart(this.chartId);
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    let textColor: any;
    if (this.style && this.style.getPropertyValue('--chart-doughnut-text-color')) {

      textColor = this.style.getPropertyValue('--chart-doughnut-text-color');
      console.log(textColor);
    }
    this.canvas = document.getElementById(this.chartId);
    const title = this.titleText;
    const subTitle = this.subTitleText;
    this.chartDataSets.forEach((element: any) => {
      element.backgroundColor.forEach((bg: any, index: number) => {
        if (this.style) {
          element.backgroundColor[index] = (this.style.getPropertyValue('--chart-doughnut-color' + (index + 1))) ? this.style.getPropertyValue('--chart-doughnut-color' + (index + 1)) : bg
        }
      });
    });
    if (this.canvas !== null) {
      this.ctx = this.canvas.getContext('2d');
      const centerText = {
        id: 'counter3',
        beforeDraw: function (chart) {
          if (chart.config.options.elements.center) {
            var ctx = chart.ctx;
            var centerConfig = chart.config.options.elements.center;
            var txt = centerConfig.text;
            var color = centerConfig.color || '#000';
            var lineHeight = centerConfig.lineHeight || 25;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
            var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
            let textColor = that.style.getPropertyValue('--chart-doughnut-text-color');
            if (textColor) {
              ctx.fillStyle = textColor;

            } else {
              ctx.fillStyle = color;
            }
            centerY -= (txt.length / 2) * lineHeight;
            for (var n = 0; n < txt.length; n++) {
              ctx.font = txt[n].font;
              ctx.fillText(txt[n].text, chart.chartArea.width / 2, centerY + 20);
              centerY += lineHeight;
            }
            //Draw text in center
          }
        }
      };
      const canvas = new Chart(this.ctx, {
        type: 'doughnut',
        data: {
          labels: this.chartLabels,
          datasets: this.chartDataSets,
        },
        options: this.chartOptions,
        plugins: [centerText]
      });
      if (canvas !== null) {
        canvas.canvas.style.height = this.chartHeight + 'px';
        canvas.canvas.style.width = this.chartWidth + 'px';
      }
    }
  }

}
