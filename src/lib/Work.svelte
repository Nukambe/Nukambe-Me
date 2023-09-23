<script>
  import Project from "./project/project.svelte";
</script>

<div>
  <h2>Projects</h2>
  <br />
  <div class="projects-wrapper">
    <Project title="Moriah Young" tags={["html", "css", "javascript", "react"]}>
      Explore a sleek and informative website I designed for a talented actress.
      This site highlights her demo reels, voice acting samples, and provides an
      insightful "about me" section, offering a comprehensive glimpse into her
      versatile skills and personality.
    </Project>
  </div>
</div>

<style lang="less">
  h2 {
    text-align: center;
  }
  .projects-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
