import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { VscSymbolEvent } from "react-icons/vsc";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const links = (
  <>
    <li className="text-lg md:text-xl text-base-100">
      <NavLink to="/">Home</NavLink>
    </li>
    <li className="text-lg md:text-xl text-base-100">
      <NavLink to="/faq">FAQ</NavLink>
    </li>
    <li className="text-lg md:text-xl text-base-100">
      <NavLink to="/profile">Profile</NavLink>
    </li>
  </>
);

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logoutUser().then(() => {
      toast.success("Successfully Logged Out...!")
    }).catch((error) => {
      toast.error("Logout failed...!");
    });
    
  }

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
          <div
            data-aos="zoom-in"
            className="flex items-center transition-transform duration-500 hover:scale-105"
          >
            <VscSymbolEvent size={25} color="#FFFFFF" />

            <a className="text-xs md:text-2xl font-bold text-base-100">
              Event{" "}
              <span className="text-secondary font-semibold">Explorer</span>
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-2 md:gap-5">

          {user && (
            <div className="relative group">
              <img
                className="w-6 md:w-12 h-6 md:h-12 rounded-full"
                src={user.photoURL}
                alt="userImg"
              />
              <div className="absolute  left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                {user.displayName}
              </div>
            </div>
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              data-aos="zoom-in"
              className="text-base-100 bg-secondary text-sm md:text-xl font-medium px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105 cursor-pointer"
            >
              LogOut
            </button>
          ) : (
            <Link
              to="/login"
              data-aos="zoom-in"
              className="text-base-100 bg-secondary text-sm md:text-xl font-medium px-3 md:px-8 py-1 md:py-2 rounded transition-transform duration-500 hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
