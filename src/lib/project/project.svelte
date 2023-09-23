<script>
  import Tag from "./tag.svelte";

  export let title = "Title";
  export let tags = ["tag", "tag", "tag"];
</script>

<div class="project-wrapper">
  <div class="bg-gif">
    <div class="title-overlay">
      <h3>{title}</h3>
    </div>
  </div>
  <div class="project-article">
    <p>
      <slot />
    </p>
    <div class="tags-wrapper">
      {#each tags as tag}
        <Tag technology={tag} />
      {/each}
    </div>
  </div>
</div>

<style>
  .project-wrapper,
  .project-article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .project-wrapper {
    width: 500px;
    height: 500px;
    border-bottom: 0.5em solid darkgray;
  }
  .bg-gif {
    background-image: url("../../assets/river.jpg");
    width: 100%;
    height: 200px;
    display: flex;
    align-items: flex-end;
  }
  .title-overlay {
    background-color: rgb(0, 0, 0, 0.6);
    width: 100%;
    height: fit-content;
  }
  .project-article {
    width: 100%;
    height: 300px;
    background-color: gray;
  }
  .tags-wrapper {
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    row-gap: 0.5em;
    column-gap: 0.5em;
    padding: 0 1em 1em;
  }
  h3 {
    padding-left: 1em;
  }
  p {
    padding: 1em;
  }
</style>
