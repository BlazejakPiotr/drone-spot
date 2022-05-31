import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import SpotListingItem from "../components/SpotListingItem";
import HomeHeading from "../components/HomeHeading";
import spotsArray from "../JSON/spots.json";

function Spots() {
  return (
    <ScrollView style={{ backgroundColor: "gray" }}>
      <HomeHeading subtitle="Spots" />
      {spotsArray.map((spot) => {
        return <SpotListingItem spot={spot} key={spot.id} />;
      })}
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
export default Spots;
