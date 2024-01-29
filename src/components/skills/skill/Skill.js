import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Skill.css";

export default function Skill({ id, skill, columns }) {
  const iconRef = React.useRef(null);
  const [hover, setHover] = React.useState(false);

  React.useEffect(() => {
    iconRef.current.onerror = () => {
      switch (skill) {
        case "TypeScript":
          iconRef.current.src = "images/skills/typescript.webp";
          break;
        case "NestJS":
          iconRef.current.src = "images/skills/nestjs.svg";
          break;
        default:
          iconRef.current.src = "images/skills/placeholder.png";
      }
    };
  }, [iconRef, skill]);

  return (
    <motion.li
      className="skill"
      initial={{ y: 64, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { delay: (id % columns) * 0.05 },
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <AnimatePresence>
        {hover && (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, y: 20 }}
            className="skill-tooltip"
          >
            {skill}
          </motion.div>
        )}
      </AnimatePresence>
      <img
        ref={iconRef}
        src={`images/skills/${skill.toLowerCase()}.png`}
        alt={skill}
      />
    </motion.li>
  );
}
