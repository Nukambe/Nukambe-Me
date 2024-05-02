import React from "react"
import { Link, useParams } from "react-router-dom"
import { useAppSelector } from "../app/hooks"
import { selectWorks } from "../features/work/workSlice"
import "./ProjectPage.css"
import { selectTools } from "../features/tools/toolSlice"
import Tool from "../features/tools/Tool"

export default function ProjectPage() {
  const { id } = useParams()
  if (!id) {
    throw new Error("No id provided")
  }
  const project = useAppSelector(selectWorks).find(work => work.id === +id)

  if (!project) {
    throw new Error("Project not found")
  }

  const tools = useAppSelector(selectTools)

  React.useEffect(() => {
    document.title = "Wesley Chappell | " + project.title
    window.scrollTo(0, 0)
  }, [project])

  return (
    <div className="project-details">
      <Link className="back-container" to="/#work">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/57/BackButton.svg"
          alt="Back"
          className="back-button"
        />
        <span>Back</span>
      </Link>
      <div className="project-video">
        <iframe
          title={project.title}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${project.videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="project-header">{project.title}</h1>
      <p className="project-description">{project.description}</p>
      <ul className="project-tags">
        {tools
          .filter(tool => project.tags.includes(tool.title))
          .map(tool => (
            <div key={tool.id}>
              <Tool tool={tool} columns={0} />
            </div>
          ))}
      </ul>
      <div className="project-links">
        <a
          className="project-link"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit App
        </a>
        <a
          className="project-link"
          href={project.code}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Code
        </a>
      </div>
      <ul className="project-bullets">
        {project.bullets.map((bullet, index) => (
          <li key={index}>
            <span>•</span>
            <p>{bullet}</p>
            <span>•</span>
          </li>
        ))}
      </ul>
      {/* <div className="project-gallery">
        {project.screenshots.map((screenshot, index) => (
          <img key={index} src={screenshot} alt={`Screenshot ${index + 1}`} />
        ))}
      </div> */}
      {/* <div className="github-links">
        <a
          href={`https://github.com/user/repo/issues/${project.githubIssueId}`}
        >
          View Issue
        </a>
        <a href={`https://github.com/user/repo/pull/${project.githubPRId}`}>
          View Pull Request
        </a>
      </div> */}
    </div>
  )
}
