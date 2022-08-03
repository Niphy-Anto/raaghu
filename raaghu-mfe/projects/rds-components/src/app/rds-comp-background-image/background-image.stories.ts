import { RdsLabelModule } from "@libs/rds-elements";
import { Meta, moduleMetadata, Story } from "@storybook/angular";
import { RdsCompBackgroundImageComponent } from "./rds-comp-background-image.component";


export default {
    title: 'Components/Background Image',
    component: RdsCompBackgroundImageComponent,
    decorators: [
        moduleMetadata({
            declarations: [RdsCompBackgroundImageComponent],
            imports: [
                RdsLabelModule
            ],
        })
    ]
} as Meta;
const Template: Story<RdsCompBackgroundImageComponent> = (args: RdsCompBackgroundImageComponent) => ({
    props: {
        ...args
    }
});

export const BackgroundImage = Template.bind({});

BackgroundImage.args = {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLXV_IPvYFWoOnAfO3IGGxcCrM3Y2Bfgfciw&usqp=CAU',
    title: 'New arrivals are here',
    subtitle: 'The new arrivals have, well newly arrived. Check out the latest options from our summer small-batch release while they are still in stock.',
    btnLabel: 'CHECK NEW ARRIVALS HERE',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'

}