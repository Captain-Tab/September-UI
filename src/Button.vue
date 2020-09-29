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
      color: var(--color);
      border-radius: var(--border-radius);
      border: 1px solid var(--border-color) ;
      background: var(--button-bg);
      &:hover {
        border-color: var(--border-color);
      }
      &:active {
        background-color: var(--button-active-bg);
        box-shadow: var(--box-show);
        color: #FFFFFF;
      }
      &:focus {
        outline: none;
      }
    }
</style>
