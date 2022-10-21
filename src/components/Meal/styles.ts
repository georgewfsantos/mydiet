import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 49px;
  border-radius: 6px;
  margin: 4px 0px;
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
