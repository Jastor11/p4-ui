import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import {PaperStack as Component} from './PaperStack';
import {Paper} from '.';

const meta: Meta<typeof Text> = {
  title: '4. Card/Paper/PaperStack',
  component: Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: ([
      <Paper>
        <div style={{padding: 32}}>
          Card 1
        </div>
      </Paper>,
      <Paper>
        <div style={{padding: 32}}>
          Card 2
        </div>
      </Paper>,
      <Paper>
        <div style={{padding: 32}}>
          Card 3
        </div>
      </Paper>
    ]),
  },
};

