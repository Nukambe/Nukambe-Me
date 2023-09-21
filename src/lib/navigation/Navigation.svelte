<script>
  import NavButton from "./NavButton.svelte";
</script>

<div>
  <nav>
    <NavButton href="#home">HOME</NavButton>
    <NavButton href="#about">ABOUT</NavButton>
    <NavButton href="#work">WORK</NavButton>
    <NavButton href="#contact">CONTACT</NavButton>
  </nav>
</div>

<style lang="less">
  div {
    position: sticky;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 8em;
    display: flex;
    align-items: center;
    border: 1px solid red;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: auto 0;
    width: 100%;
    height: 8em;
    border: 1px solid blue;
  }

  @media screen and (max-width: 500px) {
    div {
      display: none;
    }
  }
</style>
