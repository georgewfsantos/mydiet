import { StatusBar } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import positiveFeedbackImage from "@assets/on-diet-image.png";
import negativeFeedbackImage from "@assets/off-diet-image.png";

import { Button } from "@components/Button";

import {
  BoldText,
  ButtonWrapper,
  Container,
  Illustration,
  ImageContainer,
  Subtitle,
  Title,
} from "./styles";
import { YesOrNo } from "@components/YesOrNoButton";

type RouteParams = {
  onDiet: YesOrNo;
};

export function Feedback() {
  const navigation = useNavigation();

  const route = useRoute();

  const { onDiet } = route.params as RouteParams;

  const isOnDiet = onDiet === "yes";

  function FormattedSubtitle() {
    return isOnDiet ? (
      <Subtitle>
        Você continua <BoldText>dentro da dieta</BoldText>. Muito bem!
      </Subtitle>
    ) : (
      <Subtitle>
        Você <BoldText>saiu da dieta</BoldText> dessa vez, mas coninue se
        esforçando e não desista!
      </Subtitle>
    );
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Title onDiet={onDiet}>
        {isOnDiet ? "Continue assim!" : "Que pena!"}
      </Title>
      <FormattedSubtitle />

      <ImageContainer>
        <Illustration
          source={isOnDiet ? positiveFeedbackImage : negativeFeedbackImage}
          resizeMode="contain"
        />
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
