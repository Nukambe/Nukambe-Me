import React from "react";
import { motion } from "framer-motion";
import WorkTag from "./work-tag/WorkTag";
import "./WorkCard.css";

function CardWrapper({ id, children }) {
  return (
    <>
      <motion.div
        className="card-wrapper-desktop work-card"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: (id % 3) * 0.1, duration: 0.5 },
        }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05 }}
      >
        {children}
      </motion.div>
      <motion.div
        whileHover={{ y: -16 }}
        className="card-wrapper-mobile work-card"
      >
        {children}
      </motion.div>
    </>
  );
}

export default function WorkCard({ id, project }) {
  if (!project) return null;

  return (
    <CardWrapper id={id}>
      <img
        src={`images/${project.image}`}
        alt={project.title}
        className="card-image"
      />
      <div className="work-card-content">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 16px",
            color: "#f3e5ab",
          }}
        >
          <h3 className="card-title">{project.title}</h3>
          <span style={{ fontWeight: 600 }}>{project.year}</span>
        </div>
        <ul className="tag-container">
          {project.tags.split(",").map((tag, index) => (
            <li key={index}>
              <WorkTag tag={tag} />
            </li>
          ))}
        </ul>
        <div className="card-btn-container">
          {project.site && (
            <motion.a
              href={project.site}
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.1 }}
              onClick={(e) => e.stopPropagation()}
            >
              View Project
            </motion.a>
          )}
          {project.code && (
            <motion.a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="card-btn"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.1 }}
              onClick={(e) => e.stopPropagation()}
            >
              View Code
            </motion.a>
          )}
        </div>
      </div>
    </CardWrapper>
  );
}
