import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/component/Root/Root.jsx';
import ErrorPage from './assets/component/ErrorPage/ErrorPage.jsx';
import Destination from './assets/component/Destination/Destination.jsx';
import Home from './assets/component/Home/Home.jsx';
import Details from './assets/component/Details/Details.jsx';
import Statistics from './assets/component/Statistics/Statistics.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/destination',
        element: <Destination></Destination>,
      },
      {
        path: '/home',
        element: <Home></Home>,
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: () => fetch('../public/data.json'),
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
