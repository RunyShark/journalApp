import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated", //checking, authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (
      state,
      { payload: { displayName, email, photoURL, uid, message } }
    ) => {
      state.displayName = displayName || null;
      state.email = email || null;
      state.photoURL = photoURL || null;
      state.uid = uid || null;
      state.errorMessage = message || null;
    },
    logout: (state, payload) => {},
    chekingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials } = authSlice.actions;
