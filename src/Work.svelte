<script>
  import Project from "./Project.svelte";
  const projects = [
    {
      id: 0,
      title: "Meal Planner",
      description: "Coming Soon...",
      href: "#",
      tags: [],
    },
    {
      id: 1,
      title: "Marci Forms",
      gif: "/MarciForms/marci-forms.webp",
      demoLogin: [
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
      ],
      description:
        "Built using React, Express, and PostgreSQL, Marci-Forms a form app that offers a seamless experience for creating and managing custom forms, and visualizing submissions. The user-friendly interface ensures effortless form handling, while submission data is displayed with Chart.js. The combination of React, Express, and PostgreSQL guarantees reliability and efficient data management, making the app a comprehensive solution for diverse form-related tasks.",
      href: "https://marci-forms-565726e4ad6e.herokuapp.com/",
      tags: [
        "Javascript",
        "React",
        "HTML",
        "CSS",
        "Express",
        "Sequelize",
        "PostgreSQL",
        "Tailwind",
        "Heroku",
      ],
    },
    {
      id: 2,
      title: "Moriah Young",
      gif: "/MYoung/moriah-young.webp",
      description:
        "Built a profile website for a voice and on screen actress using React. The site serves as a showcase for her talents in the entertainment industry, providing a clean and user-friendly experience. Emphasizing simplicity, the design allows visitors to easily explore the actress's portfolio. The use of React ensures a smooth and responsive interface, putting her professional skills in the spotlight.",

      href: "https://moriahyoung.com",
      tags: ["Javascript", "React", "HTML", "CSS", "Tailwind", "Netlify"],
    },
    {
      id: 3,
      title: "Samiyah Hubbard",
      gif: "/Samiyah/samiyah.webp",
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
