import React from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import HomeHeading from "../components/HomeHeading";

function Spots() {
  return (
    <View style={styles.wrapper}>
      <HomeHeading subtitle="Spots" />
      <MapView
        style={styles.mapcontainer}
        showsUserLocation={true}
        showsMyLocationButton={false}
        zoomEnabled={true}
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    flex: 1,
  },
  mapcontainer: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 14,
  },
});

export default Spots;
