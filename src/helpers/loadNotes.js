import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../index";

export const loadNotes = async (uid = "") => {
  if (!uid) throw new Error("El uid del usuario no esxiste");
  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);
  const notes = [];

  docs.forEach((doc) => notes.push({ id: doc.id, ...doc.data() }));
  //
  return notes;
};
