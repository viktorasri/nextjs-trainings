import { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { expect } from '@storybook/jest';
import { screen } from '@storybook/testing-library';

import { Message } from './Message';

export default {
  title: 'Controls/Message',
  component: Message,
} as ComponentMeta<typeof Message>;

export const ValidFeedback: ComponentStoryObj<typeof Message> = {
  play: async () => {
    await expect(screen.getByText('Looks good!')).toBeInTheDocument();
  },
};
ValidFeedback.args = {
  children: 'Looks good!',
  isValid: true,
};

export const InvalidFeedback: ComponentStoryObj<typeof Message> = {
  play: async () => {
    await expect(
      screen.getByText('Please provide a valid value')
    ).toBeInTheDocument();
  },
};
InvalidFeedback.args = {
  children: 'Please provide a valid value',
  isValid: false,
};
