import { useAppSelector } from "../../app/hooks"
import WorkCard from "./WorkCard"
import "./WorkGallery.css"
import { selectWorks } from "./workSlice"

export default function WorkGallery() {
  const works = useAppSelector(selectWorks)

  return (
    <div className="work-container" id="work">
      {works.map(project => (
        <WorkCard key={project.id} project={project} />
      ))}
    </div>
  )
}
