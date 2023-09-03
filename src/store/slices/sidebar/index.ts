import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type SidebarState = {
  activeTab: string;
  isMobileDrawerOpen: boolean;
};

const initialState: SidebarState = {
  activeTab: "Home",
  isMobileDrawerOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setActiveTab: (state: SidebarState, action: PayloadAction<string>) => {
      state.activeTab = action.payload;
      return;
    },
    toggleMobileDrawer: (
      state: SidebarState,
      action: PayloadAction<boolean>
    ) => {
      state.isMobileDrawerOpen = action.payload;
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveTab, toggleMobileDrawer } = sidebarSlice.actions;

export default sidebarSlice.reducer;
