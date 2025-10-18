import React from "react";
import { Navigate } from "react-router";
const jasonnewsPromiss = fetch("/news.json").then((res) => res.json());
const Home = () => {
  console.log(jasonnewsPromiss);
  return (
    <div>
      <Navigate to={"/category/1"}></Navigate>
    </div>
  );
};

export default Home;
