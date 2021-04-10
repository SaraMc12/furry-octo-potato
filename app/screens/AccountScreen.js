import React from "react";
import { View, Image, StyleSheet, Text, FlatList } from "react-native";
import ListItem from "../components/ListItem";

import Icon from "../components/Icon";
import Screen from "../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ItemSeparator from "../components/ItemSeparator";
import colors from "../config/colors";

const accountMenuItems = [
  {
    title: "Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={require("../assets/banana.jpg")}
          title="Potato Wolf"
          subTitle="PotatoWolf@gmail.com"
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={accountMenuItems}
          keyExtractor={(accountMenuItem) => accountMenuItem.title}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#b0c6b9" />}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  list: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    backgroundColor: colors.white,
    marginBottom: 10,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
export default AccountScreen;
