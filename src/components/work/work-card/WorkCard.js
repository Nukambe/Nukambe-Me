import React from "react";
import WorkTag from "./work-tag/WorkTag";
import "./WorkCard.css";

export default function WorkCard({ project }) {
  if (!project) return null;

  return (
    <div className="work-card">
      <div>
        <img src={project.image} alt={project.title} />
      </div>
      <div className="work-card-content">
        <h3>{project.title}</h3>
        <p>{project.about}</p>
        <div className="tag-container">
          {project.tags.split(",").map((tag, index) => (
            <WorkTag key={index} tag={tag} />
          ))}
        </div>
        <div>
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
          <a href={project.code} target="_blank" rel="noopener noreferrer">
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
