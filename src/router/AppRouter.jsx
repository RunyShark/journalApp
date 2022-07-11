import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes, JournalRoutes, ChekingAuth, FirebaseAuth } from "../index";

export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      console.log(user);
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
