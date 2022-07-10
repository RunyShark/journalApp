import { configureStore } from "@reduxjs/toolkit";
import { journalSlice } from "./";

export const store = configureStore({
  reducer: {
    journal: journalSlice.reducer,
  },
});
