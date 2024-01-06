<script>
  import { Motion } from "svelte-motion";
  import Container from "./Container.svelte";
  export let id = "";
</script>

<div {id} class="pb-12 pt-16 sm:pb-4 lg:pt-8">
  <Container className="">
    <Motion
      animate={{ y: [100, 0], opacity: [0, 1] }}
      transition={{ duration: 1.5 }}
      let:motion
    >
      <h1 class="text-4xl font-bold leading-7 text-slate-900" use:motion>
        {id}
      </h1>
    </Motion>
  </Container>
  <slot />
</div>
