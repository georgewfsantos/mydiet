import styled, { css } from "styled-components/native";

export const Form = styled.View`
  width: 100%;
`;

export const DateAndTime = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const OnOrOffDietPicker = styled.View`
  width: 100%;
  margin-bottom: 100px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Options = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;
