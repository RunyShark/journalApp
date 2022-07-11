export const startNewNote = () => {
  return async (distpach, getState) => {
    const { uid } = getState().auth;
    console.log(uid);
    const newNote = {
      title: "",
      body: "",
      data: new Date().getTime(),
    };
  };
};
