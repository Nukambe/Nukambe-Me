<script>
  import SkillGroup from "./SkillGroup.svelte";
  const skillgroups = [
    {
      label: "Front End",
      skills: [
        "Javascript",
        "React",
        "Next.js",
        "Svelte",
        "HTML",
        "CSS",
        "Redux",
        "Tailwind",
      ],
    },
    {
      label: "Back End",
      skills: ["Javascript", "Express", "Next.js", "Sequelize"],
    },
    { label: "Database", skills: ["PostgreSQL", "Sqlite", "MongoDB"] },
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
