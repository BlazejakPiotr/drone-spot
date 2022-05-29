import React from "react";
import { Text, StyleSheet, View } from "react-native";
import AppLoading from "expo-app-loading";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Spots from "./Spots";
import Market from "./Market";
import Profile from "./Profile";
import { FontAwesome5 } from "@expo/vector-icons";
import Dashboard from "./Dashboard";
function AppScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Discover"
          component={Dashboard}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="home" size={28} color="#A9A9A9" />
            ),
          }}
        />
        <Tab.Screen
          name="Spots"
          component={Spots}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="globe-americas" size={28} color="#A9A9A9" />
            ),
          }}
        />
        <Tab.Screen
          name="Market"
          component={Market}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="shopping-cart" size={28} color="#A9A9A9" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="user-alt" size={28} color="#A9A9A9" />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f3f3",
    flex: 1,
    paddingTop: 50,
  },
});

export default AppScreen;
