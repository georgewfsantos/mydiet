import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 49px;
  border-radius: 6px;
  margin: 4px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const LeftWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const VerticalDivider = styled.View`
  width: 1px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_200};
    margin-right: 8px;
  `}
`;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    margin-left: 8px;
  `}
`;
