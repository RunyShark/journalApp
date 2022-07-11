import {
  chekingCredentials,
  signinWithGoogle,
  login,
  logout,
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
