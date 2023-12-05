<script>
  import Project from "./Project.svelte";
  const projects = [
    {
      id: 0,
      title: "Title",
      description: "description...",
      href: "/",
    },
    {
      id: 1,
      title: "Title",
      description: "description...",
      href: "/",
    },
    {
      id: 2,
      title: "Title",
      description: "description...",
      href: "/",
    },
    {
      id: 3,
      title: "Title",
      description: "description...",
      href: "/",
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
