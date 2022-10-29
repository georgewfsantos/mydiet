import { useState } from "react";

import { Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import uuid from "react-native-uuid";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { YesOrNo, YesOrNoButton } from "@components/YesOrNoButton";
import { MEALS, STATISTICS } from "@utils/storageKeys";
import { getMealsFromStorage } from "@utils/storage";

import { Form, DateAndTime, OnOrOffDietPicker, Label, Options } from "./styles";
import { Meal, MealByDate } from "@utils/types";

type SelectedButton = YesOrNo | "";

type Props = {
  isEditMode?: boolean;
};

type Sequence = {
  [index: number]: [number];
};

export function MealForm({ isEditMode = false }: Props) {
  const [selectedButton, setSelectedButton] = useState<SelectedButton>("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const navigation = useNavigation();

  async function calculateAndSaveStatistics() {
    const meals = await getMealsFromStorage();

    const onDietMealsPercentage = (
      (meals.filter((meal: Meal) => meal.onDiet === "yes").length /
        meals.length) *
      100
    ).toFixed(2);

    const getBestSequence = () => {
      const sequences = {};
      let onDietIndex = 0;

      meals.forEach((meal) => {
        if (meal.onDiet === "yes") {
          sequences[onDietIndex] = (sequences[onDietIndex] ?? 0) + 1;
        }

        if (meal.onDiet === "no") {
          onDietIndex++;
        }
      });

      return Math.max.apply(null, Object.values(sequences));
    };

    const statistics = {
      registeredMeals: meals.length,
      onDiet: {
        total: meals.filter((meal) => meal.onDiet === "yes").length,
        percentage: onDietMealsPercentage,
        bestSequence: getBestSequence(),
      },
      offDiet: {
        total: meals.filter((meal) => meal.onDiet === "no").length,
      },
    };

    try {
      await AsyncStorage.setItem(STATISTICS, JSON.stringify(statistics));
    } catch (error) {
      throw error;
    }
  }

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
        onPress={handleMealRegistration}
      />
    </Form>
  );
}
