import { TouchableOpacity } from "react-native";
import {
  ArrowDiagonalIcon,
  Caption,
  Container,
  Percentage,
  IconContainer,
} from "./styles";

export function PercentageCard() {
  return (
    <Container>
      <Percentage>90,86%</Percentage>
      <Caption>das refeições dentro da dieta</Caption>
      <IconContainer>
        <ArrowDiagonalIcon />
      </IconContainer>
    </Container>
  );
}
