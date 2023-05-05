import { BasicInputProps, UserStateProps } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: UserStateProps = {
  email: "",
  password: "",
  isValidUser: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    validateUser: (state): any => {
      console.log("validating");
      if (state.email === "admin@gmail.com" && state.password === "admin") {
        state.isValidUser = true;
        console.log("true");
      } else {
        state.isValidUser = false;
        console.log("false");
      }
      return;
    },
    setUserInput: (state, action: PayloadAction<BasicInputProps>): any => {
      switch (action.payload.id) {
        case "email":
          state.email = action.payload.value;
          break;
        case "password":
          state.password = action.payload.value;
          break;
        default:
          break;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { validateUser, setUserInput } = userSlice.actions;

export default userSlice.reducer;
