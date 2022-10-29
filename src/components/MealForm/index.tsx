import { useEffect, useState } from "react";

import { Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { YesOrNo, YesOrNoButton } from "@components/YesOrNoButton";
import { MEALS } from "@utils/storageKeys";
import {
  calculateAndSaveStatistics,
  getMealsFromStorage,
} from "@utils/storage";
import { Meal } from "@utils/types";

import { Form, DateAndTime, OnOrOffDietPicker, Label, Options } from "./styles";

type SelectedButton = YesOrNo | "";

type Props = {
  isEditMode?: boolean;
  data?: Meal;
};

export function MealForm({ isEditMode = false, data }: Props) {
  const [selectedButton, setSelectedButton] = useState<SelectedButton>("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigation = useNavigation();

  async function handleMealRegistration() {
    try {
      const storedMeals = await getMealsFromStorage();

      const newMeal = {
        id: uuid.v4(),
        name,
        description,
        date,
        time,
        onDiet: selectedButton,
      };

      await AsyncStorage.setItem(
        MEALS,
        JSON.stringify([...storedMeals, newMeal])
      );

      await calculateAndSaveStatistics();
      navigation.navigate("Feedback", { onDiet: selectedButton });
    } catch (error) {
      Alert.alert(
        "Cadastro de Refeição",
        "Não foi possível cadastrar a refeição."
      );
    }
  }

  async function handleMealEditing() {
    try {
      const storedMeals = await getMealsFromStorage();

      const mealToBeEdited = storedMeals.find((item) => item.id === data.id);

      const meals = storedMeals.map((meal) => {
        if (meal.id === mealToBeEdited.id) {
          return {
            name,
            description,
            date,
            time,
            onDiet: selectedButton,
          };
        }

        return meal;
      });

      await AsyncStorage.setItem(MEALS, JSON.stringify(meals));

      navigation.navigate("Home");
    } catch (error) {
      Alert.alert(
        "Edição de Refeição",
        "Não foi possível editar os dados da refeição."
      );
    }
  }

  useEffect(() => {
    if (isEditMode && data) {
      setName(data.name);
      setDescription(data.description);
      setDate(data.date);
      setTime(data.time);
      setSelectedButton(data.onDiet);
    }
  }, [data]);

  return (
    <Form>
      <Input label="Nome" value={name} onChangeText={setName} />
      <Input
        label="Descrição"
        multiline={true}
        numberOfLines={6}
        value={description}
        onChangeText={setDescription}
      />

      <DateAndTime>
        <Input
          label="Data"
          fullWidth={false}
          value={date}
          onChangeText={setDate}
        />
        <Input
          label="Time"
          fullWidth={false}
          value={time}
          onChangeText={setTime}
        />
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
        onPress={isEditMode ? handleMealEditing : handleMealRegistration}
      />
    </Form>
  );
}
