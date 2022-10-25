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
  Form,
  DateAndTime,
  OnOrOffDietPicker,
  Label,
  Options,
} from "./styles";
import { Button } from "@components/Button";

type SelectedButton = YesOrNo | "";

export function RegisterMeal() {
  const [selectedButton, setSelectedButton] = useState<SelectedButton>("");

  const navigation = useNavigation();

  console.log(selectedButton);

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
        <Form>
          <Input label="Nome" />
          <Input label="Descrição" multiline={true} numberOfLines={6} />

          <DateAndTime>
            <Input label="Data" fullWidth={false} />
            <Input label="Time" fullWidth={false} />
          </DateAndTime>

          <OnOrOffDietPicker>
            <Label>Está dentro da Dieta?</Label>
            <Options>
              <YesOrNoButton
                type="yes"
                isSelected={selectedButton === "yes"}
                onPress={() => setSelectedButton("yes")}
              />
              <YesOrNoButton
                type="no"
                isSelected={selectedButton === "no"}
                onPress={() => setSelectedButton("no")}
              />
            </Options>
          </OnOrOffDietPicker>

          <Button
            title="Cadastrar refeição"
            onPress={() => navigation.navigate("Feedback", { onDiet: "" })}
          />
        </Form>
      </Content>
    </Container>
  );
}
