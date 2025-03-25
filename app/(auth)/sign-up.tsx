import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const SignUpScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.username}>Login</Text>
        <TextInput
          style={styles.input}
          defaultValue={email}
          onChangeText={(text) => setEmail(text)}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            defaultValue={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.registerContainer}>
          <TouchableOpacity onPress={() => router.push("/sign-up")}>
            <Text style={styles.createAccount}> Create Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // paddingTop: 60,
    height: "100%",
    borderColor: "black",
  },
  inputContainer: {
    width: "80%",
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "pink",
  },
  location: {
    fontSize: 18,
    color: "#444",
    marginTop: 5,
  },
  input: {
    backgroundColor: "white",
    //   height: Misc.margin / 2,
    width: "50%",
    paddingLeft: 10,
    marginBottom: 10,
  },
  createAccount: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1A1A50",
    textDecorationLine: "underline",
  },
  registerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    height: 20,
    width: "100%",
  },
});

export default SignUpScreen;
