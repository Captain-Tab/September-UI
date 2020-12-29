<template>
  <svg class="s-icon">
    <use :xlink:href="`#s-${name}`"></use>
  </svg>
</template>

<script>
import './svg'
export default {
  props: ['name']
}
</script>

<style scoped lang="scss">
 .s-icon {
   width: 1em;
   height: 1em;
 }
</style>
