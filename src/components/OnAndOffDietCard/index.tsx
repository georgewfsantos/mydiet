import { Container, BestSequence, Description, CardVariant } from "./styles";

type Props = {
  value: number;
  description: string;
  type: CardVariant;
};

export function OnAndOffDietCard({ value, description, type }: Props) {
  return (
    <Container type={type}>
      <BestSequence>{value}</BestSequence>
      <Description>{description}</Description>
    </Container>
  );
}
