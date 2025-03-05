import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store"; // Redux store'unu içe aktar
import { ItemCard } from "../../../components/ItemCard";

const FavoritesScreen = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favoriteItems
  ); // Redux'tan email'i çek

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemCard item={item} />}
      />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({});
