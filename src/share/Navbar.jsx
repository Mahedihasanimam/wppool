import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { IoMdShare } from "react-icons/io";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navitem = (
    <>
      <li >
        <Link  >The WPPOOL Index</Link>
      </li>
      <li >
        <Link >All Companies</Link>
      </li>
      <li >
        <Link >Potential Future Listings</Link>
      </li>
      <li >
        <Link >State of USA</Link>
      </li>
      <li >
        <Link >Stories & Ideas</Link>
      </li>
      <li >
        <Link >About WPPOOL</Link>
      </li>
      <li >
        <Link >WPPOOL Portfolio Companies</Link>
      </li>
      <li >
        <Link className="text-blue-400 text-xl" >Visit WPPOOL</Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#2042B6] text-white fixed top-0 w-full z-10 px-4">
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
        <div className="bg-white text-black rounded-lg z-10 mt-3 w-80 p-4 shadow-lg absolute -top-4 right-0">
          <div className="flex  justify-between items-center mb-4">
            <button className="border-2 p-2 border-r-slate-50 rounded-full bg-[#AFCD80] hover:bg-[#AFCD80] text-white">
              <IoMdShare size={27} className="text-white" />
            </button>
          <button className="btn bg-[#2042B6] hover:bg-[#2042B6] text-white  w-fit rounded-full">
            Download the 2024 Report
          </button>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-black"
            >
              <RxCross2 size={27} />
            </button>
          </div>
          <ul className="menu flex flex-col items-start spacey-1 font-semibold">
            {navitem}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
