import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

export const IconContainer = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const GoBackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_800,
}))``;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_900};
  `}
`;

export const HeaderRightElement = styled.View`
  width: 24px;
`;

export const Content = styled.View`
  width: 100%;
  height: 90%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  bottom: 0;
  padding: 24px;
`;

export const Form = styled.View`
  width: 100%;
`;

export const DateAndTimeInput = styled.TextInput`
  height: 48px;
  width: 48%;
  padding: 14px;
  border-radius: 6px;
  margin: 8px 0px 16px 0px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
  `};
`;

export const DateAndTime = styled.View`
  justify-content: space-between;
  width: 100%;
`;
