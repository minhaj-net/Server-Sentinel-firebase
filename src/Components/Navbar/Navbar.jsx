import React from "react";
import { Link, NavLink } from "react-router";
import MyLink from "../../MyLink/MyLink";

const Navbar = () => {
  const links = (
    <>
      <li>
        <MyLink to="/">Home</MyLink>
      </li>
      <li>
        <MyLink to="/about">About</MyLink>
      </li>
      <li>
        <MyLink to="/profile">Profile</MyLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-gradient-to-r from-blue-900 to-purple-900 transition-all duration-1100 ease-in-out hover:scale-101 hover:from-purple-300 hover:via-purple-500 hover:to-purple-300 shadow-lg p-4 rounded-b-2x">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          ></div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img
            className="w-10 h-10 rounded-lg"
            src="https://i.ibb.co.com/nsdfYz8Z/66875fddfd1314dfabaf20d56a401977.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to="/signIn"
          className="btn relative px-6 py-3 text-white font-semibold rounded-xl
          bg-gradient-to-r from-purple-600 to-blue-500 transition-all
          duration-500 hover:scale-105
          hover:shadow-[0_0_25px_rgba(139,92,246,0.7)]"
        >
          {" "}
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
