import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { YesOrNo } from "@components/YesOrNoButton";

import {
  Container,
  Header,
  HeaderTitle,
  IconContainer,
  GoBackIcon,
  HeaderRightElement,
  Content,
} from "./styles";
import { MealForm } from "@components/MealForm";

type SelectedButton = YesOrNo | "";

export function EditMeal() {
  const [selectedButton, setSelectedButton] = useState<SelectedButton>("");

  const navigation = useNavigation();

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
        <MealForm isEditMode />
      </Content>
    </Container>
  );
}
