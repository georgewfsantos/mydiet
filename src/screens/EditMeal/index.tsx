import { useState, useEffect } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";

import { MealForm } from "@components/MealForm";
import { Meal } from "@utils/types";

import {
  Container,
  Header,
  HeaderTitle,
  IconContainer,
  GoBackIcon,
  HeaderRightElement,
  Content,
} from "./styles";
import { getMealsFromStorage } from "@utils/storage";

type RouteParams = {
  mealId: string;
};

export function EditMeal() {
  const [meal, setMeal] = useState<Meal>({} as Meal);

  const navigation = useNavigation();

  const route = useRoute();

  const { mealId } = route.params as RouteParams;

  useEffect(() => {
    async function loadFormData() {
      const meals = await getMealsFromStorage();

      const mealData = meals.find((item) => item.id === mealId);

      setMeal(mealData);
    }

    loadFormData();
  }, []);

  return (
    <Container>
      <Header>
        <IconContainer onPress={() => navigation.goBack()}>
          <GoBackIcon />
        </IconContainer>
        <HeaderTitle>Editar refeição</HeaderTitle>
        <HeaderRightElement />
      </Header>
      <Content>
        <MealForm isEditMode data={meal} />
      </Content>
    </Container>
  );
}
