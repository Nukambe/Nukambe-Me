import React from "react";
import "./Title.css";

const titles = [
  "Frontend Developer",
  "Software Engineer",
  "Full Stack Developer",
  "Problem Solver",
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
      <p style={{ fontSize: "0.8em" }}>
        I'm a software engineer based in the United States. I specialize in
        building exceptional websites, applications, and everything in between.
      </p>
    </div>
  );
}
