<script>
  import Container from "./Container.svelte";
  export let project = {
    id: 0,
    title: "Title",
    description: "description...",
    href: "/",
  };
</script>

<article aria-labelledby={`project-${project.id}-title`} class="py-10 sm:py-12">
  <Container>
    <div class="flex flex-col items-start">
      <h2
        id={`project-${project.id}-title`}
        class="mt-2 text-lg font-bold text-slate-900"
      >
        <a href={project.href}>{project.title}</a>
      </h2>
      <p class="mt-1 text-base leading-7 text-slate-700">
        {project.description}
      </p>
      <div class="mt-4 flex items-center gap-4">
        <a
          href={project.href}
          class="flex items-center text-sm font-bold leading-6 text-red-500 hover:text-red-700 active:text-red-900"
          aria-label={`External link for ${project.title}`}
        >
          View Project
        </a>
      </div>
    </div>
  </Container>
</article>
