import userEvent from '@testing-library/user-event';
import { ChangeEventHandler } from 'react';
import { render, screen } from '~/test-utils';
import { Input } from './Input';

describe('Input test cases', () => {
  it('Render check', () => {
    const onChange = jest.fn();
    const { asFragment } = render(
      <Input
        onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
        label="Label"
        placeholder="Placeholder"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render check with icon', () => {
    const onChange = jest.fn();
    const { asFragment } = render(
      <Input
        onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
        icon="Search"
        label="Label"
        placeholder="Placeholder"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('Check onChange callback', async () => {
    const onChange = jest.fn();
    render(
      <Input
        onChange={onChange as unknown as ChangeEventHandler<HTMLInputElement>}
        label="Label"
        placeholder="Plaiceholder"
      />
    );
    const element = screen.getByRole('textbox');
    await userEvent.type(element, 'String');
    expect(onChange).toHaveBeenCalledTimes(6);
  });
});
