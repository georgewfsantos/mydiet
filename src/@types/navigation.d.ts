import { Statisctics } from "@utils/types";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Statistics: undefined;
      RegisterMeal: undefined;
      EditMeal: {
        meal: {};
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
