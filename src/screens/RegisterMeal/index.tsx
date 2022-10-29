import { StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";

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

export function RegisterMeal() {
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
