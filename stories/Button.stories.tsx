import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Button',
    },
  },
};

export default meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Success = Template.bind({});
export const Danger = Template.bind({});
export const Warning = Template.bind({});
export const Info = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'Primary',
  onClick: action('Primary click'),
};
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
  onClick: action('Secondary click'),
};
Success.args = {
  variant: 'success',
  children: 'Success',
  onClick: action('Success click'),
};
Danger.args = {
  variant: 'danger',
  children: 'Danger',
  onClick: action('Danger click'),
};
Warning.args = {
  variant: 'warning',
  children: 'Warning',
  onClick: action('Warning click'),
};
Info.args = {
  variant: 'info',
  children: 'Info',
  onClick: action('Info click'),
};
