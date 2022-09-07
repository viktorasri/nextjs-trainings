import { render } from '~/test-utils';
import { Tile } from './Tile';

describe('Tile test cases', () => {
  it('Tile render check', () => {
    const { asFragment } = render(
      <Tile header="Lorem ipsum dolor sit amet">
        <p>
          Etiam pulvinar ornare ornare. Vestibulum eget ante eget elit fringilla
          ultricies. Maecenas pretium mauris non porttitor semper. Nullam non
          interdum ex. Proin vel justo bibendum, iaculis justo sit amet,
          ullamcorper sem. Donec vitae velit in quam posuere accumsan ac ut est.
          Ut suscip.
        </p>
      </Tile>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
