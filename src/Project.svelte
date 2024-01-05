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
      <div class="xl:flex xl:justify-between xl:gap-x-16">
        <div class="max-w-2xl">
          <h2
            id={`project-${project.id}-title`}
            class="mt-2 text-lg font-bold text-slate-900"
          >
            <a
              href={project.href}
              aria-label={`External link for ${project.title}`}
              target="_blank"
              rel="noreferrer nofollow"
              class={project.href === "#"
                ? "pointer-events-none cursor-none"
                : ""}>{project.title}</a
            >
          </h2>
          <p class="mt-1 text-base leading-7 text-slate-700">
            {project.description}
          </p>
        </div>
        {#if project.gif}
          <img
            src={project.gif}
            alt="project gif"
            class="w-full my-8 xl:w-96 shadow-lg"
          />
        {/if}
      </div>
      <div class="mt-4 flex flex-col items-center gap-4">
        <a
          href={project.href}
          class={`w-full text-md font-bold leading-6 text-red-500 hover:text-red-700 active:text-red-900 ${
            project.href === "#" ? "pointer-events-none cursor-none" : ""
          }}`}
          aria-label={`External link for ${project.title}`}
          target="_blank"
          rel="noreferrer nofollow"
        >
          View Project
        </a>
        {#if project.demoLogin}
          <div class="my-2">
            <p class="text-sm font-bold leading-6 text-red-400 mb-2">
              Demo Logins
            </p>
            <ul class="flex gap-x-8">
              {#each project.demoLogin as login}
                <li>
                  <p class="text-sm text-red-400 leading-4 font-bold">
                    {login.id}:
                    <span class="text-red-700 font-semibold"
                      >{login.idValue}</span
                    >
                  </p>
                  <p class="text-sm text-red-400 leading-4 font-bold">
                    Password: <span class="text-red-700 font-semibold"
                      >{login.password}</span
                    >
                  </p>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </div>
      <ul class="flex flex-wrap gap-2 mt-2">
        {#each project.tags as tag}
          <li
            class="bg-slate-900 rounded-full px-4 py-1 text-white font-semibold flex items-center"
          >
            {tag}
          </li>
        {/each}
      </ul>
    </div>
  </Container>
</article>
