<template>
   <button class="s-button">
     <slot></slot>
   </button>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
    .s-button {
      height: var(--button-height);
      padding: 0 1em;
      font: inherit;
      border-radius: var(--border-radius);
      border: 1px solid var(--border-color) ;
      background: var(--button-bg);
      &:hover {
        border-color: var(--border-color);
      }
      &:active {
        background-color: var(--button-active-bg);
      }
      &:focus {
        outline: none;
      }
    }
</style>
