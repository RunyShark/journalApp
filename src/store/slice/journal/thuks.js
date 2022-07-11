import { collection, doc, setDoc } from "firebase/firestore/lite";
import {
  FirebaseDB,
  addNewEmptyNote,
  setActiveNote,
  savingNewNote,
  loadNotes,
  setNotes,
} from "../../../index";
export const startNewNote = () => {
  return async (distpach, getState) => {
    distpach(savingNewNote());
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      data: new Date().getTime(),
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;
    distpach(addNewEmptyNote(newNote));
    distpach(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (distpach, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("El uid del usuario no esxiste");

    const notes = await loadNotes(uid);

    distpach(setNotes(notes));
  };
};
