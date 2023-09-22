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

<style>
  div {
    position: absolute;
    bottom: 0;
    width: 100%;
    border: 1px solid red;
    z-index: 2;
    background-color: rgb(63, 39, 39);
  }
  nav {
    display: flex;
    justify-content: space-around;
  }

  @media screen and (min-width: 501px) {
    div {
      display: none;
    }
  }
</style>
