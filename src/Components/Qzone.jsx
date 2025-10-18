import React from "react";
import swiming from "../assets/swimming.png";
import classPik from "../assets/class.png";
import play from "../assets/playground.png";
import bgpng from "../assets/bg.png";
const Qzone = () => {
  return (
    <div className="mt-4 mb-2 bg-base-200 p-4">
      <h2 className="font-bold text-xl">Q-Zone</h2>
      <div className="">
        <img src={swiming} alt="" />
      </div>
      <div>
        <img src={classPik} alt="" />
      </div>
      <div>
        <img src={play} alt="" />
        <img className="mt-4" src={bgpng} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
