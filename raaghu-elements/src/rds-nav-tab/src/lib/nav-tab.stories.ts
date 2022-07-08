import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsIconModule } from '@libs/rds-elements';
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
export const Basic: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        `<div class="col-md-12">
        <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        horizontalAlignment="start"
        [verticalAlignment]="false"
        [pills]="false"
        [tabs]="false"
        [fill]="false"
        [justified]="false"
        [flex]="false"
        ></rds-nav-tab>
        <div naveContent class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active p-2" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="contents">
            <p>This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
             The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other</p></div></div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><div class="contents bg-white p-2">This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
             The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div></div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><div class="contents bg-white p-2">Tab3</div></div>
            <div class="tab-pane fade" id="nav-deabled" role="tabpanel" aria-labelledby="nav-contact-tab"><div class="contents bg-white p-2">test</div></div>
          </div>
        </div>
    `,

});
Basic.args = {
    verticalAlignment: false,
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home', icon: 'dashboard', subText: 'Active subtext' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact', icon: 'settings', subText: 'Home subtext' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true", icon: 'users', subText: 'Disble subtext' },
    ]
}
export const Tabs: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        `<div class="col-md-12">
        <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        horizontalAlignment="start"
        [verticalAlignment]="false"
        [pills]="false"
        [tabs]="true"
        [fill]="false"
        [justified]="false"
        [flex]="false"
        [tabsWithBorderTop]="true"
        ></rds-nav-tab>
        <div naveContent class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active p-2" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="contents">
            <p>This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
             The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other</p></div></div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><div class="contents bg-white p-2">This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
             The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div></div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><div class="contents bg-white p-2">Tab3</div></div>
            <div class="tab-pane fade" id="nav-deabled" role="tabpanel" aria-labelledby="nav-contact-tab"><div class="contents bg-white p-2">test</div></div>
          </div>
        </div>
    `,

});
Tabs.args = {
    tabs: true,
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true" },
    ]
}
export const Pills: Story<RdsNavTabComponent> = (args) => ({
    props: args,
    template:
        `<div class="col-md-12">
        <rds-nav-tab 
        [navtabsItems]="navtabsItems"
        horizontalAlignment="start"
        [verticalAlignment]="false"
        [pills]="true"
        [tabs]="false"
        [fill]="false"
        [justified]="false"
        [flex]="false"
        ></rds-nav-tab>
        <div naveContent class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="contents p-2"><p>This is some placeholder content the Profile tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
             The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other</p></div></div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><div class="contents bg-white p-2">This is some placeholder content the Home tab's associated content. Clicking another tab will toggle the visibility of this one for the next.<br>
             The tab JavaScript swaps classes to control the content visibility and styling. You can use it with tabs, pills, and any other .nav-powered navigation.</div></div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><div class="contents bg-white p-2">Tab3</div></div>
            <div class="tab-pane fade" id="nav-deabled" role="tabpanel" aria-labelledby="nav-contact-tab"><div class="contents bg-white p-2">test</div></div>
          </div>
        </div>
    `,

});
Pills.args = {
    pills: true,
    fill: false,
    justified: false,
    flex: false,
    navtabsItems: [
        { label: 'Active', tablink: '#nav-home', ariacontrols: 'nav-home' },
        { label: 'Link', tablink: '#nav-profile', ariacontrols: 'nav-profile' },
        { label: 'Link', tablink: '#nav-contact', ariacontrols: 'nav-contact' },
        { label: 'Disabled', tablink: '#nav-deabled', disabled: "true" },
    ]
}






