import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HeadComponent } from './head.component';


export default {
    title: 'Components/HeadComponent',
    component: HeadComponent,
    decorators: [
      moduleMetadata({
        declarations: [HeadComponent],
      }),
    ],
  } as Meta;
  
  const Template: Story<HeadComponent> = (args: HeadComponent) => ({
    component: HeadComponent,
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {};
  