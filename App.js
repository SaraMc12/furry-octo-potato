import { AppOwnership } from "expo-constants";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder="Name" icon="email" />
    </Screen>
  );
}
