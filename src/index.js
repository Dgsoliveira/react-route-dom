
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React, { useState } from 'react';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';

/*
  For pages navegation is used React Router.
  Para navegação em paginas está sendo usado React Router.
*/


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

  {
    path: "/empresa",
    element: <Empresa/>
  },
  {
    path: "/contato",
    element: <Contato/>
  },
 
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);