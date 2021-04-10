import React, { Children } from "react";
import { StyleSheet, Text } from "react-native";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "tomato",
  },
});
export default AppText;
