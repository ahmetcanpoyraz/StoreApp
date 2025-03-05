import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/bottom_navigator_screens/Home/HomeScreen";
import ItemDetailScreen from "../screens/bottom_navigator_screens/Home/ItemDetail/ItemDetailScreen";
import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>(); // Tipi burada belirt

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="ItemDetail"
        component={ItemDetailScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
