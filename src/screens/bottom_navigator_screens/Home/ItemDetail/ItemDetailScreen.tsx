import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CustomButton from "../../../../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../../../redux/store";
import { addToCart } from "../../../../redux/slices/shopingCartSlice";

export function ItemDetailScreen({ route }: { route: any }) {
  const { item } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const handleAddToCart = () => {
    dispatch(addToCart(item));
    console.log(`${item.title} sepete eklendi`);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.sizedBox}></View>
      <Text>{item.title}</Text>
      <View style={styles.sizedBox}></View>
      <Text>{item.price}</Text>
      <View style={styles.sizedBox}></View>
      <CustomButton
        title="Add To Cart"
        onPress={handleAddToCart}
        loading={false}
      />
    </View>
  );
}

export default ItemDetailScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  sizedBox: { height: "5%" },
  image: {
    width: "70%",
    height: "60%",
    resizeMode: "contain",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
});
