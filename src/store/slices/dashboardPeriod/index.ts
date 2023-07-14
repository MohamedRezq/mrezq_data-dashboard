import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface DashboardPeriodState {
  currentPeriod: number;
}

const initialState: DashboardPeriodState = {
  currentPeriod: 0,
};

export const dashboardPeriodSlice = createSlice({
  name: "dashboardPeriod",
  initialState,
  reducers: {
    setDashboardPeriod: (
      state: DashboardPeriodState,
      action: PayloadAction<number>
    ) => {
      state.currentPeriod = action.payload;
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDashboardPeriod } = dashboardPeriodSlice.actions;

export default dashboardPeriodSlice.reducer;
