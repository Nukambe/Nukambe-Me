<script>
  export let className = "";

  let isExpanded = false;
</script>

<section class={className}>
  <h2
    class="flex items-center font-mono text-sm font-medium leading-7 text-slate-900"
  >
    About
  </h2>
  <p
    class={`mt-2 text-base leading-7 text-slate-700 text-justify ${
      !isExpanded && "lg:line-clamp-4"
    }`}
  >
    Hello! I'm a passionate software engineer with a relentless curiosity for
    all things tech. I thrive on the excitement of learning and embracing new
    technologies, making me a perpetual student in this ever-evolving digital
    landscape. With a commitment to innovation and problem-solving, I bring a
    fresh perspective to every project I undertake.
  </p>
  {#if !isExpanded}
    <button
      type="button"
      class="mt-2 hidden text-sm font-bold leading-6 text-red-500 hover:text-red-700 active:text-red-900 lg:inline-block"
      on:click={() => (isExpanded = true)}
    >
      Show more
    </button>
  {/if}
</section>
