import React from "react";
import { FirebaseContext } from "../../context/firebase";
import WorkCard from "./work-card/WorkCard";
import "./Work.css";

export default function Work() {
  const { work } = React.useContext(FirebaseContext);
  console.log(work);
  return (
    <div className="page-container">
      <div id="work-container">
        <h2 id="work-heading">Work</h2>
        <div id="work-gallery">
          {work.map((project, index) => (
            <WorkCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
