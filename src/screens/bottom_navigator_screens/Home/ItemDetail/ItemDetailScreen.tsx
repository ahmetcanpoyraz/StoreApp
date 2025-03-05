import { StyleSheet, Text, View } from "react-native";
import React from "react";

export function ItemDetailScreen({ route }: { route: any }) {
  const { itemId } = route.params;
  return (
    <View>
      <Text>Item Detail Sayfası - Item ID: {itemId}</Text>
    </View>
  );
}

export default ItemDetailScreen;

const styles = StyleSheet.create({});
