import WorkCard from "./WorkCard";
import "./WorkGallery.css";
import works from "../app/workSlice";

export default function WorkGallery() {
  return (
    <div className="work-container" id="work">
      {works.map((project) => (
        <WorkCard key={project.id} project={project} />
      ))}
    </div>
  );
}
