import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CaricamentoComponent } from './caricamento.component';

export default {
    title: 'Components/Caricadocumento',
    component: CaricamentoComponent,
    decorators: [
      moduleMetadata({
        declarations: [CaricamentoComponent],
      }),
    ],
  } as Meta;
  
  const Template: Story<CaricamentoComponent> = (args: CaricamentoComponent) => ({
    component: CaricamentoComponent,
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {};
  