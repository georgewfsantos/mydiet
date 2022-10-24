import { StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Input } from "@components/Input";

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
  DateAndTimeInput,
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
        <Form>
          <Input label="Nome" />
          <Input label="Descrição" multiline={true} numberOfLines={6} />

          <DateAndTime>
            <Input label="Data" />
            <Input label="Time" />
          </DateAndTime>
        </Form>
      </Content>
    </Container>
  );
}
