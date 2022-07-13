import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes, JournalRoutes, ChekingAuth, useCheckAuth } from "../index";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <ChekingAuth />;
  }
  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="auth/login" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
