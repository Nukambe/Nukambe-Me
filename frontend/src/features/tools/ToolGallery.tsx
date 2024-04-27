import React from "react"
import { motion } from "framer-motion"
import Tool from "./Tool"
import "./ToolGallery.css"

const skills = [
  {
    name: "React",
    description:
      "A JavaScript library for building user interfaces, React makes it painless to create interactive UIs.",
    image: "react.png",
  },
  {
    name: "TypeScript",
    description:
      "TypeScript is a superset of JavaScript that adds optional static typing.",
    image: "typescript.png",
  },
  {
    name: "Node.js",
    description:
      "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.",
    image: "nodejs.png",
  },
  {
    name: "Express",
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    image: "express.png",
  },
  {
    name: "MongoDB",
    description:
      "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    image: "mongodb.png",
  },
  {
    name: "GraphQL",
    description:
      "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data.",
    image: "graphql.png",
  },
  {
    name: "Docker",
    description:
      "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.",
    image: "docker.png",
  },
  {
    name: "Kubernetes",
    description:
      "Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management.",
    image: "kubernetes.png",
  },
  {
    name: "AWS",
    description:
      "Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
    image: "aws.png",
  },
]

export default function ToolGallery() {
  const [galleryColumns, setGalleryColumns] = React.useState(0)

  React.useEffect(() => {
    const handleResize = () => {
      setGalleryColumns(
        window
          .getComputedStyle(document.getElementById("tools-gallery")!)
          .getPropertyValue("grid-template-columns")
          .split(" ").length,
      )
    }
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="page-container">
      <div id="skills-container">
        <motion.ul id="tools-gallery">
          {skills.map((skill, index) => (
            <Tool
              key={index}
              id={index}
              tool={skill}
              columns={galleryColumns}
            />
          ))}
        </motion.ul>
      </div>
    </div>
  )
}
