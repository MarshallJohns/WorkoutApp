import { StyleSheet, View, Text } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Settings</Text>
      </View>
      <Text style={styles.text}>SETTINGS</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20417B",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
