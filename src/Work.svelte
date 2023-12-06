<script>
  import Project from "./Project.svelte";
  const projects = [
    {
      id: 0,
      title: "Oneflix",
      description: "description...",
      href: "/",
      tags: [""],
    },
    {
      id: 1,
      title: "Forms",
      description: "description...",
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
      description: "description...",
      href: "https://moriahyoung.com",
      tags: ["Javascript", "React", "HTML", "CSS", "Netlify"],
    },
    {
      id: 3,
      title: "Samiyah Hubbard",
      description:
        "Profile site for a high-school volleyball player. Developed using Next.js with a MongoDB database. Uses Next-Auth to secure the dashboard.",
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
