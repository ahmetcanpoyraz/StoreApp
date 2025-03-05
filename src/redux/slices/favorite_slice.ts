import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item } from "../../domain/models/Item";

interface FavoritesState {
  favoriteItems: Item[];
}

const initialState: FavoritesState = {
  favoriteItems: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<Item>) {
      const itemExists = state.favoriteItems.some(
        (favItem) => favItem.id === action.payload.id
      );
      if (!itemExists) {
        state.favoriteItems.push(action.payload);
      }
    },
    removeFromFavorites(state, action: PayloadAction<number>) {
      state.favoriteItems = state.favoriteItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
