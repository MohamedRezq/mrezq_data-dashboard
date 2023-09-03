import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type PopupState = {
  isPopupOpen: boolean;
};

const initialState: PopupState = {
  isPopupOpen: false,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setPopupOpen: (state: PopupState, action: PayloadAction<boolean>) => {
      state.isPopupOpen = action.payload;
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPopupOpen } = popupSlice.actions;

export default popupSlice.reducer;
