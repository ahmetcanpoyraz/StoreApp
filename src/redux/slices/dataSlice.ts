import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiError } from "../../api/types/apiTypes";

interface DataState<T = any> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess<T>(state: DataState<T>, action: PayloadAction<T>) {
      state.data = action.payload;
      state.loading = false;
    },
    fetchDataFailure(state, action: PayloadAction<ApiError>) {
      state.error = action.payload;
      state.loading = false;
    },
    postDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    postDataSuccess<T>(state: DataState<T>, action: PayloadAction<T>) {
      state.data = action.payload;
      state.loading = false;
    },
    postDataFailure(state, action: PayloadAction<ApiError>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchDataStart,
  fetchDataSuccess,
  fetchDataFailure,
  postDataStart,
  postDataSuccess,
  postDataFailure,
} = dataSlice.actions;
export default dataSlice.reducer;
