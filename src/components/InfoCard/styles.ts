import styled, { css } from "styled-components/native";

export const Container = styled.View`
  padding: 16px;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const BestSequence = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;
