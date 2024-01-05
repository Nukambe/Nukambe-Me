<script>
  let mouse = {
    x: 0,
    y: 0,
  };
  function handleMouseMove(event) {
    mouse.x = event.pageX;
    mouse.y = event.pageY;
    console.log(mouse);
  }
</script>

<svelte:window on:mousemove={handleMouseMove} />
<div
  class={`absolute z-50 pointer-events-none bg-red-500`}
  style={`top: ${mouse.y - 18}px; left: ${mouse.x - 18}px;`}
  role="presentation"
/>

<style>
  div {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    opacity: 0.4;
  }
</style>
