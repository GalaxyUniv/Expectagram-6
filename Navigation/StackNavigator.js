import React, { Component } from "react";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import PostScreen from "../screens/PostScreen";

const Stack = createStackNavigator();

export default class StackNavigator extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Tela Inicial" component={TabNavigator} />
        <Stack.Screen name="Tela de Posts" component={PostScreen} />
      </Stack.Navigator>
    );
  }
}
