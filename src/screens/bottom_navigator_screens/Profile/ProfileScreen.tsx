import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store"; // Redux store'unu içe aktar
import CustomButton from "../../../components/CustomButton";
import { setLogout } from "../../../redux/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.auth.email); // Redux'tan email'i çek

  const handleLogout = async () => {
    await AsyncStorage.removeItem("savedEmail"); // AsyncStorage'dan email'i temizle
    dispatch(setLogout()); // Redux state'ini sıfırla
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profil</Text>
      <Text style={styles.email}>Email: {email}</Text>
      <CustomButton title="Logout" onPress={handleLogout} icon="logout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  email: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
  },
});

export default ProfileScreen;
