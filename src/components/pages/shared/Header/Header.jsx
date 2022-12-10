import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../../images/logo.png';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
            <Link to='/'>
              <img className="w-full lg:w-2/3" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex pt-2">
              <li className="px-4">
                <Link to="/">Home</Link>
              </li>
              <li className="px-4">
                <Link to="/about">About</Link>
              </li>
              <li className="px-4">
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li className="px-4">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link className="text-lg text-white font-medium bg-violet-700 py-2 px-6 rounded-md" >Hire Me</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
