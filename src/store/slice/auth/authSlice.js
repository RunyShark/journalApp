import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //checking, authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload: { displayName, email, photoURL, uid } }) => {
      state.status = "authenticated";
      state.displayName = displayName;
      state.email = email;
      state.photoURL = photoURL || null;
      state.uid = uid;
      state.errorMessage = null;
    },
    logout: (state, { payload: { message } }) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = message;
    },
    chekingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, chekingCredentials } = authSlice.actions;
