<script>
  export let className = "";
</script>

<div class={` ${className}`}>
  <div class="lg:max-w-4xl">
    <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2">
      <slot />
    </div>
  </div>
</div>
