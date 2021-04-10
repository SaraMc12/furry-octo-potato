import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const itemsForListings = [
  {
    id: 1,
    title: "Dog hat for sale",
    price: 10,
    image: require("../assets/doghat.jpg"),
  },
  {
    id: 2,
    title: "Luxury Shower Cap for cats",
    price: 25,
    image: require("../assets/catbath.jpg"),
  },
];

export default function ListingsScreen() {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={itemsForListings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});
