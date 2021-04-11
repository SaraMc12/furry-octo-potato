import { AppOwnership } from "expo-constants";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const catagories = [
  { lable: "Cats", value: 1 },
  { lable: "Doggos", value: 2 },
  { lable: "Tiny Floof Critters", value: 3 },
];

export default function App() {
  return (
    <Screen>
      <AppPicker items={catagories} icon="apps" placeholder="catagories" />
      <AppTextInput placeholder="who farted" />
    </Screen>
  );
}
