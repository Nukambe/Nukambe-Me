<script>
  import Skillpop from "./skillpop.svelte";
  export let title = "skill";
  let hover = false;
</script>

<div class="skill-wrapper">
  <div class="skill-icon-padding">
    <div
      class="skill-icon-wrapper"
      role="note"
      on:mouseenter={() => (hover = true)}
      on:mouseleave={() => (hover = false)}
    >
      <slot />
    </div>
  </div>
  {#if hover}
    <Skillpop {title}/>
  {/if}
</div>

<style>
  .skill-wrapper {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 96px;
    height: 96px;
  }
  .skill-icon-padding {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .skill-icon-wrapper {
    width: 80px;
    height: 80px;
  }
  .skill-icon-wrapper:hover {
    width: 96px;
    height: 96px;
  }
</style>
