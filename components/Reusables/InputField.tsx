import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/Colors";

interface InputProps extends TextInputProps {
  isPassword?: boolean;
}

const InputField: React.FC<InputProps> = ({ isPassword, ...props }) => {
  const [secureText, setSecureText] = useState(isPassword);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholderTextColor={Colors.primary}
        secureTextEntry={secureText}
        {...props}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() => setSecureText(!secureText)}
          style={styles.icon}
        >
          <Ionicons
            name={secureText ? "eye-off" : "eye"}
            size={20}
            color={Colors.primary}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 20,
    paddingHorizontal: 12,
    height: 45,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.primary,
    paddingVertical: 10,
  },
  icon: {
    paddingHorizontal: 10,
  },
});

export default InputField;
