import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import { auth } from "../../Firebase/firebase.init";
import { toast } from "react-toastify";

const SignIn = () => {
  const googleProvider = new GoogleAuthProvider();
  const handleSinIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        toast.success("Sign in Succesfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGooglesignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        toast.success("Sign in Succesfull");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="hero bg-gradient-to-br  from-blue-500 via-indigo-600 to-purple-600 relative overflow-hidden min-h-screen">
      <title>Firebase-Sign in</title>
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
            <form onSubmit={handleSinIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="*******"
                  className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn  w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold border-none hover:scale-105 transition-transform duration-200">
                  Login
                </button>
                {/* Devider */}
                <div className="flex items-center justify-center gap-2 my-2">
                  <div className="h-px w-16 bg-white/30"></div>
                  <span className="text-sm text-white/70">or</span>
                  <div className="h-px w-16 bg-white/30"></div>
                </div>
                {/* Google sign in button */}
              </fieldset>
              <button
                onClick={handleGooglesignIn}
                className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <FcGoogle /> Continue With Google
              </button>
              <p className="text-gray-100  mt-6 text-center">
                {" "}
                Dont't have an account ?{" "}
                <Link to="/signUp" className="text-amber-500">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
