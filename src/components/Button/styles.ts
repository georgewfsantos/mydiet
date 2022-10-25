import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BROWN};
  height: 50px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}
`;
