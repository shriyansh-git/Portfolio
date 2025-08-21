import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const contacts = [
    {
      icon: <FaGithub />,
      text: "GitHub",
      href: "https://github.com/shriyansh-git",
      target: "_blank",
    },
    {
      icon: <FaLinkedin />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/shriyansh-pandey-226a7b318/",
      target: "_blank",
    },
    {
      icon: <FaEnvelope />,
      text: "Email",
      href: "mailto:pandeyshriyansh43@gmail.com",
      target: "_self",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">
        Contact Me
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-start">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.href}
            target={contact.target}
            rel={contact.target === "_blank" ? "noopener noreferrer" : ""}
            className="flex items-center gap-3 bg-gray-800 p-4 rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={idx * 200}
          >
            {contact.icon} {contact.text}
          </a>
        ))}
      </div>
    </section>
  );
}
