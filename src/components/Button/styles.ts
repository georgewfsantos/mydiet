import styled, { css } from "styled-components/native";

export type ButtonVariant = "contained" | "outlined";

type ContainerProps = {
  variant?: ButtonVariant;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ theme, variant }) =>
    variant === "contained" ? theme.COLORS.BROWN : "transparent"};
  height: 50px;
  margin-bottom: 8px;

  ${({ theme, variant }) =>
    variant === "outlined" &&
    css`
      border: 1px solid ${theme.COLORS.GRAY_200};
    `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
