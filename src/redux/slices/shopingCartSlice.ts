import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../domain/models/Item";

interface ShoppingCartState {
  cartItems: Item[];
}

const initialState: ShoppingCartState = {
  cartItems: [],
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Item>) {
      const itemExists = state.cartItems.some(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.cartItems.push(action.payload);
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;
