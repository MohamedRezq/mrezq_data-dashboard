import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import saas_list from "../../../public/assets/json/saas.json";

interface SaasCardProps {
  logo: string;
  title: string;
  text: string;
  active: boolean;
  checked: boolean;
}

export interface SaasState {
  searchText: string;
  saasList: SaasCardProps[];
}

const initialState: SaasState = {
  searchText: "",
  saasList: saas_list,
};

export const saasSlice = createSlice({
  name: "saas",
  initialState,
  reducers: {
    searchByText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
      state.saasList = [];
      if (state.searchText === "") {
        state.saasList = initialState.saasList;
        return;
      }
      initialState.saasList.map((item, i) => {
        if (
          item.title.search(new RegExp(state.searchText, "i")) !== -1 ||
          item.text.search(new RegExp(state.searchText, "i")) !== -1
        ) {
          state.saasList.push(item);
        }
      });
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchByText } = saasSlice.actions;

export default saasSlice.reducer;
