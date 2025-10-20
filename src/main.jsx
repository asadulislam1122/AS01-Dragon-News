import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { router } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router";
import AuthProvaider from "./Provaider/AuthProvaider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <AuthProvaider>
    <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer />
    </StrictMode>
  </AuthProvaider>
);
