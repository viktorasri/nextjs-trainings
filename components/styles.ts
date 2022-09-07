import { css } from '@emotion/react';

export const transition = () =>
  css`
    transition: all 0.4s ease;
  `;
export const borderRadius = () =>
  css`
    border-radius: 1rem;
  `;

export const boxShadow = (shadow1: string, shadow2: string, inset = false) =>
  css`
    box-shadow: 0.5vmin 0.5vmin 1vmin ${shadow1} ${inset && 'inset'},
      -0.5vmin -0.5vmin 1vmin ${shadow2} ${inset && 'inset'};
  `;
