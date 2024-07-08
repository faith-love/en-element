import { meta, StoryObj, ArgTypes } from '@storybook/vue3';

import { fn } from '@storybook/test';

import { EnButton } from 'en-element';

type Story = StoryObj<typeof EnButton> & { argsTypes: ArgTypes };

const meta: Meta<typeof EnButton> = {
  title: 'Example/Button',
  component: EnButton,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info'],
      description: '按钮类型',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default' },
      },
    },
  },
};
