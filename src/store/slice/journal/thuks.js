import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import {
  FirebaseDB,
  addNewEmptyNote,
  setActiveNote,
  savingNewNote,
  loadNotes,
  setNotes,
  updateNote,
  setSaving,
  fileUpload,
  setPhotosToActiveNote,
  deleteNoteById,
} from "../../../index";
export const startNewNote = () => {
  return async (distpach, getState) => {
    distpach(savingNewNote());
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      imagenUrls: [],
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

export const startSaveNote = () => {
  return async (distpach, getState) => {
    distpach(setSaving());
    const { uid } = getState().auth;
    const { active } = getState().journal;
    console.log(active);
    const noteToFireStroe = { ...active };
    delete noteToFireStroe.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${active.id}`);
    await setDoc(docRef, noteToFireStroe, { merge: true });
    distpach(updateNote(active));
  };
};

export const startUploadingFiles = (files = []) => {
  return async (distpach) => {
    distpach(setSaving());

    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file));
    }
    const photosUrls = await Promise.all(fileUploadPromises);
    distpach(setPhotosToActiveNote(photosUrls));
  };
};

export const startDeletingNote = () => {
  return async (distpach, getState) => {
    const { uid } = getState().auth;
    const { active } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${active.id}`);
    await deleteDoc(docRef);
    distpach(deleteNoteById(active.id));
  };
};
