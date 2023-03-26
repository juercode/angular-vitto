import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { TableComponent } from './table.component';

export default {
    title: 'Components/TableComponent',
    component: TableComponent,
    decorators: [
      moduleMetadata({
        declarations: [TableComponent],
      }),
    ],
  } as Meta;
  
  const Template: Story<TableComponent> = (args: TableComponent) => ({
    component: TableComponent,
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {};
  