import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Icon } from './Icon';

export default {
  title: 'Content/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const BasicIcon: ComponentStoryObj<typeof Icon> = {
  play: async () => {
    // await expect(screen.getByRole('icon')).toBeInTheDocument();
  },
  args: {
    name: 'Home',
    size: 2,
  },
};
