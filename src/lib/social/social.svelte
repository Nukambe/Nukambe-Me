<script>
  export let href = "wesleychappell.com";
  export let icon = "github"
</script>

<a {href} target="_blank" rel="noreferrer">
  <i class="fi fi-brands-{icon}" />
</a>

<style>
    a {
        text-decoration: none;
        color: white;
        height: 100%;
        width: 100%;
    }
    i {
      font-size: 2em;
    }

    @media screen and (max-width: 500px) {
      i {
        font-size: 3em;
      }
    }
</style>