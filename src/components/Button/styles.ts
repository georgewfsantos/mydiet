import { ReactNode } from "react";
import styled, { css } from "styled-components/native";

export type ButtonVariant = "primary" | "secondary";

type ContainerProps = {
  color: ButtonVariant;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ color }) => color};
  height: 50px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
