import DrawerNavigator from "./Navigation/DrawerNavigation";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/Login";
import RegisterScreen from "./screens/Register";
import { firebaseConfig } from "./config";
import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const Stack = createStackNavigator();

const StackNave = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tela de Login" component={LoginScreen} />
      <Stack.Screen name="Tela Inicial" component={DrawerNavigator} />
      <Stack.Screen name="Tela de Registro" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StackNave></StackNave>
    </NavigationContainer>
  );
}
