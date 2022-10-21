import { SectionList, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Plus } from "phosphor-react-native";
import { useTheme } from "styled-components";

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { PercentageCard } from "@components/PercentageCard";

import { Container, MealSectionTitle, MealsHeading } from "./styles";
import { Meal } from "@components/Meal";

const DATA = [
  {
    title: "12.08.2022",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "11.08.2022",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "10.08.2022",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "09.08.2022",
    data: ["Cheese Cake", "Ice Cream"],
  },
];

export function Home() {
  const { COLORS } = useTheme();

  const navigation = useNavigation();

  return (
    <Container>
      <Header />

      <PercentageCard />

      <MealsHeading>Refeições</MealsHeading>

      <Button
        icon={
          <Plus size={18} color={COLORS.WHITE} style={{ marginRight: 12 }} />
        }
        title="Nova refeição"
        color={COLORS.BROWN}
        onPress={() => navigation.navigate("Statistics")}
      />

      <SectionList
        sections={DATA}
        keyExtractor={(item) => item}
        renderSectionHeader={({ section: { title } }) => (
          <MealSectionTitle>{title}</MealSectionTitle>
        )}
        renderItem={({ item }) => <Meal title={item} />}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 32 }}
        contentContainerStyle={{
          paddingBottom: 32,
        }}
      />
    </Container>
  );
}
