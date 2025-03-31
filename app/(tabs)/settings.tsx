import { StyleSheet, View, Text } from "react-native";
import SubmitButton from "@/components/Reusables/SubmitButton";

export default function SettingsScreen() {
  const handleSignOut = async () => {};
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Settings</Text>
      </View>
      <Text style={styles.text}>SETTINGS</Text>
      <SubmitButton
        label={"Sign ouut"}
        onPress={handleSubmit}
        disabled={loading}
      />
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
