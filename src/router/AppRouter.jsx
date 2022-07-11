import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import {
  AuthRoutes,
  JournalRoutes,
  ChekingAuth,
  FirebaseAuth,
  logout,
  login,
} from "../index";

export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout());
      const { displayName, email, photoURL, uid } = user;
      return dispatch(login({ displayName, email, photoURL, uid }));
    });
  }, []);

  const { status } = useSelector((state) => state.auth);
  if (status === "checking") {
    return <ChekingAuth />;
  }
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRoutes />} />

      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
