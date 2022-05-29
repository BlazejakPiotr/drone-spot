import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_400Regular,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";

import LogIn from "./pages/LogIn";

import Register from "./pages/Register";

import AppScreen from "./pages/AppScreen";
import Homepage from "./pages/Homepage";

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_400Regular,
    Montserrat_300Light,
  });

  if (!fontsLoaded) {
    console.log("not loaded");
    return <AppLoading />;
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Login" component={LogIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="App" component={AppScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
