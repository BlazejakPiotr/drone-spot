import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

function WideHomeButton({ navigation, title, path }) {
  return (
    <Pressable style={styles.button} onPress={() => navigation.navigate(path)}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
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
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
    color: "#fff",
    textTransform: "uppercase",
  },
});
export default WideHomeButton;
