import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity >
      <View style={styles.item}>
        <MaterialIcons name="delete" size={24} color="#CFFD58" onPress={() => pressHandler(item.key)} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 20,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    color: "#fff",
    borderColor: "#fff",
    flex:1,
    flexDirection:"row",

  },
  text:{
    color: "#fff",
    marginHorizontal:10
  }
});
