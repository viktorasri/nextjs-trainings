import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { screen, userEvent } from '@storybook/testing-library';
import { Button } from './Button';

export default {
  title: 'Controls/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as ComponentMeta<typeof Button>;

export const PrimaryButton: ComponentStoryObj<typeof Button> = {
  play: async ({ args }) => {
    await userEvent.click(screen.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const SecondaryButton: ComponentStoryObj<typeof Button> = {
  ...PrimaryButton,
  args: { color: 'secondary' },
};
export const DangerButton: ComponentStoryObj<typeof Button> = {
  ...PrimaryButton,
  args: { color: 'danger' },
};
export const WarningButton: ComponentStoryObj<typeof Button> = {
  ...PrimaryButton,
  args: { color: 'warning' },
};
