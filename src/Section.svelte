<script>
  import Container from "./Container.svelte";
  export let id = "";
</script>

<div {id} class="pb-12 pt-16 sm:pb-4 lg:pt-8">
  <Container className="">
    <h1 class="text-2xl font-bold leading-7 text-slate-900">{id}</h1>
  </Container>
  <slot />
</div>
