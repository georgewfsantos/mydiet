import { useEffect, useState } from "react";

import { StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { InfoCard } from "@components/InfoCard";
import { OnAndOffDietCard } from "@components/OnAndOffDietCard";
import { getStatisticsFromStorage } from "@utils/storage";
import { Statisctics } from "@utils/types";

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
  const [statistics, setStatistics] = useState<Statisctics>({} as Statisctics);

  const { onDiet, offDiet, registeredMeals } = statistics;

  const navigation = useNavigation();

  async function loadStatistics() {
    const statisticsFromStorage = await getStatisticsFromStorage();

    setStatistics(statisticsFromStorage);
  }

  useEffect(() => {
    loadStatistics();
  }, []);

  return (
    <Container percentage={onDiet?.percentage}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <PercentageWrapper>
        <IconContainer onPress={() => navigation.goBack()}>
          <ArrowLeftlIcon />
        </IconContainer>
        <Percentage>{onDiet?.percentage}%</Percentage>
        <Caption>das refeições dentro da dieta</Caption>
      </PercentageWrapper>
      <Content>
        <Header>Estatísticas gerais</Header>

        <InfoCard
          value={onDiet?.bestSequence}
          description="melhor sequência de pratos dentro da dieta"
        />

        <InfoCard value={registeredMeals} description="refeições registradas" />

        <OnAndOffDietInfo>
          <OnAndOffDietCard
            value={onDiet?.total}
            description="refeições dentro da dieta"
            type="on"
          />
          <OnAndOffDietCard
            value={offDiet?.total}
            description="refeições fora da dieta"
            type="off"
          />
        </OnAndOffDietInfo>
      </Content>
    </Container>
  );
}
