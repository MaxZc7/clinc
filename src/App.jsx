import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Centros from "./components/Centros";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <section id="Hero"></section>
      <Navbar />
      <Hero />
      <About />
      <Centros />
      <Contact />
    </>
  );
}

export default App;
