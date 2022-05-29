import React from "react";
import { View, StyleSheet, Image, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

function Topbar() {
  return (
    <View style={styles.container}>
      <View style={{ position: "relative" }}>
        <Feather
          name="search"
          size={24}
          color="black"
          style={{ position: "absolute", right: 8, top: 2, zIndex: 3 }}
        />
        <TextInput style={styles.input} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#386596",
    height: 75,
    paddingTop: 30,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "center",
  },
  avatar: {
    borderRadius: 50,
    width: 30,
    height: 30,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 50,
    width: 300,
    height: 30,
    paddingHorizontal: 18,
  },
});
export default Topbar;
