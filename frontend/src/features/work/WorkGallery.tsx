import WorkCard from "./WorkCard"
import "./WorkGallery.css"

export default function WorkGallery() {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      description: "This is a description of Project 1.",
      image: "path_to_image",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is a description of Project 2.",
      image: "path_to_image",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is a description of Project 3.",
      image: "path_to_image",
    },
    // Add more projects as needed
  ]

  return (
    <div className="work-container" id="work">
      {projects.map(project => (
        <WorkCard project={project} />
      ))}
      {projects.map(project => (
        <WorkCard project={project} />
      ))}
      {projects.map(project => (
        <WorkCard project={project} />
      ))}
    </div>
  )
}
