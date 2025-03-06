import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import dataReducer from "./slices/dataSlice";
import favoritesReducer from "./slices/favorite_slice";
import shoppingCartReducer from "./slices/shopingCartSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    data: dataReducer,
    favorites: favoritesReducer,
    shoppingCart: shoppingCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
