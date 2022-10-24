import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegisterMeal } from "@screens/RegisterMeal";

import { Statistics } from "@screens/Statistics";
import { Home } from "../screens/Home";

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
    </Navigator>
  );
}
