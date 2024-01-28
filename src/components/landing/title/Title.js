import React from "react";
import "./Title.css";

const titles = [
  "Frontend Developer",
  "Problem Solver",
  "Software Engineer",
  "Full Stack Developer",
  "Continuous Learner",
];

export default function Title() {
  const [title, setTitle] = React.useState(0);
  const titleRef = React.useRef(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      titleRef.current.classList.remove("pop");
      titleRef.current.dataset.reflow = titleRef.current.offsetWidth;
      titleRef.current.classList.add("pop");
      setTitle((title) => (title + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [title]);

  return (
    <div>
      <h2 ref={titleRef} id="software-engineer" data-reflow="0">
        {titles[title]}
      </h2>
    </div>
  );
}
