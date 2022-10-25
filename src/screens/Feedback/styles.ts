import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GREEN_DARK};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const ImageContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  margin: 40px 0px;
  padding: 20px;
  border-radius: 12px;
`;

export const Illustration = styled.Image`
  width: 224px;
  height: 288px;
`;

export const ButtonWrapper = styled.View`
  width: 60%;
`;
