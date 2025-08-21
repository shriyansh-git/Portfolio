import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-teal-400">MyPortfolio</h1>

        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#about" className="hover:text-teal-400 scroll-smooth">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-teal-400 scroll-smooth">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-teal-400 scroll-smooth">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-teal-400 scroll-smooth">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-400 scroll-smooth">
              Contact
            </a>
          </li>
          <li>
            <a href="#resume" className="hover:text-teal-400 scroll-smooth">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
