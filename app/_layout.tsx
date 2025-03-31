import { Slot, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase.Config";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const router = useRouter();
  const [isAuthResolved, setIsAuthResolved] = useState(false);
  const [initialUser, setInitialUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setInitialUser(user);
      setIsAuthResolved(true);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isAuthResolved) {
      if (initialUser) {
        router.replace("/(tabs)");
      } else {
        router.replace("/(auth)");
      }
    }
  }, [isAuthResolved]);

  if (!isAuthResolved) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
}
