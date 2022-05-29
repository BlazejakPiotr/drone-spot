import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import image from "../assets/bg.jpg";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../components/Logo";
import WideHomeButton from "../components/WideHomeButton";
import HomeHeading from "../components/HomeHeading";

function Homepage({ navigation }) {
  return (
    <View style={styles.container}>
      <Logo />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <LinearGradient
          colors={["#5781ae", "rgba(106, 135, 159, 0.3) 25%", "transparent"]}
          style={styles.background}
        >
          <HomeHeading title="Lorem ipsum dolor" />

          <View style={styles.wrapper}>
            <WideHomeButton
              title="Login"
              path="Login"
              navigation={navigation}
            />
            <WideHomeButton title="Sign up" path="Register" />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default Homepage;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5781ae",
    flex: 1,
    color: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  wrapper: {
    flex: 1,
    marginBottom: 30,
    paddingHorizontal: 14,
    flexDirection: "column",
    justifyContent: "flex-end",
  },

  background: {
    flex: 1,
    position: "relative",
  },
  image: { flex: 1, position: "relative" },
});
