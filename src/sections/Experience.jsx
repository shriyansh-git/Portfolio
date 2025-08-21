// src/sections/Experience.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  const experiences = [
    {
      title: "Instapic Project",
      role: "Fullstack Developer",
      duration: "Jul 2025 - Aug 2025",
      description:
        "Built a fullstack social media app using React, Express, MongoDB, and session-based authentication. Implemented post creation, user profiles, and follow/unfollow features."
    },
    {
      title: "Food Ordering Project",
      role: "Fullstack Developer",
      duration: "Jun 2025 - Jul 2025",
      description:
        "Developed a food delivery web application with React frontend and Node.js/Express backend. Integrated MongoDB for order storage and implemented a responsive UI with Tailwind CSS."
    },
    {
      title: "Portfolyo (Current)",
      role: "Frontend & Backend Developer",
      duration: "Aug 2025 - Present",
      description:
        "Creating a personal portfolio site using React, Tailwind, and Vite. Showcases projects, skills, and experience with smooth animations and responsive design."
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={idx * 200}
          >
            <h3 className="text-xl font-semibold">{exp.title}</h3>
            <p className="text-gray-400 italic">{exp.role} | {exp.duration}</p>
            <p className="mt-2 text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
