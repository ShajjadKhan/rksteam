import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import "./App.css";
import  './responsive.css';
import { RouterProvider } from "react-router-dom";
import routers from "./routes/Routes";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={routers}></RouterProvider>
    </HelmetProvider>
  </React.StrictMode>
);
