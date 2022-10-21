import { TouchableOpacityProps } from "react-native";
import {} from "phosphor-react-native";

import { Container, Title } from "./styles";
import { ReactNode } from "react";

type Props = TouchableOpacityProps & {
  icon?: ReactNode;
  title: string;
  color: string;
};

export function Button({ icon: Icon, title, color, ...props }: Props) {
  return (
    <Container color={color} {...props}>
      {Icon}
      <Title>{title}</Title>
    </Container>
  );
}
