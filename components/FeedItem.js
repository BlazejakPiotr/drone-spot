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
import { FontAwesome5, Feather } from "@expo/vector-icons";

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
      <View style={styles.cta}>
        {/* LIKES */}
        <View style={styles.ctaBtn}>
          <FontAwesome5 name="heart" size={16} color="#888" />
          <Text style={styles.ctaText}>301</Text>
        </View>
        {/* COMMENTS */}
        <View style={styles.ctaBtn}>
          <Feather name="message-square" size={16} color="#888" />
          <Text style={styles.ctaText}>0</Text>
        </View>
        {/* BOOKMARK */}
        <View style={styles.ctaBtn}>
          <Feather name="bookmark" size={16} color="#888" />
          <Text style={styles.ctaText}>Bookmark</Text>
        </View>
        {/* SHARE */}
        <View style={styles.ctaBtn}>
          <Feather name="share-2" size={16} color="#888" />
          <Text style={styles.ctaText}>Share</Text>
        </View>
      </View>
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
  cta: {
    paddingHorizontal: 18,
    flexDirection: "row",
    backgroundColor: "#eee",
    height: 40,
  },
  ctaBtn: {
    marginRight: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  ctaText: {
    marginLeft: 8,
    color: "#888",
    fontFamily: "Montserrat_700Bold",
    fontSize: 13,
  },
});
export default FeedItem;
