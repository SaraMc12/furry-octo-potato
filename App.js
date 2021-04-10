import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./app/components/AppText";
import { AntDesign } from "@expo/vector-icons";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import Icon from "./app/components/Icon";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return <ListingsScreen />;
}
