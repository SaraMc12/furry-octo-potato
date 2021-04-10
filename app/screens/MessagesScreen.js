import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  renderRightActions,
} from "react-native";
import ItemSeparator from "../components/ItemSeparator";
import ListItem from "../components/ListItem";
import DeleteItem from "../components/DeleteItem";

import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/banana.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/banana.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefresh] = useState(false);

  const deleteHandler = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("message clicked", item)}
            renderRightActions={() => (
              <DeleteItem onPress={() => deleteHandler(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/banana.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  //   screen: {
  //     paddingTop: 24,
  //   },
});
export default MessagesScreen;
