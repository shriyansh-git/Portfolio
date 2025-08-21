import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // Initialize AOS once when App mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // only animate once per element
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
