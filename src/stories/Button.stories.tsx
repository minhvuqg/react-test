import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from 'components/UI/atoms/Button'

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: <span> Content Primary </span>,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  children: <span> Content Secondary </span>,
};