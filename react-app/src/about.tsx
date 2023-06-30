import React from "react";
import ReactDOM from "react-dom/client";
import AppAbout from "./AppAbout";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppAbout />
  </React.StrictMode>
);
