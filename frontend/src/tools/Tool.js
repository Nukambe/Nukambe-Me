import React from "react";
import { motion } from "framer-motion";
import "./Tool.css";

export default function Tool({ tool, columns }) {
  const iconRef = React.useRef(null);
  const [hover, setHover] = React.useState(false);

  return (
    <motion.li
      className="tool"
      initial={{ y: 64, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { delay: (tool.id % columns) * 0.05 },
      }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {hover && (
        <motion.div
          key={tool.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          exit={{ opacity: 0, y: 20 }}
          className="tool-tooltip"
        >
          {tool.title}
        </motion.div>
      )}
      <img ref={iconRef} src={tool.image} alt={tool.title} />
    </motion.li>
  );
}
