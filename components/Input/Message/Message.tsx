import styled from '@emotion/styled';

type Props = {
  isValid?: boolean;
};

export const Message = styled.span<Props>`
  color: ${({ isValid, theme }) =>
    isValid ? theme.font.valid : theme.font.invalid};
`;
