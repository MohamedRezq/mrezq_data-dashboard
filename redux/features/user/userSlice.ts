import { RootState } from "@/redux/store";
// import { BasicInputProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type UserStateProps = {
  info: {
    organizationId: number;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    active: boolean;
    img: string;
    applications: any[];
  };
  token: string;
  isWrongCred: Boolean;
  //redirectLink: { goto: string };
};

const initialState: UserStateProps = {
  info: {
    organizationId: 0,
    email: "",
    firstName: "",
    lastName: "",
    role: "",
    active: false,
    img: "",
    applications: [],
  },
  token: "",
  isWrongCred: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: RootState, action: PayloadAction<UserStateProps>) => {
      state.info = action.payload.info;
      state.token = action.payload.token;
    },
    setIsWrongCred: (state: RootState, action: PayloadAction<Boolean>) => {
      state.isWrongCred = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setIsWrongCred } = userSlice.actions;

export default userSlice.reducer;
