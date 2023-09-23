<script>
  import Skill from "./skills/skill.svelte";
  import DiHtml5 from "svelte-icons/di/DiHtml5.svelte";
  import DiCss3 from "svelte-icons/di/DiCss3.svelte";
  import DiJavascript1 from "svelte-icons/di/DiJavascript1.svelte";
  import DiReact from "svelte-icons/di/DiReact.svelte";

  import DiPython from "svelte-icons/di/DiPython.svelte";

  import DiSqllite from "svelte-icons/di/DiSqllite.svelte";
  import DiPostgresql from "svelte-icons/di/DiPostgresql.svelte";
</script>

<div class="about-wrapper">
  <h2>SKILLS</h2>
  <br />
  <div class="skill-wrapper">
    <div class="front-end">
      <h3>FRONT-END</h3>
      <br />
      <div class="skills-wrapper">
        <Skill title="HTML"><DiHtml5 /></Skill>
        <Skill title="CSS"><DiCss3 /></Skill>
        <Skill title="Javascript"><DiJavascript1 /></Skill>
        <Skill title="React"><DiReact /></Skill>
      </div>
    </div>
    <div class="back-end">
      <h3>BACK-END</h3>
      <br />
      <div class="skills-wrapper">
        <Skill title="Javascript"><DiJavascript1 /></Skill>
        <Skill title="Python"><DiPython /></Skill>
      </div>
    </div>
    <div class="database">
      <h3>DATABASE</h3>
      <br />
      <div class="skills-wrapper">
        <Skill title="Sqlite"><DiSqllite /></Skill>
        <Skill title="PostgreSQL"><DiPostgresql /></Skill>
      </div>
    </div>
  </div>
</div>

<style lang="less">
  h2,
  h3 {
    text-align: center;
  }
  .skill-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    height: 420px;
  }
  .skill-wrapper > div {
    border: 0.1em solid whitesmoke;
    border-radius: 1em;
    width: 30%;
    padding: 20px;
    box-sizing: border-box;
    height: 400px;
    transition: margin-bottom 0.2s;
  }
  .skill-wrapper > div:hover {
    margin-bottom: 12px;
  }
  .skills-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .front-end {
    background-color: yellowgreen;
  }
  .back-end {
    background-color: rgb(255, 62, 62);
  }
  .database {
    background-color: lightskyblue;
  }
</style>
