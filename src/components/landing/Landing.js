import { motion } from "framer-motion";
import Title from "./title/Title";
import "./Landing.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      delay: 1,
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

const fromTop = {
  hidden: {
    opacity: 0,
    y: -24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      mass: 0.2,
      damping: 8,
      type: "spring",
    },
  },
};

const fromBottom = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      mass: 0.1,
      damping: 10,
      type: "spring",
    },
  },
};

const enterSite = () => {
  const work = document.getElementsByClassName("page-container")[1];
  window.scrollTo({ top: work.offsetTop, behavior: "smooth" });
};

export default function Landing() {
  return (
    <div className="page-container">
      <motion.div
        id="landing-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          id="avatar"
          src="images/Avatar-Bridge.jpg"
          alt="profile"
          variants={fromTop}
        />
        <motion.h1 id="wesley-chappell" variants={fromTop}>
          Wesley Chappell
        </motion.h1>
        <motion.div id="software-engineer" variants={fromTop}>
          <Title />
        </motion.div>
        <div style={{ height: "3rem", width: "100%" }}>
          <div id="landing-bar" />
        </div>
        {/* <motion.button
          className="landing-btn"
          id="btn-intro-open"
          variants={fromBottom}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          View Intro Video
        </motion.button> */}
        <motion.button
          className="landing-btn"
          id="btn-enter-site"
          variants={fromBottom}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={enterSite}
        >
          View Work
        </motion.button>
      </motion.div>
    </div>
  );
}
