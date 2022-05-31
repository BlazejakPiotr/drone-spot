import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapTab from "./MapTab";
import Market from "./Market";
import Profile from "./Profile";
import { FontAwesome5 } from "@expo/vector-icons";
import Spots from "./Spots";
function AppScreen() {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="Spots"
          component={Spots}
          options={{
            tabBarIcon: () => (
              <FontAwesome5 name="home" size={28} color="#A9A9A9" />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapTab}
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
