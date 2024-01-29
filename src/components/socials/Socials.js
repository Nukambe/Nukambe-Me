import React from "react";
import { motion } from "framer-motion";
import "./Socials.css";

const socials = [
  {
    name: "LinkedIn",
    icon: "images/socials/linkedin.svg",
    link: "https://www.linkedin.com/in/weschap/",
  },
  {
    name: "GitHub",
    icon: "images/socials/github.svg",
    link: "https://github.com/Nukambe",
  },
  {
    name: "Email",
    icon: "images/socials/email.svg",
    link: "mailto:chappellwesley@gmail.com",
  },
];

export default function Socials() {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="social-container"
      style={{
        top: scrollY < 500 ? "90vh" : "4vh",
      }}
    >
      <motion.div id="social-content" whileHover={{ scale: 1.1 }}>
        {socials.map((social, index) => (
          <motion.a
            whileHover={{ scale: 1.1 }}
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer"
          >
            <img src={social.icon} alt={social.name} />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
