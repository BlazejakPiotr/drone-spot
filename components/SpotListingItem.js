import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";

import avatar from "../assets/avatar.jpg";
import image from "../assets/feeditem.jpg";
import CTABar from "./CTABar";
function SpotListingItem({ spot }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={spot.photos[0].url}
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
                {spot.author.nickname}
              </Text>
              <Text
                style={{ fontFamily: "Montserrat_400Regular", color: "#fff" }}
              >
                {spot.author.followers} followers
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => console.log("follow!")}
            title="Follow"
            color="#386596"
          >
            <View style={styles.followbtn}>
              <Text
                style={{ color: "#fff", fontFamily: "Montserrat_600SemiBold" }}
              >
                Follow
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          {/* TITLE */}
          <Text style={styles.title}>Most kolejowy Janikowo</Text>

          {/* TAGS */}
          <View style={{ flexDirection: "row" }}>
            {spot.tags.map((tag) => {
              return (
                <View style={styles.tag} key={tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </ImageBackground>
      <CTABar likes={spot.likes} comments={spot.comments} />
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
    padding: 18,
  },
  author: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  avatar: { borderRadius: 50, width: 30, height: 30, marginRight: 12 },
  followbtn: {
    backgroundColor: "#386596",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
  },

  title: {
    fontFamily: "Montserrat_700Bold",
    fontSize: 18,
    color: "#fff",
    marginBottom: 8,
  },
  tag: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginRight: 4,
  },
  tagText: {
    color: "#fff",
    fontFamily: "Montserrat_600SemiBold",
  },
});
export default SpotListingItem;
