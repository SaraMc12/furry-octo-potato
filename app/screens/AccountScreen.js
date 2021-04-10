import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import ListItem from "../components/ListItem";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import ItemSeparator from "../components/ItemSeparator";
import colors from "../config/colors";
import { FlatList } from "react-native-gesture-handler";

// step one - create a list item in its own container
// then apply a margin to create some space
// step 2 -createa flatlist with two list items that is insside its own container with margine below it
// step 3- create a single list item

// create resuable Icon component as well, thats the circle for the icon.

function AccountScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <ListItem
          image={require("../assets/banana.jpg")}
          title="Potato Wolf"
          subTitle="PotatoWolf@gmail.com"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // padding: 15,
    backgroundColor: colors.primary,
  },
  list: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
  },
});
export default AccountScreen;
