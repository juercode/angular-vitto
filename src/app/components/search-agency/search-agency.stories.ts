import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SearchAgencyComponent } from './search-agency.component';

export default {
    title: 'Components/SearchAgencyComponent',
    component: SearchAgencyComponent,
    decorators: [
      moduleMetadata({
        declarations: [SearchAgencyComponent],
      }),
    ],
  } as Meta;
  
  const Template: Story<SearchAgencyComponent> = (args: SearchAgencyComponent) => ({
    component: SearchAgencyComponent,
    props: args,
  });
  
  export const Default = Template.bind({});
  Default.args = {};
  