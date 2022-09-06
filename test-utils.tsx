import { ThemeProvider } from '@emotion/react';
import { render, RenderOptions } from '@testing-library/react';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { Themes } from './styles/themes';

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={Themes.light}>{children}</ThemeProvider>
);

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render };
