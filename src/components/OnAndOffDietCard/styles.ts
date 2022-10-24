import styled, { css } from "styled-components/native";

export type CardVariant = "on" | "off";

type ContainerProps = {
  type: CardVariant;
};

export const Container = styled.View<ContainerProps>`
  width: 48%;
  padding: 16px;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 8px;
  background-color: ${({ theme, type }) =>
    type === "on" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const BestSequence = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_800};
  `}
`;

export const Description = styled.Text`
  text-align: center
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.REGULAR};
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${theme.COLORS.GRAY_900};
    `};
`;
