import styled, { css } from "styled-components/native";

export const ModalWrapper = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.65);
  justify-content: center;
  padding: 24px;
`;

export const Container = styled.Modal`
  background-color: red;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 0px 24px 24px;
  border-radius: 8px;
`;

export const ConfirmationText = styled.Text`
  margin: 40px 0px;
  text-align: center;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.WHITE};
  `};
`;

export const ButtonWrapper = styled.View`
  width: 48%;
`;

export const ButtonGroup = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
