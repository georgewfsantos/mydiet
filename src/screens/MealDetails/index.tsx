import { useState } from "react";

import { StatusBar } from "react-native";

import { useNavigation } from "@react-navigation/native";
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

export function MealDetails() {
  const [showModal, setShowModal] = useState(false);

  const { COLORS } = useTheme();

  const navigation = useNavigation();

  function closeModal() {
    setShowModal(false);
  }

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
        <HeaderTitle>Refeição</HeaderTitle>
        <HeaderRightElement />
      </Header>
      <Content>
        <Title>Sanduíche</Title>
        <Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Description>

        <DateAndTimeHeading>Data e hora</DateAndTimeHeading>
        <DateAndTime>12/08/2022 às 16:00</DateAndTime>

        <Chip>
          <Indicator />
          <ChipText>dentro da dieta</ChipText>
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
            onPress={() => navigation.navigate("EditMeal", { meal: {} })}
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
        onConfirmation={() => {}}
      />
    </Container>
  );
}
