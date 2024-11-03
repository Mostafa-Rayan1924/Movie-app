import { NavLink, Link } from "react-router-dom";
import logo1 from "../images/Home/logo1.svg";
import logo2 from "../images/Home/logo2.svg";
import search from "../images/Home/search.svg";
import bell from "../images/Home/bell.svg";
import bars from "../images/Home/bars.svg";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  let [openNav, setOpenNav] = useState(false);
  let headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        headerRef.current.style.background = "black";
        headerRef.current.style.paddingTop = "10px";
      } else {
        headerRef.current.style.background = "transparent";
        headerRef.current.style.paddingTop = "40px";
      }
    });
  }, []);
  return (
    <header
      ref={headerRef}
      className="text-white fixed z-[100] inset-0 w-full h-[80px] transition-all duration-300   pt-[40px]">
      <div className="container relative flex items-center justify-between">
        <Link to={"/"} className="flex gap-1">
          <img alt="logo" src={logo1} />
          <img alt="logo" src={logo2} />
        </Link>
        <nav className=" bg-[#0F0F0F] hidden lg:flex rounded-[10px] border-[3px] p-[15px] border-[#1F1F1F]">
          <ul className="flex items-center">
            <li className="mx-[16px] hover:text-[#E50000] transition-all duration-300">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="mx-[16px] hover:text-[#E50000] transition-all duration-300">
              <NavLink to={"/movies"}>Movies&Shows</NavLink>
            </li>
            <li className="mx-[16px] hover:text-[#E50000] transition-all duration-300">
              <NavLink to={"/support"}>Support</NavLink>
            </li>
            <li className="mx-[16px] hover:text-[#E50000] transition-all duration-300">
              <NavLink to={"/description"}>Subscriptions</NavLink>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:flex items-center cursor-pointer gap-2">
          <img
            alt="search"
            className="hover:scale-[1.2] transition-all duration-200"
            src={search}
          />
          <img
            alt="bell"
            className="hover:scale-[1.2] transition-all duration-200"
            src={bell}
          />
        </div>
        {/* mobile & tablet */}
        <div className="flex lg:hidden">
          <img
            alt="bars"
            onClick={() => {
              setOpenNav((prev) => !prev);
            }}
            className="bars cursor-pointer"
            src={bars}
          />
          <div>
            <nav
              className={` bg-[#0F0F0F] absolute w-[80%] left-[10%]  ${
                openNav ? "opacity-1 scale-[1]" : "opacity-0 scale-0"
              } transition-all duration-700 top-[120%] rounded-[10px] border-[3px] p-[15px] border-[#1F1F1F]`}>
              <ul className="flex flex-col justify-center items-center">
                <li className="my-[16px]">
                  <NavLink
                    className=" hover:text-[#E50000] transition-all duration-300"
                    to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li className="my-[16px]">
                  <NavLink
                    className=" hover:text-[#E50000] transition-all duration-300"
                    to={"/movies"}>
                    Movies&Shows
                  </NavLink>
                </li>
                <li className="my-[16px]">
                  <NavLink
                    className=" hover:text-[#E50000] transition-all duration-300"
                    to={"/support"}>
                    Support
                  </NavLink>
                </li>
                <li className="my-[16px]">
                  <NavLink
                    className=" hover:text-[#E50000] transition-all duration-300"
                    to={"/description"}>
                    Subscriptions
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
