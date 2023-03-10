import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="h-14 shadow-sm  m-2 max-w-7xl  px-5">
      <ul className="h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900">
        <h1 className="flex-1">
          {" "}
          <img
            src="https://new.axilthemes.com/demo/template/blogar/assets/images/logo/logo-black.png"
            alt="electro-House"
            border="0"
            className="h-10 "
          />
        </h1>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <Link to="/history">
          <li title="history" className="bg-red-500 p-2 rounded-full">

            <IoIosListBox className="text-white" />

          </li>
        </Link>

      </ul>
    </nav>
  );
};

export default Navbar;
