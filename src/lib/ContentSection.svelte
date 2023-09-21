<script>
  export let id = "";
</script>

<div {id} class="content-wrapper">
  <slot />
  <div class="content-bg">
    <p>{id.toUpperCase().split('').join(' ')}</p>
  </div>
</div>

<style lang="less">
  @h2-scale: scale(1,2);

  .content-wrapper {
    width: 100%;
    min-height: 100vh;
    position: relative;
  }
  .content-bg {
    position: absolute;
    bottom: 1.5em;
    font-size: 5em;
    width: 100%;
  }
  p {
    margin: 0;
    width: 100%;
    font-weight: 1000;
    color: white;
    opacity: 12%;
    display: inline-block;
    -webkit-transform: @h2-scale; /* Safari and Chrome */
    -moz-transform: @h2-scale; /* Firefox */
    -ms-transform: @h2-scale; /* IE 9 */
    -o-transform: @h2-scale; /* Opera */
    transform: @h2-scale; /* W3C */
  }
</style>
