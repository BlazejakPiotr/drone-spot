import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Text>Drone Spot</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 60,
    backgroundColor: "#f3f3f3",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#fff",
  },
  wrapper: {
    paddingHorizontal: 14,
  },
  button: {
    marginBottom: 12,
    height: 50,
    backgroundColor: "#386596",
    borderRadius: 5,
    color: "#fff",
    alignItems: "center",
    fontFamily: Roboto_400Regular,
  },
});
