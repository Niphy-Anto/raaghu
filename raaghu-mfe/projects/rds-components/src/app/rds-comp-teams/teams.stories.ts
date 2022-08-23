import { FormBuilder, FormsModule } from '@angular/forms';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { NgxTranslateModule } from '@libs/shared';
import { RdsCompTeamsComponent } from './rds-comp-teams.component';
import { RdsLabelModule } from '@libs/rds-label';
import { RdsTeamMemberModule } from 'projects/libs/rds-elements/src/rds-team-member/src/lib/rds-team-member.module';
import { RdsIconModule } from '@libs/rds-icon';


export default {
  title: 'Components/Teams',
  component: RdsCompTeamsComponent,
  decorators: [
    moduleMetadata({
      declarations: [RdsCompTeamsComponent],
      imports: [
        FormsModule, NgxTranslateModule,
        RdsLabelModule,RdsTeamMemberModule,RdsIconModule
      ],
      providers: [
        FormBuilder
      ],
    })
  ]
} as Meta;

const Template: Story<RdsCompTeamsComponent> = (args: RdsCompTeamsComponent) => ({
  props: args,
});

export const basic = Template.bind({});
basic.args = {
  displayType: 'Basic',
  teamItem : [
    {
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'star',
      linkdineIcon: 'star',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    },
    {
      title: 'Wily',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'star',
      linkdineIcon: 'star',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    } ,
    {
      title: 'Vivek',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'star',
      linkdineIcon: 'star',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    } ,
    {
      title: 'Riya',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'star',
      linkdineIcon: 'star',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    }     
  ]
}
export const Advance = Template.bind({});
Advance.args = {
  displayType: 'Advance',
  teamItem : [
    {
      title: 'Tina',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'star',
      linkdineIcon: 'star',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    },
    {
      title: 'Wily',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'star',
      linkdineIcon: 'star',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    } ,
    {
      title: 'Vivek',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'star',
      linkdineIcon: 'star',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    } ,
    {
      title: 'Riya',
      subTitle: 'Web Developer',
      imgLink:'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png?W=100',
      twitterIcon: 'star',
      linkdineIcon: 'star',
      description: 'Lorem ipsum dolor sit amet conr adipiscing elit'
    }     
  ]
}