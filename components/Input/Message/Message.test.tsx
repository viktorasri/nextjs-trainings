import { render } from '~/test-utils';
import { Message } from './Message';

describe('Feedback test cases', () => {
  it('Render check for valid', () => {
    const { asFragment } = render(<Message isValid>Looks good!</Message>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('Render check for invalid', () => {
    const { asFragment } = render(
      <Message>Please provide a valid value</Message>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
