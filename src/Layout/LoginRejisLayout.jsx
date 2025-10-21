import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import "./loginRegister.css";
const LoginRejisLayout = () => {
  return (
    <div className="bg-base-200   bg-img min-h-screen">
      <header className="w-10/12 mx-auto px-4 py-4 ">
        <Navbar></Navbar>
      </header>
      <main className="w-10/12  mx-auto py-4">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default LoginRejisLayout;
