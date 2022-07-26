import { Story, Meta } from '@storybook/angular';
import { RdsTableComponent } from './rds-table.component';

export default {
  title: 'Elements/Table',
  component: RdsTableComponent,
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'striped', 'hover'],
      control: { type: 'select' }
    },
  },
} as Meta;

const Template: Story<RdsTableComponent> = (args: RdsTableComponent) => ({
  props: args,
  //template: `<rds-table  [thead]="thead" [tbody]="tbody">
  //  <ng-template #thead>
  //    <th>Name</th>
  //    <th>Age</th>
  //    <th>State</th>

  //  </ng-template>
  //  <ng-template #tbody let-val>
  //     <tr>
  //      <td>{{val.name}}</td>
  //      <td>{{val.age}}</td>
  //      <td>{{val.state}}</td>
  //     </tr>
  //  </ng-template>

  //</rds-table>
  //`
});



export const BasicTable = Template.bind({})
BasicTable.args = {
  colorVariant: 'primary',
  tableBorder: false,
  tableHeaderItems: [{ headerName: "Name" }, { headerName: "Age" }, { headerName: "State" }],
  tableBodyItems:[{ name: "xyz", age: 25, state: "Maharashtra" }, { name: "yz", age: 21, state: "Hariyana" }, { name: "op", age: 41, state: "Surat" }],
}
