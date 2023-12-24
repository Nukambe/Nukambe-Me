<script>
  export let className = "";
</script>

<div class={` ${className}`}>
  <div class="">
    <div class="mx-auto px-4 sm:px-6 md:px-4 lg:px-8">
      <slot />
    </div>
  </div>
</div>
