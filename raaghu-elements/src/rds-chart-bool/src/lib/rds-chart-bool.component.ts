import { AfterViewInit, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
// import { ChartDataSet } from '@rds-common-lib';

// export interface ChartLabel {
//   labelname: Array<string>;
// }

export interface ChartDataSetBool {
  label: string,
  data: Array<number>;
  fill: boolean,
  borderColor: string,
  tension: number,
  backgroundColor: Array<string>;
  borderWidth: number;
}

@Component({
  selector: 'rds-chart-bool',
  templateUrl: './rds-chart-bool.component.html',
  styleUrls: ['./rds-chart-bool.component.scss']
})
export class RdsChartBoolComponent implements OnInit, AfterViewInit {

  title = "rds-chart-bool";
  static count = 0;
  canvas: any;
  ctx: any;
  value: any;

  CanvasbackgroundColor: any;

  chartdata: any;
  //chartId = 'mychart' + RdsChartBoolComponent.count;
  @Input() chartId:string='mychart0';
  @Input()
  chartWidth = 400;
  @Input() chartHeight = 400;

  @Input()
  ChartStyle?: any;
  @Input()
  chartLabels?: any 

  @Input()
  ChartDataSets?: ChartDataSetBool[] | any;

  @Input()
  chartType: 'bar' | 'line' | 'pie' | 'doughnut' | 'radar' | 'polarArea' | 'bubble' | 'scatter' = 'bar';

  @Input()
  chartOptions?: any;
  static inload: boolean;
  style: CSSStyleDeclaration | undefined;

  constructor() { }

  ngOnInit(): void {
    this.style = getComputedStyle(document.body);
    this.ChartDataSets[0].backgroundColor[0] = this.style.getPropertyValue('--chartColor1');
    this.ChartDataSets[0].backgroundColor[1] = this.style.getPropertyValue('--chartColor2');
    this.ChartDataSets[0].backgroundColor[2] = this.style.getPropertyValue('--chartColor3');
    this.ChartDataSets[0].backgroundColor[3] = this.style.getPropertyValue('--chartColor4');
    this.ChartDataSets[0].backgroundColor[4] = this.style.getPropertyValue('--chartColor5');
    this.ChartDataSets[0].backgroundColor[5] = this.style.getPropertyValue('--chartColor6');
    this.ChartDataSets[0].backgroundColor[6] = this.style.getPropertyValue('--chartColor7');
    this.ChartDataSets[0].backgroundColor[7] = this.style.getPropertyValue('--chartColor8');
    this.ChartDataSets[0].backgroundColor[8] = this.style.getPropertyValue('--chartColor9');
    this.ChartDataSets[0].backgroundColor[9] = this.style.getPropertyValue('--chartColor10');
  }

  public get classes(): string[] {
    var classes = ['res-width']
    if (this.ChartStyle === "Dark") {
      classes.push('dark-mode')
      return classes
    }

    return classes
  }

  ngOnChanges(changes: SimpleChanges) {

    // console.log(this.chartId);
    var canvass = document.getElementById(this.chartId) as HTMLCanvasElement;
    if (changes['canvasBackgroundColor']) {
      this.CanvasbackgroundColor = changes['canvasBackgroundColor'].currentValue

    }
  }

  // tslint:disable-next-line:typedef
  ngAfterViewChecked() {
    this.canvas = document.getElementById(this.chartId);
    this.canvas.style.backgroundColor = this.CanvasbackgroundColor;
  }

  ngAfterViewInit() {
    this.canvas = document.getElementById(this.chartId);

    //this.canvas.style.backgroundColor=this.CanvasbackgroundColor;
    this.ctx = this.canvas.getContext('2d');

    const myChart = new Chart(this.ctx, {
      type: this.chartType,
      data: {
        labels: this.chartLabels,
        datasets: this.ChartDataSets,
      },

      options: this.chartOptions,
    });
    if(myChart !== null){
      myChart.canvas.style.height = this.chartHeight+'px'; 
      myChart.canvas.style.width = this.chartWidth+'px';
    }   
  }

  setCanvasBackground(): void {
    this.canvas = document.getElementById(this.chartId);
    // console.log(this.chartId);
    this.canvas.style.backgroundColor = this.CanvasbackgroundColor;
    this.ctx = this.canvas.getContext('2d');
  }

}
