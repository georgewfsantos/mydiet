import { Alert } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS, STATISTICS } from "./storageKeys";
import { Meal } from "./types";

export async function getMealsFromStorage() {
  try {
    const storedMeals = await AsyncStorage.getItem(MEALS);

    const meals = storedMeals ? JSON.parse(storedMeals) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}

export async function getStatisticsFromStorage() {
  try {
    const storedStatistics = await AsyncStorage.getItem(STATISTICS);

    const statistics = storedStatistics ? JSON.parse(storedStatistics) : {};

    return statistics;
  } catch (error) {
    throw error;
  }
}

export async function calculateAndSaveStatistics() {
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
    Alert.alert("Statistics", "Não foi possível calcular as estatísticas.");
  }
}
