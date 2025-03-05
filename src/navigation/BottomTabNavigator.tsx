import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/bottom_navigator_screens/Profile/ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons"; // Example: Using Ionicons
import FavoritesScreen from "../screens/bottom_navigator_screens/Favorites/FavoritesScreen";
import ShoppingCartScreen from "../screens/bottom_navigator_screens/ShoppingCart/ShoppingCartScreen";
import HomeStackNavigator from "./HomeStack";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shopping Cart"
        component={ShoppingCartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="cart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
