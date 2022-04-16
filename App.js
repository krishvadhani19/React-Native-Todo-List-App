import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todo, setTodo] = useState([
    { text: "Buy coffee", key: "1" },
    { text: "Put in daily workout", key: "2" },
    { text: "Ground your thought process", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 0) {
      setTodo((prevTodo) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert("Oops!", "Empty task cannot be added!", [
        {
          text: "Understood",
          onPress: () => {
            console.log("Alert Closed");
          },
        },
      ]);
    }
  };
  return (
    // <Sandbox/>
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todo}
              keyExtractor={(item) => item.key}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18141C",
    paddingTop: 40,
    paddingHorizontal: 10,
    color: "#ffffff",
  },
  content: {
    marginHorizontal: 20,
    marginTop: 20,
    flex: 1,
  },
  list: {
    flex: 1,
  },
});
