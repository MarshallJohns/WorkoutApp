import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";

const firebaseConfig = Constants.expoConfig?.extra?.firebase;

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth with AsyncStorage Persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// ✅ Initialize Firestore
const db = getFirestore(app);

export { auth, db };
