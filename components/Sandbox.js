import {  Text, View, StyleSheet } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        backgroundColor:"#ddd",
        // flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-end"
    },
    boxOne:{
        backgroundColor:"violet",
        padding:10,
        flex:2,
    },
    boxTwo:{
        backgroundColor:"gold",
        padding:10,
        flex:1,
    },
    boxThree:{
        backgroundColor:"coral",
        padding:10,
        flex:1,

    },
    boxFour:{
        backgroundColor:"green",
        padding:10,
        flex:1,
    },
});
