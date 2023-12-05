<script>
  import About from "../About/About.svelte";
  const socials = [
    { title: "title", icon: "icon", link: "link" },
    { title: "title", icon: "icon", link: "link" },
    { title: "title", icon: "icon", link: "link" },
    { title: "title", icon: "icon", link: "link" },
  ];
</script>

<header
  class="bg-slate-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-112 lg:items-start lg:overflow-y-auto xl:w-120"
>
  <div
    class="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12"
  >
    <a
      href="/"
      class="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
      aria-label="Homepage"
    >
      <img class="w-full" src="Profile.jpg" alt="Profile" />
      <div
        class="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"
      />
    </a>
    <div class="mt-10 text-center lg:mt-12 lg:text-left">
      <h1 class="text-xl font-bold text-slate-900">Wesley Chappell</h1>
      <p class="mt-3 text-lg font-medium leading-8 text-slate-700">
        Software Engineer
      </p>
    </div>
    <About className="mt-12 hidden lg:block" />
    <section class="mt-10 lg:mt-12">
      <h2
        class="sr-only flex items-center font-mono text-sm font-medium leading-7 text-slate-900 lg:not-sr-only"
      >
        Contact
      </h2>
      <div
        class="h-px bg-gradient-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden"
      />
      <ul
        role="list"
        class="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-slate-700 sm:gap-8 lg:flex-col lg:gap-4"
      >
        {#each socials as social}
          <li class="flex">
            <a
              href={social.link}
              class="group flex items-center"
              aria-label={social.title}
            >
              {social.icon}
              <span class="hidden sm:ml-3 sm:block">{social.title}</span>
            </a>
          </li>
        {/each}
      </ul>
    </section>
  </div>
</header>
