import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Item } from "../domain/models/Item";
import { moderateScale, scale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";

import Icon from "react-native-vector-icons/AntDesign"; // İkonu içeri aktar

import { StackNavigationProp } from "@react-navigation/stack";
import { Colors } from "../constants/Colors";
import {
  addToFavorites,
  removeFromFavorites,
} from "../redux/slices/favorite_slice";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "ItemDetail">>();
  const dispatch = useDispatch<AppDispatch>();
  const favoriteItems = useSelector(
    (state: RootState) => state.favorites.favoriteItems
  );

  // Bu öğenin favori olup olmadığını kontrol et
  const isFavorite = favoriteItems.some((favItem) => favItem.id === item.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(item.id));
      console.log(`${item.title} favorilerden çıkarıldı`);
    } else {
      dispatch(addToFavorites(item));
      console.log(`${item.title} favorilere eklendi`);
    }
  };
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ItemDetail", { itemId: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
      <TouchableOpacity onPress={handleFavoriteToggle}>
        <Icon
          name={isFavorite ? "heart" : "hearto"} // Favori ise dolu kalp, değilse boş kalp
          style={styles.heartIconStyle}
          size={25}
          color={Colors.red}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  heartIconStyle: {
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  image: { width: "20%", height: moderateScale(70) },
  textContainer: {
    flex: 1,
    marginLeft: scale(5),
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: { fontSize: 18, fontWeight: "bold", color: "#333", marginBottom: 4 },
  price: { fontSize: 16, color: "#555" },
});
