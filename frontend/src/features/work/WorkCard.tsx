import "./WorkCard.css"

export type Project = {
  id: number
  title: string
  description: string
  image: string
}

export default function WorkCard({ project }: { project: any }) {
  return (
    <div key={project.id} className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  )
}
