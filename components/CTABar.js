import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5, Feather } from "@expo/vector-icons";
function CTABar({ likes, comments }) {
  return (
    <View style={styles.container}>
      {/* LIKES */}
      <View style={styles.btn}>
        <FontAwesome5 name="heart" size={16} color="#888" />
        <Text style={styles.text}>{likes}</Text>
      </View>
      {/* COMMENTS */}
      <View style={styles.btn}>
        <Feather name="message-square" size={16} color="#888" />
        <Text style={styles.text}>{comments}</Text>
      </View>
      {/* BOOKMARK */}
      <View style={styles.btn}>
        <Feather name="bookmark" size={16} color="#888" />
        <Text style={styles.text}>Bookmark</Text>
      </View>
      {/* SHARE */}
      <View style={styles.btn}>
        <Feather name="share-2" size={16} color="#888" />
        <Text style={styles.text}>Share</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    flexDirection: "row",
    backgroundColor: "#eee",
    height: 40,
  },
  btn: {
    marginRight: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 8,
    color: "#888",
    fontFamily: "Montserrat_700Bold",
    fontSize: 13,
  },
});

export default CTABar;
