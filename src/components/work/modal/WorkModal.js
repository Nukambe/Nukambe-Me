import { motion } from "framer-motion";
import Skill from "../../skills/skill/Skill";
import "./WorkModal.css";

export default function WorkModal({ project, closeModal }) {
  if (!project) return null;

  return (
    <motion.div id="modal-card">
      <motion.button
        id="btn-close-modal"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => closeModal()}
      >
        <img src="images/ui/close.svg" alt="Close" />
      </motion.button>
      <img
        id="modal-image"
        src={`images/${project.image}`}
        alt={project.title}
      />
      <div id="modal-content">
        <div id="modal-info">
          <h1 style={{ paddingLeft: "20px" }}>{project.title}</h1>
          <ul>
            {project.about.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div style={{ marginBottom: "1em" }}>
            {project.site && (
              <a
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn"
              >
                View Project
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn"
              >
                View Code
              </a>
            )}
          </div>
        </div>
        <ul id="modal-skills">
          {project.tags.split(",").map((tag, index) => (
            <Skill key={index} id={index} skill={tag} columns={1} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
