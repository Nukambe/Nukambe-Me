import { Link } from "react-router-dom";
import "./WorkCard.css";

function ProjectDescription({ description, length }) {
  function truncate(description) {
    if (description.length <= length) {
      return description;
    }
    return description.slice(0, length) + "...";
  }

  return <p>{truncate(description)}</p>;
}

export default function WorkCard({ project }) {
  return (
    <Link to={`/work/${project.id}`} className="project-card">
      <div className="project-card">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
          style={{ width: 300, objectFit: "cover" }}
        />
        <div className="project-info">
          <h3>{project.title}</h3>
          <ProjectDescription description={project.description} length={240} />
        </div>
      </div>
    </Link>
  );
}
