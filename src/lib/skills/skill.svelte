<script>
  import Skillpop from "./skillpop.svelte";
</script>

<div class="skill-wrapper">
  <div class="skill-icon-wrapper">
    <slot />
  </div>
  <Skillpop />
</div>

<style>
  .skill-wrapper {
    display: flex;
  }
  .skill-icon-wrapper {
    max-width: 64px;
  }
</style>
