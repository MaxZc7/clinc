import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handlenav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky top-0 shadow-lg bg-white">
      <div className=" md:flex p-5 h-28 justify-between mx-auto items-center max-w-[1300px]   z-30">
        <img src={logo} className="w-[80%] md:w-[28%] p-2 "></img>

        <ul className="hidden md:flex p-4 ">
          <Link
            to="hero"
            spy={true}
            offset={50}
            smooth={true}
            duration={650}
            className="px-4 text-xl font-semibold hover:text-green-800 cursor-pointer"
          >
            Turnos online
          </Link>
          <p className=" text-lg px-1 md:mr-12">011 4627-8822</p>
          <Link
            to="About"
            spy={true}
            offset={50}
            smooth={true}
            duration={650}
            className="px-4 text-xl font-semibold hover:text-green-800 cursor-pointer"
          >
            Sobre Nosotros
          </Link>

          <Link
            to="Centros"
            spy={true}
            offset={50}
            smooth={true}
            duration={650}
            className="px-4 text-xl font-semibold hover:text-green-800 cursor-pointer"
          >
            Centros médicos
          </Link>
          <Link
            to="Contact"
            spy={true}
            offset={50}
            smooth={true}
            duration={650}
            className="px-4 text-xl font-semibold hover:text-green-800 cursor-pointer"
          >
            Contáctenos
          </Link>
        </ul>

        <div className="md:hidden">
          <div onClick={handlenav}>
            {!nav ? (
              <AiOutlineClose
                size={20}
                className="fixed right-0   top-0 scale-125 mt-[10.5%] mr-[10%]"
              />
            ) : (
              <AiOutlineMenu
                size={20}
                className="fixed right-0 top-0 mt-[10.5%] mr-[10%] scale-125"
              />
            )}
          </div>
          <div
            className={
              !nav
                ? "fixed left-0 top-0 h-full duration-300 ease-out bg-white border-r border-gray-400 z-20"
                : "fixed left-[-100%]"
            }
          >
            <ul className="flex flex-col p-4 mt-10">
              <div className="p-4  border-b border-gray-400 text-gray-800 ">
                <Link
                  to="hero"
                  spy={true}
                  offset={50}
                  smooth={true}
                  duration={650}
                  className=" text-xl px-1 font-bold cursor-pointer  "
                >
                  Turnos online
                </Link>
                <p className=" text-lg px-1">011 4627-8822</p>
              </div>
              <Link
                to="About"
                spy={true}
                offset={50}
                smooth={true}
                duration={650}
                className="text-xl font-semibold p-4 border-b border-gray-400 text-gray-500 cursor-pointer   "
              >
                Sobre Nosotros
              </Link>
              <Link
                to="Centros"
                spy={true}
                offset={50}
                smooth={true}
                duration={650}
                className=" text-xl font-semibold p-4 border-b border-gray-400 text-gray-500 cursor-pointer   "
              >
                Centros médicos
              </Link>
              <Link
                to="Contact"
                spy={true}
                offset={50}
                smooth={true}
                duration={650}
                className=" text-xl font-semibold p-4 border-b border-gray-400 text-gray-500  cursor-pointer  "
              >
                Contáctenos
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
