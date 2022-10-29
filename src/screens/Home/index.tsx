import { useCallback, useState } from "react";

import { SectionList } from "react-native";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Meal } from "@components/Meal";
import { PercentageCard } from "@components/PercentageCard";

import {
  calculateAndSaveStatistics,
  getMealsFromStorage,
  getStatisticsFromStorage,
} from "@utils/storage";
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

    const nonDuplicatedDates = dates.filter(
      (date, index) => dates.indexOf(date) === index
    );

    const sortedMeals = nonDuplicatedDates.map((date) => {
      const meals = storedMeals.filter((item) => item.date === date);

      return {
        title: date,
        data: meals,
      };
    });

    setMealsByDate(sortedMeals);
  }

  async function loadStatistics() {
    await calculateAndSaveStatistics();
    const statisticsFromStorage = await getStatisticsFromStorage();

    setStatistics(statisticsFromStorage);
  }

  useFocusEffect(
    useCallback(() => {
      sortMealsByDate();
      loadStatistics();
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
            data={item}
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
