import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import logo from "../assets/logo.png"
const Navbar = () => {
  const navitem = (
    <>
      <li>
        <NavLink>The WPPOOL Index</NavLink>
      </li>
      <li>
        <NavLink>The WPPOOL Index</NavLink>
      </li>
      <li>
        <NavLink>The WPPOOL Index</NavLink>
      </li>
      <li>
        <NavLink>The WPPOOL Index</NavLink>
      </li>
      <li>
        <NavLink>The WPPOOL Index</NavLink>
      </li>
    
      
    </>
  );
  return (
    <div className="bg-[#2042B6] text-white">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="navbar-end">
          <a className="btn border-2 border-r-slate-50 rounded-full bg-transparent hover:bg-transparent px-4 text-white">Download the 2024 Report</a>
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="">
           <FaBars size={25}/>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {
                navitem
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
