import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import type { RootState } from "../../app/store"
import moriah_ss from "./media/moriah-ss.png"
import forms_ss from "./media/forms-ss.png"

enum LoadingStatus {
  loading,
  failed,
  success,
}

export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  code: string
  screenshots: string[]
  videoId: string
  githubIssueId: number
  githubPRId: number
  bullets: string[]
}

export type WorkState = {
  works: Project[]
  status: LoadingStatus
}

const initialState: WorkState = {
  works: [
    // {
    //   id: 1,
    //   title: "Meal Planner",
    //   description:
    //     "The Meal Planner App is designed to simplify the process of planning meals by integrating a user-friendly calendar with powerful meal management features. This app helps users organize their weekly meals efficiently, track nutritional intake, and maintain dietary goals through an intuitive interface.",
    //   image: "https://via.placeholder.com/150",
    //   tags: [
    //     "JavaScript",
    //     "TypeScript",
    //     "React",
    //     "Redux",
    //     "HTML",
    //     "CSS",
    //     "NestJS",
    //     "TypeORM",
    //     "PostgreSQL",
    //   ],
    //   link: "https://meal-planner.com",
    //   code: "https://github.com/Nukambe/mealnav",
    //   screenshots: [
    //     "https://via.placeholder.com/150",
    //     "https://via.placeholder.com/150",
    //     "https://via.placeholder.com/150",
    //     "https://via.placeholder.com/150",
    //     "https://via.placeholder.com/150",
    //     "https://via.placeholder.com/150",
    //     "https://via.placeholder.com/150",
    //     "https://via.placeholder.com/150",
    //   ],
    //   videoId: "Agmv2y4r-Z8",
    //   githubIssueId: 1,
    //   githubPRId: 2,
    //   bullets: [
    //     "Utilized NestJS for the backend framework to leverage its robust, scalable architecture and integrated support for TypeScript",
    //     "Chose TypeORM for its powerful object-relational mapping capabilities, coupled with PostgreSQL for reliable, scalable database storage of user data and meal information",
    //     "Integrated JWT for secure authentication processes, ensuring that user sessions and data access are protected",
    //     "Created a dynamic and responsive user interface using React, enabling real-time updates and interactive meal planning experiences",
    //     "Employed Tailwind CSS for custom, utility-first styling that adapts to different devices and enhances the user interface",
    //     "Leveraged TypeScript across the full stack for stronger type safety, better developer productivity, and maintainability",
    //     "Implemented Redux for efficient state management, ensuring that UI components receive consistent, predictable state updates",
    //   ],
    // },
    {
      id: 2,
      title: "Forms App",
      description:
        "The Hospital Forms Management App is an in-house developed web application tailored for a healthcare setting. It enables hospital staff to create, distribute, and analyze custom forms similar to those offered by Microsoft Forms. This tool was designed to streamline the collection and management of hospital data, ranging from patient feedback to internal audits and staff assessments.",
      image: forms_ss,
      tags: [
        "Express",
        "JWT",
        "PostgreSQL",
        "Sequelize",
        "React",
        "Tailwind CSS",
        "Chart.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Node.js",
        "Redux",
      ],
      link: "https://marci-forms-565726e4ad6e.herokuapp.com/",
      code: "https://github.com/Nukambe/marci-forms",
      screenshots: ["https://via.placeholder.com/150"],
      videoId: "ToRua-o2bJQ",
      githubIssueId: 3,
      githubPRId: 4,
      bullets: [
        "Implemented an Express backend to handle API requests efficiently, ensuring robust data management and server-side logic",
        "Utilized Sequelize with a PostgreSQL database for robust data storage and retrieval, enabling complex queries and scalable data management tailored to healthcare needs",
        "Integrated JWT authentication to secure endpoints and ensure that only authorized users can access specific functionalities, enhancing security for sensitive medical data",
        "Developed the frontend using React, providing a dynamic and responsive user interface that allows seamless interaction with the forms and real-time data updates",
        "Styled the application with Tailwind CSS for a custom, responsive design, ensuring that the app is accessible and visually appealing on various devices",
        "Designed a dynamic form builder allowing administrators to create custom forms with various input types such as radio buttons, text fields, and date pickers, directly from the user interface",
        "Implemented data visualization tools to convert form responses into convenient charts and graphs, aiding in quick data analysis and decision-making processes",
        "Crafted a user-friendly experience for both form creation and completion, supported by React's efficient update and rendering capabilities",
      ],
    },
    {
      id: 3,
      title: "Moriah Young",
      description: `The Moriah Young website is a custom-developed portfolio designed to showcase the diverse talents of actress Moriah Young. The site features multimedia integration, including on-camera and voice acting reels, allowing directors and casting agents to explore her work comprehensively.
        The development of moriahyoung.com involved extensive collaboration with the client, Moriah Young, to ensure the website accurately represents her artistic persona and meets her specific needs. The project entailed numerous iterations and feedback cycles, demonstrating a flexible and client-focused approach. This constant communication was key to refining the site’s features and functionalities, ensuring each element from the layout to the multimedia integrations was perfectly aligned with the client’s expectations.`,
      image: moriah_ss,
      tags: [
        "React",
        "EmailJS",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "JavaScript",
        "Framer Motion",
      ],
      link: "https://moriahyoung.com/",
      code: "https://github.com/Nukambe/moriahyoung-react-app",
      screenshots: ["https://via.placeholder.com/150"],
      videoId: "t9zgZf8w6d4",
      githubIssueId: 5,
      githubPRId: 6,
      bullets: [
        "Developed a custom React application to provide a dynamic and interactive user experience, showcasing Moriah Young’s acting portfolio",
        "Utilized Tailwind CSS for responsive design, ensuring the website is visually appealing and functional across all devices and screen sizes",
        "Integrated Framer Motion to implement engaging animations, enhancing the visual dynamics of the site and focusing attention on key showcases",
        "Conducted extensive client collaboration, involving regular communication and iterative feedback to align the website's design and features with the client's vision and requirements",
        "Designed a multimedia display interface within the React framework to efficiently manage and present on-camera and voice acting reels",
        "Ensured optimal user engagement by implementing interactive elements and smooth transitions that highlight the client’s professional work",
        "Integrated EmailJS for seamless communication, allowing visitors to contact Moriah Young directly through the website",
      ],
    },
  ],
  status: LoadingStatus.loading,
}

export const workSlice = createAppSlice({
  name: "works",
  initialState,
  reducers: create => ({
    setWorks: create.reducer((state, action: PayloadAction<Project[]>) => {
      state.works = action.payload
    }),
  }),
})

export const { setWorks } = workSlice.actions

export const selectWorks = (state: RootState) => state.works.works

export default workSlice.reducer
