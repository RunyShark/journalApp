import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes, JournalRoutes, ChekingAuth, useCheckAuth } from "../index";

export const AppRouter = () => {
  const status = useCheckAuth();

  if (status === "checking") {
    return <ChekingAuth />;
  }
  return (
    <React.Suspense fallback={<span>Loading......</span>}>
      <Routes>
        {status === "authenticated" ? (
          <Route path="/*" element={<JournalRoutes />} />
        ) : (
          <Route path="/auth/*" element={<AuthRoutes />} />
        )}

        <Route path="/*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </React.Suspense>
  );
};
