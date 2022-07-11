import { async } from "@firebase/util";
import {
  chekingCredentials,
  signinWithGoogle,
  login,
  logout,
  registerUserApp,
} from "../../../index";
export const chekigAuthentication = (email, passord) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const results = await signinWithGoogle();
    if (!results.ok) return dispatch(logout(results));
    dispatch(login(results));
  };
};

export const startCreatingUserWhithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const results = await registerUserApp({
      email,
      password,
      displayName,
    });
    if (!results.ok) return dispatch(logout(results));
    dispatch(login(results));
  };
};
