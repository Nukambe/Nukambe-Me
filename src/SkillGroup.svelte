<script>
  import Container from "./Container.svelte";
  export let group = { label: "Label", skills: ["skill1", "skill2"] };
</script>

<article class="py-10 sm:py-12">
  <Container>
    <h3 class="text-lg font-semibold leading-8 text-gray-900">
      {group.label}
    </h3>
    <ul
      role="list"
      class="mx-auto mt-10 grid grid-cols-4 items-start gap-x-8 gap-y-10 sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:grid-cols-5"
    >
      {#each group.skills as skill}
        <li
          class="text-center min-w-[100px] bg-red-500 text-white rounded-sm py-1 font-semibold"
          aria-label={`Tag, ${skill}`}
        >
          {skill}
        </li>
      {/each}
    </ul>
  </Container>
</article>
