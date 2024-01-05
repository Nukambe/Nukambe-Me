<script>
  import SkillGroup from "./SkillGroup.svelte";
  const skillgroups = [
    {
      label: "Front End",
      skills: [
        "HTML",
        "JavaScript",
        "TypeScript",
        "React",
        "Angular",
        "Svelte",
        "Next.js",
        "Redux",
        "CSS",
        "Tailwind",
        "Bootstrap",
      ],
    },
    {
      label: "Back End",
      skills: [
        "JavaScript",
        "TypeScript",
        "Express",
        "Next.js",
        "NestJS",
        "Sequelize",
      ],
    },
    { label: "Database", skills: ["SQL", "PostgreSQL", "Sqlite", "MongoDB"] },
    { label: "Tools", skills: ["Git", "Node.js", "VS Code"] },
  ];
</script>

<ul
  class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100"
>
  {#each skillgroups as group}
    <li>
      <SkillGroup {group} />
    </li>
  {/each}
</ul>
