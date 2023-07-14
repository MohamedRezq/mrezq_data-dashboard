import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setPageLoading: (state: LoadingState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPageLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
