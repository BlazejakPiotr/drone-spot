import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Image,
} from "react-native";
import image from "../assets/bg.jpg";
import { LinearGradient } from "expo-linear-gradient";

function HomeScreen({ navigation }) {
  const signIn = () => {
    console.log();
  };
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>Subtitle</Text>
      </View>

      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <LinearGradient
          colors={["#5781ae", "rgba(106, 135, 159, 0.5) 50%", "#5781ae"]}
          style={styles.background}
        >
          <View style={styles.wrapper}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("LogIn")}
            >
              <Text style={styles.text}>Log in</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={signIn}>
              <Text style={styles.text}>Sign In</Text>
            </Pressable>
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
    marginBottom: 20,
    paddingHorizontal: 14,
  },
  logoContainer: {
    marginTop: 30,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    height: "100%",
    width: "100%",
  },
  subtitle: {
    color: "#000",
    fontSize: 18,
    elevation: 1,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    width: "100%",
    height: 50,
    backgroundColor: "#386596",
    borderRadius: 5,
    elevation: 3,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
  },
  background: {
    bottom: 0,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
  },
  image: { flex: 2 },
});
