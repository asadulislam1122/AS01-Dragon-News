import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-2 gap-2">
      <img src={logo} alt="" />
      <p className="text-[18px] text-gray-600">
        Journalism Without Fear or Favour{" "}
      </p>

      <p className="text-accent">{format(new Date(), "EEEE,MMMM MM, yyyy")}</p>
    </div>
  );
};

export default Header;
