<script>
  import Header from "./Header.svelte";
  import Main from "./Main.svelte";
  import Footer from "./Footer.svelte";
  // import Mouse from "./Mouse.svelte";
</script>

<div class="lg:flex h-screen w-full relative">
  <Header />
  <div class="hidden lg:block lg:w-96">
    <div class="w-96" />
  </div>
  <Main />
  <Footer />
</div>

<style>
</style>
