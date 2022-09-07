import { expect } from '@storybook/jest';
import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { screen } from '@storybook/testing-library';
import { Tile } from './Tile';

export default {
  title: 'Content/Tile',
  component: Tile,
} as ComponentMeta<typeof Tile>;

export const BasicTile: ComponentStoryObj<typeof Tile> = {
  play: async () => {
    await expect(screen.getByRole('heading')).toBeInTheDocument();
  },
  args: {
    children: '{{children}}',
    header: 'Lorem ipsum dolor sit amet',
  },
};
