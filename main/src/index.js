import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage";
import NewCar from "./Components/View/NewCar/NewCar";
import UsedCar from "./Components/View/UsedCar/UsedCar";
import Login from "./componentOfThanh/Login";
import Register from "./componentOfThanh/Register";
import News from "./componentOfThanh/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/homepage",
    element: <Homepage></Homepage>,
    children: [
      // {
      //   path:"article/news",
      //   element: <News></News>,
      // },
    ],
  },
  {
    path: "/homepage/artical/news",
    element: <News></News>,
  },
  {
    path: "/newcars",
    element: <NewCar></NewCar>,
  },
  {
    path: "/usedcars",
    element: <UsedCar></UsedCar>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
