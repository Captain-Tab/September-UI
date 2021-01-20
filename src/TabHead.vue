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
      let { width,left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left-20}px`
    })
  }
}
</script>

<style scoped lang="scss">
$tab-height: 40px;
$blue: blue;
$border-color: #ddd;

.tab-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom: 1px solid $border-color;
  >.line {
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  >.wrapper {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;
  }
}
</style>
