import { Text } from "react-native";
import {
  ArrowLeftlIcon,
  Caption,
  Container,
  Content,
  IconContainer,
  Percentage,
  PercentageWrapper,
} from "./styles";

export function Statistics() {
  return (
    <Container>
      <PercentageWrapper>
        <IconContainer>
          <ArrowLeftlIcon />
        </IconContainer>
        <Percentage>90,86%</Percentage>
        <Caption>das refeições dentro da dieta</Caption>
      </PercentageWrapper>
      <Content>
        <Text>Estatísticas</Text>
      </Content>
    </Container>
  );
}
