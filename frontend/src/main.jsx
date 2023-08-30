import React from "react";
import ReactDOM from "react-dom/client";
// import "./assets/css/main.css";
import "./assets/css/starter.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
