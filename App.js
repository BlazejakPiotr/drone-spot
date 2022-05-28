import {
  useFonts,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_400Regular,
  Montserrat_300Light,
} from "@expo-google-fonts/montserrat";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "expo-app-loading";
import Navbar from "./components/Navbar";
import AppScreen from "./pages/AppScreen";
import HomeScreen from "./pages/HomeScreen";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

const Stack = createNativeStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_400Regular,
    Montserrat_300Light,
  });

  if (!fontsLoaded) {
    console.log("not loaded");
    // return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Screens for logged users */}

        <Stack.Group>
          <Stack.Screen name="App" component={AppScreen} />
        </Stack.Group>

        {/* Auth screens */}
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LogIn" component={LogIn} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
