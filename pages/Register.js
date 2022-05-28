import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput,
  ScrollView,
} from "react-native";
import WideHomeButton from "../components/WideHomeButton";
import Logo from "../components/Logo";
import HomeHeading from "../components/HomeHeading";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import Checkbox from "expo-checkbox";
function Register({ navigation }) {
  const [isChecked, setChecked] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Logo />
        <HomeHeading subtitle="Create a new account" />
        <Text style={styles.label}>Email Address</Text>
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
          <TextInput style={styles.input} placeholder="john.doe@email.com" />
        </View>
        <Text style={styles.label}>Username</Text>
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
          <TextInput style={styles.input} placeholder="User" />
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
          <TextInput style={styles.input} placeholder="********" />
        </View>
        <Text style={styles.label}>Confirm password</Text>
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
          <TextInput style={styles.input} placeholder="********" />
        </View>
        <View style={styles.row}>
          <Checkbox
            value={isChecked}
            onValueChange={setChecked}
            style={styles.checkbox}
          />
          <Text style={{ fontFamily: "Montserrat_400Regular" }}>
            I have accepted the{" "}
          </Text>
          <Text
            style={{
              color: "#386596",
              fontFamily: "Montserrat_600SemiBold",
              marginBottom: 12,
            }}
            onPress={() => navigation.navigate("LogIn")}
          >
            Term and Conditions
          </Text>
        </View>
        <WideHomeButton navigation={navigation} title="Sign up" path="Core" />
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text
            style={{
              fontFamily: "Montserrat_400Regular",
            }}
          >
            Already registered?
          </Text>
          <Text
            style={{
              color: "#386596",
              fontFamily: "Montserrat_600SemiBold",
              marginBottom: 12,
            }}
            onPress={() => navigation.navigate("LogIn")}
          >
            Sign in
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
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    marginBottom: 20,
    paddingHorizontal: 14,
  },
  row: {
    flexDirection: "row",
  },
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
  checkbox: {
    marginRight: 8,
    borderWidth: 1,
    borderColor: "#999",
    color: "#999",
  },
});

export default Register;
