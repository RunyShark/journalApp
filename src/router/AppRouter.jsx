import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes, JournalRoutes } from "../index";

export const AppRouter = () => {
  const { status } = useSelector((state) => state.auth);
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRoutes />} />

      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
