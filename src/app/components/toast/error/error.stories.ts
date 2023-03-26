import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ErrorComponent } from './error.component';

export default {
    title: 'Components/ErrorComponent',
    component: ErrorComponent,
    decorators: [
      moduleMetadata({
        declarations: [ErrorComponent],
      }),
    ],
  } as Meta;
  
  const Template: Story<ErrorComponent> = (args: ErrorComponent) => ({
    component: ErrorComponent,
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {};
  