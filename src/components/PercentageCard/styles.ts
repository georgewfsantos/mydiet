import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

type ContainerProps = {
  percentage: number;
};

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${({ theme, percentage }) =>
    percentage > 65 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  margin-top: 40px;
  border-radius: 8px;
`;

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_800};
  `}
`;

export const Caption = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `}
`;

export const IconContainer = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 8px;
  align-items: center;
`;

export const ArrowDiagonalIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;
