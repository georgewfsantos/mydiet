import { TouchableOpacityProps } from "react-native";
import {} from "phosphor-react-native";

import { Container, Title } from "./styles";
import { ReactNode } from "react";

type Props = TouchableOpacityProps & {
  icon?: ReactNode;
  title: string;
};

export function Button({ icon: Icon, title, ...props }: Props) {
  return (
    <Container {...props}>
      {Icon}
      <Title>{title}</Title>
    </Container>
  );
}
