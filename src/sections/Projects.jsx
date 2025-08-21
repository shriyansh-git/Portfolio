import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Instapic",
    description: "A fullstack social media app built with React, Node, Express, and MongoDB.",
    image: "/instapic.png",
    github: "https://github.com/shriyansh-git/instapic",
    live: "#",
  },
  {
    title: "Food Ordering App",
    description: "A food delivery web app with a clean UI and interactive menu.",
    image: "/food.png",
    github: "https://github.com/shriyansh-git/food-ordering",
    live: "#",
  },
  {
    title: "Portfolyo",
    description: "My personal portfolio showcasing projects and skills, built with React & Tailwind.",
    image: "/portfolio.png",
    github: "https://github.com/shriyansh-git/myfolyo",
    live: "#",
  },
];

export default function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-500 hover:underline"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
