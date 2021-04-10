import React from "react";

import { SafeAreaView, StyleSheet } from "react-native";

function Screen(props) {
  return <SafeAreaView style={styles.screen}>{props.children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 30,
    flex: 1,
  },
});
export default Screen;
