import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>todo-List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CFFD58",
    borderRadius: 5,
    marginVertical: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#302839",
  },
});
