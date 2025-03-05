import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomTabNavigator";
import AuthStack from "./AuthStack";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setLogin } from "../redux/slices/authSlice";
import { RootState } from "../redux/store"; // Redux store tipini import edin
import { Loading } from "../components/Loading";

const AppNavigator = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.auth.email); // Redux'tan email'i alın
  const [isLoading, setIsLoading] = useState(true); // Yükleme durumunu ekliyoruz

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const savedEmail = await AsyncStorage.getItem("savedEmail");
        if (savedEmail) {
          dispatch(setLogin(savedEmail));
        }
      } catch (error) {
        console.log("AsyncStorage hatası:", error);
      } finally {
        setIsLoading(false); // Veri alınır alınmaz yükleme durumunu kapatıyoruz
      }
    };

    checkLoginStatus();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {email ? <BottomTabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNavigator;
