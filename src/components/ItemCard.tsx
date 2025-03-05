import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Item } from "../domain/models/Item"; // Modeli içeri aktar
import { moderateScale, scale } from "react-native-size-matters";

interface ItemCardProps {
  item: Item;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.price}>${item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: { width: "20%", height: moderateScale(70) },
  textContainer: {
    flex: 1,
    marginLeft: scale(5),
    flexDirection: "column",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "white",
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    borderWidth: 1,

    flexShrink: 1,
    borderColor: "black",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Android için gölge
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: "#555",
  },
});
