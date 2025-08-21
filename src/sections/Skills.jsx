import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";

const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Express", level: 85 },
  { name: "MongoDB", level: 80 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Git", level: 90 },
  { name: "DSA in C", level: 95 },
  { name: "Communication & Management", level: 95 },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">
        Skills
      </h2>
      <div className="space-y-6">
        {skills.map((skill, index) => (
          <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="flex justify-between mb-1">
              <span>{skill.name}</span>
              <span>
                <CountUp end={skill.level} duration={1.5} />%
              </span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
