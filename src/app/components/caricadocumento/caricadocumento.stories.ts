import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CaricadocumentoComponent } from './caricadocumento.component';

export default {
    title: 'Components/CaricadocumentoComponent',
    component: CaricadocumentoComponent,
    decorators: [
      moduleMetadata({
        declarations: [CaricadocumentoComponent],
      }),
    ],
  } as Meta;
  
  const Template: Story<CaricadocumentoComponent> = (args: CaricadocumentoComponent) => ({
    component: CaricadocumentoComponent,
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {};
  