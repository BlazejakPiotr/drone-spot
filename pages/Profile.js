import React from "react";
import { Text, StyleSheet, View } from "react-native";
import HomeHeading from "../components/HomeHeading";

function Profile({ naviagtion }) {
  return (
    <View style={styles.wrapper}>
      <HomeHeading subtitle="Profile" />
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 14,
  },
});
export default Profile;
