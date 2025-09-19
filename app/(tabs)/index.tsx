import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Hello Expo</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#636363ff",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  },
  text: {
    color: "#ffffff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#ffffff",
  }
});