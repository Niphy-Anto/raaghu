import { Story, Meta } from '@storybook/angular';
import { RdsNavBarComponent } from './rds-nav-bar.component';

export default {

  title: 'Elements/Navbar',
  component: RdsNavBarComponent,
  argTypes: {
  },
} as Meta;

const Template: Story<RdsNavBarComponent> = (args: RdsNavBarComponent) => ({

  props: args,
});
export const BasicNavbar: Story<RdsNavBarComponent> = (args) => ({
  props: args,
  template: `<rds-nav-bar
  navbarId="navbarSupportedContent"
  [navbarheader]="navbarheader"
  [navbarcontent]="navbarcontent"
  [navbarItems]="navbarItems"
  [backgroundColor]=
  >
<ng-template #navbarheader>
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>

</button>

</ng-template>
<ng-template #navbarcontent let-val>
<li class="nav-item" >
<a class="nav-link" [ngClass]="val.navclass" [href]="val.href">{{val.label}}</a>
</li>
</ng-template>
</rds-nav-bar>
`

});

BasicNavbar.args = {
  type: 'large',
  navbarItems: [{
    label: "Home",
    isActive: true,
    navclass: '',
    href: '',
  },
  {
    label: "Features",
    isActive: false,
    navclass: '',
    href: '',
  },
  {
    label: "Pricing",
    isActive: false,
    navclass: '',
    href: '',
  }]
};



