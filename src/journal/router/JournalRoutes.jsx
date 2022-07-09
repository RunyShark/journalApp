import { Route, Routes } from "react-router-dom";
import { JournalPage } from "../../index";

export const JournalRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<JournalPage />} />
    </Routes>
  );
};
