import type { Meta, StoryObj, ArgTypes } from '@storybook/vue3';
import { fn, within, userEvent, expect } from '@storybook/test';
import { EnButton } from 'en-element';
// import 'en-element/dist/theme/Button.css';

type Story = StoryObj<typeof EnButton> & { argTypes?: ArgTypes };

const meta: Meta<typeof EnButton> = {
  title: 'Example/Button',
  component: EnButton,
  // subcomponents: { ButtonGroup: ErButtonGroup },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info', ''],
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'default', 'small', ''],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    useThrottle: {
      control: 'boolean',
    },
    throttleDuration: {
      control: 'number',
    },
    autofocus: {
      control: 'boolean',
    },
    tag: {
      control: { type: 'select' },
      options: ['button', 'a', 'div'],
    },
    nativeType: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset', ''],
    },
    icon: {
      control: { type: 'text' },
    },
    loadingIcon: {
      control: { type: 'text' },
    },
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: 'text' },
    },
  },
  args: {
    type: 'primary',
    content: 'Button',
  },
  render: (args) => ({
    components: { EnButton },
    setup() {
      return { args };
    },
    template: container(
      `<en-button v-bind="args">{{args.content}}</en-button>`
    ),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step('click button', async () => {
      await userEvent.tripleClick(canvas.getByRole('button'));
    });

    expect(args.onClick).toHaveBeenCalled();
  },
};

export const Circle: Story = {
  args: {
    icon: 'search',
  },
  render: (args) => ({
    components: { EnButton },
    setup() {
      return { args };
    },
    template: container(`
      <en-button circle v-bind="args">{{args.content}}</en-button>
    `),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step('click button', async () => {
      await userEvent.click(canvas.getByRole('button'));
    });

    expect(args.onClick).toHaveBeenCalled();
  },
};

export default meta;
