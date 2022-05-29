import React from "react";
import { Text, StyleSheet, ScrollView, View } from "react-native";
import FeedItem from "../components/FeedItem";
import HomeHeading from "../components/HomeHeading";

function Dashboard() {
  return (
    <ScrollView style={{ backgroundColor: "gray" }}>
      <HomeHeading subtitle="Dashboard" />

      <FeedItem />
      <FeedItem />
      <FeedItem />
    </ScrollView>
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
export default Dashboard;
