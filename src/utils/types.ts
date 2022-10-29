import { YesOrNo } from "@components/YesOrNoButton";

type Meal = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  onDiet: YesOrNo | "";
};

type MealByDate = {
  title: string;
  data: Meal[];
};

type Statisctics = {
  registeredMeals: number;
  onDiet: {
    total: number;
    percentage: number;
    bestSequence: number;
  };
  offDiet: {
    total: number;
  };
};

export { Meal, MealByDate, Statisctics };
