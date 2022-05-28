import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import WideHomeButton from "../components/WideHomeButton";
import Logo from "../components/Logo";
import HomeHeading from "../components/HomeHeading";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

function LogIn({ navigation, fonts }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Logo />
        <HomeHeading subtitle="Welcome to Drone Spot" />

        <Text style={styles.label}>E-mail Address</Text>
        <View style={{ position: "relative" }}>
          <FontAwesome
            name="user"
            size={18}
            color="gray"
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              zIndex: 3,
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={setLogin}
            value={login}
            placeholder="john.doe@email.com"
          />
        </View>
        <Text style={styles.label}>Password</Text>
        <View style={{ position: "relative" }}>
          <Ionicons
            name="lock-closed-outline"
            size={18}
            color="gray"
            style={{
              position: "absolute",
              top: 12,
              left: 12,
              zIndex: 3,
            }}
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            placeholder="********"
          />
        </View>
        <Text
          style={{
            textAlign: "right",
            color: "#386596",

            marginBottom: 8,
            fontFamily: "Montserrat_600SemiBold",
          }}
        >
          Forgot Password?
        </Text>
        <WideHomeButton navigation={navigation} title="Login" path="Core" />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Montserrat_400Regular",
            }}
          >
            Don't have an account?
          </Text>
          <Text
            style={{
              color: "#386596",
              fontFamily: "Montserrat_600SemiBold",
              paddingLeft: 6,
              marginBottom: 12,
            }}
            onPress={() => navigation.navigate("Register")}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </ScrollView>
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

  button: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 24,
    marginBottom: 8,
    width: "100%",
    height: 50,
    borderRadius: 5,
    borderColor: "#999",
    borderWidth: 1,
    flexDirection: "row",
  },
  text: { color: "#fff", fontFamily: "Montserrat_600SemiBold" },
  label: {
    fontSize: 14,
    color: "#555555",
    fontFamily: "Montserrat_700Bold",
  },
  input: {
    position: "relative",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 3,
    height: 42,
    paddingVertical: 6,
    paddingHorizontal: 36,
    marginBottom: 12,
    color: "#555",
    fontSize: 14,
  },
});

export default LogIn;
