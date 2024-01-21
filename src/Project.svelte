<script>
  import { Motion } from "svelte-motion";
  import Container from "./Container.svelte";
  export let project;
  export let index;

  // function classList(...classes) {
  //   return classes.filter(Boolean).join(" ");
  // }
</script>

<Motion
  animate={{ y: [100, 0], opacity: [0, 1] }}
  transition={{ duration: 1.2, delay: 0.5 + 0.5 * index }}
  let:motion
>
  <article
    aria-labelledby={`project-${project.id}-title`}
    class="py-10 sm:py-12"
    use:motion
  >
    <Container>
      <div class="flex flex-col items-start">
        <div class="xl:flex xl:justify-between xl:gap-x-16">
          <div class="max-w-2xl">
            <h2
              id={`project-${project.id}-title`}
              class="mt-2 text-lg font-bold text-slate-900"
            >
              <a
                href={project.link}
                aria-label={`External link for ${project.name}`}
                target="_blank"
                rel="noreferrer nofollow"
                class={project.link === "#"
                  ? "pointer-events-none cursor-none"
                  : ""}>{project.name}</a
              >
            </h2>
            <ul class="mt-1 text-base leading-7 text-slate-700">
              {#each project.description as desc}
                <li class="list-disc ml-4">{desc}</li>
              {/each}
            </ul>
          </div>
          {#if project.image}
            <img
              src={project.image}
              alt="project gif"
              class="w-full my-8 xl:w-96 shadow-lg"
            />
          {/if}
        </div>
        <div class="mt-4 flex flex-col items-center gap-4">
          <div class="flex gap-4 w-full">
            {#if project.link}
              <a
                href={project.link}
                class="font-bold text-red-600 hover:text-red-800"
                aria-label={`External link for ${project.name}`}
                target="_blank"
                rel="noreferrer nofollow"
              >
                View Project
              </a>
            {/if}
            {#if project.code}
              <a
                href={project.code}
                class="font-bold text-slate-600 hover:text-slate-800"
                aria-label={`External link for ${project.name}`}
                target="_blank"
                rel="noreferrer nofollow"
              >
                View Code
              </a>
            {/if}
          </div>
          {#if project.credentials}
            <div class="my-2">
              <p class="text-sm font-bold leading-6 text-red-400 mb-2">
                Demo Logins
              </p>
              <ul class="flex gap-x-8">
                {#each project.credentials as login}
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
          {#each project.technologies as tech}
            <li
              class="bg-slate-900 rounded-full px-4 py-1 text-white font-semibold flex items-center"
            >
              {tech}
            </li>
          {/each}
        </ul>
      </div>
    </Container>
  </article>
</Motion>
