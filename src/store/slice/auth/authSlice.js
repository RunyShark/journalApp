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
    login: (state, { payload }) => {
      const { displayName, email, photoURL, uid } = payload;
      state.status = "authenticated";
      state.displayName = displayName;
      state.email = email;
      state.photoURL = photoURL || null;
      state.uid = uid;
      state.errorMessage = null;
    },
    logout: (state, payload) => {
      const { message } = payload;
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = message || null;
    },
    chekingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, chekingCredentials } = authSlice.actions;
