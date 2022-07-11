import { useState, useEffect, useMemo } from "react";

export const useForms = (initialForm = {}, formValidations = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [formValidation, setFormValidation] = useState({});
  console.log(formValidation);
  useEffect(() => {
    createValidators();
  }, [formState]);

  const onInputChague = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  const isFormValid = useMemo(() => {
    for (const formField of Object.keys(formValidation)) {
      if (formValidation[formField] !== null) return false;
    }
    return true;
  }, [formState]);

  const onResetFrom = (event) => {
    setFormState(initialForm);
  };

  const createValidators = () => {
    const formCheckedValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage = "Este campo es requerido"] =
        formValidations[formField];

      console.log();
      formCheckedValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }

    setFormValidation(formCheckedValues);
  };
  return {
    ...formState,
    ...formValidation,
    formState,
    onInputChague,
    onResetFrom,
    isFormValid,
  };
};
