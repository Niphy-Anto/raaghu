import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsBigNumberWidgetComponent } from './rds-big-number-widget.component';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsChartBarHorizontalModule } from '@libs/rds-chart-bar-horizontal';
import { RdsChartLineModule } from '@libs/rds-chart-line';
export default {

  title: 'Elements/Big Number',

  component: RdsBigNumberWidgetComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [RdsIconModule, RdsLabelModule, RdsChartBarHorizontalModule, RdsChartLineModule],
    }),
  ],
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
    subTitleColorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'],
      control: { type: 'select' }
    },
    textAlign: {
      options: ['text-start', 'text-center', 'text-end'],
      control: { type: 'select' }
    },
  },

} as Meta

const Template: Story<RdsBigNumberWidgetComponent> = (args: RdsBigNumberWidgetComponent) => ({
  props: args,
  template: `<div class="col-sm-3">
<rds-big-number-widget [bigNumber]="bigNumber" [subText]="subText"
[icon]="icon" [iconFill]="iconFill" [iconFill]="iconFill" [iconHeight]="iconHeight" [iconWidth]="iconWidth" [colorVariant]="colorVariant" [subTitleColorVariant]="subTitleColorVariant" [textAlign]="textAlign"></rds-big-number-widget>
  </div>`
});

export const Default = Template.bind({})
Default.args = {
  colorVariant: 'info',
  textAlign: 'text-start',
  subTitleColorVariant: 'danger',
  iconFill: true,
  iconStroke: true,
  iconHeight: '15px',
  iconWidth: '15px',
  bigNumber: '$13,20,21',
  subText: '+$1,203',
  icon: 'triangle_up'
}

const standardTemplate: Story<RdsBigNumberWidgetComponent> = (args: RdsBigNumberWidgetComponent) => ({
  props: args,
  template: `<div class="col-sm-3">
<rds-big-number-widget [bigNumber]="bigNumber" [subText]="subText"
 [colorVariant]="colorVariant" [subTitleColorVariant]="subTitleColorVariant" [role]="role"></rds-big-number-widget>
  </div>`
});

export const standard = standardTemplate.bind({});
standard.parameters = { controls: { include: ['colorVariant', 'subTitleColorVariant', 'role', 'subText', 'bigNumber'] } };

standard.args = {
  colorVariant: 'primary',
  subTitleColorVariant: 'danger',
  role: 'advanced',
  subText: 'Visitors',
  bigNumber: '2,236'
}

const deltaTemplate: Story<RdsBigNumberWidgetComponent> = (args: RdsBigNumberWidgetComponent) => ({
  props: args,
  template: `<div class="col-sm-3">
<rds-big-number-widget [bigNumber]="bigNumber" [subText]="subText"
 [colorVariant]="colorVariant" [subTitleColorVariant]="subTitleColorVariant" [role]="role">
 <rds-icon  class="ms-1" [name]="'triangle_up'" [stroke]="true" [fill]="true" [colorVariant]="subTitleColorVariant"
 [height]="'15px'" [width]="'15px'"></rds-icon><rds-label  label="75%" class="ps-2 text-{{subTitleColorVariant}} fs-5" ></rds-label>
 </rds-big-number-widget>
  </div>`
});

export const delta = deltaTemplate.bind({});
delta.parameters = { controls: { include: ['colorVariant', 'subTitleColorVariant', 'role', 'subText', 'bigNumber'] } };

delta.args = {
  colorVariant: 'primary',
  subTitleColorVariant: 'primary',
  role: 'advanced',
  subText: 'Visitors',
  bigNumber: '2,236'
}


const histogramTemplate: Story<RdsBigNumberWidgetComponent> = (args: RdsBigNumberWidgetComponent) => ({
  props: args,
  template: `<div class="col-sm-3">
<rds-big-number-widget [bigNumber]="bigNumber" [subText]="subText"
 [colorVariant]="colorVariant" [subTitleColorVariant]="subTitleColorVariant" [role]="role">
 <rds-chart-bar-horizontal [chartLabels]="chartLabels" [chartWidth]="chartWidth" [chartHeight]="chartHeight"
 [chartDataSets]="chartDatasets" [chartOptions]="chartOptions">
</rds-chart-bar-horizontal>
 </rds-big-number-widget>
  </div>`
});

export const histogram = histogramTemplate.bind({});
// delta.parameters = { controls: { include: ['colorVariant', 'subTitleColorVariant', 'role', 'subText', 'bigNumber'] } };

histogram.args = {
  colorVariant: 'dark',
  subTitleColorVariant: 'primary',
  role: 'advanced',
  subText: 'Average Numbers Of Visitors',
  bigNumber: '2,236',
  chartLabels: ['10k', '20k', '25k', '30k', '40k', '50k', '60k', '70k', '75k', '80k', '90k', '95k'],
  chartWidth: 50,
  chartHeight: 50,
  chartOptions: {
    indexAxis: 'x',
    elements: {
      bar: {
        borderWidth: 0,
        width: 1
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: '',
        pointStyle: "line",
        labels: {
          usePointStyle: true
        }
      },

      tooltip: {
        usePointStyle: true,
        display: false
      },
      title: {
        display: false,
        text: 'Daily Sales Growth'
      }
    },
    scales:
    {
      y: {
        display: false,
      },
      x: {
        display: false,
      }
    }
  },
  chartDatasets: [
    {
      label: 'Sales Growth',
      data: [15, 67, 34, 78, 45, 87, 76, 32, 50, 14, 35, 22],
      backgroundColor: 'rgba(54, 162, 235, 1)',
      borderColor: 'rgba(54, 162, 245, 1)',
      borderWidth: 1,
      borderRadius: 10,
      barThickness: 4,
      borderSkipped: false,
    }
  ]
}

const sparkLineTemplate: Story<RdsBigNumberWidgetComponent> = (args: RdsBigNumberWidgetComponent) => ({
  props: args,
  template: `<div class="col-sm-3">
<rds-big-number-widget [bigNumber]="bigNumber" [subText]="subText"
 [colorVariant]="colorVariant" [subTitleColorVariant]="subTitleColorVariant" [role]="role">
 <rds-chart-line [chartLabels]="chartLabels" [chartWidth]="chartWidth" [chartHeight]="chartHeight"
 [chartDataSets]="chartDatasets" [chartOptions]="chartOptions"></rds-chart-line>
 </rds-big-number-widget>
  </div>`
});

export const sparkLine = sparkLineTemplate.bind({});
// sparkLine.parameters = { controls: { include: ['colorVariant', 'subTitleColorVariant', 'role', 'subText', 'bigNumber'] } };

sparkLine.args = {
  colorVariant: 'dark',
  subTitleColorVariant: 'primary',
  role: 'advanced',
  subText: 'Average Numbers Of Visitors',
  bigNumber: '2,236',
  chartDatasets: [
    {
      label: 'Sales',
      data: [190, 200, 133, 231, 112, 125, 135, 135.7, 266, 224, 122, 125],
      borderColor: '#4DCFFF',
      pointBackgroundColor: '#4DCFFF',
      fill: true,
      pointRadius: 3,
      tension: 0.4,
    },
    // {
    //   label: 'Revenue',
    //   data: [290, 262, 205, 162, 150, 180, 206, 220, 240, 190, 275, 211],
    //   borderColor: '#863BFF',
    //   pointBackgroundColor: '#863BFF',
    //   // backgroundColor: '#ECEEF4',
    //   fill: true,
    //   pointRadius: 3,
    //   tension: 0.4,
    // }
  ],
  chartLabels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  chartWidth: 50,
  chartHeight: 50,
  chartOptions: {
    radius: 0,
    pointStyle: 'circle',
    responsive: true,
    borderWidth: 1,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: 'top',
        align: "end",
        pointStyle: "circle",
        labels: {
          usePointStyle: true,
          boxWidth: 8,
          padding: 30,
          height: 10
        },
      },
      tooltip: { enabled: true },
    },
    scales:
    {
      y: {
        display: false
      },
      x: {

        display: false
      },
    },
    tooltip: {
      display: false,
      usePointStyle: true,
    },
  }
}
