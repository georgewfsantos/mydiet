import styled, { css } from "styled-components/native";

type CustomInputProps = {
  fullWidth: boolean;
};

export const Container = styled.View`
  width: 100%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const CustomInput = styled.TextInput<CustomInputProps>`
  width: 100%;
  min-height: 48px;
  padding: 14px;
  border-radius: 6px;
  margin: 8px 0px 16px 0px;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_600};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
