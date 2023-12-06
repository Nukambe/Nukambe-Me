<script>
  import Project from "./Project.svelte";
  const projects = [
    {
      id: 0,
      title: "TBD...",
      description: "Coming Soon...",
      href: "#",
      tags: [],
    },
    {
      id: 1,
      title: "Forms",
      description:
        "Developed a form-building application with a React front-end, Express back-end, and PostgreSQL database. The user-friendly interface facilitates seamless form creation and management, while the reliable Express backend and PostgreSQL ensure efficient data handling. This project provides a straightforward and scalable solution for creating and managing forms.",
      href: "/",
      tags: [
        "Javascript",
        "React",
        "HTML",
        "CSS",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "Heroku",
      ],
    },
    {
      id: 2,
      title: "Moriah Young",
      description:
        "Built a profile website for a voice and on screen actress using React. The site serves as a showcase for her talents in the entertainment industry, providing a clean and user-friendly experience. Emphasizing simplicity, the design allows visitors to easily explore the actress's portfolio. The use of React ensures a smooth and responsive interface, putting her professional skills in the spotlight.",

      href: "https://moriahyoung.com",
      tags: ["Javascript", "React", "HTML", "CSS", "Netlify"],
    },
    {
      id: 3,
      title: "Samiyah Hubbard",
      description:
        "Created a profile site for a high-school volleyball player, utilizing Next.js and MongoDB for a responsive and data-driven experience. The project features a secure dashboard powered by Next-Auth. This site blends technical expertise with a focus on delivering a polished and functional platform for showcasing the athlete's accomplishments.",
      href: "https://wonderful-alfajores-ac1bd1.netlify.app/",
      tags: [
        "Javascript",
        "React",
        "Next.js",
        "Next-Auth",
        "HTML",
        "CSS",
        "Tailwind",
        "MongoDB",
        "Netlify",
      ],
    },
  ];
</script>

<ul
  class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100"
>
  {#each projects as project}
    <li>
      <Project {project} />
    </li>
  {/each}
</ul>
