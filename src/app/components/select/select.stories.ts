import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SelectComponent } from './select.component';

export default {
    title: 'Components/SelectComponent',
    component: SelectComponent,
    decorators: [
      moduleMetadata({
        declarations: [SelectComponent],
      }),
    ],
  } as Meta;
  
  const Template: Story<SelectComponent> = (args: SelectComponent) => ({
    component: SelectComponent,
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {};
  