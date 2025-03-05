import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/bottom_navigator_screens/Home/HomeScreen";
import ProfileScreen from "../screens/bottom_navigator_screens/Profile/ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons"; // Example: Using Ionicons
import FavoritesScreen from "../screens/bottom_navigator_screens/Favorites/FavoritesScreen";
import ShoppingCartScreen from "../screens/bottom_navigator_screens/ShoppingCart/ShoppingCartScreen";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
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
