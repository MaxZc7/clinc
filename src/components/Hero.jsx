import React from "react";
import pic1 from "../assets/slide3.jpg";

function Hero() {
  return (
    <div className="w-full h-screen " >
      <div className="mt-10 flex justify-center mx-auto">
        <img src={pic1} className="rounded-3xl "></img>
      </div>
      <div className="flex bg-gray-100 items-center text-center h-[35vh] md:h-[40%] mx-auto mt-[40%] md:mt-16 ">
        <div className=" w-[33%] ">
          <h1 className="md:text-3xl text-lg font-light py-3">Pedir turno</h1>
          <p className=" md:text-lg px-1">+011 4627-8822</p>
        </div>
        <div className=" w-[34%] border-x-2 border-black  ">
          <h1 className="font-light  md:text-3xl py-3 px-3">
            Atención al cliente
          </h1>
          <p className=" md:text-lg px-1">+011 9974-5422</p>
        </div>
        <div className=" w-[33%] ">
          <h1 className="md:text-3xl font-light py-3">Dirección</h1>
          <p id="About" className="md:text-lg px-2">
            Burlando 1116 - CABA
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;