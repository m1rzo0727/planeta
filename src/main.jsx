import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";

import "./index.css";
import Earth from "./Pages/Earth.jsx";
import Home from "./Pages/Home.jsx";
import Jupiter from "./Pages/Jupiter.jsx";
import Mars from "./Pages/Mars.jsx";
import Mercury from "./Pages/Mercury.jsx";
import Neptune from "./Pages/Neptune.jsx";
import Saturn from "./Pages/Saturn.jsx";
import Uranus from "./Pages/Uranus.jsx";
import Venus from "./Pages/Venus.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      ,
      {
        path: "/mercury",
        element: <Mercury></Mercury>,
      },
      {
        path: "/venus",
        element: <Venus></Venus>,
      },
      {
        path: "/earth",
        element: <Earth></Earth>,
      },
      ,
      {
        path: "/mars",
        element: <Mars></Mars>,
      },
      {
        path: "/jupiter",
        element: <Jupiter></Jupiter>,
      },
      {
        path: "/saturn",
        element: <Saturn></Saturn>,
      },
      {
        path: "/uranus",
        element: <Uranus></Uranus>,
      },
      {
        path: "/neptune",
        element: <Neptune></Neptune>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
