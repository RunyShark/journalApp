import { Route, Routes } from "react-router-dom";
import { AuthRoutes, JournalRoutes } from "../index";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthRoutes />} />

      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
