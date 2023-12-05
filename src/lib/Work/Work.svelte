<script>
  import ProjectContainer from "../Containers/ProjectContainer.svelte";
  const projects = [];
</script>

<ul>
  {#each projects as project}
    <li>
      <article></article>
    </li>
  {/each}
</ul>
