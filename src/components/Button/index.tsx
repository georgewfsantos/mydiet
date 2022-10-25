import { ReactNode } from "react";

import { TouchableOpacityProps } from "react-native";

import { ButtonVariant, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  icon?: ReactNode;
  title: string;
  variant?: ButtonVariant;
};

export function Button({
  icon: Icon,
  title,
  variant = "contained",
  ...props
}: Props) {
  return (
    <Container variant={variant} {...props}>
      {Icon}
      <Title>{title}</Title>
    </Container>
  );
}
