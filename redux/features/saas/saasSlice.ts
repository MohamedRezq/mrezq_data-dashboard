import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import saas_list from "../../../public/assets/json/saas.json";
import { SaasCardProps } from "@/types/SaasCardProps.interface";

export interface SaasState {
  searchText: string;
  saasList: SaasCardProps[];
  selectedList: SaasCardProps[];
}

const initialState: SaasState = {
  searchText: "",
  saasList: saas_list,
  selectedList: [],
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
          item?.title?.search(new RegExp(state.searchText, "i")) !== -1 ||
          item?.text?.search(new RegExp(state.searchText, "i")) !== -1
        ) {
          state.saasList.push(item);
        }
      });
      return;
    },
    updateSelectedList: (state, action: PayloadAction<SaasCardProps>) => {
      if (action.payload.active === true) {
        state.selectedList.push(action.payload);
      } else {
        const filteredList = state.selectedList.filter((item) => {
          return item.title !== action.payload.title;
        });
        state.selectedList = filteredList;
      }
      return;
    },
    customizeSaasAccess: (state, action: PayloadAction<SaasCardProps>) => {
      
      return;
    },
  },
});

// Action creators are generated for each case reducer function
export const { searchByText, updateSelectedList } = saasSlice.actions;

export default saasSlice.reducer;
