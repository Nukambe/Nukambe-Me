import React from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [isHovered, setIsHovered] = React.useState(false);
  const [hoveredName, setHoveredName] = React.useState("");

  return (
    <motion.div id="social-container">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ y: "-4em", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-2em", opacity: 0 }}
            id="social-tooltip"
          >
            {hoveredName}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div id="social-content" whileHover={{ scale: 1.1 }}>
        {socials.map((social, index) => (
          <motion.a
            whileHover={{ scale: 1.1 }}
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => {
              setIsHovered(true);
              setHoveredName(social.name);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setHoveredName("");
            }}
          >
            <img src={social.icon} alt={social.name} />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
