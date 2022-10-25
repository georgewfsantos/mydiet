import styled, { css } from "styled-components/native";

import { YesOrNo } from ".";

type ContainerProps = {
  type: YesOrNo;
  isSelected: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 48%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  ${({ theme, type, isSelected }) =>
    isSelected &&
    type === "yes" &&
    css`
      background-color: ${theme.COLORS.GREEN_LIGHT};
      border: 1px solid ${theme.COLORS.GREEN_DARK};
    `}
  ${({ theme, type, isSelected }) =>
    isSelected &&
    type === "no" &&
    css`
      background-color: ${theme.COLORS.RED_LIGHT};
      border: 1px solid ${theme.COLORS.RED_DARK};
    `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_800};
    margin-left: 8px;
  `}
`;
