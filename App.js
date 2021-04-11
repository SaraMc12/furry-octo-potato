import { AppOwnership } from "expo-constants";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Cats", value: 1 },
  { label: "Doggos", value: 2 },
  { label: "Tiny Floof Critters", value: 3 },
];

export default function App() {
  return (
    <Screen>
      <AppPicker items={categories} icon="apps" placeholder="category" />
      <AppTextInput icon="email" placeholder="who farted" />
    </Screen>
  );
}
