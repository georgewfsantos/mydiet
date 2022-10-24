import { Container, BestSequence, Description } from "./styles";

type Props = {
  value: number;
  description: string;
};

export function InfoCard({ value, description }: Props) {
  return (
    <Container>
      <BestSequence>{value}</BestSequence>
      <Description>{description}</Description>
    </Container>
  );
}
