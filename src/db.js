class Project {
  constructor(
    id,
    name,
    link,
    code,
    image,
    description,
    technologies,
    credentials
  ) {
    this.id = id;
    this.name = name;
    this.link = link;
    this.code = code;
    this.image = image;
    this.description = description;
    this.technologies = technologies;
    this.credentials = credentials;
  }
}

const athlete = new Project(
  0,
  "Athlete Profile Site",
  "https://wonderful-alfajores-ac1bd1.netlify.app/",
  "https://github.com/Nukambe/samiyah",
  "/Samiyah/samiyah.webp",
  [
    "Developed a website using Next.js, leveraging server-side rendering for optimal performance.",
    "Designed and implemented a user-friendly dashboard for seamless updates to site data.",
    "Implemented secure authentication for the dashboard using NextAuth.",
    "Established a MongoDB database to efficiently store and manage site data.",
    "Utilized Tailwind CSS to create a responsive layout for an enhanced user experience.",
  ],
  [
    "JavaScript",
    "React",
    "Next.js",
    "Next-Auth",
    "HTML",
    "CSS",
    "Tailwind",
    "MongoDB",
    "Netlify",
  ],
  null
);

const actress = new Project(
  1,
  "Actress Profile Site",
  "https://moriahyoung.com/",
  "https://github.com/Nukambe/moriahyoung-react-app",
  "/MYoung/moriah-young.webp",
  [
    "Developed a responsive React website, ensuring an optimal user experience across various devices.",
    "Implemented a custom audio player to enhance multimedia capabilities on the site.",
    "Designed and integrated a contact form, utilizing EmailJS for streamlined email communication.",
    "Utilized Tailwind CSS for creating a responsive and visually appealing layout.",
  ],
  ["JavaScript", "React", "HTML", "CSS", "Tailwind", "Netlify"],
  null
);

const forms = new Project(
  2,
  "Custom Forms App",
  "https://marci-forms-565726e4ad6e.herokuapp.com/",
  null,
  "/MarciForms/marci-forms.webp",
  [
    "Implemented authorization flow using Express and JWT for secure authentication.",
    "Designed and implemented a database schema using PostgreSQL and Sequelize.",
    "Developed the front end of the application using React.",
    "Utilized Redux store to facilitate communication with the backend and store responses from the server.",
    "Implemented a responsive layout using Tailwind CSS for enhanced user experience.",
    "Incorporated Chart.js to visually represent data received from form responses.",
  ],
  [
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Express",
    "Sequelize",
    "PostgreSQL",
    "Tailwind",
    "Heroku",
  ],
  [
    {
      id: "Email",
      idValue: "user.test@marci-forms.org",
      password: "password",
    },
    {
      id: "Email",
      idValue: "admin@marci-forms.org",
      password: "administrator",
    },
  ]
);

const mealPlanner = new Project(
  3,
  "Meal Planner App",
  null,
  "https://github.com/Nukambe/meal-planner-frontend",
  null,
  [
    "Developed front-end using Angular framework",
    "Utilized RxJS for state management",
    "Integrated 3rd-party API for fetching meal information",
    "Ensured responsiveness by implementing Bootstrap framework",
    "Gathered user feedback and iterated on design for continuous improvement",
  ],
  [
    "JavaScript",
    "TypeScript",
    "Angular",
    "RxJS",
    "HTML",
    "CSS",
    "NestJS",
    "Bootstrap",
  ],
  null
);

export const projects = [athlete, actress, forms, mealPlanner];
