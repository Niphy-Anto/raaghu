import { CommonModule } from '@angular/common';
import { RdsAvatarModule } from '@libs/rds-avatar';
import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { RdsCardComponent } from './rds-card.component';

export default {
  title: 'Elements/Card',
  component: RdsCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, RdsAvatarModule],
    }),
  ],
  argTypes: {
    colorVariant: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
    borderColor: {
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
      control: { type: 'select' }
    },
  },
} as Meta;

const Template: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card [showHeader]="showHeader" [showBody]="showBody" [showFooter]="showFooter" [colorVariant]="colorVariant" [borderColor]="borderColor">
     <ng-container header>
  Featured
  </ng-container>
   <ng-container body>  
  <h5 >Header Title</h5>
   <p >Some quick example text to build on the card title and make up the bulk of the card\'s content</p>
    </ng-container>
   <ng-container footer>
   <a href="#" class="btn btn-primary mt-3">Go somewhere</a>
   </ng-container>
   </rds-card>`
});
export const Default = Template.bind({});
Default.parameters = { controls: { include: ['colorVariant', 'showHeader', 'showBody', 'showFooter', 'borderColor'] } };

Default.args = {
  showHeader: true,
  showBody: true,
  showFooter: true,
  colorVariant: undefined,
  borderColor: undefined
};

const cardWithImageTemplate: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card [showHeader]="showHeader" [showBody]="showBody" [showFooter]="showFooter" [colorVariant]="colorVariant" [borderColor]="borderColor">
   <img src="https://picsum.photos/seed/picsum/1200/600" class="card-img-top" alt="">
   <div body>  
  <h5 >Header Title</h5>
   <p >Some quick example text to build on the card title and make up the bulk of the card\'s content</p>
    </div>
   <div footer>
   <a href="#" class="btn btn-primary mt-3">Go somewhere</a>
   </div>
   </rds-card>`
});
export const cardWithImage = cardWithImageTemplate.bind({});
cardWithImage.args = {
  showHeader: false,
  showBody: true,
  showFooter: true,
  colorVariant: undefined,
  borderColor: undefined
};

const avatarTemplate: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card [showHeader]="showHeader" [showBody]="showBody" [showFooter]="showFooter" [colorVariant]="colorVariant" [borderColor]="borderColor">
  <img src="https://picsum.photos/seed/picsum/1200/600" class="card-img-top" alt="">
  <img src="https://placekitten.com/200/200" alt="" class="profile-image img-avatar-left"> 
   <div body>  
 <h5 >Header Title</h5>
  <p >Some quick example text to build on the card title and make up the bulk of the card\'s content</p>
   </div>
  <div footer>
  <a href="#" class="btn btn-primary mt-3">Go somewhere</a>
  </div>
  </rds-card>`
});
export const avatar = avatarTemplate.bind({});
avatar.args = {
  showHeader: false,
  showBody: true,
  showFooter: true,
  colorVariant: undefined,
  borderColor: undefined
};

const centeredAvatarTemplate: Story<RdsCardComponent> = (args: RdsCardComponent) => ({
  props: args,
  template: `<rds-card [showHeader]="showHeader" [showBody]="showBody" [showFooter]="showFooter"  [colorVariant]="colorVariant" [borderColor]="borderColor">
  <img src="https://picsum.photos/seed/picsum/1200/600" class="card-img-top" alt="">
  <img src="https://placekitten.com/200/200" alt="" class="profile-image img-avatar"> 
   <div body>  
 <h5 >Header Title</h5>
  <p >Some quick example text to build on the card title and make up the bulk of the card\'s content</p>
   </div>
  <div footer>
  <a href="#" class="btn btn-primary mt-3">Go somewhere</a>
  </div>
  </rds-card>`
});

// const teletext = "some text"
export const withCenteredAvatar= centeredAvatarTemplate.bind({});
withCenteredAvatar.args = {
  showHeader: true,
  showBody: true,
  showFooter: true,
  colorVariant: undefined,
  borderColor: undefined
};
