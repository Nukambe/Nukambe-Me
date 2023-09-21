<script>
  // import svelteLogo from "./assets/svelte.svg";
  import Navigation from "./lib/navigation/Navigation.svelte";
  import ContentSection from "./lib/ContentSection.svelte";
  import Home from "./lib/Home.svelte";
  import About from "./lib/About.svelte";
  import Work from "./lib/Work.svelte";
  import Contact from "./lib/Contact.svelte";
</script>

<main>
  <Navigation />
  <div>
    <ContentSection><Home /></ContentSection>
    <ContentSection><About /></ContentSection>
    <ContentSection><Work /></ContentSection>
    <ContentSection><Contact /></ContentSection>
  </div>
</main>

<style lang="less">
  main {
    display: flex;
  }
  div {
    width: 100%;
  }
</style>
