import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  InteractionManager,
} from "react-native";
import { useRouter } from "expo-router";
import InputField from "../../components/Reusables/InputField";
import SubmitButton from "../../components/Reusables/SubmitButton";
import { auth, db } from "../../firebase.Config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { Colors } from "../../constants/Colors";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if (
      !email ||
      !password ||
      (isSignUp && (!name || password !== confirmPassword))
    ) {
      Alert.alert(
        "Error",
        isSignUp && password !== confirmPassword
          ? "Passwords do not match."
          : "Please fill out all required fields."
      );
      return;
    }

    const formattedEmail = email.trim().toLowerCase();
    const trimmedName = name.trim();

    setLoading(true);
    try {
      if (isSignUp) {
        try {
          console.log("🟡 Creating user...");
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            formattedEmail,
            password
          );
          const user = userCredential.user;

          console.log("🟡 Saving user to Firestore...");
          const userDocRef = doc(db, "users", user.uid);
          await setDoc(userDocRef, {
            name: trimmedName,
            email: formattedEmail,
            createdAt: new Date().toISOString(),
          });

          console.log("🟢 Re-signing in to ensure auth state is hydrated...");
          await signInWithEmailAndPassword(auth, formattedEmail, password);

          console.log("🟢 Navigating to /tabs...");
          await new Promise((resolve) =>
            InteractionManager.runAfterInteractions(() => {
              router.replace("/(tabs)");
              resolve(null);
            })
          );
        } catch (signUpError: any) {
          console.error("Sign Up Error:", signUpError);
          Alert.alert("Error", signUpError.message);
        } finally {
          setLoading(false);
        }

        return; // prevent fall-through
      }

      try {
        console.log("🟢 Signing in...");
        await signInWithEmailAndPassword(auth, formattedEmail, password);

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          if (user) {
            unsubscribe();
            console.log("🟢 Auth state confirmed, navigating to /tabs...");
            await new Promise((resolve) =>
              InteractionManager.runAfterInteractions(() => {
                router.replace("/(tabs)");
                resolve(null);
              })
            );
          }
        });
      } catch (signInError: any) {
        console.error("Sign In Error:", signInError);
        Alert.alert("Error", signInError.message);
      }
    } catch (error: any) {
      console.error("Auth Error:", error.code);
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert("Reset Password", "Please enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email.trim().toLowerCase());
      Alert.alert("Success", "A password reset email has been sent.");
    } catch (error) {
      Alert.alert("Error", "Failed to send reset email. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image source={require("../../assets/images/GoDanceLogo.png")} style={styles.logo} /> */}

      {isSignUp && (
        <InputField placeholder="Name" value={name} onChangeText={setName} />
      )}

      <InputField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none" // ✅ prevent auto-cap
        autoCorrect={false} // ✅ no autocorrect
      />

      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        isPassword
      />

      {isSignUp && (
        <InputField
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          isPassword
        />
      )}

      <SubmitButton
        label={
          loading
            ? isSignUp
              ? "Signing Up..."
              : "Signing In..."
            : isSignUp
            ? "Sign Up"
            : "Sign In"
        }
        onPress={handleSubmit}
        disabled={loading}
      />

      {!isSignUp && (
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Help! I forgot my password!</Text>
        </TouchableOpacity>
      )}

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>
          {isSignUp ? "Already have an account?" : "Not A User?"}
        </Text>
        <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
          <Text style={styles.createAccount}>
            {isSignUp ? " Sign In" : " Create Account"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#F8F8F8",
  },
  logo: {
    width: 200,
    height: 250,
    marginBottom: 10,
  },
  forgotPassword: {
    marginTop: 10,
    color: Colors.primary,
    fontSize: 14,
    fontWeight: "500",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  registerText: {
    fontSize: 14,
    color: Colors.primary,
  },
  createAccount: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.primary,
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
