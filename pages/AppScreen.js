import React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";

function AppScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.wrapper}></ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    flex: 1,
    color: "#fff",
  },
  wrapper: {
    paddingHorizontal: 14,
  },
});

export default AppScreen;
