import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Components/HomeLayout/Home";

import Category from "../Components/HomeLayout/Category";
import About from "../Components/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "/category/:id",

        Component: Category,
        loader: () => fetch("../news.json"),
      },

      { path: "/about", Component: About },
    ],
  },
]);
