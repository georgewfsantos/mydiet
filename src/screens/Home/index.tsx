import { useCallback, useEffect, useState } from "react";

import { SectionList } from "react-native";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Meal } from "@components/Meal";
import { PercentageCard } from "@components/PercentageCard";

import { getMealsFromStorage } from "@utils/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS } from "@utils/storageKeys";
import { MealByDate, Statisctics } from "@utils/types";

import { Container, MealSectionTitle, MealsHeading } from "./styles";

export function Home() {
  const [mealsByDate, setMealsByDate] = useState<MealByDate[]>([]);
  const [statistics, setStatistics] = useState<Statisctics>({} as Statisctics);

  const { onDiet } = statistics;

  const { COLORS } = useTheme();

  const navigation = useNavigation();

  const replaceSlashWithPeriod = (text: string) =>
    text.replace("/", ".").replace("/", ".");

  async function sortMealsByDate() {
    const storedMeals = await getMealsFromStorage();

    const dates = storedMeals.map((meal) => meal.date);

    const sortedMeals = dates.map((date) => {
      const meals = storedMeals.filter((item) => item.date === date);

      return {
        title: date,
        data: meals,
      };
    });

    setMealsByDate(sortedMeals);
  }

  async function calculateDietStatistics() {
    const meals = await getMealsFromStorage();

    const onDietMealsPercentage =
      (meals.filter((meal) => meal.onDiet === "yes").length / meals.length) *
      100;

    setStatistics({
      registeredMeals: meals.length,
      onDiet: {
        total: meals.filter((meal) => meal.onDiet === "yes").length,
        percentage: onDietMealsPercentage,
        bestSequence: 0,
      },
      offDiet: {
        total: meals.filter((meal) => meal.onDiet === "no").length,
      },
    });
  }

  useFocusEffect(
    useCallback(() => {
      sortMealsByDate();
      calculateDietStatistics();
    }, [])
  );

  return (
    <Container>
      <Header />

      {onDiet?.percentage > 0 && <PercentageCard statistics={statistics} />}

      <MealsHeading>Refeições</MealsHeading>

      <Button
        icon={
          <Plus size={18} color={COLORS.WHITE} style={{ marginRight: 12 }} />
        }
        title="Nova refeição"
        onPress={() => navigation.navigate("RegisterMeal")}
      />

      <SectionList
        sections={mealsByDate}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section: { title } }) => (
          <MealSectionTitle>{replaceSlashWithPeriod(title)}</MealSectionTitle>
        )}
        renderItem={({ item }) => (
          <Meal
            title={item.name}
            time={item.time}
            onPress={() =>
              navigation.navigate("MealDetails", { mealId: item.id })
            }
          />
        )}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 32 }}
        contentContainerStyle={{
          paddingBottom: 32,
        }}
      />
    </Container>
  );
}
