import React from "react";
import mapa from "../assets/mapa.png";

function Centros() {
  return (
    <div
      className="w-full md:h-[75vh] h-screen bg-gray-100 flex md:flex-row flex-col justify-center items-center md:gap-12 shadow-xl"
      id="Centros"
    >
      <a
        href="https://www.google.com/maps/place/Sanatorio+Otamendi+y+Miroli/@-34.5983179,-58.4025195,17z/data=!4m6!3m5!1s0x95bcca93e4b07acf:0x58feb65c4cecbd64!8m2!3d-34.598415!4d-58.400878!16s%2Fg%2F11clfskfqb"
        target="_blank"
      >
        <img src={mapa} className="border border-gray-300 rounded-lg mb-[10%] md:mb-0 " />
      </a>
      <div >
        <h1 className="text-3xl font-bold">Centros médicos</h1>

        <div className="flex justify-center items-center mt-6">
          <div className="text-center ">
            <p className="font-bold text-lg">Clínica del bosque:</p>
            <b className="text-sm">Azcuénaga 870, C1115AAB CABA</b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Centros;
