import { chekingCredentials, signinWithGoogle, login } from "../../../index";
export const chekigAuthentication = (email, passord) => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(chekingCredentials());
    const results = await signinWithGoogle();
    if (results.ok) dispatch(login(results));
    return dispatch(login(results.message));
  };
};
