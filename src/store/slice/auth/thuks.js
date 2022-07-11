import { async } from "@firebase/util";
import {
  chekingCredentials,
  signinWithGoogle,
  login,
  logout,
  registerUserApp,
  loginWithEmailAndPassword,
  logoutFirebase,
} from "../../../index";
export const chekigAuthentication = (email, password) => {
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

export const startLoginWithEmailPassword = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const results = await loginWithEmailAndPassword({ email, password });
    if (!results.ok) return dispatch(logout(results));
    dispatch(login(results));
  };
};

export const logoutFirebasess = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
