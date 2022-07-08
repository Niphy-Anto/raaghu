import { Story, Meta } from '@storybook/angular';
import { RdsTableComponent } from './rds-table.component';

export default {
  title: 'Elements/Table',
  component: RdsTableComponent,
  argTypes: {
  },
} as Meta;

const Template: Story<RdsTableComponent> = (args: RdsTableComponent) => ({
  props: args,
  template: `<rds-table  [thead]="thead" [tbody]="tbody" >
    <ng-template #thead>
      <th>Name</th>
      <th>Age</th>
      <th>State</th>

    </ng-template>
    <ng-template #tbody let-val>
       <tr>
        <td>{{val.name}}</td>
        <td>{{val.age}}</td>
        <td>{{val.state}}</td>
       </tr>
    </ng-template>

  </rds-table>
  `
});



export const BasicTable = Template.bind({})
BasicTable.args = {

}
