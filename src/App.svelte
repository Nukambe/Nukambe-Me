<script>
  import Header from "./lib/Header/Header.svelte";
  import Footer from "./lib/Footer/Footer.svelte";
  import Section from "./lib/PageSection/Section.svelte";
  import Work from "./lib/Work/Work.svelte";
</script>

<Header />
<main
  class="border-t border-slate-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120"
>
  <div class="relative">
    <Section id="work"><Work /></Section>
  </div>
</main>
<Footer />

<style>
</style>
