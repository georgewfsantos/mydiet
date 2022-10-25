export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Statistics: {
        onDietPercentage: number;
      };
      RegisterMeal: undefined;
      Feedback: {
        onDiet: string;
      };
      MealDetails: {
        meal: {};
      };
    }
  }
}
