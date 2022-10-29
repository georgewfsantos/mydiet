import { useEffect, useState } from "react";

import { StatusBar } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { useTheme } from "styled-components";

import { Button } from "@components/Button";
import { Modal } from "@components/Modal";

import {
  Container,
  Header,
  IconContainer,
  GoBackIcon,
  HeaderTitle,
  HeaderRightElement,
  Content,
  Title,
  Description,
  DateAndTimeHeading,
  DateAndTime,
  Chip,
  Indicator,
  ChipText,
  ButtonGroupWrapper,
} from "./styles";
import {
  calculateAndSaveStatistics,
  getMealsFromStorage,
} from "@utils/storage";
import { Meal } from "@utils/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS } from "@utils/storageKeys";

type RouteParams = {
  mealId: string;
};

export function MealDetails() {
  const [meal, setMeal] = useState<Meal>({} as Meal);
  const [showModal, setShowModal] = useState(false);

  const { COLORS } = useTheme();

  const navigation = useNavigation();

  const route = useRoute();

  const { mealId } = route.params as RouteParams;

  const isOnDiet = meal.onDiet === "yes";

  function closeModal() {
    setShowModal(false);
  }

  async function handleMealRemoval() {
    try {
      setShowModal(true);

      const meals = await getMealsFromStorage();

      const filteredMeals = meals.filter((item) => item.id !== meal.id);

      await AsyncStorage.setItem(MEALS, JSON.stringify(filteredMeals));

      calculateAndSaveStatistics();
      navigation.navigate("Home");
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    async function loadMealDetails() {
      const meals = await getMealsFromStorage();

      const mealData = meals.find((meal) => meal.id === mealId);

      setMeal(mealData);
    }
    loadMealDetails();
  }, []);

  return (
    <Container onDiet={meal.onDiet}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <IconContainer onPress={() => navigation.goBack()}>
          <GoBackIcon />
        </IconContainer>
        <HeaderTitle>Refeição</HeaderTitle>
        <HeaderRightElement />
      </Header>
      <Content>
        <Title>{meal.name}</Title>
        <Description>{meal.description}</Description>

        <DateAndTimeHeading>Data e hora</DateAndTimeHeading>
        <DateAndTime>
          {meal.date} às {meal.time}
        </DateAndTime>

        <Chip>
          <Indicator color={isOnDiet ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
          <ChipText>{isOnDiet ? "dentro da dieta" : "fora da dieta"}</ChipText>
        </Chip>

        <ButtonGroupWrapper>
          <Button
            title="Editar refeição"
            icon={
              <PencilSimpleLine
                color={COLORS.WHITE}
                style={{ marginRight: 12 }}
              />
            }
            onPress={() => navigation.navigate("EditMeal", { mealId: meal.id })}
          />
          <Button
            title="Excluir refeição"
            icon={<Trash color={COLORS.WHITE} style={{ marginRight: 12 }} />}
            variant="outlined"
            onPress={() => setShowModal(true)}
          />
        </ButtonGroupWrapper>
      </Content>
      <Modal
        visible={showModal}
        statusBarTranslucent
        transparent
        onCancel={closeModal}
        onConfirmation={handleMealRemoval}
      />
    </Container>
  );
}
