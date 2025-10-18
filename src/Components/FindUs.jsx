import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold text-xl">Find Us On</h2>
      <div className="">
        <div className="join join-vertical w-full mt-4">
          <button className="btn join-item bg-base-100 justify-start">
            <FaFacebook className="text-xl text-secondary"></FaFacebook>{" "}
            Facebook
          </button>
          <button className="btn join-item bg-base-100 justify-start">
            <FaTwitter className="text-xl text-secondary"></FaTwitter> Twitter
          </button>
          <button className="btn join-item bg-base-100 justify-start">
            <FaInstagram className="text-xl text-secondary"></FaInstagram>{" "}
            Instragram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
