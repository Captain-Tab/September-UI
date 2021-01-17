<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data(){
    return {
      layoutClass: {
        hasSide: false
      }
    }
  },
  mounted() {
    this.$children.some((el)=> el.$options.name === 'Side') ?  this.layoutClass.hasSide = true : ''
  }
}
</script>

<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSide {
    flex-direction: row;
  }
}
</style>
