import { StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";

import illustration from "@assets/on-diet-image.png";
import { Button } from "@components/Button";

import {
  ButtonWrapper,
  Container,
  Illustration,
  ImageContainer,
  Subtitle,
  Title,
} from "./styles";

export function Feedback() {
  const navigation = useNavigation();

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Title>Continue assim!</Title>
      <Subtitle>Você continua dentro da dieta. Muito bem!</Subtitle>

      <ImageContainer>
        <Illustration source={illustration} resizeMode="contain" />
      </ImageContainer>

      <ButtonWrapper>
        <Button
          title="Ir á página inicial"
          onPress={() => navigation.navigate("Home")}
        />
      </ButtonWrapper>
    </Container>
  );
}
