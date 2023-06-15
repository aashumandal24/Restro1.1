import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import BookTable from './pages/BookTable';
import Exploremenu from './pages/Exploremenu/Exploremenu';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "booktable",
        element: <BookTable />
    },
    {
      path: "exploremenu",
      element: <Exploremenu />
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <RouterProvider router={router} />
);


