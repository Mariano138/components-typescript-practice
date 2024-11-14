import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Input from "./components/Input";

export default function App() {
  return (
    <View style={styles.container}>
      <Input />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
