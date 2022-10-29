import { Statisctics } from "@utils/types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Statistics: undefined;
      RegisterMeal: undefined;
      EditMeal: {
        mealId: string;
      };
      Feedback: {
        onDiet: string;
      };
      MealDetails: {
        mealId: string;
      };
    }
  }
}
