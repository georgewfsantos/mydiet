import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS, STATISTICS } from "./storageKeys";

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
