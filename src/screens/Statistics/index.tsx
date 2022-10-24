import { StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { InfoCard } from "@components/InfoCard";
import { OnAndOffDietCard } from "@components/OnAndOffDietCard";

import {
  ArrowLeftlIcon,
  Caption,
  Container,
  Content,
  IconContainer,
  Percentage,
  PercentageWrapper,
  Header,
  OnAndOffDietInfo,
} from "./styles";

export function Statistics() {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <PercentageWrapper>
        <IconContainer onPress={() => navigation.goBack()}>
          <ArrowLeftlIcon />
        </IconContainer>
        <Percentage>90,86%</Percentage>
        <Caption>das refeições dentro da dieta</Caption>
      </PercentageWrapper>
      <Content>
        <Header>Estatísticas gerais</Header>

        <InfoCard
          value={22}
          description="melhor sequência de pratos dentro da dieta"
        />

        <InfoCard value={109} description="refeições registradas" />

        <OnAndOffDietInfo>
          <OnAndOffDietCard
            value={99}
            description="refeições dentro da dieta"
            type="on"
          />
          <OnAndOffDietCard
            value={10}
            description="refeições fora da dieta"
            type="off"
          />
        </OnAndOffDietInfo>
      </Content>
    </Container>
  );
}
