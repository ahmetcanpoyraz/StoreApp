import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemDetailScreen from "../screens/bottom_navigator_screens/Home/ItemDetail/ItemDetailScreen";
import { RootStackParamList } from "./types";
import FavoritesScreen from "../screens/bottom_navigator_screens/Favorites/FavoritesScreen";

const Stack = createNativeStackNavigator<RootStackParamList>(); // Tipi burada belirt

const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={FavoritesScreen}
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

export default FavoritesStackNavigator;
