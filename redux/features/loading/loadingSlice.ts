import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface LoadingState {
  isPageLoading: boolean;
}

const initialState: LoadingState = {
  isPageLoading: false,
};

export const saasSlice = createSlice({
  name: "saas",
  initialState,
  reducers: {
    setPageLoading: (state: LoadingState, action: PayloadAction<boolean>) => {
      state.isPageLoading = action.payload;
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPageLoading } = saasSlice.actions;

export default saasSlice.reducer;
