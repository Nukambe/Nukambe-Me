<script>
  // import svelteLogo from "./assets/svelte.svg";
  import Navigation from "./lib/navigation/Navigation.svelte";
  import ContentSection from "./lib/ContentSection.svelte";
  import Home from "./lib/Home.svelte";
  import About from "./lib/About.svelte";
  import Work from "./lib/Work.svelte";
  import Contact from "./lib/Contact.svelte";
  import MobileNavigation from "./lib/navigation/MobileNavigation.svelte";
</script>

<main>
  <Navigation />
  <div>
    <MobileNavigation />
    <ContentSection id="home"><Home /></ContentSection>
    <ContentSection id="about"><About /></ContentSection>
    <ContentSection id="work"><Work /></ContentSection>
    <ContentSection id="contact"><Contact /></ContentSection>
  </div>
</main>

<style lang="less">
  main {
    display: flex;
    overflow-y: hidden;
  }
  div {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    scroll-behavior: smooth;
  }
  div::-webkit-scrollbar {
    display: none;
  }
</style>
