import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: true,
    messageSaved: "",
    notes: [],
    active: null,
    // active: {
    //   id: "ABC123",
    //   title: "",
    //   body: "",
    //   date: 12312312,
    //   imageUrls: [], //https://foto1.jpg, https://foto2.jpg....
    // },
  },
  reducers: {
    addNewEmptyNote: (state, { payload }) => {},
    setActiveNote: (state, { payload }) => {},
    setNotes: (state, { payload }) => {},
    setSaving: (state) => {},
    updateNote: (state, { payload }) => {},
    deleteNoteById: (state, { payload }) => {},
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
} = journalSlice.actions;
