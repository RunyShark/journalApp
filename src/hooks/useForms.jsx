import { useState } from "react";

export const useForms = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChague = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const onResetFrom = (event) => {
    setFormState(initialForm);
  };
  return {
    ...formState,
    formState,
    onInputChague,
    onResetFrom,
  };
};
