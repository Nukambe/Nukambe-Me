<script>
  import Container from "./Container.svelte";
  export let group = { label: "Label", skills: ["skill1", "skill2"] };
</script>

<article class="py-8 sm:py-10">
  <Container>
    <h3 class="text-lg font-semibold leading-8 text-gray-900">
      {group.label}
    </h3>
    <ul role="list" class="mx-auto mt-4 flex flex-wrap items-start gap-4">
      {#each group.skills as skill}
        <li
          class="text-center min-w-[100px] bg-red-500 text-white rounded-md py-1 font-semibold"
          aria-label={`Tag, ${skill}`}
        >
          {skill}
        </li>
      {/each}
    </ul>
  </Container>
</article>
