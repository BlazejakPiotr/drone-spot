import React from "react";
import { View, Text, StyleSheet } from "react-native";

function HomeHeading({ title, subtitle }) {
  return (
    <View style={{ marginBottom: 12 }}>
      {title && <Text style={styles.pageTitle}>{title}</Text>}
      <Text style={styles.pageSubtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    textAlign: "center",
    fontSize: 24,
    color: "#eee",
    fontFamily: "Montserrat_700Bold",
  },
  pageSubtitle: {
    textAlign: "center",
    fontSize: 18,
    color: "#333",
    fontFamily: "Montserrat_600SemiBold",
  },
});

export default HomeHeading;
