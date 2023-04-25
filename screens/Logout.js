import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";

export default class Logout extends Component {
  componentDidMount() {
    firebase.auth().signOut();
    this.props.navigation.replace("Tela de Login");
    alert("Missão falha com sucesso! Você saiu de sua conta!");
    //I will sue you in court
  }

  render() {
    return <View></View>;
  }
}
