import React from "react";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <div className="w-full h-[10vh] " id="Contact">
      <div className="md:grid md:grid-cols-3 md:justify-items-center text-center flex flex-col gap-8 m-5 p-4">
        <div className="md:py-10">
          <h1 className="text-6xl text-green-900 p-2 border-b border-gray-400">
            Clínica del bosque
          </h1>
          <p className="text-3xl font-light ">Prestigio y excelencia</p>
        </div>
        <div className="md:py-10">
          <h3 className="text-4xl p-2 text-green-900">Contacto</h3>
          <p>011 4523-7783</p>
          <div className="hover:text-green-600 m-1 text-green-900">
            <FontAwesomeIcon icon={faWhatsapp} />
            <a
              className="text-lg m-1 "
              href="https://web.whatsapp.com/"
              target="_Blank"
            >
              WhatsApp
            </a>
          </div>
          <p>011 4523-7783</p>
        </div>
        <div className="md:py-10 ">
          <h3 className="text-4xl p-2 text-green-900">Profesionales</h3>
          <p>Fuasto Lombardo</p>
          <p className="py-1">Pascual torres</p>
          <p>Adriana zarata</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
