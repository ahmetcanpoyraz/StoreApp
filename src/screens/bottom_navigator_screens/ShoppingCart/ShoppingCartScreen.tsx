import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { removeFromCart } from "../../../redux/slices/shopingCartSlice";
import { Item } from "../../../domain/models/Item";
import { moderateScale, scale } from "react-native-size-matters";
import Icon from "react-native-vector-icons/Ionicons";
import { Colors } from "../../../constants/Colors";

const ShoppingCartScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useSelector(
    (state: RootState) => state.shoppingCart.cartItems
  );

  const handleRemoveFromCart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
    console.log(`Item ${itemId} sepetten çıkarıldı`);
  };

  const renderItem = ({ item }: { item: Item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemoveFromCart(item.id)}
      >
        <Icon name="trash" size={moderateScale(20)} color={Colors.red} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Sepetiniz boş</Text>
      ) : (
        <FlatList
          data={cartItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 10,
  },
  container: {
    flex: 1,
    padding: moderateScale(16),
    backgroundColor: "white",
  },
  listContainer: {
    paddingBottom: moderateScale(20),
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: moderateScale(10),
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemTitle: {
    fontSize: moderateScale(16),
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  itemPrice: {
    fontSize: moderateScale(16),
    color: "#555",
    marginRight: scale(10),
    marginLeft: 10,
  },
  removeButton: {
    padding: moderateScale(5),
  },
  emptyText: {
    fontSize: moderateScale(18),
    color: "#555",
    textAlign: "center",
    marginTop: moderateScale(20),
  },
});

export default ShoppingCartScreen;
