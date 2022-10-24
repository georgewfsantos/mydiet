import { useNavigation } from "@react-navigation/native";

import {
  ArrowDiagonalIcon,
  Caption,
  Container,
  Percentage,
  IconContainer,
} from "./styles";

export function PercentageCard() {
  const navigation = useNavigation();

  return (
    <Container>
      <Percentage>90,86%</Percentage>
      <Caption>das refeições dentro da dieta</Caption>
      <IconContainer
        onPress={() =>
          navigation.navigate("Statistics", { onDietPercentage: 0 })
        }
      >
        <ArrowDiagonalIcon />
      </IconContainer>
    </Container>
  );
}
