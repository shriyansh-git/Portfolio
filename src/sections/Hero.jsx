import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Typed from "typed.js";
import "./hero.css"; // optional: for typed cursor styling

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: [
        "Backend-Focused Web Developer 🚀",
        "React, Node, Express & Mongo Lover 💻",
        "Building Scalable & Clean Apps ✨",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => typed.destroy();
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6 md:px-20"
    >
      {/* Left side */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold" data-aos="fade-up">
          Hi, I’m <span className="text-blue-400">Shriyansh Pandey</span>
        </h1>

        <p
          className="text-lg md:text-xl text-gray-300 h-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span ref={typedRef}></span>
        </p>

        <div
          className="flex justify-center md:justify-start gap-4 mt-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-400 hover:border-blue-500 hover:text-blue-400 rounded-full font-semibold transition"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center md:justify-start gap-6 text-2xl mt-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <a
            href="https://github.com/shriyansh-git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shriyansh-pandey-226a7b318/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Right side - Profile Image */}
      <div
        className="flex-1 flex justify-center mt-10 md:mt-0"
        data-aos="zoom-in"
        data-aos-delay="800"
      >
        <img
          src="/profile.jpg"
          alt="Shriyansh Pandey"
          className="w-60 h-60 rounded-full border-4 border-blue-500 shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
