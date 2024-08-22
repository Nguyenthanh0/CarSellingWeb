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
import CarsDetail from "./Components/View/CarsDetail/CarsDetail";
import SearchResult2 from "./Components/View/SeacrhResult2/SearchResult2";
import NewsDetail from "./componentOfThanh/NewsDetail";
import Review from "./Components/View/Review/Review";
import Tesla from "./Components/View/Tesla Model 3/Tesla";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/homepage",
    element: <Homepage></Homepage>,
    children: [],
  },
  {
    path: "/homepage/artical/news",
    element: <News></News>,
  },
  {
    path: "/homepage/artical/news/loremIpsum",
    element: <NewsDetail></NewsDetail>,
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
  {
    path: "/homepage/newcarlist/cardetail",
    element: <CarsDetail></CarsDetail>,
  },
  {
    path: "/newcars/carlist",
    element: <NewCar></NewCar>,
  },
  {
    path: "/newcars/all-carlist",
    element: <SearchResult2></SearchResult2>,
  },
  {
    path: "/homepage/article/review",
    element: <Review></Review>,
  },
  {
    path: "/homepage/article/review/tesla",
    element: <Tesla></Tesla>,
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
