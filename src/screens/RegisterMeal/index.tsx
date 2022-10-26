import { useState } from "react";

import { StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";
import { YesOrNo, YesOrNoButton } from "@components/YesOrNoButton";

import {
  Container,
  Header,
  HeaderTitle,
  IconContainer,
  GoBackIcon,
  HeaderRightElement,
  Content,
} from "./styles";
import { Button } from "@components/Button";
import { MealForm } from "@components/MealForm";

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
