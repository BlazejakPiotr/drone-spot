import React from "react";
import { StyleSheet, View, Image } from "react-native";

function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    marginTop: 30,
  },
  logo: {
    height: 180,
    width: "100%",
  },
  subtitle: {
    color: "#fff",
    fontSize: 18,
    elevation: 3,
  },
});

export default Logo;
