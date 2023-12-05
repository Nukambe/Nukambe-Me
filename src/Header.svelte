<script>
  import About from "./About.svelte";

  const socials = [
    { href: "/", label: "label", icon: "icon" },
    { href: "/", label: "label", icon: "icon" },
    { href: "/", label: "label", icon: "icon" },
  ];
</script>

<header
  class="border-black border-2 overflow-y-visible lg:overflow-y-auto lg:fixed lg:h-screen lg:w-96 z-10"
>
  <div
    class="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-slate-200 lg:px-8 lg:py-12 xl:px-12"
  >
    <div
      class="relative mx-auto block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
    >
      <img class="w-full" src="Profile.jpg" alt="Profile" />
      <div
        class="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"
      />
    </div>
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
              href={social.href}
              class="group flex items-center"
              aria-label={social.label}
            >
              {social.icon}
              <span class="hidden sm:ml-3 sm:block">{social.label}</span>
            </a>
          </li>
        {/each}
      </ul>
    </section>
  </div>
</header>
