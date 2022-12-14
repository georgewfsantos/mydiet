import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  percentage: number;
};

export const Container = styled(SafeAreaView)<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, percentage }) =>
    percentage > 65 ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const PercentageWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  margin-top: 24px;
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
  left: 24px;
  top: 8px;
  align-items: center;
`;

export const ArrowLeftlIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
}))``;

export const Content = styled.View`
  width: 100%;
  height: 80%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  bottom: 0;
  padding: 24px;
`;

export const Header = styled.Text`
  text-align: center;
  margin: 16px 0px 24px 0px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const OnAndOffDietInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
