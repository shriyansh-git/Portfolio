import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-6 max-w-5xl mx-auto"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold mb-6" data-aos="fade-up" data-aos-delay="100">
        About Me
      </h2>
      <p className="text-gray-400 leading-relaxed" data-aos="fade-up" data-aos-delay="200">
        I’m a web developer focusing on React, Tailwind, and fullstack development.
        I enjoy building clean, functional, and scalable apps.
      </p>
    </section>
  );
}
