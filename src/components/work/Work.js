import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FirebaseContext } from "../../context/firebase";
import WorkCard from "./work-card/WorkCard";
import WorkModal from "./modal/WorkModal";
import "./Work.css";

export default function Work() {
  const { work } = React.useContext(FirebaseContext);
  const [selectedId, setSelectedId] = React.useState(null);

  React.useEffect(() => {
    // Prevent scrolling when modal is open
    if (selectedId !== null) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  });

  return (
    <div className="page-container">
      <div id="work-container">
        <h2 id="work-heading">Work</h2>
        <ul id="work-gallery">
          {work.map((project, index) => (
            <motion.li
              layoutId={index + 1}
              key={index}
              onClick={() => setSelectedId(index + 1)}
            >
              <WorkCard id={index} project={project} />
            </motion.li>
          ))}
        </ul>
      </div>
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div id="work-modal" layoutId={selectedId}>
            <WorkModal
              project={work[selectedId - 1]}
              closeModal={() => setSelectedId(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
