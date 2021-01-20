<template>
  <div class="tab-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab-item",
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.tab-item {

}
</style>
