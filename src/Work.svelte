<script>
  import Project from "./Project.svelte";
  import { projects } from "./db";
  const prjs = projects.toSorted((a, b) => b.id - a.id);
</script>

<ul
  class="divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100"
>
  {#each prjs as project, index}
    <li>
      <Project {project} {index} />
    </li>
  {/each}
</ul>
