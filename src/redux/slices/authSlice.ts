import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  email: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      state.isAuthenticated = true;
    },
    setLogout: (state) => {
      state.email = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
