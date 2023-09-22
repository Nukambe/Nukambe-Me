<script>
  import avatar from "../assets/avatar.jpg";
  import Socials from "./social/socials.svelte";
</script>

<div>
  <img src={avatar} alt="avatar" class="avatar" />
  <br />
  <h1>Wesley Alexander Chappell</h1>
  <h2>Software Engineer</h2>
  <br />
  <p>
    Hello! I'm a passionate software engineer with a relentless curiosity for
    all things tech. I thrive on the excitement of learning and embracing new
    technologies, making me a perpetual student in this ever-evolving digital
    landscape. With a commitment to innovation and problem-solving, I bring a
    fresh perspective to every project I undertake.
  </p>
  <br />
  <Socials />
</div>

<style lang="less">
  * {
    text-align: center;
  }
  div {
    border: 1px solid green;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .avatar {
    display: block;
    border-radius: 50%;
    margin: 0 auto;
  }
  h1 {
    margin: 0;
  }
  h2 {
    margin: 0;
  }
  p {
    width: 90%;
    margin: 0 auto;
    text-align: center;
  }

  @media screen and (min-width: 1264px) {
    p {
      width: 50%;
    }
  }
  @media screen and (min-width: 768px) {
    p {
      width: 60%;
    }
  }
</style>
