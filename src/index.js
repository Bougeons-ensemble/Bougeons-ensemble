import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Modal from "react-modal";
import { Toaster } from "react-hot-toast";
Modal.setAppElement("#root");

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Toaster />
    <App />
  </React.StrictMode>
);
