import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'profile-settings';
  navtabsItems: any = [
    {
      label: 'My details',
      tablink: '#my-details',
      ariacontrols: 'my-details',
    },
    {
      label: 'Password',
      tablink: '#password',
      ariacontrols: 'password',
    },
    {
      label: 'Email',
      tablink: '#email',
      ariacontrols: 'email',
    },
    {
      label: 'Billing',
      tablink: '#billing',
      ariacontrols: 'billing',
    },
    {
      label: 'Integrations',
      tablink: '#integrations',
      ariacontrols: 'integations',
    }
  ];
}
