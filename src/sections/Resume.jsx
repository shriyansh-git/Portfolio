// src/sections/Resume.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="resume" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <h2
        className="text-3xl font-bold mb-6"
        data-aos="fade-up"
      >
        My Resume
      </h2>
      <p
        className="text-gray-400 mb-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Download or view my professional resume to see my skills, experience, and projects.
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full font-semibold transition"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        Download Resume
      </a>
    </section>
  );
}
