import styled, { css } from "styled-components/native";

type ContainerProps = {
  fullWidth: boolean;
};

export const Container = styled.View<ContainerProps>`
  width: ${({ fullWidth }) => (fullWidth ? 100 : 48)}%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const CustomInput = styled.TextInput`
  width: 100%;
  min-height: 48px;
  padding: 14px;
  border-radius: 6px;
  margin: 8px 0px 20px 0px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
