import React from "react";
import ReactDOM from "react-dom/client";
import { JournalApp } from "./index";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <JournalApp />
    </React.StrictMode>
  </BrowserRouter>
);
