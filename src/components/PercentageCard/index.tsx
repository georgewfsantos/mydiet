import { useNavigation } from "@react-navigation/native";
import { Statisctics } from "@utils/types";

import {
  ArrowDiagonalIcon,
  Caption,
  Container,
  Percentage,
  IconContainer,
} from "./styles";

type Props = {
  statistics: Statisctics;
};

export function PercentageCard({ statistics }: Props) {
  const navigation = useNavigation();

  const { onDiet } = statistics;

  return (
    <Container percentage={onDiet?.percentage}>
      <Percentage>{onDiet?.percentage}%</Percentage>
      <Caption>das refeições dentro da dieta</Caption>
      <IconContainer onPress={() => navigation.navigate("Statistics")}>
        <ArrowDiagonalIcon />
      </IconContainer>
    </Container>
  );
}
