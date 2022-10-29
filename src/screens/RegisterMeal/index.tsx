import { useState } from "react";

import { Alert, StatusBar } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { YesOrNo } from "@components/YesOrNoButton";

import { MEALS, STATISTICS } from "@utils/storageKeys";
import { getMealsFromStorage } from "@utils/storage";

import { MealForm } from "@components/MealForm";

import {
  Container,
  Header,
  HeaderTitle,
  IconContainer,
  GoBackIcon,
  HeaderRightElement,
  Content,
} from "./styles";

type SelectedButton = YesOrNo | "";

export function RegisterMeal() {
  const [selectedButton, setSelectedButton] = useState<SelectedButton>("");

  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <IconContainer onPress={() => navigation.goBack()}>
          <GoBackIcon />
        </IconContainer>
        <HeaderTitle>Nova refeição</HeaderTitle>
        <HeaderRightElement />
      </Header>
      <Content>
        <MealForm />
      </Content>
    </Container>
  );
}
