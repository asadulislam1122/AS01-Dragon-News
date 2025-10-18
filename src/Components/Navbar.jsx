import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-4 p-2">
      <div></div>
      <div className="flex md:gap-5 gap-2 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex gap-2">
        <img className="ml-2" src={user} alt="" />
        <button className="btn btn-primary p-2 md:p-6 py-6 md:px-10 px-6">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
