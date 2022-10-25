import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Feedback } from "@screens/Feedback";
import { Home } from "@screens/Home";
import { MealDetails } from "@screens/MealDetails";
import { RegisterMeal } from "@screens/RegisterMeal";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Statistics" component={Statistics} />
      <Screen name="RegisterMeal" component={RegisterMeal} />
      <Screen name="Feedback" component={Feedback} />
      <Screen name="MealDetails" component={MealDetails} />
    </Navigator>
  );
}
