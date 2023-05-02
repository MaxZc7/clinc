import React, { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

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
          <a className=" text-xl px-1 font-bold">Turnos online </a>
          <p className=" text-lg px-1">011 4627-8822</p>

          <a href="#About" className="px-4 text-xl font-semibold">
            Sobre Nosotros
          </a>
          <a href="#Centros" className="px-4 text-xl font-semibold">
            Centros médicos
          </a>
          <a href="#Contact" className="px-4 text-xl font-semibold">
            Contáctenos
          </a>
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
                <a className=" text-xl px-1 font-bold">Turnos online </a>
                <p className=" text-lg px-1">011 4627-8822</p>
              </div>
              <a
                href="#About"
                className="text-xl font-semibold p-4 border-b border-gray-400 text-gray-500  "
              >
                Sobre Nosotros
              </a>
              <a
                href="#Centros"
                className=" text-xl font-semibold p-4 border-b border-gray-400 text-gray-500  "
              >
                Centros médicos
              </a>
              <a
                href="#Contact"
                className=" text-xl font-semibold p-4 border-b border-gray-400 text-gray-500  "
              >
                Contáctenos
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
