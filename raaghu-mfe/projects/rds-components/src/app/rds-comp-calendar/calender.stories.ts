import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { HttpClientModule } from '@angular/common/http';
import { RdsCompCalendarComponent } from './rds-comp-calendar.component';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { adapterFactory, CalendarDayModule, CalendarModule, CalendarMonthModule, CalendarWeekModule, DateAdapter } from '@libs/rds-elements';

export default {
  title: 'Components/Calender',
  component: RdsCompCalendarComponent,
  decorators: [
    moduleMetadata({
       
      imports: [
        FormsModule, ReactiveFormsModule, HttpClientModule,NgxTranslateModule,CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory
          }),SharedModule,CalendarWeekModule,CalendarDayModule,CalendarMonthModule
      ],
      providers: [
        FormBuilder
      ],
      
    })
  ]
} as Meta;

const Template: Story<RdsCompCalendarComponent> = (args: RdsCompCalendarComponent) => ({
    props:{
        ...args
    }
});

export const Default = Template.bind({});
Default.args={
  colors:  {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  }  
}


