import React, { useContext, useState } from "react";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import logo from "../assets/chopstick.png";

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex relative justify-between items-center bg-amber-500 bg-opacity-70 text-white px-6 py-4 mx-auto lg:px-20 lg:py-6 md:px-24 md:max-w-full sm:max-w-xl">
      <div className="inline-flex items-center">
        <Link to="/">
          <img className="w-32" src={logo} alt="" />
        </Link>
      </div>
      <div className="hidden lg:flex items-center space-x-4 font-semibold tracking-wide ">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-slate-900" : "hover:text-slate-700"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-slate-900" : "hover:text-slate-700"
          }
          to="/blogs"
        >
          Blogs
        </NavLink>
        {/* <NavLink
          className={({ isActive }) =>
            isActive ? "text-slate-900" : "hover:text-slate-700"
          }
          to="/register"
        >
          Register
        </NavLink> */}
        {user ? (
          <NavLink
            onClick={handleLogOut}
            className={"hover:text-slate-700"}
            to="/"
          >
            Log Out
          </NavLink>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-slate-900" : "hover:text-slate-700"
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
        <div
          className={`${
            user ? "" : "hidden"
          }w-10 h-10 rounded-full bg-white  flex justify-center items-center`}
        >
          {user ? (
            user.photoURL ? (
              <img
                title={user.displayName ? user.displayName : "User"}
                className="object-cover rounded-full w-full h-full"
                src={user.photoURL}
              />
            ) : (
              <FaRegUserCircle
                title={user.displayName ? user.displayName : "User"}
                className="text-amber-500 text-2xl"
              />
            )
          ) : (
            ""
          )}
        </div>
      </div>
      {/* mobile menu */}
      <div className="z-50 lg:hidden">
        <button onClick={() => setIsMenuOpen(true)}>
          <Bars3BottomRightIcon className="h-6 w-6 text-white" />
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-1/2 w-4/5 mt-6 -translate-x-1/2">
            <div className="p-5 bg-amber-500 rounded shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <Link to="/">
                  <img className="w-32" src={logo} alt="" />
                </Link>
                <button onClick={() => setIsMenuOpen(false)}>
                  <XMarkIcon className="h-6 w-6 text-white" />
                </button>
              </div>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <Link
                      to="/"
                      className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-slate-700"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blogs"
                      className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-slate-700"
                    >
                      Blogs
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to="/register"
                      className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-slate-700"
                    >
                      Register
                    </Link>
                  </li> */}
                  <li>
                    {user ? (
                      <NavLink
                        onClick={handleLogOut}
                        className={"hover:text-slate-700"}
                        to="/"
                      >
                        Log Out
                      </NavLink>
                    ) : (
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "text-slate-900" : "hover:text-slate-700"
                        }
                        to="/login"
                      >
                        Login
                      </NavLink>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
