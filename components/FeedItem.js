import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  Button,
  Image,
} from "react-native";

import avatar from "../assets/avatar.jpg";
import image from "../assets/feeditem.jpg";
function FeedItem() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={image}
        resizeMode="cover"
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={styles.author}>
            <Image source={avatar} resizeMode="contain" style={styles.avatar} />
            <View>
              <Text style={{ fontFamily: "Montserrat_700Bold", color: "#fff" }}>
                Kajtek
              </Text>
              <Text
                style={{ fontFamily: "Montserrat_400Regular", color: "#fff" }}
              >
                1206 followers
              </Text>
            </View>
          </View>
          <Button
            style={styles.followbtn}
            onPress={() => console.log("follow!")}
            title="Follow"
          />
        </View>
        <View>
          <Text style={styles.title}>Most kolejowy Janikowo</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>FPV</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>Freestyle</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.cta}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 600,
    width: Dimensions.get("window").width,
    flexDirection: "column",
    backgroundColor: "#f0f0f0",
    marginBottom: 24,
  },
  background: {
    flex: 1,
    position: "relative",
    justifyContent: "space-between",
    padding: 14,
  },
  author: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: { borderRadius: 50, width: 30, height: 30, marginRight: 12 },

  title: { fontFamily: "Montserrat_700Bold", fontSize: 18, color: "#fff" },
  tag: {
    borderColor: "#fff",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginRight: 4,
  },
  tagText: {
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
  },
  cta: {
    backgroundColor: "lightgray",
    height: 45,
  },
});
export default FeedItem;
