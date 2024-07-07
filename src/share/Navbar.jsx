import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoMdShare } from "react-icons/io";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navitem = (
    <>
      <li className="my-2">
        <NavLink to="/">The WPPOOL Index</NavLink>
      </li>
      <li className="my-2">
        <NavLink to="/">All Companies</NavLink>
      </li>
      <li className="my-2">
        <NavLink to="/">Potential Future Listings</NavLink>
      </li>
      <li className="my-2">
        <NavLink to="/">State of USA</NavLink>
      </li>
      <li className="my-2">
        <NavLink to="/">Stories & Ideas</NavLink>
      </li>
      <li className="my-2">
        <NavLink to="/">About WPPOOL</NavLink>
      </li>
      <li className="my-2">
        <NavLink to="/">WPPOOL Portfolio Companies</NavLink>
      </li>
      <li className="my-2">
        <NavLink to="/">Visit WPPOOL</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#2042B6] text-white fixed w-full z-10 px-4">
      <div className="navbar container mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <Link className="btn btn-ghost">
            <img className="lg:max-w-full md:max-w-full max-w-24" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar-end hidden md:flex justify-end items-center">
          <button className="border-2 p-2 border-r-slate-50 rounded-full bg-transparent hover:bg-transparent text-white mr-4">
            <IoMdShare size={27} />
          </button>
          <button className="btn border-2 border-r-slate-50 rounded-full bg-transparent hover:bg-transparent px-4 text-white mr-4 w-fit lg:text-md text-xs">
            Download the 2024 Report
          </button>
        </div>

        <div className=" flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <RxCross2 size={27} /> : <FaBars size={27} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="bg-white text-black rounded-lg z-10 mt-3 w-80 p-4 shadow-lg absolute -top-4 right-4">
          <div className="flex justify-between items-center mb-4">
            <button className="border-2 p-2 border-r-slate-50 rounded-full bg-green-200 hover:bg-green-300 text-white">
              <IoMdShare size={27} className="text-green-700" />
            </button>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-black"
            >
              <RxCross2 size={27} />
            </button>
          </div>
          <button className="btn bg-blue-500 text-white mb-4 w-full rounded-full">
            Download the 2024 Report
          </button>
          <ul className="menu flex flex-col items-start">
            {navitem}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
