import { TouchableOpacityProps } from "react-native";

import { Circle } from "phosphor-react-native";
import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

export type YesOrNo = "yes" | "no";

type Props = TouchableOpacityProps & {
  type: YesOrNo;
  isSelected: boolean;
};

export function YesOrNoButton({ type, isSelected, ...props }: Props) {
  const { COLORS } = useTheme();

  return (
    <Container type={type} isSelected={isSelected} {...props}>
      <Circle
        color={type === "yes" ? COLORS.GREEN_DARK : COLORS.RED_DARK}
        size={8}
        weight="fill"
      />
      <Title>{type === "yes" ? "Sim" : "Não"}</Title>
    </Container>
  );
}
