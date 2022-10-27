import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS } from "./storageKeys";

export async function getMealsFromStorage() {
  try {
    const storedMeals = await AsyncStorage.getItem(MEALS);

    const meals = storedMeals ? JSON.parse(storedMeals) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
