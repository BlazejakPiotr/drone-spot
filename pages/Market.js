import React from "react";
import { Text, StyleSheet, View } from "react-native";
import HomeHeading from "../components/HomeHeading";

function Market({ navigation }) {
  return (
    <View style={styles.wrapper}>
      <HomeHeading subtitle="Marketplace" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
  },
});
export default Market;
