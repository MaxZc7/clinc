import React from "react";
import about from "../assets/about.jpg";

function About() {
  return (
    <div className="w-full md:h-[80vh] ">
      <div className="flex justify-center ">
        <h1 className="text-3xl font-bold mb-5 border-b border-black">
          Sobre nosotros
        </h1>
      </div>
      <div className="flex items-center gap-3 justify-center mt-4">
        <h1 className="text-xl font-light text-gray-600 text-center max-w-[1000px] md:px-0 px-5">
          Somos una clínica comprometida con el cuidado de la salud de la
          comunidad, con un enfoque centrado en la persona y la excelencia en el
          servicio. Nos destacamos por nuestra constante innovación y mejora
          continua para estar a la vanguardia de los avances médicos y
          tecnológicos. Además, trabajamos de manera sostenible y responsable
          con el medio ambiente. Nuestra misión es proporcionar atención médica
          de calidad y calidez que cumpla con las expectativas y necesidades de
          nuestros pacientes y sus familias, en un marco de sustentabilidad y
          responsabilidad social.
        </h1>
      </div>
      <div className="flex justify-center mt-10">
        <img src={about} className="rounded-full" />
      </div>
    </div>
  );
}

export default About;
