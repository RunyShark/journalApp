import { chekingCredentials } from "./";
export const chekigAuthentication = (email, passord) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};
