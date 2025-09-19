import { StyleSheet, Text, View } from "react-native";

export default function AboutScreendex() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>About Screen</Text>
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
  }
});