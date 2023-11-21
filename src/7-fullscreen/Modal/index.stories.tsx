import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {Modal as Component} from '.';

const meta: Meta<typeof Text> = {
  title: '7. Fullscreen/Modal',
  component: Component,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: 'Children ...',
  },
};
