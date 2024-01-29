import React from "react";
import { motion } from "framer-motion";
import { FirebaseContext } from "../../context/firebase";
import Skill from "./skill/Skill";
import "./Skills.css";

export default function Skills() {
  const { skills } = React.useContext(FirebaseContext);
  const [galleryColumns, setGalleryColumns] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setGalleryColumns(
        window
          .getComputedStyle(document.getElementById("skills-gallery"))
          .getPropertyValue("grid-template-columns")
          .split(" ").length
      );
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="page-container">
      <div id="skills-container">
        <h2 id="skills-heading">Skills</h2>
        <motion.ul id="skills-gallery">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              id={index}
              skill={skill}
              columns={galleryColumns}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
