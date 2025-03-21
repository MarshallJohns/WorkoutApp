import React, { useState, useEffect } from "react";

import { View, Text, Image, StyleSheet, TextInput } from "react-native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password);
  return (
    <View style={styles.container}>
      <Text style={styles.username}>Login</Text>
      <TextInput
        style={styles.input}
        defaultValue={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        defaultValue={password}
        onChangeText={(text) => setPassword(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 60,
  },

  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  location: {
    fontSize: 18,
    color: "#444",
    marginTop: 5,
  },
  input: {
    backgroundColor: "white",
    //   height: Misc.margin / 2,
    width: "100%",
    paddingLeft: 10,
    marginBottom: 10,
  },
});

export default Login;
