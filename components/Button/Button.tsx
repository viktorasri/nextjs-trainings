import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { AppTheme } from '~/styles/themes';
import { boxShadow, transition } from '../styles';

export type Color = 'primary' | 'secondary' | 'danger' | 'warning';

export type Props = {
  children: string;
  color?: Color;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const getColors = (theme: AppTheme, color?: Color): SerializedStyles => {
  switch (color) {
    case 'primary':
    case 'danger':
      return css`
        background: ${theme.components[color]};
        color: ${theme.font.button};
      `;
    case 'secondary':
      return css`
        color: ${theme.font.regular};
      `;

    case 'warning':
      return css`
        background:  ${theme.components[color]}
        color: ${theme.font.warning};
      `;
    default:
      return css``;
  }
};

export const Button = styled.button<Props>`
  all: unset;
  display: flex;
  justify-self: center;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  font-size: 1.6rem;
  width: 15rem;
  height: 4rem;
  border-radius: 1rem;
  ${transition()}
  ${({ color, theme }) => getColors(theme, color)}
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow1)}

  &:hover {
    opacity: 0.9;
  }
  &:active {
    ${({ theme }) =>
      boxShadow(theme.components.shadow1, theme.components.shadow1, true)}
  }
`;

Button.defaultProps = {
  color: 'primary',
};
