import { AppOwnership } from "expo-constants";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Cats", value: 1 },
  { label: "Dogs", value: 2 },
  { label: "Tiny Floofs", value: 3 },
];
export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="category"
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
