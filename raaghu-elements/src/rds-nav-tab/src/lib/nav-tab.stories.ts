import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-icon';
import { RdsNavTabComponent } from './rds-nav-tab.component';

export default {
    title: 'Elements/Navtabs',
    component: RdsNavTabComponent,
    decorators: [
        moduleMetadata({
            imports: [RdsIconModule],
        }),
    ],
    argTypes: {
    },
} as Meta;

const Template: Story<RdsNavTabComponent> = (args: RdsNavTabComponent) => ({
    props: args,
});
export const Default: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        ` <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        [horizontalAlignment]="horizontalAlignment"
        ></rds-nav-tab>`,
});
Default.parameters = { controls: { include: ['navtabsItems', 'horizontalAlignment'] } };
Default.args = {
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home' },
        { label: 'Link1', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link2', tablink: '#nav-contact', ariacontrols: 'nav-contact' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true" },
    ],
    horizontalAlignment: 'start'
}
export const withIcon: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        ` <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        [horizontalAlignment]="horizontalAlignment"
        ></rds-nav-tab>`,
});
withIcon.parameters = { controls: { include: ['navtabsItems', 'horizontalAlignment'] } };
withIcon.args = {
    navtabsItems: [
        { label: 'Home', tablink: '#nav-home', ariacontrols: 'nav-home', icon: 'home', iconHeight: '20px', iconWidth: '20px' },
        { label: 'Administration', tablink: '#nav-profile', ariacontrols: 'nav-profile' , icon: 'administration', iconHeight: '20px', iconWidth: '20px'},
        { label: 'Contact', tablink: '#nav-contact', ariacontrols: 'nav-contact', icon: 'phone', iconHeight: '20px', iconWidth: '20px' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true", icon: 'users', iconHeight: '20px', iconWidth: '20px' },
    ],
    horizontalAlignment: 'start'
}
export const Tabs: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        `
        <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        [horizontalAlignment]="horizontalAlignment"
        [tabs]="tabs"
                ></rds-nav-tab>
            `,
});
Tabs.args = {
    tabs: true,
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true" },
    ],
    horizontalAlignment: 'start'
}
Tabs.parameters = { controls: { include: ['navtabsItems', 'horizontalAlignment', 'tabs'] } };

export const Pills: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        `
        <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        [horizontalAlignment]="horizontalAlignment"
        [pills]="pills" 
        [fill]="fill"
        [justified]="justified" 
        ></rds-nav-tab>
    `,
});
Pills.parameters = { controls: { include: ['navtabsItems', 'horizontalAlignment', 'pills', 'fill', 'justified'] } };
Pills.args = {
    pills: true,
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true" },
    ],
    fill: true,
    justified: true
}
export const Vertical: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        `
        <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        [verticalAlignment]="verticalAlignment">
        </rds-nav-tab>`,
});
Vertical.args = {
    verticalAlignment: true,
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true" },
    ]
}
Vertical.parameters = { controls: { include: ['navtabsItems', 'verticalAlignment'] } };



