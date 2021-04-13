import { Story, Meta } from '@storybook/angular';
import { ListItemComponent } from './list-item.component';

export default {
  title: 'Example/List Item',
  component: ListItemComponent
} as Meta;

const Template: Story<ListItemComponent> = (args: ListItemComponent) => ({
  component: ListItemComponent,
  props: args
});

export const Item = Template.bind({});
Item.args = {
  title: 'Test Title',
  content: 'This is a test content...'
};