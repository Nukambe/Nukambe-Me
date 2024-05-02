import { Link } from "react-router-dom"
import "./WorkCard.css"

export type Project = {
  id: number
  title: string
  description: string
  image: string
}

function ProjectDescription({
  description,
  length,
}: {
  description: string
  length: number
}) {
  function truncate(description: string) {
    if (description.length <= length) {
      return description
    }
    return description.slice(0, length) + "..."
  }

  return <p>{truncate(description)}</p>
}

export default function WorkCard({ project }: { project: any }) {
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
  )
}
