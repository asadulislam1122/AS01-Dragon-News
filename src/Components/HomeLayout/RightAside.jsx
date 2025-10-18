import React from "react";
import SosialAccount from "./SosialAccount";
import FindUs from "../FindUs";
import Qzone from "../Qzone";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SosialAccount></SosialAccount>
      <FindUs></FindUs>
      <Qzone></Qzone>
    </div>
  );
};

export default RightAside;
