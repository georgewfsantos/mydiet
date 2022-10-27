export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Statistics: {
        onDietPercentage: number;
      };
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
