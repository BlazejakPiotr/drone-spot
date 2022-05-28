import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import image from "../assets/bg.jpg";
import { LinearGradient } from "expo-linear-gradient";
import Logo from "../components/Logo";
import WideHomeButton from "../components/WideHomeButton";
import HomeHeading from "../components/HomeHeading";

function HomeScreen({ navigation }) {
  const signIn = () => {
    console.log();
  };
  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Messages" component={Messages} />
      </Tab.Navigator>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <LinearGradient
          colors={[
            "rgba(106, 135, 159, 1) 0%",
            "rgba(106, 135, 159, 0.7) 50%",
            "#5781ae",
          ]}
          style={styles.background}
        >
          <Logo />

          <HomeHeading title="Lorem ipsum dolor" />

          <View style={styles.wrapper}>
            <WideHomeButton
              navigation={navigation}
              title="Login"
              path="LogIn"
            />
            <WideHomeButton
              navigation={navigation}
              title="Sign up"
              path="Register"
            />
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5781ae",
    flex: 1,
    color: "#fff",
  },
  wrapper: {
    marginBottom: 30,
    paddingHorizontal: 14,
  },

  background: {
    position: "relative",
    height: "100%",
    justifyContent: "space-between",
  },
  image: { flex: 1 },
});
