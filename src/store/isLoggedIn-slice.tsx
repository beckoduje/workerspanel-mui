import { createSlice } from "@reduxjs/toolkit";
// okeb@gmail.com ; D123456
const isLoggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState: { isLoggedIn: false },
  reducers: {
    logUserIn(state) {
      state.isLoggedIn = true;
    },
    logUserOut(state) {
      state.isLoggedIn = false;
    },
  },
});

export const isLoggedInActions = isLoggedInSlice.actions;

export default isLoggedInSlice;
