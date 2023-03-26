import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { CartelleComponent } from './cartelle.component';

export default {
  title: 'Components/CartelleComponent',
  component: CartelleComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
} as Meta;

const Template: Story<CartelleComponent> = (args: CartelleComponent) => ({
  component: CartelleComponent,
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  newCartelaItems: ['Cartella 1', 'Assicurazioni neve', 'Cartella 3', 'Cartella 4', 'Cartella impianti', 'Assicurazioni sci', 'Cartella 7', 'Cartella 8']
};
