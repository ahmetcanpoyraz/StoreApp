import React, { useState, useEffect } from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import {
  ValidationRule,
  validateField,
} from "../domain/validators/inputValidators";
import { Colors } from "../constants/Colors";

interface TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  validationRules?: ValidationRule[];
  touched: boolean;
  secureTextEntry?: boolean;
}

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  validationRules,
  touched,
  secureTextEntry,
}: TextInputProps) => {
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (touched && validationRules) {
      const validationError = validateField(value, validationRules);
      setError(validationError || "");
    }
  }, [touched, value, validationRules]);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry ?? false}
        onChangeText={onChangeText}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: scale(20),
  },
  input: {
    height: verticalScale(40),
    borderColor: Colors.black,
    borderWidth: 1,
    paddingLeft: scale(10),
    borderRadius: scale(10),
    fontSize: moderateScale(14),
  },
  inputError: {
    borderColor: Colors.red,
  },
  errorText: {
    color: Colors.red,
    marginTop: 5,
  },
});

export default CustomTextInput;
