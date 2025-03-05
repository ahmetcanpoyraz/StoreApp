import React from "react";
import {
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
  View,
} from "react-native";
import CustomTextInput from "../../../components/CustomTextInput";
import styles from "./LoginScreen.style";
import { Images } from "../../../constants/asset_constants";
import { useState } from "react";
import {
  emailRules,
  passwordRules,
} from "../../../domain/validators/inputValidators";
import CustomButton from "../../../components/CustomButton";
import { useAlert } from "../../../hooks/useAlert";
import CustomAlertDialog from "../../../components/CustomAlertDialog";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { setLogin } from "../../../redux/slices/authSlice"; // authSlice'tan setLogin'ı import ettik
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState(false);
  const [loading, setLoading] = useState(false);
  const { isVisible, title, message, showAlert, hideAlert } = useAlert();
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Initialize navigation

  const handleSubmit = () => {
    Keyboard.dismiss();
    setTouched(true);
    setLoading(true);
    setTimeout(async () => {
      if (
        !emailRules.some((rule) => !rule.rule(email)) &&
        !passwordRules.some((rule) => !rule.rule(password))
      ) {
        if (email === "Test@test.com" && password === "123456") {
          console.log("Form geçerli:", { email, password });
          try {
            await AsyncStorage.setItem("savedEmail", email);
            dispatch(setLogin(email));
          } catch (error) {
            console.log("E-posta kaydedilirken hata oluştu:", error);
          }
        } else {
          showAlert("Hata", "Kullanıcı Bilgileri Yanlış");
        }
      } else {
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding">
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            keyboardShouldPersistTaps="handled"
          >
            <Image
              source={Images.login}
              style={styles.imageStyle}
              resizeMode="contain"
            />
            <View style={styles.sizedBoxStyle}></View>
            <CustomTextInput
              placeholder="E-posta adresiniz"
              value={email}
              onChangeText={setEmail}
              validationRules={emailRules}
              touched={touched}
            />
            <CustomTextInput
              placeholder="Şifre"
              value={password}
              onChangeText={setPassword}
              validationRules={passwordRules}
              secureTextEntry={true}
              touched={touched}
            />
            <CustomButton
              title="Login"
              loading={loading}
              onPress={() => {
                handleSubmit();
              }}
              disabled={loading}
              icon="login"
            />
            <CustomAlertDialog
              visible={isVisible}
              onClose={hideAlert}
              title={title}
              message={message}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
