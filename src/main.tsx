import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { makeServer } from "./server";
import "./index.css";
import App from "./components/App.tsx";

makeServer();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
