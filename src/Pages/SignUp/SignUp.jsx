import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="hero bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 relative overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-xl top-10 left-10 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-400/30 rounded-full blur-xl bottom-10 right-10 animate-pulse"></div>
      </div>
      <div className="hero-content gap-64 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Welcome Back</h1>
          <p className="py-6">
            Sign in to continue your journey. Manage your account, explore new
            features, and more.
          </p>
        </div>
        <div
          className="card  max-w-sm shrink-0 shadow-2xl
        w-full  backdrop-blur-lg bg-white/10 border border-white/20  rounded-2xl p-4
        "
        >
          <div className="card-body">
            <form>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  placeholder="*******"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="btn  w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold border-none hover:scale-105 transition-transform duration-200">
                  Sign up
                </button>
              </fieldset>

              <p className="text-gray-100  mt-6 text-center">
                {" "}
                Dont't have an account ?{" "}
                <Link to="/signIn" className="text-amber-500">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
