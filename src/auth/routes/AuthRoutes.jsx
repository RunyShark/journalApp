import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPages, RegisterPage } from "../../index";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPages />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
