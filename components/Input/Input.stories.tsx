import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import { Input } from './Input';
import { Message } from './Message';

export default {
  title: 'Controls/Input',
  component: Input,
  args: {
    placeholder: 'Your name',
    label: 'Name:',
  },
} as ComponentMeta<typeof Input>;

export const PrimaryInput: ComponentStoryObj<typeof Input> = {
  play: async ({ args }) => {
    await userEvent.type(screen.getByRole('textbox'), 'test');
    await expect(args.onChange).toHaveBeenCalledTimes(4);
  },
  args: {
    message: 'Looks cool!',
  },
};

export const WithIcon: ComponentStoryObj<typeof Input> = {
  args: {
    icon: 'Search',
  },
};

export const WithValidFeedback: ComponentStoryObj<typeof Input> = {
  args: {
    message: <Message isValid={true}>Looks good!</Message>,
  },
  argTypes: {
    message: {
      control: false,
    },
  },
};

export const WithInvalidFeedback: ComponentStoryObj<typeof Input> = {
  args: {
    message: <Message isValid={false}>Required!</Message>,
  },
  argTypes: {
    message: {
      control: false,
    },
  },
};

export const GenericInput: ComponentStoryObj<typeof Input> = {
  args: {
    label: undefined,
  },
};
