import React, { Children } from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.black,
  },
});
export default AppText;
