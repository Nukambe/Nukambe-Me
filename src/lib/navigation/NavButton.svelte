<script>
  export let href = '';
</script>

<a {href}><slot /></a>

<style>
  a {
    text-decoration: none;
    color: white;
  }
</style>