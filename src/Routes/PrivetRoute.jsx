import React, { use } from "react";
import NewsDetails from "../Pages/NewsDetails";
import { AuthContext } from "../Provaider/AuthProvaider";
import { Navigate, useLocation } from "react-router";
import Loding from "../Pages/Loding";

const PrivetRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  //   console.log(user);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return <Loding></Loding>;
  }

  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/auth/login"}></Navigate>;
};

export default PrivetRoute;
