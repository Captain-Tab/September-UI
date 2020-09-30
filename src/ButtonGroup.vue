<template>
  <div class="s-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
 mounted () {
   for(let node of  this.$el.children) {
     let name = node.nodeName.toLowerCase()
     if(name !== 'button') {
       console.warn(`WARNING: s-button-group的子元素只允许是s-button，目前你写的是${name}`)
     }
   }
 }
}
</script>

<style scoped lang="scss">
  .s-button-group {
  display: inline-flex;
  vertical-align: middle;
  > .s-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
       border-top-left-radius: var(--border-radius);
       border-bottom-left-radius: var(--border-radius);
     }
     &:last-child {
       border-top-right-radius: var(--border-radius);
       border-bottom-right-radius: var(--border-radius);
     }
    &:hover {
      position: relative;
      z-index: 1;
    }
   }
  }
</style>
