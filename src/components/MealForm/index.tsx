import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { YesOrNo, YesOrNoButton } from "@components/YesOrNoButton";

import { Form, DateAndTime, OnOrOffDietPicker, Label, Options } from "./styles";

type SelectedButton = YesOrNo | "";

type Props = {
  isEditMode?: boolean;
};

export function MealForm({ isEditMode = false }: Props) {
  const [selectedButton, setSelectedButton] = useState<SelectedButton>("");

  const navigation = useNavigation();

  return (
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
        title={isEditMode ? "Salvar Alterações" : "Cadastrar refeição"}
        onPress={() => navigation.navigate("Feedback", { onDiet: "" })}
      />
    </Form>
  );
}
