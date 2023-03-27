import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ModalComponent } from './modal.component';


export default {
    title: 'Components/ModalComponent',
    component: ModalComponent,
    decorators: [
      moduleMetadata({
        declarations: [ModalComponent],
      }),
    ],
  } as Meta;
  
  const Template: Story<ModalComponent> = (args: ModalComponent) => ({
    component: ModalComponent,
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {};
  