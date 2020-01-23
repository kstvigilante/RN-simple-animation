import React from "react";
import { Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "react-navigation";

import { Explore, Saved, Inbox, Trips, Profile } from "./screens";

export default createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: "Explore",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-search" color={tintColor} size={24} />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: "Saved",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-heart" color={tintColor} size={24} />
        )
      }
    },
    Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarLabel: "Trips",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/airbnb.png")}
            style={{ width: 24, height: 24, tintColor: tintColor }}
          />
        )
      }
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: "Inbox",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-chatboxes" color={tintColor} size={24} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-person" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "steelblue",
      inactiveTintColor: "#ccc",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5,
      }
    }
  }
);
