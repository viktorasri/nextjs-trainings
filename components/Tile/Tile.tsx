import styled from '@emotion/styled';
import { FC, PropsWithChildren } from 'react';
import { borderRadius, boxShadow } from '../styles';

interface ITile extends PropsWithChildren {
  header: string;
}

const Section = styled.section`
  padding: 1vmin 4vmin 4vmin;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};
  ${borderRadius()}
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow1)}
`;

export const Tile: FC<ITile> = ({ header, children }) => {
  return (
    <Section>
      <h2>{header}</h2>
      {children}
    </Section>
  );
};
