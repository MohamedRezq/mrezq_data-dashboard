//-----> Redux <----------------------------------------------//
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
//----------------------------------------------------------------------------------//
//-----> END OF IMPORTS <-------------------------------------//
//----------------------------------------------------------------------------------//

type UserStateProps = {
  info: {
    organizationId: number;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    active: boolean;
    img: string;
    data: {} | null;
    applications: any[];
  };
  token: string;
  isWrongCred?: Boolean;
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
    data:null,
    applications: [],
  },
  token: "",
  isWrongCred: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserStateProps, action: PayloadAction<UserStateProps>) => {
      state.info = action.payload.info;
      state.token = action.payload.token;
    },
    removeUser: (state: UserStateProps) => {
      state.info = initialState.info;
      state.token = "";
    },
    setIsWrongCred: (state: UserStateProps, action: PayloadAction<Boolean>) => {
      state.isWrongCred = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, setIsWrongCred, removeUser } = userSlice.actions;

export default userSlice.reducer;
