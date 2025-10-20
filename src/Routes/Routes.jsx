import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Components/HomeLayout/Home";
import Category from "../Components/HomeLayout/Category";
import About from "../Components/About";
import LoginRejisLayout from "../Layout/LoginRejisLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivetRoute from "./PrivetRoute";
import Loding from "../Pages/Loding";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/category/:id",

        Component: Category,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement: <Loding></Loding>,
      },
      { path: "/about", Component: About },
    ],
  },
  {
    path: "details/:id",

    element: (
      <PrivetRoute>
        <NewsDetails></NewsDetails>
      </PrivetRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loding></Loding>,
  },
  // login-----------register
  {
    path: "/auth",
    Component: LoginRejisLayout,
    children: [
      { path: "/auth/login", Component: Login },
      { path: "/auth/register", Component: Register },
    ],
  },
]);
