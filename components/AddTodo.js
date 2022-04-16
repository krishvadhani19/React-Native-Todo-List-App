import react, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add new task!"
        placeholderTextColor='#CFFD58'
        onChangeText={(val) => changeHandler(val)}
      />
      <Button
        onPress={()=>submitHandler(text)}
        title="Add New Task"
        titleStyle={{color:'#18141C'}}
        color="#CFFD58"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ffffff",
    color:"#CFFD58"
  },
});
