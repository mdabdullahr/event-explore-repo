import React from "react";
import { NavLink } from "react-router";
import { VscSymbolEvent } from "react-icons/vsc";

const links = (
  <>
    <li className="text-lg md:text-xl text-base-100">
      <NavLink to="/">Home</NavLink>
    </li>
    <li className="text-lg md:text-xl text-base-100">
      <NavLink to="blogs">Blogs</NavLink>
    </li>
    <li className="text-lg md:text-xl text-base-100">
      <NavLink to="profile">Profile</NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="bg-gray-900">
      <div
        className="navbar w-11/12
     mx-auto py-3"
      >
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                color="white"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-900 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div data-aos="zoom-in" className="flex items-center transition-transform duration-500 hover:scale-105">
            <VscSymbolEvent size={25} color="#FFFFFF" />

            <a className="text-sm md:text-2xl font-bold text-base-100">
              Event{" "}
              <span className="text-secondary font-semibold">Explorer</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            data-aos="zoom-in"
            className="text-base-100 bg-secondary text-sm md:text-xl font-medium px-8 py-2 rounded transition-transform duration-500 hover:scale-105"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
