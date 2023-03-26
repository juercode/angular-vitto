import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CartelleVuotaComponent } from './cartelle-vuota.component';

export default {
    title: 'Components/CartelleVuotaComponent',
    component: CartelleVuotaComponent,
    decorators: [
      moduleMetadata({
        declarations: [CartelleVuotaComponent],
      }),
    ],
  } as Meta;
  
  const Template: Story<CartelleVuotaComponent> = (args: CartelleVuotaComponent) => ({
    component: CartelleVuotaComponent,
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {};
  