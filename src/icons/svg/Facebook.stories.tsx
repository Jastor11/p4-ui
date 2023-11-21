import type {Meta, StoryObj} from '@storybook/react';
import Component from './Facebook';

const meta: Meta<typeof Text> = {
  title: 'Icons/SVG/Facebook',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {},
};
