<template>
  <div class="tab-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab-head",
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) =>{
      let { width,left, right} = vm.$el.getBoundingClientRect()
      console.log('vm', vm.$el.getBoundingClientRect())
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left-20}px`
    })
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$blue: blue;

.tab-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  >.line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  >.wrapper {
    margin-left: auto;
  }
}
</style>
