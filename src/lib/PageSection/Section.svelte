<script>
  export let id = "";
</script>

<section {id}>
  <h2>{id.toUpperCase()}</h2>
  <div>
    <slot />
  </div>
</section>
