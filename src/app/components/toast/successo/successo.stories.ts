import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SuccessoComponent } from './successo.component';

export default {
    title: 'Components/SuccessoComponent',
    component: SuccessoComponent,
    decorators: [
      moduleMetadata({
        declarations: [SuccessoComponent],
      }),
    ],
  } as Meta;
  
  const Template: Story<SuccessoComponent> = (args: SuccessoComponent) => ({
    component: SuccessoComponent,
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {};
  