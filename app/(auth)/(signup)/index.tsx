import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <Link href="/login">Login</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
