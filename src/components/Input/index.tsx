import { TextInputProps } from "react-native";

import { Container, Label, CustomInput } from "./styles";

type Props = TextInputProps & {
  label: string;
};

export function Input({ label, ...props }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <CustomInput
        style={{ textAlignVertical: props.multiline ? "top" : null }}
        {...props}
      />
    </Container>
  );
}
