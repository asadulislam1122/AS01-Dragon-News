import React, { useContext, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provaider/AuthProvaider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // ✅ Password validation
    const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    if (!passwordRules.test(password)) {
      toast.error(
        "❌ Password must be at least 6 characters, include uppercase, lowercase & a symbol!",
        { position: "top-center" }
      );
      return;
    }

    setLoading(true);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoUrl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoUrl });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
        toast.success("✅ Account created successfully!", {
          position: "top-center",
        });
        e.target.reset();
      })
      .catch((error) => {
        toast.error(`❌ ${error.message}`, { position: "top-center" });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="relative card w-full max-w-sm shadow-2xl mt-10 py-5 px-4 bg-img bg-cover bg-center overflow-hidden">
        {/* 🔹 Gradient Overlay (form color prominent রাখার জন্য) */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/50 to-gray-200/50 backdrop-blur-[1px]"></div>

        {/* 🔹 Actual content (z-10 for visibility) */}
        <div className="relative z-10">
          <Marquee>
            <h2 className="font-semibold text-2xl text-center text-blue-600">
              Register your Account
            </h2>
          </Marquee>

          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input input-bordered"
                  placeholder="Name"
                  required
                />

                {/* Photo URL */}
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  name="photoUrl"
                  className="input input-bordered"
                  placeholder="Photo URL"
                  required
                />

                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered"
                  placeholder="Email"
                  required
                />

                {/* Password */}
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input input-bordered w-full pr-10"
                    placeholder="Password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <div className="mt-2 text-right">
                  <a className="link link-hover text-sm text-blue-600">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn bg-gradient-to-r from-orange-400 via-blue-500 to-pink-500 mt-4 text-white"
                >
                  {loading ? "Creating..." : "Register"}
                </button>
              </fieldset>
            </form>

            <p className="font-semibold mt-4 text-center">
              Already Have An Account?{" "}
              <Link
                className="text-green-600 font-semibold hover:underline ml-1"
                to={"/auth/login"}
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Toastify container */}
      <ToastContainer />
    </div>
  );
};

export default Register;
