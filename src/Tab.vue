<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator (value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  }

}
</script>

<style scoped lang="scss">
.tab{

}
</style>
