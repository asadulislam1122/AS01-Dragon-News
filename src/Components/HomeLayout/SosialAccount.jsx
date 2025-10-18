import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SosialAccount = () => {
  return (
    <div>
      <h2 className="font-bold">Login With </h2>
      <div className="flex flex-col gap-2">
        <button className="btn w-full btn-outline btn-secondary mt-3">
          <FcGoogle className="text-2xl" /> Login With Google
        </button>
        <button className="btn w-full btn-outline btn-primary">
          <FaGithub className="text-2xl" /> Login With Github
        </button>
      </div>
    </div>
  );
};

export default SosialAccount;
