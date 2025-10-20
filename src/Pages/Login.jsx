import React, { useContext, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provaider/AuthProvaider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 Eye icons added

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // 👈 added state

  const handleLogin = (e) => {
    e.preventDefault();
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

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success(`✅ Welcome back, ${user.email}!`, {
          position: "top-center",
        });
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            toast.error("❌ Invalid email address!", {
              position: "top-center",
            });
            break;
          case "auth/user-not-found":
            toast.warning("⚠️ No user found with this email.", {
              position: "top-center",
            });
            break;
          case "auth/wrong-password":
            toast.error("🔑 Incorrect password!", { position: "top-center" });
            break;
          default:
            toast.error("Something went wrong. Please try again.", {
              position: "top-center",
            });
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl mt-10 py-5 px-4">
        <Marquee>
          <h2 className="font-semibold text-2xl text-center text-green-600">
            Login to Your Account
          </h2>
        </Marquee>

        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                placeholder="Enter your email"
                required
              />

              <label className="label mt-2">Password</label>

              {/* 🔒 Password field with toggle icon */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-full pr-10"
                  placeholder="Enter your password"
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
                {loading ? "Logging in..." : "Login"}
              </button>
            </fieldset>
          </form>

          <p className="font-semibold mt-4 text-center">
            Don’t have an account?{" "}
            <Link
              className="text-green-600 font-semibold hover:underline"
              to={"/auth/register"}
            >
              Register
            </Link>
          </p>
        </div>
      </div>

      {/* Toastify container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
