import { StyleSheet, View, Text } from "react-native";
import { auth } from "@/firebase.Config";
import { signOut } from "firebase/auth";
import { useRouter } from "expo-router";

import SubmitButton from "@/components/Reusables/SubmitButton";

export default function SettingsScreen() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("Signed out successfully");
      router.replace("(auth)");
      // You can also navigate to login screen here if using React Navigation
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Settings</Text>
      </View>
      <Text style={styles.text}>SETTINGS</Text>
      <SubmitButton
        label={"Sign out"}
        onPress={handleSignOut}
        // disabled={loading}
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
