import React from "react";
import { motion } from "framer-motion";
import Tool from "./Tool";
import "./ToolGallery.css";
import tools from "../app/toolSlice";

export default function ToolGallery() {
  const [galleryColumns, setGalleryColumns] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setGalleryColumns(
        window
          .getComputedStyle(document.getElementById("tools-gallery"))
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
        <motion.ul id="tools-gallery">
          {tools.map((tool) => (
            <Tool key={tool.id} tool={tool} columns={galleryColumns} />
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
