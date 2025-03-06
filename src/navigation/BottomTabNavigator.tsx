import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/bottom_navigator_screens/Profile/ProfileScreen";
import Icon from "react-native-vector-icons/Ionicons"; // Example: Using Ionicons
import FavoritesScreen from "../screens/bottom_navigator_screens/Favorites/FavoritesScreen";
import ShoppingCartScreen from "../screens/bottom_navigator_screens/ShoppingCart/ShoppingCartScreen";
import HomeStackNavigator from "./HomeStack";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { View, StyleSheet, Text } from "react-native";
const Tab = createBottomTabNavigator();
import { moderateScale } from "react-native-size-matters";
import { Colors } from "../constants/Colors";
import FavoritesStackNavigator from "./FavoritesStack";

const BottomTabNavigator = () => {
  const cartItems = useSelector(
    (state: RootState) => state.shoppingCart.cartItems
  );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoritesTab"
        component={FavoritesStackNavigator}
        options={{
          headerShown: false,
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
            <View style={{ position: "relative" }}>
              <Icon name="cart" size={size} color={color} />
              {cartItems.length > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{cartItems.length}</Text>
                </View>
              )}
            </View>
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

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    right: -moderateScale(6),
    top: -moderateScale(3),
    backgroundColor: Colors.red,
    borderRadius: moderateScale(10),
    width: moderateScale(18),
    height: moderateScale(18),
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: moderateScale(12),
    fontWeight: "bold",
  },
});
