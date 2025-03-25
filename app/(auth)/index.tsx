import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import InputField from "@/components/InputField";
import SubmitButton from "@/components/SubmitButton";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require("../../assets/images/GoDanceLogo.png")}
        style={styles.logo}
      />

      {/* Input Fields */}
      <InputField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <InputField
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        isPassword
      />

      {/* Login Button */}
      {/* <SubmitButton label="Sign In" /> */}

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Help! I forgot my password!</Text>
      </TouchableOpacity>

      {/* Create Account Section */}
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Not A User?</Text>
        <TouchableOpacity onPress={() => router.push("/sign-up")}>
          <Text style={styles.createAccount}> Create Account</Text>
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
    color: "#1A1A50",
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
    color: "#1A1A50",
  },
  createAccount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1A1A50",
    textDecorationLine: "underline",
  },
});

export default Login;
