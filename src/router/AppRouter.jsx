import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AuthRoutes, JournalRoutes, ChekingAuth } from "../index";

export const AppRouter = () => {
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
