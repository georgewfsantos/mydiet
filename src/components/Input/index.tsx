import { TextInputProps } from "react-native";

import { Container, Label, CustomInput } from "./styles";

type Props = TextInputProps & {
  label: string;
  fullWidth?: boolean;
};

export function Input({ label, fullWidth = true, ...props }: Props) {
  return (
    <Container fullWidth={fullWidth}>
      <Label>{label}</Label>
      <CustomInput
        style={{ textAlignVertical: props.multiline ? "top" : null }}
        {...props}
      />
    </Container>
  );
}
