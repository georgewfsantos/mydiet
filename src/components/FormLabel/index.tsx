import { Label } from "./styles";

type Props = {
  title: string;
};

export function FormLabel({ title }: Props) {
  return <Label>{title}</Label>;
}
