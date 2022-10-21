import { Container, MealTitle } from "./styles";

type Props = {
  title: string;
};

export function Meal({ title }: Props) {
  return (
    <Container>
      <MealTitle>{title}</MealTitle>
    </Container>
  );
}
