import React from "react";

import menuIcon from "../assets/menu-outline.svg";
import closeIcon from "../assets/close-outline.svg";
import Logoname from "./Logoname";
import { HashLink } from "react-router-hash-link";
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  function toggleIcon(e) {
    const navlinksEl = document.querySelector(".navlinks");
    if (e.target.alt === "menu") {
      e.target.src = closeIcon;
      e.target.alt = "close";
      navlinksEl.classList.toggle("top-[10%]");
    } else {
      e.target.src = menuIcon;
      e.target.alt = "menu";
      navlinksEl.classList.toggle("top-[10%]");
    }
  }
  return (
    <>
      <div
        id="navbar"
        className=" py-4  flex justify-between px-4 items-center bg-white  top-[0%] z-10 border-b-2"
      >
        <HashLink smooth to="/">
          {" "}
          <Logoname />{" "}
        </HashLink>

        <div className="navlinks md:static absolute md:min-h-fit min-h-[50vh]  left-0 top-[-100%] md:w-auto w-full bg-white flex items-center px-5 transition-all duration-200 ease-in ">
          <ul className=" flex md:flex-row flex-col md:items-center font-sans font-semibold md:gap-[4vw] gap-8  ">
            <li className="hover:text-[#673AB7]  cursor-pointer ">
              <HashLink smooth to="/#discover">
                Discover
              </HashLink>
            </li>
            <li className="hover:text-[#673AB7]  cursor-pointer">
              <HashLink smooth to="/#feature">
                Feature
              </HashLink>
            </li>
            <li className="hover:text-[#673AB7]   cursor-pointer">
              <HashLink smooth to="/#stories">
                Stories
              </HashLink>
            </li>
            <li className="hover:text-[#673AB7]  cursor-pointer">
              <HashLink smooth to="/#community">
                Community
              </HashLink>
            </li>
            <li className="hover:text-[#673AB7]   cursor-pointer">
              <HashLink smooth to="/#blog">
                Blogs
              </HashLink>
            </li>
          </ul>
        </div>

        <ul className="flex justify-around items-center font-sans font-semibold gap-[1vw]  ">
          <li className="border md:px-6 px-3 md:py-2.5 py-1.5 rounded-full bg-[#673AB7] text-white cursor-pointer">
            <Link to="/login">Login</Link>
          </li>
          <li className="border  md:px-6 px-3 md:py-2.5 py-1.5  rounded-full bg-[#673AB7] text-white cursor-pointer">
            <Link to="/register">Register</Link>
          </li>
          <img
            src={menuIcon}
            alt="menu"
            width="20px"
            className="md:hidden"
            onClick={toggleIcon}
          ></img>
          {/* <img src={closeIcon} alt='menu' width="20px"  className='md:hidden' onClick={toggleIcon}></img> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
