import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provaider/AuthProvaider";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    // alert("log out click");
    logOut()
      .then(() => {
        alert("Your Log out Successfully");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="flex justify-between items-center px-4 py-4 p-2">
      <div> {user && user.email}</div>
      <div className="flex md:gap-5 gap-2 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="flex gap-2">
        <img
          className="ml-2"
          src={`${user ? user.photoURL : userImg}`}
          alt=""
        />

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-primary p-2 md:p-6 py-6 md:px-10 px-6"
          >
            Log Out
          </button>
        ) : (
          <Link to={"/auth/login"}>
            {" "}
            <button className="btn btn-primary p-2 md:p-6 py-6 md:px-10 px-6">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
